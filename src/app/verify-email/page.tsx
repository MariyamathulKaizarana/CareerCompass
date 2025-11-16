
'use client';

import { useState, useEffect } from 'react';
import { useAuth, useUser } from '@/firebase';
import { sendEmailVerification, signOut } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MailCheck, Loader2, LogOut, Compass } from 'lucide-react';
import Link from 'next/link';

export default function VerifyEmailPage() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    // If the user is loaded and their email is verified, redirect them.
    if (user && user.emailVerified) {
      toast({
        variant: 'success',
        title: 'Email Verified!',
        description: 'Redirecting you to the dashboard...',
      });
      router.push('/dashboard');
    }
  }, [user, router, toast]);

  const handleResendVerification = async () => {
    if (!user) {
        toast({ variant: 'destructive', title: 'Error', description: 'You are not logged in.' });
        return;
    }
    setIsSubmitting(true);
    try {
      await sendEmailVerification(user);
      toast({
        variant: 'success',
        title: 'Verification Email Sent',
        description: `A new verification email has been sent to ${user.email}. Please check your inbox and spam folder.`,
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Failed to Send Email',
        description: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await signOut(auth);
    router.push('/login');
  };
  
  if (isUserLoading) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
                <Compass className="h-12 w-12 animate-pulse-spin text-primary" />
                <p className="text-muted-foreground">Loading...</p>
            </div>
        </div>
    );
  }

  // This check is to prevent a flash of the verify email page if the user is already verified
  // and the redirect is in progress.
  if (user && user.emailVerified) {
      return (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
                <MailCheck className="h-12 w-12 text-green-500" />
                 <p className="text-muted-foreground">Email verified. Redirecting...</p>
            </div>
        </div>
      );
  }


  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
        <div className="absolute top-6 left-6">
            <Link href="/" className="flex items-center gap-2">
                <Compass className="h-8 w-8 text-primary" />
                <span className="font-headline text-2xl font-bold text-foreground">
                CareerCompass
                </span>
            </Link>
        </div>
      <Card className="w-full max-w-lg text-center">
        <CardHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <MailCheck className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="mt-4 font-headline text-3xl">Verify Your Email</CardTitle>
          <CardDescription className="text-lg">
            A verification link has been sent to your email address:
            <span className="font-semibold text-foreground d-block mt-2">{user?.email}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Please check your inbox (and spam folder) and click the link to complete your registration. You will be redirected automatically after verification.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            If you don&apos;t see the email, you can resend it.
          </p>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <Button onClick={handleResendVerification} disabled={isSubmitting} className="w-full">
            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Resend Verification Email
          </Button>
          <div className='flex justify-center items-center gap-4 w-full'>
            <Button variant="outline" onClick={() => router.push('/profile')} className="w-full">
                Go to Profile
            </Button>
            <Button variant="ghost" onClick={handleLogout} disabled={isLoggingOut} className="w-full">
                {isLoggingOut ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <LogOut className="mr-2 h-4 w-4" />}
                Logout
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
