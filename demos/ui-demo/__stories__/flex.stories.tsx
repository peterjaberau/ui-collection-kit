import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Layout / Flex",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { FlexBasic as Basic } from "../__compositions__/examples/components/flex/flex-basic"
export { FlexWithAlign as Align } from "../__compositions__/examples/components/flex/flex-with-align"
export { FlexWithAutoMargin as AutoMargin } from "../__compositions__/examples/components/flex/flex-with-auto-margin"
export { FlexWithDirection as Direction } from "../__compositions__/examples/components/flex/flex-with-direction"
export { FlexWithJustify as Justify } from "../__compositions__/examples/components/flex/flex-with-justify"
export { FlexWithOrder as Order } from "../__compositions__/examples/components/flex/flex-with-order"
export { FlexWithWrap as Wrap } from "../__compositions__/examples/components/flex/flex-with-wrap"
