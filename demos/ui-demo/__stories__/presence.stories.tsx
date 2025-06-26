import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Presence",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { PresenceFade as Fade } from "../__compositions__/examples/components/presence/presence-fade"
export { PresenceLazyMount as LazyMount } from "../__compositions__/examples/components/presence/presence-lazy-mount"
export { PresenceScaleFade as ScaleFade } from "../__compositions__/examples/components/presence/presence-scale-fade"
export { PresenceSlide as Slide } from "../__compositions__/examples/components/presence/presence-slide"
export { PresenceSlideFade as SlideFade } from "../__compositions__/examples/components/presence/presence-slide-fade"
export { PresenceUnmountOnExit as UnmountOnExit } from "../__compositions__/examples/components/presence/presence-unmount-on-exit"
