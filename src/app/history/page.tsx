'use client';

import { useEffect, useState } from 'react';
import { AppShell } from '@/components/AppShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { History, Newspaper, Award, ExternalLink } from 'lucide-react';
import type { HistoryItem } from '@/app/dashboard/page';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
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
          Your recently viewed news and scholarships.
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
                        Head over to the dashboard to check out the latest news and scholarships. Your viewed items will be saved here for easy access.
                    </p>
                    <Button asChild className="mt-6">
                        <Link href="/dashboard">Go to Dashboard</Link>
                    </Button>
                </CardContent>
            </Card>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {history.map((activityItem, index) => (
              <Card key={`${activityItem.item.id}-${index}`} className="flex items-start gap-4 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  {activityItem.type === 'news' ? 
                    <Newspaper className="h-6 w-6 text-muted-foreground" /> : 
                    <Award className="h-6 w-6 text-muted-foreground" />}
                </div>
                <div className="flex-1">
                  <a href={activityItem.item.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline">
                    {activityItem.item.title}
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Viewed {formatDistanceToNow(new Date(activityItem.viewedAt), { addSuffix: true })}
                  </p>
                  {activityItem.type === 'news' && 'source' in activityItem.item && (
                     <p className="text-sm text-muted-foreground">
                        Source: {activityItem.item.source}
                     </p>
                  )}
                   {activityItem.type === 'scholarship' && 'provider' in activityItem.item && (
                     <p className="text-sm text-muted-foreground">
                        Provider: {activityItem.item.provider}
                     </p>
                  )}
                </div>
                <div className="flex flex-col items-end gap-2">
                    <Badge variant={activityItem.type === 'news' ? 'secondary' : 'default'}>
                        {activityItem.type === 'news' ? 'News' : 'Scholarship'}
                    </Badge>
                     <Button variant="ghost" size="sm" asChild>
                        <a href={activityItem.item.url} target="_blank" rel="noopener noreferrer">
                            Visit Link <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                     </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}
