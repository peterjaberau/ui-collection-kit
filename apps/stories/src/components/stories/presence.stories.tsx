import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Presence",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { PresenceFade as Fade } from "../compositions/examples/presence-fade"
export { PresenceLazyMount as LazyMount } from "../compositions/examples/presence-lazy-mount"
export { PresenceScaleFade as ScaleFade } from "../compositions/examples/presence-scale-fade"
export { PresenceSlide as Slide } from "../compositions/examples/presence-slide"
export { PresenceSlideFade as SlideFade } from "../compositions/examples/presence-slide-fade"
export { PresenceUnmountOnExit as UnmountOnExit } from "../compositions/examples/presence-unmount-on-exit"
