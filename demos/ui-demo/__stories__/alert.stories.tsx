import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Alert",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { AlertBasic as Basic } from "../__compositions__/examples/components/alert/alert-basic"
export { AlertSizeTable as Sizes } from "../__compositions__/examples/components/alert/alert-size-table"
export { AlertVariantTable as Variants } from "../__compositions__/examples/components/alert/alert-variant-table"
export { AlertWithButtons as Buttons } from "../__compositions__/examples/components/alert/alert-with-buttons"
export { AlertWithCloseButton as CloseButton } from "../__compositions__/examples/components/alert/alert-with-close-button"
export { AlertWithColorPaletteOverride as ColorPaletteOverride } from "../__compositions__/examples/components/alert/alert-with-color-palette-override"
export { AlertWithCustomIcon as CustomIcon } from "../__compositions__/examples/components/alert/alert-with-custom-icon"
export { AlertWithCustomization as Customization } from "../__compositions__/examples/components/alert/alert-with-customization"
export { AlertWithDescription as Description } from "../__compositions__/examples/components/alert/alert-with-description"
export { AlertWithSpinner as Spinner } from "../__compositions__/examples/components/alert/alert-with-spinner"
export { AlertWithStatus as Status } from "../__compositions__/examples/components/alert/alert-with-status"
