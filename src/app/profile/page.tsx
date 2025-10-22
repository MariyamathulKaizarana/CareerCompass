'use client';

import { format } from 'date-fns';
import { useUser } from '@/firebase';
import { AppShell } from '@/components/AppShell';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { KeyRound, Mail, Pencil, User, Calendar } from 'lucide-react';

export default function ProfilePage() {
  const { user } = useUser();

  if (!user) {
    return null; // Or a loading skeleton
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
          <div className="lg:col-span-2">
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
                    <p className="font-medium text-foreground">{user.displayName || 'Not Provided'}</p>
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
          </div>

          <div className="space-y-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  {user.photoURL && <AvatarImage src={user.photoURL} alt={user.displayName || 'User'} />}
                  <AvatarFallback className="text-3xl">{getInitials(user.displayName)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">{user.displayName}</h3>
                <p className="text-muted-foreground">{user.email}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Profile Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <KeyRound className="mr-2 h-4 w-4" />
                  Change Password
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
