import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Layout / Wrap",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { WrapBasic as Basic } from "../__compositions__/examples/components/wrap/wrap-basic"
export { WrapResponsive as Responsive } from "../__compositions__/examples/components/wrap/wrap-responsive"
export { WrapWithAlign as Align } from "../__compositions__/examples/components/wrap/wrap-with-align"
export { WrapWithGap as Gap } from "../__compositions__/examples/components/wrap/wrap-with-gap"
export { WrapWithJustify as Justify } from "../__compositions__/examples/components/wrap/wrap-with-justify"
export { WrapWithRowColumnGap as RowColumnGap } from "../__compositions__/examples/components/wrap/wrap-with-row-column-gap"
