
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { AppShell } from '@/components/AppShell';
import { careers } from '@/lib/career-data';
import { placeholderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, CheckCircle, DollarSign, GraduationCap, Map, TrendingUp, Trophy, University, Briefcase } from 'lucide-react';
import CareerDetailClient from './CareerDetailClient';
import FavoriteButton from '@/components/FavoriteButton';
import type { Salary } from '@/lib/types';


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

const Roadmap = ({ roadmap }: { roadmap: string }) => {
    const steps = roadmap.split(';').map(s => s.trim()).filter(step => step);
    return (
        <ol className="list-decimal list-inside space-y-2">
            {steps.map((step, index) => (
                <li key={index} className="text-lg text-foreground">{step}</li>
            ))}
        </ol>
    );
};

const SalaryDisplay = ({ salary }: { salary: Salary | string }) => {
    if (typeof salary === 'string') {
        return <div className="text-lg font-semibold text-foreground">{salary}</div>;
    }
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Fresher (0-2 yrs)</span>
                <span className="font-semibold text-foreground">{salary.fresher}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Mid-Level (3-7 yrs)</span>
                <span className="font-semibold text-foreground">{salary.midLevel}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Senior (8+ yrs)</span>
                <span className="font-semibold text-foreground">{salary.senior}</span>
            </div>
        </div>
    );
}

const SkillsList = ({ skills }: { skills: string[] }) => {
    return (
        <ul className="space-y-2">
            {skills.map((skill, index) => (
                <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 mr-2 flex-shrink-0" />
                    <span className="text-foreground font-medium">{skill}</span>
                </li>
            ))}
        </ul>
    );
};


export default function CareerDetailPage({ params }: CareerDetailPageProps) {
  const career = getCareerBySlug(params.slug);

  if (!career) {
    notFound();
  }
  
  const image = findImage(career.title);

  const detailCards = [
    { icon: <GraduationCap className="h-6 w-6 text-accent" />, title: "Required Courses", content: career.courses },
    { icon: <CheckCircle className="h-6 w-6 text-accent" />, title: "Key Skills", content: career.skills, isSkillsList: true },
    { icon: <Map className="h-6 w-6 text-accent" />, title: "Career Roadmap", content: career.roadmap, isRoadmap: true },
    { icon: <DollarSign className="h-6 w-6 text-accent" />, title: "Average Salary", content: career.avgSalary, isSalary: true },
    { icon: <TrendingUp className="h-6 w-6 text-accent" />, title: "Future Scope", content: career.futureScope },
  ];

  if (career.exams && career.exams.length > 0) {
    detailCards.push({ icon: <Trophy className="h-6 w-6 text-accent" />, title: "Competitive Exams", content: career.exams });
  }

  if (career.topColleges && career.topColleges.length > 0) {
    detailCards.push({ icon: <University className="h-6 w-6 text-accent" />, title: "Top Colleges in India", content: career.topColleges });
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
                           {item.isSkillsList ? (
                                <SkillsList skills={item.content as string[]} />
                            ) : item.isRoadmap ? (
                                <Roadmap roadmap={item.content as string} />
                            ) : item.isSalary ? (
                                <SalaryDisplay salary={item.content as Salary | string} />
                            ) : (
                                <div className="text-lg font-semibold text-foreground">{Array.isArray(item.content) ? item.content.join(', ') : item.content}</div>
                            )}
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
                    <h3 className="font-headline text-xl">Is This the Right Career for You?</h3>
                    <p className="mt-2 text-muted-foreground">If you enjoy problem-solving, continuous learning, and creating impactful solutions, {career.title} could be your ideal path.</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
