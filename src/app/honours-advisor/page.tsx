
'use client';

import { useState } from 'react';
import { AppShell } from '@/components/AppShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { suggestHonoursCourses, type HonoursCourseSuggestion } from '@/ai/flows/suggest-honours-courses';
import { Loader2, Sparkles } from 'lucide-react';
import { honoursCourses } from '@/lib/honours-courses-data';
import { Checkbox } from '@/components/ui/checkbox';

type Step = 'stream' | 'budget' | 'interests' | 'suggestions' | 'result';

const engineeringStreams = [
    'Computer Science & Engineering',
    'Information Science & Engineering',
    'Computer Science & Engineering (AI & ML)',
    'Computer Science & Engineering (Data Science)',
    'Computer Science (IoT and Cybersecurity including Blockchain Technology)',
    'Electronics & Communication Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electrical Engineering',
    'Chemical Engineering',
    'Aerospace Engineering',
    'Biotechnology'
];

const interestAreas = [...new Set(honoursCourses.map(c => c.stream))];


export default function HonoursAdvisorPage() {
    const [step, setStep] = useState<Step>('stream');
    const [stream, setStream] = useState('');
    const [credits, setCredits] = useState('');
    const [interests, setInterests] = useState<string[]>([]);
    const [suggestions, setSuggestions] = useState<HonoursCourseSuggestion[]>([]);
    const [selectedCourses, setSelectedCourses] = useState<HonoursCourseSuggestion[]>([]);
    const [loading, setLoading] = useState(false);

    const handleStreamNext = () => {
        if (stream) setStep('budget');
    };

    const handleBudgetNext = () => {
        if (credits) setStep('interests');
    };

    const handleInterestSelection = (interest: string) => {
        setInterests(prev => {
            if (prev.includes(interest)) {
                return prev.filter(i => i !== interest);
            }
            return [...prev, interest];
        });
    }

    const handleGetSuggestions = async () => {
        setLoading(true);
        try {
            const results = await suggestHonoursCourses({
                stream,
                creditBudget: parseInt(credits, 10),
                interests: interests.join(', '),
            });
            setSuggestions(results);
            setStep('suggestions');
        } catch (error) {
            console.error("Failed to get suggestions:", error);
            // You can add a toast notification here to inform the user
        } finally {
            setLoading(false);
        }
    };
    
    const handleCourseSelection = (course: HonoursCourseSuggestion) => {
        setSelectedCourses(prev => {
            const courseWithWeeks = honoursCourses.find(c => c.title === course.title);
            const courseToToggle = { ...course, weeks: courseWithWeeks?.weeks || 0 };

            if (prev.some(c => c.title === course.title)) {
                return prev.filter(c => c.title !== course.title);
            }
            return [...prev, courseToToggle];
        });
    };

    const handleShowResult = () => {
        if(selectedCourses.length > 0) {
            setStep('result');
        }
    }

    const totalSelectedCredits = selectedCourses.reduce((sum, course) => sum + course.credits, 0);
    const totalSelectedWeeks = selectedCourses.reduce((sum, course) => sum + (course.weeks || 0), 0);

    return (
        <AppShell>
            <div className="mx-auto w-full max-w-4xl">
                <div className="mb-8 text-center">
                    <Sparkles className="mx-auto h-12 w-12 text-primary" />
                    <h1 className="mt-4 font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        Honours Advisor
                    </h1>
                    <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
                        Let our AI help you choose the perfect honours courses to match your interests and career goals.
                    </p>
                </div>
                
                <Card>
                    {step === 'stream' && (
                        <>
                            <CardHeader>
                                <CardTitle>Step 1: Select Your Stream</CardTitle>
                                <CardDescription>What is your primary branch of engineering?</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Select onValueChange={setStream} value={stream}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your engineering stream" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {engineeringStreams.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <Button onClick={handleStreamNext} disabled={!stream} className="w-full">Next</Button>
                            </CardContent>
                        </>
                    )}

                    {step === 'budget' && (
                         <>
                            <CardHeader>
                                <CardTitle>Step 2: Credit Budget</CardTitle>
                                <CardDescription>What is your target credit count for your Honours degree? You can select courses to meet this goal.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Label htmlFor="credits">Target Credits</Label>
                                <Input id="credits" type="number" placeholder="e.g., 12 or 16" value={credits} onChange={e => setCredits(e.target.value)} />
                                <div className="flex gap-2">
                                    <Button variant="outline" onClick={() => setStep('stream')} className="w-full">Back</Button>
                                    <Button onClick={handleBudgetNext} disabled={!credits} className="w-full">Next</Button>
                                </div>
                            </CardContent>
                        </>
                    )}
                    
                    {step === 'interests' && (
                         <>
                            <CardHeader>
                                <CardTitle>Step 3: Your Interests</CardTitle>
                                <CardDescription>Select one or more areas you are passionate about.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {interestAreas.map(interest => (
                                        <div key={interest} className="flex items-center space-x-2">
                                            <Checkbox 
                                                id={interest}
                                                checked={interests.includes(interest)}
                                                onCheckedChange={() => handleInterestSelection(interest)}
                                            />
                                            <Label htmlFor={interest} className="font-normal cursor-pointer">{interest}</Label>
                                        </div>
                                    ))}
                                </div>
                                 <div className="flex gap-2 pt-4">
                                    <Button variant="outline" onClick={() => setStep('budget')} className="w-full">Back</Button>
                                    <Button onClick={handleGetSuggestions} disabled={interests.length === 0 || loading} className="w-full">
                                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                        Get Suggestions
                                    </Button>
                                </div>
                            </CardContent>
                        </>
                    )}

                    {step === 'suggestions' && (
                        <>
                            <CardHeader>
                                <CardTitle>AI-Powered Suggestions</CardTitle>
                                <CardDescription>Based on your input, here are some recommended courses. Select one or more.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                               <div className="space-y-4">
                                    {suggestions.map(course => (
                                        <div key={course.title} className="flex items-start gap-4 rounded-lg border p-4">
                                            <Checkbox 
                                                id={course.title} 
                                                onCheckedChange={() => handleCourseSelection(course)}
                                                checked={selectedCourses.some(c => c.title === course.title)}
                                            />
                                            <div className="grid gap-1.5">
                                                <Label htmlFor={course.title} className="text-base font-medium">{course.title} ({course.credits} credits)</Label>
                                                <p className="text-sm text-muted-foreground">{course.description}</p>
                                            </div>
                                        </div>
                                    ))}
                               </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" onClick={() => setStep('interests')} className="w-full">Back</Button>
                                    <Button onClick={handleShowResult} disabled={selectedCourses.length === 0} className="w-full">View My Selection</Button>
                                </div>
                            </CardContent>
                        </>
                    )}

                    {step === 'result' && (
                        <>
                             <CardHeader>
                                <CardTitle className="font-headline text-2xl">Your Honours Course Plan</CardTitle>
                                <CardDescription>Here are the courses you've selected.</CardDescription>
                            </CardHeader>
                             <CardContent className="space-y-4">
                                <ul className="space-y-3 list-disc list-inside">
                                    {selectedCourses.map(course => (
                                        <li key={course.title} className="text-lg">
                                            <span className="font-semibold">{course.title}</span> ({course.credits} credits / {course.weeks} weeks)
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4 border-t">
                                    <p className="text-xl font-bold text-right">Total Credits: {totalSelectedCredits}</p>
                                    <p className="text-md font-medium text-right text-muted-foreground">Total Duration: {totalSelectedWeeks} weeks</p>
                                </div>
                                <Button variant="outline" onClick={() => setStep('suggestions')} className="w-full">Back to Selections</Button>
                            </CardContent>
                        </>
                    )}
                </Card>
            </div>
        </AppShell>
    );
}
