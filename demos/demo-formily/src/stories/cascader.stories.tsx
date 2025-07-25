import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Formily / Components / Cascader",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { CascaderMarkup } from "../examples/cascader/Markup"
export { CascaderPureJsx } from "../examples/cascader/PureJsx"
export { CascaderSchema } from "../examples/cascader/Schema"
