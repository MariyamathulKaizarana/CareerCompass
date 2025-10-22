'use client';

import { useEffect } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { AppShell } from '@/components/AppShell';
import { careers } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, CheckCircle, DollarSign, GraduationCap, Map, TrendingUp, Trophy, University, BookOpen } from 'lucide-react';
import type { ActivityItem } from '@/lib/types';


interface CareerDetailPageProps {
  params: { slug: string };
}

// This needs to be a Client Component to use useEffect, but we still want Next.js 
// to be able to generate static pages. We can't use generateStaticParams in a 
// client component, so we will remove it. The app will still work, but pages
// will be generated on-demand. In a real app, you might fetch this data from a CMS.

const getCareerBySlug = (slug: string) => {
  return careers.find((career) => career.slug === slug);
};

const findImage = (careerTitle: string) => {
    const searchTerm = careerTitle.split(' ')[0].toLowerCase();
    return placeholderImages.find(p => p.id === searchTerm) || placeholderImages.find(p => p.id === 'report');
}

export default function CareerDetailPage({ params }: CareerDetailPageProps) {
  const career = getCareerBySlug(params.slug);

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


  if (!career) {
    notFound();
  }
  
  const image = findImage(career.title);

  const detailCards = [
    { icon: <GraduationCap className="h-6 w-6 text-accent" />, title: "Required Courses", content: career.courses.join(', ') },
    { icon: <CheckCircle className="h-6 w-6 text-accent" />, title: "Key Skills", content: career.skills.join(', ') },
    { icon: <Map className="h-6 w-6 text-accent" />, title: "Career Roadmap", content: career.roadmap },
    { icon: <DollarSign className="h-6 w-6 text-accent" />, title: "Average Salary", content: career.avgSalary },
    { icon: <TrendingUp className="h-6 w-6 text-accent" />, title: "Future Scope", content: career.futureScope },
  ];

  if (career.exams && career.exams.length > 0) {
    detailCards.push({ icon: <Trophy className="h-6 w-6 text-accent" />, title: "Competitive Exams", content: career.exams.join(', ') });
  }

  if (career.topColleges && career.topColleges.length > 0) {
    detailCards.push({ icon: <University className="h-6 w-6 text-accent" />, title: "Top Colleges in India", content: career.topColleges.join(', ') });
  }

  if (career.admissionProcess) {
    detailCards.push({ icon: <BookOpen className="h-6 w-6 text-accent" />, title: "Admission Process", content: career.admissionProcess });
  }

  return (
    <AppShell>
      <div className="w-full">
        <div className="mb-8">
            <Button variant="outline" asChild>
                <Link href="/careers">← Back to Careers</Link>
            </Button>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
             <Card>
                <CardHeader>
                    <div className='flex justify-between items-start'>
                        <CardTitle className="font-headline text-3xl md:text-4xl">{career.title}</CardTitle>
                        <Badge variant="default" className="text-lg">{career.stream}</Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-lg text-muted-foreground">{career.longDescription}</p>
                </CardContent>
            </Card>

             <div className="grid gap-6 md:grid-cols-2">
                {detailCards.map(item => (
                    <Card key={item.title}>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                            {item.icon}
                        </CardHeader>
                        <CardContent>
                            <div className="text-lg font-semibold text-foreground">{item.content}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

          </div>
          <div className="lg:col-span-1 space-y-6">
            <Card className="overflow-hidden">
                {image && (
                <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover"
                />
                )}
                <CardContent className="p-6">
                    <h3 className="font-headline text-xl">Is this for you?</h3>
                    <p className="mt-2 text-muted-foreground">If you enjoy problem-solving, continuous learning, and creating impactful solutions, {career.title} could be your ideal path.</p>
                </CardContent>
            </Card>
            {/* Favorite button can be added here */}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
