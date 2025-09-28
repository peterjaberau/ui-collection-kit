'use client';
import { illaCodeMirrorTooltipStyle } from "#codemirror-illa/components/CodeEditor/CodeMirror/theme"
import {
  ChakraProvider,
  defineConfig,
  defaultConfig,
  createSystem,
} from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { Provider as TooltipProvider } from '#components/tw-ui/tooltip'
import { NotificationProvider } from '#components/tw-ui/notification-provider'


const themeConfig: any = defineConfig({
  ...defaultConfig,
  cssVarsPrefix: 'ck',
  preflight: false,
} as any);
const theme = createSystem(themeConfig, {
  disableLayers: true,
});


export const Provider = (props: { children: React.ReactNode }) => {
  return (
      <ChakraProvider value={theme}>
        <ThemeProvider attribute='class' disableTransitionOnChange>
          <TooltipProvider>
          {props.children}
          </TooltipProvider>
          <div
            className="illaCodeMirrorWrapper"
            css={illaCodeMirrorTooltipStyle}
          />
        </ThemeProvider>
        <NotificationProvider/>
      </ChakraProvider>
  );
};
