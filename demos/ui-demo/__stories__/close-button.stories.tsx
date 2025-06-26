import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Close Button",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { CloseButtonBasic as Basic } from "../__compositions__/examples/components/close-button/close-button-basic"
export { CloseButtonWithSizes as Sizes } from "../__compositions__/examples/components/close-button/close-button-with-sizes"
export { CloseButtonWithVariants as Variants } from "../__compositions__/examples/components/close-button/close-button-with-variants"
export { CloseButtonWithCustomIcon as CustomIcon } from "../__compositions__/examples/components/close-button/close-button-with-custom-icon"
