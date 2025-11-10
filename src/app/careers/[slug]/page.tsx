
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { AppShell } from '@/components/AppShell';
import { careers } from '@/lib/career-data';
import { placeholderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, CheckCircle, DollarSign, GraduationCap, Map, TrendingUp, Trophy, University } from 'lucide-react';
import CareerDetailClient from './CareerDetailClient';
import FavoriteButton from '@/components/FavoriteButton';


interface CareerDetailPageProps {
  params: { slug: string };
}

const getCareerBySlug = (slug: string) => {
  return careers.find((career) => career.slug === slug);
};

const findImage = (careerTitle: string) => {
    const searchTerm = careerTitle.split(' ')[0].toLowerCase();
    return placeholderImages.find(p => p.id === searchTerm) || placeholderImages.find(p => p.id === 'report');
}

export default function CareerDetailPage({ params }: CareerDetailPageProps) {
  const career = getCareerBySlug(params.slug);

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
      <CareerDetailClient career={career} />
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
                        <div className="flex items-center gap-4">
                            <CardTitle className="font-headline text-3xl md:text-4xl">{career.title}</CardTitle>
                             <FavoriteButton career={career} size="lg" />
                        </div>
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
                    <h3 className="font-headline text-xl">Could This Be Your Calling?</h3>
                    <p className="mt-2 text-muted-foreground">If you enjoy problem-solving, continuous learning, and creating impactful solutions, {career.title} could be your ideal path.</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
