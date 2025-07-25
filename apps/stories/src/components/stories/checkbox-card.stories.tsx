import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Checkbox Card",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { CheckboxCardBasic as Basic } from "../compositions/examples/checkbox-card-basic"
export { CheckboxCardWithDescription as Description } from "../compositions/examples/checkbox-card-with-description"
export { CheckboxCardDisabled as Disabled } from "../compositions/examples/checkbox-card-disabled"
export { CheckboxCardWithStates as States } from "../compositions/examples/checkbox-card-with-states"
export { CheckboxCardWithAddon as Addon } from "../compositions/examples/checkbox-card-with-addon"
export { CheckboxCardWithIcon as Icon } from "../compositions/examples/checkbox-card-with-icon"
export { CheckboxCardVariantTable as Variants } from "../compositions/examples/checkbox-card-variant-table"
export { CheckboxCardSizeTable as Sizes } from "../compositions/examples/checkbox-card-size-table"
export { CheckboxCardWithGroup as Group } from "../compositions/examples/checkbox-card-with-group"
export { CheckboxCardNoIndicator as NoIndicator } from "../compositions/examples/checkbox-card-no-indicator"
