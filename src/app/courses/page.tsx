
import { AppShell } from '@/components/AppShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { careers } from '@/lib/career-data';
import { GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function CoursesPage() {
  // Extract all unique courses from the careers data
  const allCourses = Array.from(new Set(careers.flatMap(c => c.courses)));

  return (
    <AppShell>
      <div className="w-full">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Explore Courses
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Discover courses that can lead to your dream career.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allCourses.map((course) => (
            <Card key={course}>
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-accent" />
                  {course}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  This course is recommended for the following career paths:
                </CardDescription>
                <ul className="mt-4 list-disc pl-5 text-sm text-foreground">
                    {careers.filter(c => c.courses.includes(course)).map(c => (
                        <li key={c.id} className="mb-1">
                            <Link href={`/careers/${c.slug}`} className="hover:underline text-accent-foreground font-semibold">
                                {c.title}
                            </Link>
                        </li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

    