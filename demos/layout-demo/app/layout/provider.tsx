'use client';
import { defaultSystem } from '@ui-collection-kit/styling/saas/preset';
import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from 'next-themes';

export const Provider = (props: { children: React.ReactNode }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute='class' disableTransitionOnChange>
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  );
};
