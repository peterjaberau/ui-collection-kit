import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Drawer",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { DrawerBasic as Basic } from "../__compositions__/examples/components/drawer/drawer-basic"
export { DrawerWithContext as Context } from "../__compositions__/examples/components/drawer/drawer-with-context"
export { DrawerWithCustomContainer as CustomContainer } from "../__compositions__/examples/components/drawer/drawer-with-custom-container"
export { DrawerWithHeaderActions as HeaderActions } from "../__compositions__/examples/components/drawer/drawer-with-header-actions"
export { DrawerWithInitialFocus as InitialFocus } from "../__compositions__/examples/components/drawer/drawer-with-initial-focus"
export { DrawerWithOffset as Offset } from "../__compositions__/examples/components/drawer/drawer-with-offset"
export { DrawerWithPlacement as Placement } from "../__compositions__/examples/components/drawer/drawer-with-placement"
export { DrawerWithSizes as Sizes } from "../__compositions__/examples/components/drawer/drawer-with-sizes"
