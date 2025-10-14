import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { PhoneNumbersProvider } from '@/context/PhoneNumbersContext';

export const metadata: Metadata = {
  title: 'Global Auto Connect',
  description: 'Premium OEM Used Auto Parts',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        <div className="min-h-screen w-full relative">
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "radial-gradient(125% 125% at 50% 10%, hsl(var(--background)) 40%, hsl(var(--primary) / 0.2) 100%)",
            }}
          />
          <div className="relative z-10">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <PhoneNumbersProvider>
                {children}
              </PhoneNumbersProvider>
              <Toaster />
            </ThemeProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
