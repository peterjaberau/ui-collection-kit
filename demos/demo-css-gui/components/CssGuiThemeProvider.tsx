'use client'
import { ThemeUIProvider as ThemeProvider } from 'theme-ui';
import {
  ThemeProvider as EditorThemeProvider,
  theme,
  importTheme,
} from '@ui-collection-kit/css-gui';
import '../styles/code-styles.css';

export const CssGuiThemeProvider = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>

      {/* @ts-ignore */}
      <EditorThemeProvider theme={importTheme(theme)}>
        {children}
      </EditorThemeProvider>
    </ThemeProvider>
  );
};
