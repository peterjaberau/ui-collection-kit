import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Layout / Bleed",
  decorators: [
    (Story: any) => (
      <Box p="4">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { BleedBasic as Basic } from "../compositions/examples/bleed-basic"
export { BleedVertical as Vertical } from "../compositions/examples/bleed-vertical"
export { BleedWithDirection as Direction } from "../compositions/examples/bleed-with-direction"
