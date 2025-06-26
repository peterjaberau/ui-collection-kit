import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Menu",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { MenuBasic as Basic } from "../__compositions__/examples/components/menu/menu-basic"
export { MenuWithAnchorRect as AnchorRect } from "../__compositions__/examples/components/menu/menu-with-anchor-rect"
export { MenuWithAvatar as WithAvatar } from "../__compositions__/examples/components/menu/menu-with-avatar"
export { MenuWithCheckboxItems as CheckboxItems } from "../__compositions__/examples/components/menu/menu-with-checkbox-items"
export { MenuWithCommand as Command } from "../__compositions__/examples/components/menu/menu-with-command"
export { MenuWithContextTrigger as ContextTrigger } from "../__compositions__/examples/components/menu/menu-with-context-trigger"
export { MenuWithDangerItem as DangerItem } from "../__compositions__/examples/components/menu/menu-with-danger-item"
export { MenuWithGroup as Group } from "../__compositions__/examples/components/menu/menu-with-group"
export { MenuWithGroupDynamic as GroupDynamic } from "../__compositions__/examples/components/menu/menu-with-group-dynamic"
export { MenuWithHideWhenDetached as HideWhenDetached } from "../__compositions__/examples/components/menu/menu-with-hide-when-detached"
export { MenuWithIconAndCommand as IconAndCommand } from "../__compositions__/examples/components/menu/menu-with-icon-and-command"
export { MenuWithLinks as Links } from "../__compositions__/examples/components/menu/menu-with-links"
export { MenuWithMixedLayout as MixedLayout } from "../__compositions__/examples/components/menu/menu-with-mixed-layout"
export { MenuWithPlacement as Placement } from "../__compositions__/examples/components/menu/menu-with-placement"
export { MenuWithRadioItems as RadioItems } from "../__compositions__/examples/components/menu/menu-with-radio-items"
export { MenuWithSubmenu as Submenu } from "../__compositions__/examples/components/menu/menu-with-submenu"
export { MenuWithSubmenuDynamic as SubmenuDynamic } from "../__compositions__/examples/components/menu/menu-with-submenu-dynamic"
export { MenuWithinDialog as WithDialog } from "../__compositions__/examples/components/menu/menu-within-dialog"
