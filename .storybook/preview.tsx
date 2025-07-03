import type { Preview } from "@storybook/react-vite"
import { MINIMAL_VIEWPORTS } from "storybook/viewport"
import { WithTheme } from "./decorators/withTheme"
import { GlobalProvider } from "./actors/provider"

const preview: Preview = {
  parameters: {
    docs: {
      codePanel: true,
      toc: true,

    },
    actions: { argTypesRegex: "^on.*" },
    jsx: { showFunctions: true },
    backgrounds: { disable: true },
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Layout", "Typography", "Components", "Charts", "Foundations", "Hooks"],
      },
    },
    layout: "padded",
  },
  globalTypes: {
    style: {
      toolbar: {
        title: "Style",
        icon: "paintbrush",
        items: [
          { value: "default", title: "Default" },
          { value: "alignui", title: "Align UI" },
          { value: "saas", title: "SaaS" },
        ],
        dynamicTitle: true,
      },
    },
    lang: {
      toolbar: {
        title: "Language",
        icon: "globe",
        items: [{ value: "en", right: "English", title: "En" }],
        dynamicTitle: true,
      },
    },
    platform: {
      toolbar: {
        title: "Platform",
        items: [
          { value: "desktop", title: "Desktop", icon: "browser" },
          { value: "mobile", title: "Mobile", icon: "mobile" },
        ],
        dynamicTitle: true,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [

    (Story: any, context: any) => {
      return (
        <GlobalProvider>
          <WithTheme story={<Story />} context={context}/>
        </GlobalProvider>
      )
    },
  ],
}

export default preview
