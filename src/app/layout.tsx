import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from "@/firebase";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "CareerCompass",
  description: "Find your ideal career path with CareerCompass.",
  icons: {
    icon: '/favicon.svg',
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
