import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / List",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { ListBasic as Basic } from "../compositions/examples/list-basic"
export { ListNested as Nested } from "../compositions/examples/list-nested"
export { ListOrdered as Ordered } from "../compositions/examples/list-ordered"
export { ListWithIcon as Icon } from "../compositions/examples/list-with-icon"
export { ListWithMarkerStyle as MarkerStyle } from "../compositions/examples/list-with-marker-style"
