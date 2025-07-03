'use client';
import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from 'next-themes';
import { Stack } from '@chakra-ui/react';
import { useStylingActor } from '../actors/hooks/useStylingActor';

// const themeConfig: any = defineConfig({
//   ...defaultConfig,
//   cssVarsPrefix: 'ck',
// } as any);
// const theme = createSystem(themeConfig);

export const Provider = (props: { children: React.ReactNode }) => {

  const { active, activeStyleDef } = useStylingActor();

  return (
    <ChakraProvider value={activeStyleDef}>
      <ThemeProvider attribute='class' disableTransitionOnChange>
        <Stack>{props.children}</Stack>
      </ThemeProvider>
    </ChakraProvider>
  );
};
