import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Array Tabs",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { ArrayTabsMarkup } from "../examples/array-tabs/array-tabs.markup"
export { ArrayTabsSchema } from "../examples/array-tabs/array-tabs.schema"
