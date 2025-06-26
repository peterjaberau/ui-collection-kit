import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Icon Button",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { IconButtonBasic as Basic } from "../__compositions__/examples/components/icon-button/icon-button-basic"
export { IconButtonRounded as Rounded } from "../__compositions__/examples/components/icon-button/icon-button-rounded"
export { IconButtonWithColors as Colors } from "../__compositions__/examples/components/icon-button/icon-button-with-colors"
export { IconButtonWithSizes as Sizes } from "../__compositions__/examples/components/icon-button/icon-button-with-sizes"
export { IconButtonWithVariants as Variants } from "../__compositions__/examples/components/icon-button/icon-button-with-variants"
