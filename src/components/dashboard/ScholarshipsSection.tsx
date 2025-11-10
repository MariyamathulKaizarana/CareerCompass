'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, ArrowRight } from 'lucide-react';
import { scholarships } from '@/lib/dashboard-data';
import type { Scholarship } from '@/lib/types';

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

interface ScholarshipsSectionProps {
    handleLinkClick: (item: Scholarship) => void;
}

export default function ScholarshipsSection({ handleLinkClick }: ScholarshipsSectionProps) {
  const [displayedScholarships, setDisplayedScholarships] = useState<Scholarship[]>([]);

  useEffect(() => {
    const initialSeed = Math.floor(Date.now() / 1000 / 60);
    setDisplayedScholarships(shuffleAndSlice(scholarships, 7, initialSeed));

    const intervalId = setInterval(() => {
      const newSeed = Math.floor(Date.now() / 1000 / 60);
      setDisplayedScholarships(shuffleAndSlice(scholarships, 7, newSeed));
    }, 4 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline text-2xl">
          <Award className="h-6 w-6 text-primary" />
          Featured Scholarships
        </CardTitle>
        <CardDescription>Find funding opportunities for your education journey.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {displayedScholarships.map((scholarship) => (
            <div key={scholarship.id}>
              <h3 className="font-semibold">{scholarship.title}</h3>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Provider:</span> {scholarship.provider}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Eligibility:</span> {scholarship.eligibility}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Deadline:</span> {scholarship.deadline}
              </p>
              <Button variant="link" size="sm" asChild className="p-0 h-auto">
                <a href={scholarship.url} target="_blank" rel="noopener noreferrer" onClick={() => handleLinkClick(scholarship)}>
                  Apply Now <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
