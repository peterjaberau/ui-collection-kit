import type { Meta } from "@storybook/react-vite"
import { Stack } from "@chakra-ui/react"

export default {
  title: "Chakra Pro / Sidebar",
  decorators: [
    (Story: any) => (
      <Stack p="2"  h={'48rem'} shadow={'md'} border={'3px solid'} borderColor={'black'}>
        <Story />
      </Stack>
    ),
  ],
} as Meta

export { Index as WithCollapsible } from "../../compositions/examples/pro/sidebar-with-collapsible"
export { Index as WithGroups } from "../../compositions/examples/pro/sidebar-with-groups"
export { Index as WithSideNavbar } from "../../compositions/examples/pro/sidebar-with-side-navbar"

