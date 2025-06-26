import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Accordion",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { AccordionBasic as Basic } from "../__compositions__/examples/components/accordion/accordion-basic"
export { AccordionControlled as Controlled } from "../__compositions__/examples/components/accordion/accordion-controlled"
export { AccordionSizeTable as Sizes } from "../__compositions__/examples/components/accordion/accordion-size-table"
export { AccordionVariantTable as Variants } from "../__compositions__/examples/components/accordion/accordion-variant-table"
export { AccordionWithActions as Actions } from "../__compositions__/examples/components/accordion/accordion-with-actions"
export { AccordionWithAvatar as Avatar } from "../__compositions__/examples/components/accordion/accordion-with-avatar"
export { AccordionWithDisabledItem as DisabledItem } from "../__compositions__/examples/components/accordion/accordion-with-disabled-item"
export { AccordionWithIcon as Icon } from "../__compositions__/examples/components/accordion/accordion-with-icon"
export { AccordionWithMultiple as Multiple } from "../__compositions__/examples/components/accordion/accordion-with-multiple"
export { AccordionWithSubtext as Subtext } from "../__compositions__/examples/components/accordion/accordion-with-subtext"
