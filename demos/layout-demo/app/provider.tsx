'use client';
// import { defaultSystem } from '@ui-collection-kit/styling/saas/preset';
import { defineConfig, defaultConfig, createSystem, ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
const themeConfig: any = defineConfig({
  ...defaultConfig,
  cssVarsPrefix: 'ck-theme',
} as any);
const theme = createSystem(themeConfig);

export const Provider = (props: { children: React.ReactNode }) => {
  return (
    <ChakraProvider value={theme}>
      <ThemeProvider attribute='class' disableTransitionOnChange>
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  );
};
