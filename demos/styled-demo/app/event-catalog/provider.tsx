'use client';
import { defaultSystem } from '@ui-collection-kit/styling/alignui/preset';
import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from 'next-themes';
import { Stack } from '@chakra-ui/react';

export const Provider = (props: { children: React.ReactNode }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute='class' disableTransitionOnChange>
        <Stack>{props.children}</Stack>
      </ThemeProvider>
    </ChakraProvider>
  );
};
