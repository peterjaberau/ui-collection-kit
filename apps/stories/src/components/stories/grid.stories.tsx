import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Layout / Grid",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { GridBasic as Basic } from "../compositions/examples/grid-basic"
export { GridSpanningColumns as SpanningColumns } from "../compositions/examples/grid-spanning-columns"
export { GridWithColSpan as ColSpan } from "../compositions/examples/grid-with-col-span"
export { GridWithTemplateAreas as TemplateAreas } from "../compositions/examples/grid-with-template-areas"
