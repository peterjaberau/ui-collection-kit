import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';
import '../styles/tailwind.css';
import { ThemeProvider } from 'next-themes';
import { cn } from '@/utils/cn';
import { Provider as TooltipProvider } from '../../react-lite/components/ui/tooltip';
import { NotificationProvider } from '../../react-lite/components/ui/notification-provider';
const inter = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const geistMono = localFont({
  src: '../../../public/fonts/GeistMono[wght].woff2',
  variable: '--font-geist-mono',
  weight: '100 900',
});

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
      <body className='bg-bg-white-0 text-text-strong-950'>
        <ThemeProvider attribute='class'>
          <TooltipProvider>
            <div className='flex min-h-screen flex-col p-10'>
              <main className='flex flex-1 flex-col'>{children}</main>
            </div>
          </TooltipProvider>
        </ThemeProvider>
        <NotificationProvider />
      </body>
    </html>
  );
}
