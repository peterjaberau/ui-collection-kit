'use client';
import {
  ChakraProvider,
  defineConfig,
  defaultConfig,
  createSystem,
  Box
} from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';

/*

--dv-paneview-active-outline-color
--dv-tabs-and-actions-container-font-size
--dv-tabs-and-actions-container-height
--dv-tab-close-icon
--dv-drag-over-background-color
--dv-drag-over-border-color
--dv-tabs-container-scrollbar-color
--dv-group-view-background-color
--dv-tabs-and-actions-container-background-color
--dv-activegroup-visiblepanel-tab-background-color
--dv-activegroup-hiddenpanel-tab-background-color
--dv-inactivegroup-visiblepanel-tab-background-color
--dv-inactivegroup-hiddenpanel-tab-background-color
--dv-tab-divider-color
--dv-activegroup-visiblepanel-tab-color
--dv-activegroup-hiddenpanel-tab-color
--dv-inactivegroup-visiblepanel-tab-color
--dv-inactivegroup-hiddenpanel-tab-color
--dv-separator-border
--dv-paneview-header-border-color
--dv-icon-hover-background-color
--dv-floating-box-shadow
--dv-active-sash-color
--dv-background-color

*/


const themeConfig: any = defineConfig({
  ...defaultConfig,
  // globalVars: {
  //   '--dv-group-view-background-color': 'white !important',
  //   '--dv-floating-box-shadow': 'shadows.xs !important'
  // },
  cssVarsPrefix: 'ck',
} as any);
const theme = createSystem(themeConfig);


export const DockViewThemeprovider = (props: { children: React.ReactNode }) => {
  return (
      <ChakraProvider value={theme}>
        <ThemeProvider attribute='class' disableTransitionOnChange>
            {props.children}
        </ThemeProvider>
      </ChakraProvider>
  );
};
