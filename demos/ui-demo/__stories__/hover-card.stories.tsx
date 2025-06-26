import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Styled / Components / HoverCard",

} 

export { HoverCardBasic as Basic } from "../__compositions__/examples/components/hover-card/hover-card-basic"
export { HoverCardControlled as Controlled } from "../__compositions__/examples/components/hover-card/hover-card-controlled"
export { HoverCardInDialog as WithinDialog } from "../__compositions__/examples/components/hover-card/hover-card-in-dialog"
export { HoverCardWithDelay as Delay } from "../__compositions__/examples/components/hover-card/hover-card-with-delay"
export { HoverCardWithPlacement as Placement } from "../__compositions__/examples/components/hover-card/hover-card-with-placement"
