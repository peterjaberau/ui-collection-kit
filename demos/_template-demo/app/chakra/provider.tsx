'use client';
import { defineConfig, defaultConfig, createSystem, ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { Stack } from '@chakra-ui/react';

const themeConfig: any = defineConfig({
  ...defaultConfig,
  cssVarsPrefix: 'ck-theme',
} as any);
const theme = createSystem(themeConfig);

export const Provider = (props: { children: React.ReactNode }) => {
  return (
    <ChakraProvider value={theme}>
      <ThemeProvider attribute='class' disableTransitionOnChange>
        <Stack>{props.children}</Stack>
      </ThemeProvider>
    </ChakraProvider>
  );
};
