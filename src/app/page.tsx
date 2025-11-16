
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Compass, FileText, Lightbulb } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images';

const heroImage = placeholderImages.find(p => p.id === 'hero');

const features = [
  {
    icon: <Compass className="h-8 w-8 text-accent" />,
    title: 'Interactive Quiz',
    description: 'Answer our quick, fun quiz to uncover your interests and personality traits.',
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-accent" />,
    title: 'AI-Powered Suggestions',
    description: 'Get smart, data-driven career recommendations tailored just for you.',
  },
  {
    icon: <FileText className="h-8 w-8 text-accent" />,
    title: 'Detailed Reports',
    description: 'Explore in-depth information about career paths, salaries, and future scope.',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Compass className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold text-foreground">
            CareerCompass
          </span>
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/signup">Get Started</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:px-6 md:py-24 lg:py-32">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
                Find Your Deserved Future.
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground">
                Don't know what to do after school? CareerCompass helps you
                discover the perfect career path based on your unique
                personality and interests.
              </p>
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/signup">Take the Free Quiz</Link>
              </Button>
            </div>
            <div className="overflow-hidden rounded-xl aspect-[4/1]">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  data-ai-hint={heroImage.imageHint}
                  width={600}
                  height={150}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </div>
        </section>

        <section className="w-full bg-card py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Three simple steps to navigate your career journey.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title} className="text-center">
                  <CardHeader className="items-center">
                    {feature.icon}
                    <CardTitle className="font-headline mt-4 text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:px-6 md:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
              Ready to Discover Your Path?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Your personalized career report is just a few minutes away.
            </p>
            <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link href="/signup">Start Your Journey Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-card">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CareerCompass. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Compass className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold">CareerCompass</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
