import { AppShell } from '@/components/AppShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { History } from 'lucide-react';

export default function HistoryPage() {
  return (
    <AppShell>
      <div className="w-full">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Activity History
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Your recent activities will be displayed here.
        </p>

        <div className="mt-8">
            <Card className="py-12 text-center border-dashed">
                <CardHeader>
                    <div className='flex justify-center'>
                        <History className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <CardTitle className="font-headline text-2xl mt-4">Feature Coming Soon!</CardTitle>
                    <CardDescription>
                        We are working on recording your activities to show them here.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground max-w-md mx-auto">
                        Soon, you'll be able to see a timeline of your quiz attempts, viewed careers, and saved favorites right on this page.
                    </p>
                </CardContent>
            </Card>
        </div>

      </div>
    </AppShell>
  );
}
