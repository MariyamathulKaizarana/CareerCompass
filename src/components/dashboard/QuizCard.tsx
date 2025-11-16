'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images';

const quizImage = placeholderImages.find((p) => p.id === 'quiz');

export default function QuizCard() {
    return (
        <div className="grid gap-8 lg:grid-cols-5">
          <Card className="lg:col-span-3 flex flex-col justify-center">
            <CardContent className="p-6">
              <h2 className="font-headline text-2xl font-semibold leading-none tracking-tight">Your Journey Starts Here</h2>
              <p className="text-sm text-muted-foreground mt-1.5">Our short, interactive quiz is the first step towards discovering a career you'll love. We'll analyze your answers to suggest paths that match your personality and interests.</p>
              <p className="my-6 text-muted-foreground">The quiz is designed to be quick and intuitive. There are no wrong answers, so just go with what feels right. Your personalized report awaits!</p>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/quiz">
                  Take the Quiz Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 overflow-hidden rounded-xl">
            {quizImage && <Image src={quizImage.imageUrl} alt={quizImage.description} data-ai-hint={quizImage.imageHint} width={600} height={400} className="h-full w-full object-cover" />}
          </div>
        </div>
    );
}
