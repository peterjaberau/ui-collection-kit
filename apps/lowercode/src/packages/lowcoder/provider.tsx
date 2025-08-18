import {
  ChakraProvider,
  defineConfig,
  defaultConfig,
  createSystem,
} from "@chakra-ui/react";

const themeConfig: any = defineConfig({
  ...defaultConfig,
  cssVarsPrefix: "ck",
} as any);
const theme = createSystem(themeConfig);

export const Provider = (props: { children: React.ReactNode }) => {
  return <ChakraProvider value={theme}>{props.children}</ChakraProvider>;
};
