'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { useUser, useAuth } from '@/firebase';
import { updateProfile, sendPasswordResetEmail, EmailAuthProvider, reauthenticateWithCredential, updatePassword, deleteUser } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { AppShell } from '@/components/AppShell';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { KeyRound, Mail, Pencil, User, Calendar, Loader2, ShieldAlert, Trash2 } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input, PasswordInput } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const profileFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
});

const passwordFormSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required."),
  newPassword: z.string().min(8, { message: 'Password must be at least 8 characters.' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter.' })
    .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter.' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number.' })
    .regex(/[^A-Za-z0-9]/, { message: 'Password must contain at least one special character.' }),
  confirmPassword: z.string(),
}).refine(data => data.newPassword === data.confirmPassword, {
    message: "New passwords don't match.",
    path: ["confirmPassword"],
});

const deleteAccountFormSchema = z.object({
    password: z.string().min(1, "Password is required to delete your account."),
});


export default function ProfilePage() {
  const { user } = useUser();
  const auth = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  
  const [displayName, setDisplayName] = useState(user?.displayName);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPasswordSubmitting, setIsPasswordSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false);
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const profileForm = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    values: { // Use values to dynamically update form
      name: displayName || '',
    },
  });
  
  const passwordForm = useForm<z.infer<typeof passwordFormSchema>>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    }
  });

  const deleteAccountForm = useForm<z.infer<typeof deleteAccountFormSchema>>({
    resolver: zodResolver(deleteAccountFormSchema),
    defaultValues: {
        password: '',
    }
  });


  async function handleProfileUpdate(values: z.infer<typeof profileFormSchema>) {
    if (!user) return;
    setIsSubmitting(true);
    try {
      await updateProfile(user, { displayName: values.name });
      setDisplayName(values.name); 
      toast({
        variant: 'success',
        title: 'Success!',
        description: 'Your profile has been updated.',
      });
      setIsProfileDialogOpen(false); 
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Update Failed',
        description: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handlePasswordUpdate(values: z.infer<typeof passwordFormSchema>) {
    if (!user || !user.email) {
      toast({ variant: 'destructive', title: 'Error', description: 'Could not find user email.' });
      return;
    }
    setIsPasswordSubmitting(true);
    try {
        const credential = EmailAuthProvider.credential(user.email, values.currentPassword);
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, values.newPassword);

        toast({
            variant: 'success',
            title: 'Password Updated!',
            description: 'Your password has been changed successfully.',
        });
        setIsPasswordDialogOpen(false);
        passwordForm.reset();

    } catch (error: any) {
        let description = "An unexpected error occurred.";
        if (error.code === 'auth/wrong-password') {
            description = "The current password you entered is incorrect. Please try again.";
        } else if (error.code === 'auth/weak-password') {
            description = "The new password is too weak. Please choose a stronger one.";
        } else {
            description = error.message;
        }

        toast({
            variant: 'destructive',
            title: 'Password Change Failed',
            description,
        });
    } finally {
        setIsPasswordSubmitting(false);
    }
  }

  async function handlePasswordReset() {
    if (!user?.email) {
      toast({ variant: 'destructive', title: 'Error', description: 'No email address found for your account.' });
      return;
    }
    try {
      await sendPasswordResetEmail(auth, user.email);
      toast({
        variant: 'success',
        title: 'Password Reset Email Sent',
        description: `An email has been sent to ${user.email} with instructions to reset your password.`,
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Failed to Send Reset Email',
        description: error.message,
      });
    }
  }

  async function handleDeleteAccount(values: z.infer<typeof deleteAccountFormSchema>) {
    if (!user || !user.email) return;
    setIsDeleting(true);
    try {
        const credential = EmailAuthProvider.credential(user.email, values.password);
        await reauthenticateWithCredential(user, credential);
        await deleteUser(user);
        toast({
            title: 'Account Deleted',
            description: 'Your account has been permanently deleted.',
        });
        router.push('/login');
    } catch (error: any) {
        let description = "An unexpected error occurred.";
        if (error.code === 'auth/wrong-password') {
            description = "The password you entered is incorrect. Account deletion failed.";
        } else {
            description = error.message;
        }
        toast({
            variant: 'destructive',
            title: 'Deletion Failed',
            description,
        });
    } finally {
        setIsDeleting(false);
        setIsDeleteDialogOpen(false);
        deleteAccountForm.reset();
    }
  }


  if (!user) {
    return null;
  }

  const getInitials = (name?: string | null) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('');
  };
  
  const creationTime = user.metadata.creationTime ? new Date(user.metadata.creationTime) : null;
  const formattedCreationDate = creationTime ? format(creationTime, 'MMMM d, yyyy') : 'N/A';

  return (
    <AppShell>
      <div className="w-full">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          My Profile
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          View and manage your account details.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>
                  This is your personal information. It is not shared publicly.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Full Name</p>
                    <p className="font-medium text-foreground">{displayName || 'Not Provided'}</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Email Address</p>
                    <p className="font-medium text-foreground">{user.email}</p>
                  </div>
                </div>
                 <Separator />
                <div className="flex items-center gap-4">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Member Since</p>
                    <p className="font-medium text-foreground">{formattedCreationDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Account Management</CardTitle>
                    <CardDescription>
                    Use these options to manage your account settings.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-4">
                    <Dialog open={isProfileDialogOpen} onOpenChange={setIsProfileDialogOpen}>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit Profile
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                        </DialogHeader>
                        <Form {...profileForm}>
                            <form onSubmit={profileForm.handleSubmit(handleProfileUpdate)} className="space-y-4">
                                <FormField
                                    control={profileForm.control}
                                    name="name"
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                        <Input placeholder="Your Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                                <DialogFooter>
                                    <Button type="submit" disabled={isSubmitting}>
                                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                        Save Changes
                                    </Button>
                                </DialogFooter>
                            </form>
                        </Form>
                    </DialogContent>
                    </Dialog>
                    
                    <Dialog open={isPasswordDialogOpen} onOpenChange={setIsPasswordDialogOpen}>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                        <KeyRound className="mr-2 h-4 w-4" />
                        Change Password
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Change Password</DialogTitle>
                            <DialogDescription>
                                Enter your current password and a new password below.
                            </DialogDescription>
                        </DialogHeader>
                        <Form {...passwordForm}>
                            <form onSubmit={passwordForm.handleSubmit(handlePasswordUpdate)} className="space-y-4">
                                <FormField
                                    control={passwordForm.control}
                                    name="currentPassword"
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Current Password</FormLabel>
                                        <FormControl>
                                        <PasswordInput placeholder="Current Password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                                <FormField
                                    control={passwordForm.control}
                                    name="newPassword"
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>New Password</FormLabel>
                                        <FormControl>
                                        <PasswordInput placeholder="New Password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                                <FormField
                                    control={passwordForm.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm New Password</FormLabel>
                                        <FormControl>
                                        <PasswordInput placeholder="Confirm New Password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                                <DialogFooter>
                                    <Button type="submit" disabled={isPasswordSubmitting}>
                                        {isPasswordSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                        Update Password
                                    </Button>
                                </DialogFooter>
                            </form>
                        </Form>
                    </DialogContent>
                    </Dialog>

                    <Button variant="outline" className="w-full justify-start" onClick={handlePasswordReset}>
                        <ShieldAlert className="mr-2 h-4 w-4" />
                        Reset Password via Email
                    </Button>
                </CardContent>
            </Card>

            <Card className='border-destructive'>
                <CardHeader>
                    <CardTitle className='text-destructive'>Danger Zone</CardTitle>
                    <CardDescription>
                       Be careful, these actions are not reversible.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                        <AlertDialogTrigger asChild>
                             <Button variant="destructive" className="w-full justify-start">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete Account
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your account and remove your data from our servers. To confirm, please enter your password.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <Form {...deleteAccountForm}>
                                <form onSubmit={deleteAccountForm.handleSubmit(handleDeleteAccount)} className="space-y-4">
                                     <FormField
                                        control={deleteAccountForm.control}
                                        name="password"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Current Password</FormLabel>
                                            <FormControl>
                                            <PasswordInput placeholder='Enter password to confirm' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <Button type="submit" variant='destructive' disabled={isDeleting}>
                                             {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                            Delete My Account
                                        </Button>
                                    </AlertDialogFooter>
                                </form>
                            </Form>
                        </AlertDialogContent>
                    </AlertDialog>
                </CardContent>
            </Card>

          </div>

          <div className="space-y-6 lg:col-span-1">
            <Card className="text-center">
              <CardContent className="p-6">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  {user.photoURL && <AvatarImage src={user.photoURL} alt={displayName || 'User'} />}
                  <AvatarFallback className="text-3xl">{getInitials(displayName)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">{displayName}</h3>
                <p className="text-muted-foreground">{user.email}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
