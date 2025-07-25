import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Layout / Box",
  decorators: [
    (Story: any) => (
      <Box p="4">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { BoxBasic as Basic } from "../compositions/examples/box-basic"
export { BoxWithPseudoProps as PseudoProps } from "../compositions/examples/box-with-pseudo-props"
export { BoxWithHideBelow as HideBelow } from "../compositions/examples/box-with-hide-below"
export { BoxWithHideFrom as HideFrom } from "../compositions/examples/box-with-hide-from"
export { BoxWithShadow as Shadow } from "../compositions/examples/box-with-shadow"
export { BoxWithBorder as Border } from "../compositions/examples/box-with-border"
export { BoxWithAsProp as AsProp } from "../compositions/examples/box-with-as-prop"
export { BoxPropertyCard as Composition } from "../compositions/examples/box-property-card"
