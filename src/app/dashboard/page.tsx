'use client';

import { AppShell } from '@/components/AppShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useUser } from '@/firebase';
import type { ActivityItem } from '@/lib/types';
import { ArrowRight, Newspaper, Award, Loader2 } from 'lucide-react';
import Link from 'next/link';
import React, { Suspense } from 'react';

const QuizCard = React.lazy(() => import('@/components/dashboard/QuizCard'));
const NewsSection = React.lazy(() => import('@/components/dashboard/NewsSection'));
const ScholarshipsSection = React.lazy(() => import('@/components/dashboard/ScholarshipsSection'));

const LoadingFallback = () => (
  <Card>
    <CardContent className="flex items-center justify-center p-12">
      <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
    </CardContent>
  </Card>
);

export default function DashboardPage() {
  const { user } = useUser();
  
  const handleLinkClick = (item: { id: string | number; title: string; url: string }, type: 'news' | 'scholarship') => {
    try {
      const history = localStorage.getItem('activityHistory');
      const historyItems: ActivityItem[] = history ? JSON.parse(history) : [];

      const id = 'id' in item ? item.id : 'title' in item ? item.title : '';

      const existingIndex = historyItems.findIndex((h) => h.type === type && 'item' in h && 'id' in h.item && h.item.id === id);
      if (existingIndex > -1) {
        historyItems.splice(existingIndex, 1);
      }

      const newHistoryItem: ActivityItem = {
        type,
        item: item as any, // We cast to any to avoid complex type intersections for localStorage
        viewedAt: new Date().toISOString(),
      } as ActivityItem;

      const updatedHistory = [newHistoryItem, ...historyItems];

      if (updatedHistory.length > 50) {
        updatedHistory.pop();
      }

      localStorage.setItem('activityHistory', JSON.stringify(updatedHistory));
    } catch (error) {
      console.error('Could not update history in localStorage', error);
    }
  };

  const getFirstName = (displayName: string | null | undefined) => {
    if (!displayName) return 'Welcome';
    return `Welcome, ${displayName.split(' ')[0]}`;
  };

  return (
    <AppShell>
      <div className="w-full space-y-8">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">{getFirstName(user?.displayName)}</h1>
          <p className="mt-2 text-lg text-muted-foreground">Ready to find the perfect career? Let's get started.</p>
        </div>

        <Suspense fallback={<div className="grid h-72 w-full place-items-center rounded-xl bg-muted"><Loader2 className="h-8 w-8 animate-spin text-muted-foreground"/></div>}>
          <QuizCard />
        </Suspense>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Suspense fallback={<LoadingFallback />}>
            <NewsSection handleLinkClick={(item) => handleLinkClick(item, 'news')} />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <ScholarshipsSection handleLinkClick={(item) => handleLinkClick(item, 'scholarship')} />
          </Suspense>
        </div>
      </div>
    </AppShell>
  );
}
