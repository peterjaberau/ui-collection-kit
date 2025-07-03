'use client';
import '@atlaskit/css-reset';
import AppProvider from '@atlaskit/app-provider';
import {
  ChakraProvider,
  defineConfig,
  defaultConfig,
  createSystem,
} from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { Stack } from '@chakra-ui/react';

const themeConfig: any = defineConfig({
  ...defaultConfig,
  cssVarsPrefix: 'ck',
} as any);
const theme = createSystem(themeConfig);

export const Provider = (props: { children: React.ReactNode }) => {
  return (
    <AppProvider>
      <ChakraProvider value={theme}>
        <ThemeProvider attribute='class' disableTransitionOnChange>
          <Stack>{props.children}</Stack>
        </ThemeProvider>
      </ChakraProvider>
    </AppProvider>
  );
};
