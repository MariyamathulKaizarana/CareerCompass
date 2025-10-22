'use client';

import Link from 'next/link';
import { AppShell } from '@/components/AppShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Newspaper, GraduationCap, Award } from 'lucide-react';
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import { latestNews, scholarships } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { useUser } from '@/firebase';

const quizImage = placeholderImages.find((p) => p.id === 'quiz');

export default function DashboardPage() {
    const { user } = useUser();

    const getFirstName = (displayName: string | null | undefined) => {
        if (!displayName) return 'Welcome';
        return `Welcome, ${displayName.split(' ')[0]}`;
    }

  return (
    <AppShell>
      <div className="w-full space-y-8">
        <div>
            <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {getFirstName(user?.displayName)}
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
            Ready to find the perfect career? Let's get started.
            </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
            <Card className="lg:col-span-3">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Your Journey Starts Here</CardTitle>
                    <CardDescription>
                    Our short, interactive quiz is the first step towards discovering a career you'll love. We'll analyze your answers to suggest paths that match your personality and interests.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className='mb-6 text-muted-foreground'>The quiz is designed to be quick and intuitive. There are no wrong answers, so just go with what feels right. Your personalized report awaits!</p>
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/quiz">
                        Take the Quiz Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>

            <div className="lg:col-span-2 overflow-hidden rounded-xl">
                 {quizImage && (
                    <Image
                    src={quizImage.imageUrl}
                    alt={quizImage.description}
                    data-ai-hint={quizImage.imageHint}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                    />
                )}
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                <Newspaper className="h-6 w-6 text-primary" />
                Latest News & Updates
              </CardTitle>
              <CardDescription>
                Stay informed about the latest in education and career development.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {latestNews.map(item => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="flex-1">
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline">
                        {item.title}
                      </a>
                      <p className="text-sm text-muted-foreground">{item.source} - {item.date}</p>
                    </div>
                    <Badge variant="outline">{item.category}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                <Award className="h-6 w-6 text-primary" />
                Featured Scholarships
              </CardTitle>
              <CardDescription>
                Find funding opportunities for your education journey.
              </CardDescription>
            </CardHeader>
            <CardContent>
               <div className="space-y-4">
                {scholarships.map(scholarship => (
                  <div key={scholarship.id}>
                    <h3 className="font-semibold">{scholarship.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      <span className='font-medium text-foreground'>Provider:</span> {scholarship.provider}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className='font-medium text-foreground'>Eligibility:</span> {scholarship.eligibility}
                    </p>
                     <p className="text-sm text-muted-foreground">
                      <span className='font-medium text-foreground'>Deadline:</span> {scholarship.deadline}
                    </p>
                    <Button variant="link" size="sm" asChild className="p-0 h-auto">
                        <a href={scholarship.url} target="_blank" rel="noopener noreferrer">
                            Apply Now <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                    </Button>
                  </div>
                ))}
               </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </AppShell>
  );
}
