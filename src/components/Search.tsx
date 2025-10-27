'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SearchIcon, Loader2, Book, GraduationCap, Trophy } from 'lucide-react';
import { useDebounce } from '@/hooks/use-debounce';
import { careers } from '@/lib/career-data';
import { Input } from '@/components/ui/input';

type SearchResult = {
  type: 'Career' | 'Course' | 'Exam';
  title: string;
  slug: string;
  context: string;
};

export function Search() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery.length < 3) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    const lowerCaseQuery = debouncedQuery.toLowerCase();

    const careerResults: SearchResult[] = careers
      .filter(
        (c) =>
          c.title.toLowerCase().includes(lowerCaseQuery) ||
          c.skills.some((s) => s.toLowerCase().includes(lowerCaseQuery))
      )
      .map((c) => ({
        type: 'Career',
        title: c.title,
        slug: `/careers/${c.slug}`,
        context: c.description,
      }));

    const courseResults: SearchResult[] = [
      ...new Set(careers.flatMap((c) => c.courses)),
    ]
      .filter((course) => course.toLowerCase().includes(lowerCaseQuery))
      .map((course) => ({
        type: 'Course',
        title: course,
        slug: `/courses`, // All courses link to the main courses page
        context: `Recommended for various careers.`,
      }));

    const examResults: SearchResult[] = [...new Set(careers.flatMap(c => c.exams || []))]
      .filter(exam => exam.toLowerCase().includes(lowerCaseQuery))
      .map(exam => ({
        type: 'Exam',
        title: exam,
        slug: '/careers', // Link to general careers as exams apply to many
        context: 'Competitive entrance exam.'
      }));

    setResults([...careerResults, ...courseResults, ...examResults]);
    setIsLoading(false);
    setIsOpen(true);
  }, [debouncedQuery]);
  
  const handleSelect = useCallback((slug: string) => {
    router.push(slug);
    setQuery('');
    setIsOpen(false);
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
            if (results.length > 0) setIsOpen(true);
          }}
          onBlur={() => setTimeout(() => setIsOpen(false), 150)}
        />
        {isLoading && (
          <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 animate-spin text-muted-foreground" />
        )}
      </div>
      
      {isOpen && results.length > 0 && (
         <div className="absolute top-full mt-2 w-full rounded-lg border bg-card text-card-foreground shadow-lg z-50 overflow-hidden">
            <ul className="max-h-96 overflow-y-auto">
              {results.map((item, index) => (
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
                      <p className="text-sm text-muted-foreground">{item.context}</p>
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
