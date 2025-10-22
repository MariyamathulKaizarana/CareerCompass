'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';

import { AppShell } from '@/components/AppShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { History, Newspaper, Award, ExternalLink, Book, HelpCircle, FileText } from 'lucide-react';
import type { ActivityItem } from '@/lib/types';


const renderActivityItem = (activity: ActivityItem, index: number) => {
    const timeAgo = formatDistanceToNow(new Date(activity.viewedAt), { addSuffix: true });
    
    switch (activity.type) {
        case 'news':
            return (
                <Card key={`${activity.item.id}-${index}`} className="flex flex-col sm:flex-row items-start gap-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted flex-shrink-0">
                        <Newspaper className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                        <a href={activity.item.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline">
                            {activity.item.title}
                        </a>
                        <p className="text-sm text-muted-foreground">Viewed {timeAgo}</p>
                        <p className="text-sm text-muted-foreground">Source: {activity.item.source}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2 self-start sm:self-center">
                         <Badge variant='secondary'>News</Badge>
                         <Button variant="ghost" size="sm" asChild>
                            <a href={activity.item.url} target="_blank" rel="noopener noreferrer">
                                Visit Link <ExternalLink className="ml-2 h-3 w-3" />
                            </a>
                        </Button>
                    </div>
                </Card>
            );
        case 'scholarship':
            return (
                <Card key={`${activity.item.id}-${index}`} className="flex flex-col sm:flex-row items-start gap-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted flex-shrink-0">
                        <Award className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                        <a href={activity.item.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline">
                            {activity.item.title}
                        </a>
                        <p className="text-sm text-muted-foreground">Viewed {timeAgo}</p>
                        <p className="text-sm text-muted-foreground">Provider: {activity.item.provider}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2 self-start sm:self-center">
                         <Badge variant='default'>Scholarship</Badge>
                          <Button variant="ghost" size="sm" asChild>
                            <a href={activity.item.url} target="_blank" rel="noopener noreferrer">
                                Visit Link <ExternalLink className="ml-2 h-3 w-3" />
                            </a>
                         </Button>
                    </div>
                </Card>
            );
        case 'career':
            return (
                <Card key={`${activity.item.id}-${index}`} className="flex flex-col sm:flex-row items-start gap-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted flex-shrink-0">
                        <Book className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                        <Link href={`/careers/${activity.item.slug}`} className="font-semibold text-foreground hover:underline">
                           Viewed career: {activity.item.title}
                        </Link>
                        <p className="text-sm text-muted-foreground">Viewed {timeAgo}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2 self-start sm:self-center">
                        <Badge variant='outline'>Career</Badge>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href={`/careers/${activity.item.slug}`}>
                                View Details <ExternalLink className="ml-2 h-3 w-3" />
                            </Link>
                        </Button>
                    </div>
                </Card>
            );
        case 'quiz':
            return (
                <Card key={`quiz-${index}`} className="flex flex-col sm:flex-row items-start gap-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted flex-shrink-0">
                        <FileText className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                        <Link href="/results" className="font-semibold text-foreground hover:underline">
                            Completed a quiz
                        </Link>
                        <p className="text-sm text-muted-foreground">Taken {timeAgo}</p>
                        <p className="mt-2 text-sm text-foreground">
                            Top suggestion: <span className="font-medium">{activity.item.suggestions[0]?.careerPath || 'N/A'}</span>
                        </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2 self-start sm:self-center">
                        <Badge className='bg-accent text-accent-foreground'>Quiz Result</Badge>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/results">
                                View Results <ExternalLink className="ml-2 h-3 w-3" />
                            </Link>
                        </Button>
                    </div>
                </Card>
            )
        default:
            return null;
    }
}

export default function HistoryPage() {
  const [history, setHistory] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem('activityHistory');
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    } catch (error) {
      console.error("Failed to load history from localStorage", error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <AppShell>
        <div className="w-full">
          {/* You can add a skeleton loader here */}
          <p>Loading history...</p>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="w-full">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Activity History
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Your recently viewed items and completed activities.
        </p>

        {history.length === 0 ? (
          <div className="mt-8">
            <Card className="py-12 text-center border-dashed">
                <CardHeader>
                    <div className='flex justify-center'>
                        <History className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <CardTitle className="font-headline text-2xl mt-4">No Activity Yet</CardTitle>
                    <CardDescription>
                        Your viewing history will appear here once you start exploring.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground max-w-md mx-auto">
                        Head over to the dashboard to check out the latest news and scholarships, or take the career quiz. Your activity will be saved here.
                    </p>
                    <Button asChild className="mt-6">
                        <Link href="/dashboard">Go to Dashboard</Link>
                    </Button>
                </CardContent>
            </Card>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {history.map(renderActivityItem)}
          </div>
        )}
      </div>
    </AppShell>
  );
}
