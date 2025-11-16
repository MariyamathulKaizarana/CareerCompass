
'use client';

import { AppShell } from '@/components/AppShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

export default function ContactPage() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. We'll get back to you shortly.",
            variant: "success",
        });
        (e.target as HTMLFormElement).reset();
    };


  return (
    <AppShell>
      <div className="w-full">
        <div className="mb-8 text-center">
            <Mail className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Get in Touch
            </h1>
            <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
                We'd love to hear from you! If you have any inquiries, or just want to say hi, please use the contact form below.
            </p>
        </div>
        
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-6">
                <h2 className="font-headline text-2xl font-semibold">Contact Information</h2>
                <p className="text-muted-foreground">
                    For direct inquiries, you can reach out to us via email. We typically respond within 24-48 hours.
                </p>
                <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <a href="mailto:CareerCompassContactus@gmail.com" className="font-medium text-foreground hover:underline">
                        CareerCompassContactus@gmail.com
                    </a>
                </div>
            </div>

             <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader>
                        <CardTitle>Send us a Message</CardTitle>
                        <CardDescription>
                            Fill out the form and our team will get back to you as soon as possible.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="first-name">First Name</Label>
                                <Input id="first-name" placeholder="John" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="last-name">Last Name</Label>
                                <Input id="last-name" placeholder="Doe" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="you@example.com" required />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Your message here..." required />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full">Send Message</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
      </div>
    </AppShell>
  );
}
