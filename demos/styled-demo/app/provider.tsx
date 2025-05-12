'use client';
import { defaultSystem as themeSaas } from '@ui-collection-kit/saas/react';
import { Button, ChakraProvider, Flex } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { Stack } from '@chakra-ui/react';

export const Provider = (props: { children: React.ReactNode }) => {
  return (
    <ChakraProvider value={themeSaas}>
      <ThemeProvider attribute='class' disableTransitionOnChange>
        <Stack>{props.children}</Stack>
      </ThemeProvider>
    </ChakraProvider>
  );
};
