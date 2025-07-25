import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Steps",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { StepsBasic as Basic } from "../compositions/examples/steps-basic"
export { StepsControlled as Controlled } from "../compositions/examples/steps-controlled"
export { StepsSizeTable as Sizes } from "../compositions/examples/steps-size-table"
export { StepsVariantTable as Variants } from "../compositions/examples/steps-variant-table"
export { StepsVertical as Vertical } from "../compositions/examples/steps-vertical"
export { StepsWithDescription as Description } from "../compositions/examples/steps-with-description"
export { StepsWithIcon as Icon } from "../compositions/examples/steps-with-icon"
export { StepsWithLines as Lines } from "../compositions/examples/steps-with-lines"
export { StepsWithStore as Store } from "../compositions/examples/steps-with-store"
export { StepsWithTrigger as Trigger } from "../compositions/examples/steps-with-trigger"
export { StepsWithNumberOnly as NumberOnly } from "../compositions/examples/steps-with-number-only"
