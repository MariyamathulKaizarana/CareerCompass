'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { AppShell } from '@/components/AppShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, ServerCrash, ArrowLeft, DollarSign } from 'lucide-react';
import { generateCareerReport, type GenerateCareerReportOutput } from '@/ai/flows/generate-career-report';
import { useRouter } from 'next/navigation';
import type { Salary } from '@/lib/types';

interface ReportClientPageProps {
  careerName: string;
}

const MarkdownRenderer = ({ content }: { content: string }) => {
    return (
        <ReactMarkdown
            className="prose prose-sm sm:prose-base dark:prose-invert"
            components={{
                h3: ({ node, ...props }) => <h3 className="font-headline text-xl font-bold mt-6 mb-2" {...props} />,
                p: ({ node, ...props }) => <p className="text-base text-muted-foreground leading-relaxed" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc pl-5 space-y-1" {...props} />,
                li: ({ node, ...props }) => <li className="text-base text-muted-foreground" {...props} />,
            }}
        >
            {content}
        </ReactMarkdown>
    );
};

const SalaryDisplay = ({ salary }: { salary: Salary }) => {
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


export default function ReportClientPage({ careerName }: ReportClientPageProps) {
  const [report, setReport] = useState<GenerateCareerReportOutput | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchReport = async () => {
      setLoading(true);
      setError(null);
      try {
        const interests = localStorage.getItem('userInterests') || 'Not specified';
        const result = await generateCareerReport({
          careerPath: careerName,
          interests: interests,
        });
        setReport(result);
      } catch (e) {
        console.error("Failed to generate career report:", e);
        setError("We couldn't generate the report for this career. The AI model might be busy or unavailable. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, [careerName]);

  const detailCards = report ? [
    { title: "Required Skills", content: Array.isArray(report.requiredSkills) ? report.requiredSkills.join(', ') : report.requiredSkills },
    { title: "Recommended Courses", content: Array.isArray(report.courses) ? report.courses.join(', ') : report.courses },
    { title: "Career Roadmap", content: report.careerRoadmap, isMarkdown: true },
    { title: "Future Scope", content: report.futureScope, isMarkdown: true },
  ] : [];

  return (
    <AppShell>
      <div className="w-full">
        <div className="mb-8">
            <Button variant="outline" onClick={() => router.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Results
            </Button>
        </div>

        {loading && (
          <Card className="flex flex-col items-center justify-center p-12">
            <Loader2 className="h-12 w-12 animate-spin text-accent" />
            <CardTitle className="mt-4 font-headline text-2xl">Generating Your Report...</CardTitle>
            <p className="mt-2 text-muted-foreground">The AI is preparing a detailed report for {careerName}.</p>
          </Card>
        )}

        {error && !loading && (
           <Card className="flex flex-col items-center justify-center p-12 text-center bg-destructive/10 border-destructive">
            <ServerCrash className="h-12 w-12 text-destructive" />
            <CardTitle className="mt-4 font-headline text-2xl text-destructive-foreground">Report Generation Failed</CardTitle>
            <p className="mt-2 text-destructive-foreground/80 max-w-lg">{error}</p>
          </Card>
        )}

        {report && !loading && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-3xl md:text-4xl">{careerName}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">{report.description}</p>
              </CardContent>
            </Card>
            
             <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Average Salary</CardTitle>
                    <DollarSign className="h-6 w-6 text-accent" />
                </CardHeader>
                <CardContent>
                   <SalaryDisplay salary={report.averageSalary} />
                </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              {detailCards.map(item => (
                  <Card key={item.title}>
                      <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                          {item.isMarkdown ? (
                            <MarkdownRenderer content={item.content} />
                          ) : (
                            <div className="text-lg font-semibold text-foreground">{item.content}</div>
                          )}
                      </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
