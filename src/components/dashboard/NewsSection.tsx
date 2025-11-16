'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Newspaper } from 'lucide-react';
import { latestNews } from '@/lib/dashboard-data';
import type { NewsItem } from '@/lib/types';

// Using a deterministic seed to avoid SSR hydration mismatch
const shuffleAndSlice = <T,>(array: T[], size: number, seed: number = 0): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    seed = (seed * 9301 + 49297) % 233280;
    const j = Math.floor((seed / 233280) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, size);
};

interface NewsSectionProps {
    handleLinkClick: (item: NewsItem) => void;
}

export default function NewsSection({ handleLinkClick }: NewsSectionProps) {
  const [displayedNews, setDisplayedNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const initialSeed = Math.floor(Date.now() / 1000 / 60);
    setDisplayedNews(shuffleAndSlice(latestNews, 8, initialSeed));

    const intervalId = setInterval(() => {
      const newSeed = Math.floor(Date.now() / 1000 / 60);
      setDisplayedNews(shuffleAndSlice(latestNews, 8, newSeed));
    }, 4 * 60 * 1000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline text-2xl">
          <Newspaper className="h-6 w-6 text-primary" />
          Latest News & Updates
        </CardTitle>
        <CardDescription>Stay informed about the latest in education and career development.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {displayedNews.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              <div className="flex-1">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline" onClick={() => handleLinkClick(item)}>
                  {item.title}
                </a>
                <p className="text-sm text-muted-foreground">
                  {item.source} - {item.date}
                </p>
              </div>
              <Badge variant="outline">{item.category}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
