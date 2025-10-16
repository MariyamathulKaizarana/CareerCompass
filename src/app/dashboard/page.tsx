import Link from 'next/link';
import { AppShell } from '@/components/AppShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';

const quizImage = placeholderImages.find((p) => p.id === 'quiz');

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="w-full">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Welcome to Your Dashboard
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Ready to find the perfect career? Let's get started.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-5">
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
      </div>
    </AppShell>
  );
}
