import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Layout / Wrap",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { WrapBasic as Basic } from "../compositions/examples/wrap-basic"
export { WrapResponsive as Responsive } from "../compositions/examples/wrap-responsive"
export { WrapWithAlign as Align } from "../compositions/examples/wrap-with-align"
export { WrapWithGap as Gap } from "../compositions/examples/wrap-with-gap"
export { WrapWithJustify as Justify } from "../compositions/examples/wrap-with-justify"
export { WrapWithRowColumnGap as RowColumnGap } from "../compositions/examples/wrap-with-row-column-gap"
