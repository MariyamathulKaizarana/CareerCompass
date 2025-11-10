'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SearchIcon, Loader2, Book, GraduationCap, Trophy, ServerCrash } from 'lucide-react';
import { useDebounce } from '@/hooks/use-debounce';
import { Input } from '@/components/ui/input';
import { searchCareers, type SearchCareersOutput } from '@/ai/flows/search-careers';

type SearchResult = SearchCareersOutput[0];

export function Search() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery.length < 3) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const performSearch = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const searchResults = await searchCareers({ query: debouncedQuery });
        setResults(searchResults);
        setIsOpen(searchResults.length > 0);
      } catch (e) {
        console.error("Search failed:", e);
        setError("Search is currently unavailable. Please try again later.");
        setIsOpen(true); // Keep open to show the error
      } finally {
        setIsLoading(false);
      }
    };
    
    performSearch();

  }, [debouncedQuery]);
  
  const handleSelect = useCallback((slug: string) => {
    router.push(slug);
    setQuery('');
    setIsOpen(false);
    setResults([]);
  }, [router]);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && results.length > 0) {
      handleSelect(results[0].slug);
    }
  };

  const getIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'Career': return <Book className="h-5 w-5 text-muted-foreground" />;
      case 'Course': return <GraduationCap className="h-5 w-5 text-muted-foreground" />;
      case 'Exam': return <Trophy className="h-5 w-5 text-muted-foreground" />;
      default: return null;
    }
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search for careers, skills..."
          className="pl-10 bg-muted border-0 shadow-inner"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (results.length > 0 || error) setIsOpen(true);
          }}
          onBlur={() => setTimeout(() => setIsOpen(false), 150)}
        />
        {isLoading && (
          <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 animate-spin text-muted-foreground" />
        )}
      </div>
      
      {isOpen && (
         <div className="absolute top-full mt-2 w-full rounded-lg border bg-card text-card-foreground shadow-lg z-50 overflow-hidden">
            <ul className="max-h-96 overflow-y-auto">
              {error && (
                <li className="p-4 text-center text-destructive-foreground bg-destructive/90">
                   <div className="flex items-center gap-4">
                    <ServerCrash className="h-5 w-5" />
                    <div>
                      <p className="font-semibold">Search Error</p>
                      <p className="text-sm text-destructive-foreground/80">{error}</p>
                    </div>
                  </div>
                </li>
              )}
              {!isLoading && !error && results.length === 0 && debouncedQuery.length >= 3 && (
                <li className="p-4 text-center text-muted-foreground">No results found.</li>
              )}
              {!error && results.map((item, index) => (
                <li
                  key={`${item.slug}-${index}`}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleSelect(item.slug);
                  }}
                  className="p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer border-b last:border-b-0"
                >
                  <div className="flex items-center gap-4">
                    {getIcon(item.type)}
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground line-clamp-1">{item.context}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
        </div>
      )}
    </div>
  );
}
