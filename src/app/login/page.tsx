'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  GoogleAuthProvider,
  getRedirectResult,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input, PasswordInput } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/firebase';
import { Compass, Loader2 } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

const authBgImage = placeholderImages.find(p => p.id === 'auth-background');

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isCheckingRedirect, setIsCheckingRedirect] = useState(true);
  const auth = useAuth();

  useEffect(() => {
    const checkRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          toast({
            title: 'Success!',
            description: "You've been logged in with Google.",
          });
          router.push('/dashboard');
        } else {
          setIsCheckingRedirect(false);
        }
      } catch (error: any) {
        toast({
          variant: 'destructive',
          title: 'Google Sign-In Failed',
          description: error.message,
        });
        setIsCheckingRedirect(false);
      }
    };

    checkRedirectResult();
  }, [auth, router, toast]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      toast({
        title: 'Success!',
        description: "You've been logged in.",
      });
      router.push('/dashboard');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    setIsGoogleLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithRedirect(auth, provider);
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Google Sign-In Failed',
        description: error.message,
      });
      setIsGoogleLoading(false);
    }
  }

  if (isCheckingRedirect) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4">
          <Compass className="h-12 w-12 animate-pulse-spin text-primary" />
          <p className="text-muted-foreground">Checking for login information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center p-4">
      {authBgImage && (
        <Image
            src={authBgImage.imageUrl}
            alt={authBgImage.description}
            data-ai-hint={authBgImage.imageHint}
            fill
            className="absolute inset-0 h-full w-full object-cover z-0"
        />
      )}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10"></div>
      <Card className="w-full max-w-md z-20 shadow-2xl">
        <CardHeader className="text-center">
          <Link href="/" className="flex items-center justify-center gap-2 mb-4">
            <Compass className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl font-bold text-foreground">
              CareerCompass
            </span>
          </Link>
          <CardTitle className="font-headline text-3xl">Welcome Back!</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Login
              </Button>
            </form>
          </Form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={isGoogleLoading}>
             {isGoogleLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 23.4 172.9 61.9l-76.2 64.5C308.6 106.5 280.2 96 248 96c-106.1 0-192 85.9-192 192s85.9 192 192 192c97.2 0 168.3-70.2 178.6-162.6H248v-85.3h236.1c2.3 12.7 3.9 26.9 3.9 41.4z"></path></svg>
             )}
            Google
          </Button>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Link href="/signup" className="font-semibold text-accent hover:underline">
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
