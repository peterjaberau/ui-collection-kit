'use client';
import {
  ChakraProvider,
  defineConfig,
  defaultConfig,
  createSystem,
} from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';

import { createTheme, MantineProvider } from '@mantine/core';

import { Stack } from '@chakra-ui/react';

const themeConfig: any = defineConfig({
  ...defaultConfig,
  cssVarsPrefix: 'ck',
} as any);
const theme = createSystem(themeConfig);

const themeMantine = createTheme({});

export const Provider = (props: { children: React.ReactNode }) => {
  return (
    <MantineProvider theme={themeMantine}>
      <ChakraProvider value={theme}>
        <ThemeProvider attribute='class' disableTransitionOnChange>
          <Stack>{props.children}</Stack>
        </ThemeProvider>
      </ChakraProvider>
    </MantineProvider>
  );
};
