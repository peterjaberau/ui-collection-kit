'use client';

import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Provider } from 'jotai';
import { ThemeProvider } from 'next-themes';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider>
      <ThemeProvider attribute='class'>
        <TooltipProvider
          delayDuration={100}
          skipDelayDuration={300}
          disableHoverableContent
        >
          {children}
        </TooltipProvider>
      </ThemeProvider>
    </Provider>
  );
};
