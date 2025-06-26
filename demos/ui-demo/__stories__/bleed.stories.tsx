import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Layout / Bleed",
  decorators: [
    (Story) => (
      <Box p="4">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { BleedBasic as Basic } from "../__compositions__/examples/components/bleed/bleed-basic"
export { BleedVertical as Vertical } from "../__compositions__/examples/components/bleed/bleed-vertical"
export { BleedWithDirection as Direction } from "../__compositions__/examples/components/bleed/bleed-with-direction"
