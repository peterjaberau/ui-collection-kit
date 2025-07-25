import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Empty State",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { EmptyStateBasic as Basic } from "../compositions/examples/empty-state-basic"
export { EmptyStateWithAction as Action } from "../compositions/examples/empty-state-with-action"
export { EmptyStateWithList as List } from "../compositions/examples/empty-state-with-list"
export { EmptyStateSizes as Sizes } from "../compositions/examples/empty-state-sizes"
