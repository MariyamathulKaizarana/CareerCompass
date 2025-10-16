'use client';

// This is a simplified admin layout.
// In a real-world app, you would have robust role-based access control.

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Book,
  Compass,
  LayoutDashboard,
  LogOut,
  User as UserIcon,
  Users,
  FileQuestion,
  Shield,
} from 'lucide-react';
import { signOut } from 'firebase/auth';

import { useUser, useAuth } from '@/firebase';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/admin/dashboard', icon: LayoutDashboard, label: 'Admin Dashboard' },
  { href: '/admin/careers', icon: Book, label: 'Manage Careers' },
  { href: '/admin/questions', icon: FileQuestion, label: 'Manage Questions' },
];

function FullScreenLoader() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <Compass className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.replace('/login');
    }
    // Add admin role check here in a real app
  }, [user, isUserLoading, router]);


  if (isUserLoading || !user) {
    return <FullScreenLoader />;
  }

  const getInitials = (name?: string | null) => {
    if (!name) return 'A';
    return name.split(' ').map((n) => n[0]).slice(0, 2).join('');
  };
  
  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold text-foreground">
                Admin Panel
              </span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <SidebarMenuButton
                      isActive={pathname === item.href}
                      tooltip={item.label}
                    >
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
             <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard">← Back to App</Link>
             </Button>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
            <main className="flex-1 p-4 sm:p-6 md:p-8 bg-muted/40">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
