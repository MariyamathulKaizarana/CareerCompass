
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const comparisonData = [
    {
        feature: "AI-Powered Personalization",
        careerCompass: true,
        traditionalPortals: false,
        psychometricPlatforms: true,
        description: "Uses AI to tailor suggestions to your unique interests and strengths."
    },
    {
        feature: "Interactive Quiz Experience",
        careerCompass: true,
        traditionalPortals: false,
        psychometricPlatforms: true,
        description: "Engaging, adaptive quiz that feels like a conversation, not just a test."
    },
    {
        feature: "Dynamic AI-Generated Reports",
        careerCompass: true,
        traditionalPortals: false,
        psychometricPlatforms: false,
        description: "Get detailed, on-the-fly reports for any career, not just pre-written templates."
    },
    {
        feature: "Modern User Interface",
        careerCompass: true,
        traditionalPortals: false,
        psychometricPlatforms: true,
        description: "A clean, intuitive, and mobile-friendly design that is easy to navigate."
    },
    {
        feature: "Semantic Search",
        careerCompass: true,
        traditionalPortals: false,
        psychometricPlatforms: false,
        description: "Ask natural questions like 'creative jobs in tech' instead of just using keywords."
    },
    {
        feature: "Specialized Tools (e.g., Honours Advisor)",
        careerCompass: true,
        traditionalPortals: false,
        psychometricPlatforms: false,
        description: "Unique, AI-powered tools that solve specific student problems."
    }
];

const FeatureCell = ({ value }: { value: boolean }) => {
    return (
        <div className="flex justify-center">
            {value ? <Check className="h-6 w-6 text-green-500" /> : <X className="h-6 w-6 text-destructive" />}
        </div>
    );
};

export function ComparisonSection() {
    return (
        <section className="w-full bg-background py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                        Why Choose CareerCompass?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        See how we stack up against other career guidance platforms.
                    </p>
                </div>

                <Card>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[40%] text-base">Feature</TableHead>
                                    <TableHead className="text-center text-base">
                                        <Badge className="text-base bg-accent text-accent-foreground">CareerCompass</Badge>
                                    </TableHead>
                                    <TableHead className="text-center text-base">Traditional Portals</TableHead>
                                    <TableHead className="text-center text-base">Psychometric Platforms</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {comparisonData.map((item) => (
                                    <TableRow key={item.feature}>
                                        <TableCell>
                                            <p className="font-semibold text-foreground text-base">{item.feature}</p>
                                            <p className="text-muted-foreground text-sm">{item.description}</p>
                                        </TableCell>
                                        <TableCell>
                                            <FeatureCell value={item.careerCompass} />
                                        </TableCell>
                                        <TableCell>
                                            <FeatureCell value={item.traditionalPortals} />
                                        </TableCell>
                                        <TableCell>
                                            <FeatureCell value={item.psychometricPlatforms} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
