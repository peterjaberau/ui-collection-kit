import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Separator",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { SeparatorBasic as Basic } from "../__compositions__/examples/components/separator/separator-basic"
export { SeparatorVertical as Vertical } from "../__compositions__/examples/components/separator/separator-vertical"
export { SeparatorWithLabel as Label } from "../__compositions__/examples/components/separator/separator-with-label"
export { SeparatorWithResponsiveOrientation as ResponsiveOrientation } from "../__compositions__/examples/components/separator/separator-with-responsive-orientation"
export { SeparatorWithSizes as Sizes } from "../__compositions__/examples/components/separator/separator-with-sizes"
export { SeparatorWithVariants as Variants } from "../__compositions__/examples/components/separator/separator-with-variants"
