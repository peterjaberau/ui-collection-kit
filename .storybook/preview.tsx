import type { Preview } from '@storybook/react-vite'
import "./styles/tailwind.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Templates", "React Lite", "Unstyled"],
      },
    },
    layout: "padded",
    controls: { disable: true },
    backgrounds: { disable: true },
    viewport: { disable: true },
  },
}

export default preview
