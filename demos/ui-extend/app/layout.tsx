import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { SystemProvider } from '#actors/system.provider';
import { cn } from '@/utils/cn';
import { Provider as ChakraProvider } from './provider';
import { Provider as TooltipProvider } from '@/components/ui/tooltip';
import { NotificationProvider } from '@/components/ui/notification-provider';
import { Suspense } from 'react';

const inter = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const geistMono = localFont({
  src: './fonts/GeistMono[wght].woff2',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Ui Extend',
  description: 'Ui Extend - Extend your UI components with ease',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn(inter.variable, geistMono.variable, 'antialiased')}
    >
      <body
        suppressHydrationWarning
        className='bg-bg-white-0 text-text-strong-950'
      >
        <Suspense>
          <ChakraProvider>
            <SystemProvider>
              <TooltipProvider>{children}</TooltipProvider>
            </SystemProvider>
          </ChakraProvider>
        </Suspense>
      </body>
    </html>
  );
}
