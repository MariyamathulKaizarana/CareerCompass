'use client';

import { useEffect } from 'react';
import type { Career, ActivityItem } from '@/lib/types';

interface CareerDetailClientProps {
    career: Career;
}

export default function CareerDetailClient({ career }: CareerDetailClientProps) {
    useEffect(() => {
        if (career) {
          try {
            const history = localStorage.getItem('activityHistory');
            const historyItems: ActivityItem[] = history ? JSON.parse(history) : [];
    
            // Avoid adding duplicate career views, or update timestamp if it exists
            const existingIndex = historyItems.findIndex(h => h.type === 'career' && h.item.id === career.id);
            if (existingIndex > -1) {
                historyItems.splice(existingIndex, 1);
            }
    
            const newHistoryItem: ActivityItem = {
              type: 'career',
              item: { id: career.id, title: career.title, slug: career.slug },
              viewedAt: new Date().toISOString(),
            };
    
            const updatedHistory = [newHistoryItem, ...historyItems];
            if (updatedHistory.length > 50) {
                updatedHistory.pop();
            }
            localStorage.setItem('activityHistory', JSON.stringify(updatedHistory));
          } catch (error) {
            console.error('Could not update history in localStorage', error);
          }
        }
      }, [career]);
    
      return null;
}
