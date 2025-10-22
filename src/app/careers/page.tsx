
import Link from 'next/link';
import Image from 'next/image';
import { AppShell } from '@/components/AppShell';
import { careers } from '@/lib/career-data';
import { placeholderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export default function CareersPage() {
  const findImage = (careerTitle: string) => {
    const searchTerm = careerTitle.split(' ')[0].toLowerCase().replace('/', '-');
    return placeholderImages.find(p => p.id === searchTerm) || placeholderImages.find(p => p.id === 'report');
  }

  return (
    <AppShell>
      <div className="w-full">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Explore Career Paths
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Discover detailed information about various career opportunities.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {careers.map((career) => {
            const image = findImage(career.title);
            return (
              <Card key={career.id} className="flex flex-col overflow-hidden">
                {image && (
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className='flex justify-between items-start'>
                    <CardTitle className="font-headline text-2xl">{career.title}</CardTitle>
                    <Badge variant="outline">{career.stream}</Badge>
                  </div>
                  <CardDescription>{career.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow"></CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/careers/${career.slug}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}

    
