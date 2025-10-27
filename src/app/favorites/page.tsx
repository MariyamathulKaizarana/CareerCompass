'use client';

import { AppShell } from '@/components/AppShell';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Loader2 } from 'lucide-react';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import type { FavoriteCareer } from '@/lib/types';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';


export default function FavoritesPage() {
  const { user } = useUser();
  const firestore = useFirestore();

  const favoritesQuery = useMemoFirebase(() => {
    if (!user) return null;
    return collection(firestore, 'users', user.uid, 'career_preferences');
  }, [firestore, user]);

  const { data: favoriteCareers, isLoading } = useCollection<FavoriteCareer>(favoritesQuery);

  const findImage = (careerTitle: string) => {
    const searchTerm = careerTitle.split(' ')[0].toLowerCase().replace('/', '-');
    return placeholderImages.find(p => p.id === searchTerm) || placeholderImages.find(p => p.id === 'report');
  };

  return (
    <AppShell>
      <div className="w-full">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          My Favorites
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Your saved career paths for easy access and comparison.
        </p>

        <div className="mt-8">
          {isLoading && (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-12 w-12 animate-spin text-accent" />
            </div>
          )}
          
          {!isLoading && favoriteCareers && favoriteCareers.length === 0 && (
            <Card className="py-12 text-center border-dashed">
                <CardHeader>
                    <div className='flex justify-center'>
                        <Heart className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <CardTitle className="font-headline text-2xl mt-4">No Favorites Yet</CardTitle>
                    <CardDescription>
                        Click the heart icon on any career to save it here.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground max-w-md mx-auto">
                        Start exploring careers and bookmark the ones that catch your eye. They'll all be collected on this page for you.
                    </p>
                     <Button asChild className="mt-6">
                        <Link href="/careers">Explore Careers</Link>
                    </Button>
                </CardContent>
            </Card>
          )}

          {!isLoading && favoriteCareers && favoriteCareers.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {favoriteCareers.map((career) => {
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
                 )
              })}
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
