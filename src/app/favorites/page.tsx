import { AppShell } from '@/components/AppShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function FavoritesPage() {
  return (
    <AppShell>
      <div className="w-full">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          My Favorites
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Your saved career paths will appear here.
        </p>

        <div className="mt-8">
            <Card className="py-12 text-center border-dashed">
                <CardHeader>
                    <div className='flex justify-center'>
                        <Heart className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <CardTitle className="font-headline text-2xl mt-4">Feature Coming Soon!</CardTitle>
                    <CardDescription>
                        The ability to save and track your favorite careers is under construction.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground max-w-md mx-auto">
                        Soon, you'll be able to bookmark careers you're interested in and easily access them from this page for comparison and further research.
                    </p>
                </CardContent>
            </Card>
        </div>

      </div>
    </AppShell>
  );
}
