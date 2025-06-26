import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / List",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { ListBasic as Basic } from "../__compositions__/examples/components/list/list-basic"
export { ListNested as Nested } from "../__compositions__/examples/components/list/list-nested"
export { ListOrdered as Ordered } from "../__compositions__/examples/components/list/list-ordered"
export { ListWithIcon as Icon } from "../__compositions__/examples/components/list/list-with-icon"
export { ListWithMarkerStyle as MarkerStyle } from "../__compositions__/examples/components/list/list-with-marker-style"
