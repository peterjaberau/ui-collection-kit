import type { Meta } from "@storybook/react-vite"
import { Box } from "@chakra-ui/react"

export default {
  title: "Chakra / Components / Fieldset",
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} as Meta

export { FieldsetBasic as Basic } from "../compositions/examples/fieldset-basic"
export { FieldsetWithDisabled as Disabled } from "../compositions/examples/fieldset-with-disabled"
export { FieldsetWithInvalid as Invalid } from "../compositions/examples/fieldset-with-invalid"
