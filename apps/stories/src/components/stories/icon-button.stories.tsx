import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Icon Button",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { IconButtonBasic as Basic } from "../compositions/examples/icon-button-basic"
export { IconButtonRounded as Rounded } from "../compositions/examples/icon-button-rounded"
export { IconButtonWithColors as Colors } from "../compositions/examples/icon-button-with-colors"
export { IconButtonWithSizes as Sizes } from "../compositions/examples/icon-button-with-sizes"
export { IconButtonWithVariants as Variants } from "../compositions/examples/icon-button-with-variants"
