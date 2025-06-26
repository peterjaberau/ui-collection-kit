import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Float",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { FloatBasic as Basic } from "../__compositions__/examples/components/float/float-basic"
export { FloatWithOffsetX as OffsetX } from "../__compositions__/examples/components/float/float-with-offset-x"
export { FloatWithOffsetY as OffsetY } from "../__compositions__/examples/components/float/float-with-offset-y"
export { FloatWithOffset as Offset } from "../__compositions__/examples/components/float/float-with-offset"
export { FloatWithPlacements as Placements } from "../__compositions__/examples/components/float/float-with-placements"
export { FloatWithAvatar as Avatar } from "../__compositions__/examples/components/float/float-with-avatar"
