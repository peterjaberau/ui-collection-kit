import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Status",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { StatusBasic as Basic } from "../compositions/examples/status-basic"
export { StatusWithLabel as Label } from "../compositions/examples/status-with-label"
export { StatusSizeTable as Sizes } from "../compositions/examples/status-size-table"
