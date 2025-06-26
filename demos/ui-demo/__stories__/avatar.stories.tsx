import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Avatar",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { AvatarBasic as Basic } from "../__compositions__/examples/components/avatar/avatar-basic"
export { AvatarGroupWithStacking as GroupStacking } from "../__compositions__/examples/components/avatar/avatar-group-with-stacking"
export { AvatarPersona as Persona } from "../__compositions__/examples/components/avatar/avatar-persona"
export { AvatarSizeTable as Sizes } from "../__compositions__/examples/components/avatar/avatar-size-table"
export { AvatarVariantTable as Variants } from "../__compositions__/examples/components/avatar/avatar-variant-table"
export { AvatarWithBadge as Badge } from "../__compositions__/examples/components/avatar/avatar-with-badge"
export { AvatarWithColors as Colors } from "../__compositions__/examples/components/avatar/avatar-with-colors"
export { AvatarWithFallback as Fallback } from "../__compositions__/examples/components/avatar/avatar-with-fallback"
export { AvatarWithGroup as Group } from "../__compositions__/examples/components/avatar/avatar-with-group"
export { AvatarWithOverflow as Overflow } from "../__compositions__/examples/components/avatar/avatar-with-overflow"
export { AvatarWithRandomColor as RandomColor } from "../__compositions__/examples/components/avatar/avatar-with-random-color"
export { AvatarWithShape as Shape } from "../__compositions__/examples/components/avatar/avatar-with-shape"
export { AvatarWithStore as Store } from "../__compositions__/examples/components/avatar/avatar-with-store"
