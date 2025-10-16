'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { AppShell } from '@/components/AppShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { CareerSuggestion } from '@/lib/types';
import { ArrowRight, FileText, Loader2, RefreshCw } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { careers } from '@/lib/data';

export default function ResultsPage() {
  const [suggestions, setSuggestions] = useState<CareerSuggestion[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    try {
      const results = localStorage.getItem('careerSuggestions');
      if (results) {
        setSuggestions(JSON.parse(results));
      } else {
         // If no results, maybe redirect to quiz or show a message
         router.push('/quiz');
      }
    } catch (error) {
      console.error('Failed to parse career suggestions from localStorage', error);
      // Handle error, e.g., show a message and a link to retake the quiz
    } finally {
        setLoading(false);
    }
  }, [router]);
  
  if(loading) {
    return (
        <AppShell>
            <div className="flex justify-center items-center h-full">
                <Loader2 className="h-12 w-12 animate-spin text-accent" />
            </div>
        </AppShell>
    )
  }

  const findCareerSlug = (careerPath: string) => {
    const found = careers.find(c => c.title.toLowerCase() === careerPath.toLowerCase());
    return found ? found.slug : null;
  }

  return (
    <AppShell>
      <div className="w-full">
        <div className="mb-8 text-center">
            <FileText className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Your Career Suggestions
            </h1>
            <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
                Based on your quiz answers, here are a few career paths that could be a great fit for you.
            </p>
        </div>

        {suggestions.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {suggestions.map((suggestion, index) => {
                const careerSlug = findCareerSlug(suggestion.careerPath);
                return (
                    <Card key={index} className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">{suggestion.careerPath}</CardTitle>
                            <CardDescription>{suggestion.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <h3 className="mb-2 font-semibold text-foreground">Top Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {suggestion.requiredSkills.slice(0, 4).map(skill => (
                                    <Badge key={skill} variant="secondary">{skill}</Badge>
                                ))}
                            </div>
                            <div className='mt-4'>
                                <h3 className="mb-2 font-semibold text-foreground">Average Salary</h3>
                                <p className='text-lg font-medium text-accent'>{suggestion.averageSalary}</p>
                            </div>
                        </CardContent>
                        <CardFooter>
                           {careerSlug ? (
                             <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                                 <Link href={`/careers/${careerSlug}`}>
                                     Explore Path <ArrowRight className="ml-2 h-4 w-4" />
                                 </Link>
                             </Button>
                           ) : (
                            <Button disabled className="w-full">Details Coming Soon</Button>
                           )}
                        </CardFooter>
                    </Card>
                )
            })}
          </div>
        ) : (
          <Card className="py-12 text-center">
            <CardContent>
                <h2 className="text-xl font-semibold">No Suggestions Found</h2>
                <p className="mt-2 text-muted-foreground">We couldn't generate career suggestions at this time. Please try again.</p>
                <Button asChild className="mt-6">
                    <Link href="/quiz">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Retake Quiz
                    </Link>
                </Button>
            </CardContent>
          </Card>
        )}
        
        <div className="mt-12 text-center">
            <Button asChild variant="outline">
                <Link href="/quiz">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Take Quiz Again
                </Link>
            </Button>
        </div>
      </div>
    </AppShell>
  );
}
