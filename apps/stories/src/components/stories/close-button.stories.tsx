import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Close Button",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { CloseButtonBasic as Basic } from "../compositions/examples/close-button-basic"
export { CloseButtonWithSizes as Sizes } from "../compositions/examples/close-button-with-sizes"
export { CloseButtonWithVariants as Variants } from "../compositions/examples/close-button-with-variants"
export { CloseButtonWithCustomIcon as CustomIcon } from "../compositions/examples/close-button-with-custom-icon"
