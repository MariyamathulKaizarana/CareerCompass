import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from "@/firebase";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from 'next/font/google';
import "./globals.css";

const compassFavicon = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='hsl(48, 100%, 98%)' stroke='hsl(40, 10%, 77%)' stroke-width='4'/%3E%3Cpath d='M50 10 L45 25 H55 Z' fill='hsl(40, 4%, 26%)'/%3E%3Cpath d='M50 90 L45 75 H55 Z' fill='hsl(40, 10%, 77%)'/%3E%3Cpath d='M10 50 L25 45 V55 Z' fill='hsl(40, 10%, 77%)'/%3E%3Cpath d='M90 50 L75 45 V55 Z' fill='hsl(40, 10%, 77%)'/%3E%3Ccircle cx='50' cy='50' r='5' fill='hsl(40, 4%, 26%)'/%3E%3C/svg%3E`;

export const metadata: Metadata = {
  title: "CareerCompass",
  description: "Find your ideal career path with CareerCompass.",
  icons: {
    icon: compassFavicon,
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head />
      <body className="font-body antialiased" suppressHydrationWarning>
        <FirebaseClientProvider>{children}</FirebaseClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
