import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / HoverCard",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { HoverCardBasic as Basic } from "../compositions/examples/hover-card-basic"
export { HoverCardControlled as Controlled } from "../compositions/examples/hover-card-controlled"
export { HoverCardInDialog as WithinDialog } from "../compositions/examples/hover-card-in-dialog"
export { HoverCardWithDelay as Delay } from "../compositions/examples/hover-card-with-delay"
export { HoverCardWithPlacement as Placement } from "../compositions/examples/hover-card-with-placement"
