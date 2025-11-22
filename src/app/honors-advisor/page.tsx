'use client';

import { useState } from 'react';
import { AppShell } from '@/components/AppShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { suggestHonorsCourses, type HonorsCourseSuggestion } from '@/ai/flows/suggest-honors-courses';
import { Loader2, Sparkles, ArrowRight } from 'lucide-react';
import { honorsCourses } from '@/lib/honors-courses-data';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Step = 'stream' | 'interests' | 'suggestions' | 'result';

const engineeringStreams = [
    'Computer Science & Engineering',
    'Information Science & Engineering',
    'Artificial Intelligence & Machine Learning',
    'Data Science',
    'Cyber Security',
    'Computer Science & Engineering (IoT & Cyber Security including Block Chain Technology)',
    'Computer Science & Business System',
    'Artificial Intelligence & Data Science',
    'Computer Science & Design',
    'Computer & Communication Engineering',
    'Electronics & Communication Engg',
    'Mechanical Engineering',
    'Civil Engineering',
    'Aeronautical Engineering',
    'Aerospace Engineering',
    'Electrical & Electronics Engineering',
    'Biotechnology',
    'Chemical Engineering',
    'Automobile Engineering',
    'Industrial & Production Engineering',
    'Electronics & Telecommunication Engg',
    'Industrial Engineering & Management',
    'Electronics & Instrumentation Engineering',
    'Medical Electronics Engineering',
    'Mechatronics',
    'Automation and Robotics',
    'Robotics and Artificial Intelligence',
    'Biomedical Engineering'
];

const interestCategoryMapping: Record<string, string[]> = {
    'Computer Science & Engineering': ['Computer Science & Engineering', 'Mathematics', 'Management'],
    'Information Science & Engineering': ['Computer Science & Engineering', 'Mathematics', 'Management'],
    'Artificial Intelligence & Machine Learning': ['Computer Science & Engineering', 'Mathematics', 'Management'],
    'Data Science': ['Computer Science & Engineering', 'Mathematics', 'Management'],
    'Cyber Security': ['Computer Science & Engineering', 'Management'],
    'Computer Science & Engineering (IoT & Cyber Security including Block Chain Technology)': ['Computer Science & Engineering', 'Electronics & Communication Engineering', 'Management'],
    'Computer Science & Business System': ['Computer Science & Engineering', 'Management'],
    'Artificial Intelligence & Data Science': ['Computer Science & Engineering', 'Mathematics', 'Management'],
    'Computer Science & Design': ['Computer Science & Engineering', 'Design Engineering', 'Humanities'],
    'Computer & Communication Engineering': ['Computer Science & Engineering', 'Electronics & Communication Engineering'],
    'Electronics & Communication Engg': ['Electronics & Communication Engineering', 'Computer Science & Engineering', 'Physics'],
    'Mechanical Engineering': ['Mechanical Engineering', 'Design Engineering', 'Management', 'Physics'],
    'Civil Engineering': ['Civil Engineering', 'Design Engineering', 'Management', 'Earth Science'],
    'Aeronautical Engineering': ['Aerospace Engineering', 'Mechanical Engineering', 'Design Engineering'],
    'Aerospace Engineering': ['Aerospace Engineering', 'Mechanical Engineering', 'Design Engineering', 'Physics'],
    'Electrical & Electronics Engineering': ['Electrical Engineering', 'Electronics & Communication Engineering', 'Computer Science & Engineering', 'Physics'],
    'Biotechnology': ['Biotechnology', 'Chemistry'],
    'Chemical Engineering': ['Chemical Engineering', 'Chemistry', 'Management'],
    'Automobile Engineering': ['Mechanical Engineering', 'Design Engineering'],
    'Industrial & Production Engineering': ['Mechanical Engineering', 'Management'],
    'Electronics & Telecommunication Engg': ['Electronics & Communication Engineering', 'Computer Science & Engineering'],
    'Industrial Engineering & Management': ['Mechanical Engineering', 'Management'],
    'Electronics & Instrumentation Engineering': ['Electronics & Communication Engineering', 'Electrical Engineering'],
    'Medical Electronics Engineering': ['Electronics & Communication Engineering', 'Biotechnology'],
    'Mechatronics': ['Mechanical Engineering', 'Electronics & Communication Engineering', 'Computer Science & Engineering'],
    'Automation and Robotics': ['Mechanical Engineering', 'Computer Science & Engineering', 'Electronics & Communication Engineering'],
    'Robotics and Artificial Intelligence': ['Computer Science & Engineering', 'Mechanical Engineering', 'Electronics & Communication Engineering'],
    'Biomedical Engineering': ['Biotechnology', 'Electronics & Communication Engineering']
};

