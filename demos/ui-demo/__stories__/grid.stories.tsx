import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Styled / Layout / Grid",

} 

export { GridBasic as Basic } from "../__compositions__/examples/components/grid/grid-basic"
export { GridSpanningColumns as SpanningColumns } from "../__compositions__/examples/components/grid/grid-spanning-columns"
export { GridWithColSpan as ColSpan } from "../__compositions__/examples/components/grid/grid-with-col-span"
export { GridWithTemplateAreas as TemplateAreas } from "../__compositions__/examples/components/grid/grid-with-template-areas"
