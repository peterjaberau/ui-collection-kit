import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Components / Fieldset",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta as any

export { FieldsetBasic as Basic } from "../__compositions__/examples/components/fieldset/fieldset-basic"
export { FieldsetWithDisabled as Disabled } from "../__compositions__/examples/components/fieldset/fieldset-with-disabled"
export { FieldsetWithInvalid as Invalid } from "../__compositions__/examples/components/fieldset/fieldset-with-invalid"
