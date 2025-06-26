import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Checkbox Card",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { CheckboxCardBasic as Basic } from "../__compositions__/examples/components/checkbox/checkbox-card-basic"
export { CheckboxCardWithDescription as Description } from "../__compositions__/examples/components/checkbox/checkbox-card-with-description"
export { CheckboxCardDisabled as Disabled } from "../__compositions__/examples/components/checkbox/checkbox-card-disabled"
export { CheckboxCardWithStates as States } from "../__compositions__/examples/components/checkbox/checkbox-card-with-states"
export { CheckboxCardWithAddon as Addon } from "../__compositions__/examples/components/checkbox/checkbox-card-with-addon"
export { CheckboxCardWithIcon as Icon } from "../__compositions__/examples/components/checkbox/checkbox-card-with-icon"
export { CheckboxCardVariantTable as Variants } from "../__compositions__/examples/components/checkbox/checkbox-card-variant-table"
export { CheckboxCardSizeTable as Sizes } from "../__compositions__/examples/components/checkbox/checkbox-card-size-table"
export { CheckboxCardWithGroup as Group } from "../__compositions__/examples/components/checkbox/checkbox-card-with-group"
export { CheckboxCardNoIndicator as NoIndicator } from "../__compositions__/examples/components/checkbox/checkbox-card-no-indicator"
