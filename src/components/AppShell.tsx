'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Book,
  Compass,
  Heart,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  User as UserIcon,
  GraduationCap,
  History,
  Menu,
  X,
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
import { Button } from './ui/button';
import { Search } from './Search';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/quiz', icon: HelpCircle, label: 'Take Quiz' },
  { href: '/careers', icon: Book, label: 'Explore Careers' },
  { href: '/courses', icon: GraduationCap, label: 'Explore Courses' },
  { href: '/favorites', icon: Heart, label: 'My Favorites' },
  { href: '/history', icon: History, label: 'History' },
];

function FullScreenLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <Compass className="h-12 w-12 animate-pulse-spin text-primary" />
        <p className="text-muted-foreground">Loading your experience...</p>
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.replace('/login');
    }
  }, [user, isUserLoading, router]);

  useEffect(() => {
    // Close sidebar on route change for mobile
    setIsSidebarOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  if (isUserLoading || !user) {
    return <FullScreenLoader />;
  }

  const getInitials = (name?: string | null) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('');
  };

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex h-full w-64 flex-col border-r bg-background transition-transform duration-300 lg:translate-x-0',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <Compass className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl font-bold text-foreground">
              CareerCompass
            </span>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                    pathname === item.href && 'bg-muted text-primary'
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto border-t p-4">
            <Link href="/profile" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <UserIcon className="h-5 w-5" />
                <span>My Profile</span>
            </Link>
             <Button variant="ghost" onClick={handleLogout} className="w-full justify-start gap-3 px-3 py-2 text-muted-foreground hover:text-primary">
                <LogOut className="h-5 w-5" />
                <span>Log out</span>
            </Button>
        </div>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex flex-1 flex-col lg:pl-64">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
             {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">{isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}</span>
          </Button>
          <div className="flex w-full items-center gap-4">
            <Search />
            <div className="ml-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                    <Avatar>
                      {user.photoURL && <AvatarImage src={user.photoURL} alt={user.displayName || 'User'} />}
                      <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>{user.displayName || 'My Account'}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <UserIcon className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/admin/dashboard">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      <span>Admin</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