const allInterestAreas = [...new Set(honorsCourses.map(c => c.stream))];


export default function HonorsAdvisorPage() {
    const [step, setStep] = useState<Step>('stream');
    const [stream, setStream] = useState('');
    const [interests, setInterests] = useState<string[]>([]);
    const [suggestions, setSuggestions] = useState<HonorsCourseSuggestion[]>([]);
    const [selectedCourses, setSelectedCourses] = useState<HonorsCourseSuggestion[]>([]);
    const [loading, setLoading] = useState(false);
    const [availableInterests, setAvailableInterests] = useState<string[]>(allInterestAreas);

    const handleStreamNext = () => {
        if (stream) {
            const relevantCategories = interestCategoryMapping[stream] || allInterestAreas;
            const interestsForStream = allInterestAreas.filter(area => relevantCategories.includes(area));
            setAvailableInterests(interestsForStream);
            setInterests([]); // Reset interests when stream changes
            setStep('interests');
        }
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
            const results = await suggestHonorsCourses({
                stream,
                interests: interests.join(', '),
            });
            setSuggestions(results);
            setSelectedCourses([]);
            setStep('suggestions');
        } catch (error) {
            console.error("Failed to get suggestions:", error);
            // You can add a toast notification here to inform the user
        } finally {
            setLoading(false);
        }
    };
    
    const handleCourseSelection = (course: HonorsCourseSuggestion) => {
        setSelectedCourses(prev => {
            if (prev.some(c => c.title === course.title)) {
                return prev.filter(c => c.title !== course.title);
            }
            return [...prev, course];
        });
    };

    const handleShowResult = () => {
        if(selectedCourses.length > 0) {
            setStep('result');
        }
    }
    
    const handleGoBackToStream = () => {
        setInterests([]);
        setStep('stream');
    }

    const totalSelectedCredits = selectedCourses.reduce((sum, course) => sum + course.credits, 0);
    const totalSelectedWeeks = selectedCourses.reduce((sum, course) => sum + (honorsCourses.find(c => c.title === course.title)?.weeks || 0), 0);
    
      const findImage = (courseTitle: string) => {
        const titleLower = courseTitle.toLowerCase();
        const keywordMap: { [key: string]: string } = {
            'python': 'software', 'algorithms': 'software', 'data structures': 'data', 'machine learning': 'ai/ml', 
            'deep learning': 'ai/ml', 'natural language': 'ai/ml', 'data science': 'data', 'database': 'data', 'iot': 'iot', 
            'internet of things': 'iot', 'cloud computing': 'cloud', 'operating system': 'software', 'computer architecture': 'hardware', 
            'verilog': 'hardware', 'social networks': 'social', 'graphics': 'graphic', 'software testing': 'software', 
            'sustainability': 'sustainability', 'design': 'interior', 'regression': 'data', 'algebra': 'math', 'matlab': 'math', 
            'fuzzy set': 'math', 'numerical methods': 'math', 'optimization': 'math', 'signal processing': 'electrical', 
            'microelectronics': 'electrical', 'op-amp': 'electrical', 'sensors': 'electrical', 'photovoltaic': 'solar', 
            'neuroscience': 'doctor', 'control systems': 'mechanical', 'fabrication': 'mechanical', 'smart grid': 'electrical', 
            'spectroscopic': 'pharmacist', 'chemical process': 'chemical', 'renewable energy': 'sustainability', 
            'drug delivery': 'pharmacist', 'genetic engineering': 'geneticist', 'food process': 'food', 
            'tissue engineering': 'biotechnologist', 'biomaterials': 'biotechnologist', 'nanotechnology': 'biotechnologist', 
            'advanced materials': 'mechanical', 'crystallography': 'chemical', 'finite element': 'mechanical', 
            'remote sensing': 'aerospace', 'product design': 'product', 'patent law': 'lawyer', 'soft skills': 'human', 
            'psychology': 'psychologist', 'entrepreneurship': 'business', 'energy economics': 'economist', 'water': 'civil', 
            'intellectual property': 'lawyer', 'human resource': 'human', 'negotiations': 'management', 
            'safety engineering': 'civil', 'working capital': 'investment', 'project management': 'management', 
            'international business': 'business', 'management': 'management', 'accounting': 'chartered', 'marketing': 'marketing', 
            'text mining': 'data', 'leadership': 'human', 'navigation satellite': 'aerospace', 'robotics': 'robotics', 
            'industry 4.0': 'industry', 'artificial intelligence': 'ai/ml', 'java': 'software', 'competitive programming': 'software',
            'graph theory': 'math', 'blockchain': 'blockchain', 'complexity theory': 'math', 'distributed systems': 'cloud',
            'number theory': 'math', 'data mining': 'data', 'digital design': 'hardware', 'edge computing': 'iot',
            'embedded system': 'hardware', 'parallel computer': 'hardware', 'quantum': 'physics', 'usable security': 'cybersecurity',
            'human-computer interaction': 'ux', 'linear programming': 'math', 'affective computing': 'ai/ml', 'cyber physical': 'iot',
            'gpu': 'hardware', 'information security': 'cybersecurity', 'c++': 'software', 'secure computation': 'cybersecurity',
            'computer vision': 'ai/ml', 'compiler': 'software', 'network': 'software', 'hacking': 'cybersecurity', 'computation': 'math',
            'drug design': 'pharmacist', 'statistics': 'data', 'time series': 'data', 'analytics': 'data', 'big data': 'data',
            'system design': 'software', 'wavelets': 'math', 'multirate': 'electrical', 'medical image': 'doctor', 'microwave': 'electrical',
            'microgrid': 'electrical', 'power converters': 'electrical', 'transmission': 'electrical', 'semiconductor': 'hardware',
            'antennas': 'electrical', 'wireless': 'iot', 'signals': 'electrical', 'coding theory': 'math', 'nanofabrication': 'mechanical',
            'fiber optic': 'electrical', 'power management': 'electrical', 'power system': 'electrical', 'electromagnetics': 'physics',
            'vlsi': 'hardware', 'thermodynamics': 'mechanical', 'combustion': 'mechanical', 'nuclear power': 'mechanical',
            'ergonomics': 'human', 'fluid dynamics': 'mechanical', 'welding': 'mechanical', 'casting': 'mechanical',
            'vibration': 'mechanical', 'steam and gas': 'mechanical', 'turbomachinery': 'mechanical', 'power plant': 'mechanical',
            'heat exchangers': 'mechanical', 'continuum mechanics': 'mechanical', 'mechanism': 'mechanical', 'robot': 'robotics',
            'mechatronics': 'robotics', 'sheet metal': 'mechanical', 'refrigeration': 'mechanical', 'fault diagnosis': 'mechanical',
            'fluid machines': 'mechanical', 'energy efficiency': 'sustainability', 'acoustics': 'physics', 'automation': 'robotics',
            'manufacturing': 'industry', 'product design': 'product', 'materials': 'mechanical', 'stress analysis': 'mechanical',
            'tribological': 'mechanical', 'packaging': 'logistics', 'research': 'data', 'stress management': 'psychologist',
            'e-learning': 'education', 'teaching': 'education', 'game theory': 'math', 'corporate finance': 'investment',
            'e-business': 'business', 'team effectiveness': 'human', 'commercial banking': 'investment', 'simulation': 'data',
            'services marketing': 'marketing', 'systems engineering': 'software', 'supply chain': 'logistics',
            'quality management': 'management', 'six sigma': 'management', 'brand management': 'marketing', 'incubation': 'business'
        };
      
        for (const keyword in keywordMap) {
          if (titleLower.includes(keyword)) {
            const imageId = keywordMap[keyword];
            const foundImage = placeholderImages.find(p => p.id === imageId);
            if (foundImage) return foundImage;
          }
        }
      
        return placeholderImages.find(p => p.id === 'report'); // Default image
      };

    return (
        <AppShell>
            <div className="mx-auto w-full max-w-7xl">
                <div className="mb-8 text-center">
                    <Sparkles className="mx-auto h-12 w-12 text-primary" />
                    <h1 className="mt-4 font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        Honors Advisor
                    </h1>
                    <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
                        Let our AI help you choose the perfect honors courses to match your interests and career goals.
                    </p>
                </div>
                
                {step === 'stream' && (
                    <Card className="mx-auto max-w-4xl">
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
                    </Card>
                )}
                
                {step === 'interests' && (
                     <Card className="mx-auto max-w-4xl">
                        <CardHeader>
                            <CardTitle>Step 2: Your Interests</CardTitle>
                            <CardDescription>Select one or more areas you are passionate about.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {availableInterests.map(interest => (
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
                                <Button variant="outline" onClick={handleGoBackToStream} className="w-full">Back</Button>
                                <Button onClick={handleGetSuggestions} disabled={interests.length === 0 || loading} className="w-full">
                                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Get Suggestions'}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {step === 'suggestions' && (
                    <>
                        <div className="text-center mb-8">
                            <CardTitle className="font-headline text-2xl">AI-Powered Suggestions</CardTitle>
                            <CardDescription>Based on your input, here are some recommended courses. Select one or more.</CardDescription>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {suggestions.map(course => {
                                const image = findImage(course.title);
                                const isSelected = selectedCourses.some(c => c.title === course.title);
                                return (
                                <Card 
                                    key={course.title} 
                                    className={cn(
                                        "flex flex-col overflow-hidden cursor-pointer transition-all",
                                        isSelected ? "ring-2 ring-primary ring-offset-2" : "ring-0"
                                    )}
                                    onClick={() => handleCourseSelection(course)}
                                >
                                    {image && (
                                    <div className="aspect-video overflow-hidden relative">
                                        <Image
                                        src={image.imageUrl}
                                        alt={image.description}
                                        data-ai-hint={image.imageHint}
                                        width={400}
                                        height={225}
                                        className="h-full w-full object-cover transition-transform hover:scale-105"
                                        />
                                        {isSelected && <div className="absolute inset-0 bg-primary/30" />}
                                    </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle className="font-headline text-lg leading-tight">{course.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <Badge variant="secondary">{course.credits} Credits</Badge>
                                    </CardFooter>
                                </Card>
                                )
                            })}
                        </div>
                        <div className="flex gap-4 mt-8 justify-center">
                            <Button variant="outline" onClick={() => setStep('interests')} className="w-full max-w-xs">Back</Button>
                            <Button onClick={handleShowResult} disabled={selectedCourses.length === 0} className="w-full max-w-xs">
                                View My Selection <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </>
                )}
                
                {loading && step !== 'interests' && (
                    <Card className="mx-auto max-w-4xl">
                        <CardContent className="p-12 flex flex-col items-center justify-center gap-4">
                            <Loader2 className="h-10 w-10 animate-spin text-primary" />
                            <p className="text-muted-foreground">Getting AI suggestions...</p>
                        </CardContent>
                    </Card>
                )}


                {step === 'result' && (
                    <Card className="mx-auto max-w-4xl">
                         <CardHeader>
                            <CardTitle className="font-headline text-2xl">Your Honors Course Plan</CardTitle>
                            <CardDescription>Here are the courses you've selected.</CardDescription>
                        </CardHeader>
                         <CardContent className="space-y-4">
                            <ul className="space-y-3 list-disc list-inside">
                                {selectedCourses.map(course => {
                                    const fullCourse = honorsCourses.find(c => c.title === course.title);
                                    return (
                                        <li key={course.title} className="text-lg">
                                            <span className="font-semibold">{course.title}</span> ({course.credits} credits / {fullCourse?.weeks || 0} weeks)
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="pt-4 border-t">
                                <p className="text-xl font-bold text-right">Total Credits: {totalSelectedCredits}</p>
                                <p className="text-md font-medium text-right text-muted-foreground">Total Duration: {totalSelectedWeeks} weeks</p>
                            </div>
                            <Button variant="outline" onClick={() => setStep('suggestions')} className="w-full">Back to Selections</Button>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AppShell>
    );
}
