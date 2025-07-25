import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Float",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { FloatBasic as Basic } from "../compositions/examples/float-basic"
export { FloatWithOffsetX as OffsetX } from "../compositions/examples/float-with-offset-x"
export { FloatWithOffsetY as OffsetY } from "../compositions/examples/float-with-offset-y"
export { FloatWithOffset as Offset } from "../compositions/examples/float-with-offset"
export { FloatWithPlacements as Placements } from "../compositions/examples/float-with-placements"
export { FloatWithAvatar as Avatar } from "../compositions/examples/float-with-avatar"
