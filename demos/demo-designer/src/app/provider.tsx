'use client';
import {
  ChakraProvider,
  defineConfig,
  defaultConfig,
  createSystem,
} from '@chakra-ui/react';
import { Toaster } from '@ui-kit/components';
import { ThemeProvider } from 'next-themes';
// import "./globals.css";

import { Stack } from '@chakra-ui/react';

const themeConfig: any = defineConfig({
  ...defaultConfig,
  cssVarsPrefix: 'ck',
} as any);
const theme = createSystem(themeConfig);


export const Provider = (props: { children: React.ReactNode }) => {
  return (
      <ChakraProvider value={theme}>
        <ThemeProvider attribute='class' disableTransitionOnChange>
          {props.children}
        </ThemeProvider>
        <Toaster />
      </ChakraProvider>
  );
};
