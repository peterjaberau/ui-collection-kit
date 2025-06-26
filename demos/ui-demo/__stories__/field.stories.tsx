import type { Meta } from "@storybook/react"
import { Box } from "@chakra-ui/react"

export default {
  title: "Styled / Components / Field",

}

export { FieldBasic as Basic } from "../__compositions__/examples/components/field/field-basic"
export { FieldHorizontal as Horizontal } from "../__compositions__/examples/components/field/field-horizontal"
export { FieldWithDisabled as Disabled } from "../__compositions__/examples/components/field/field-with-disabled"
export { FieldWithErrorText as ErrorText } from "../__compositions__/examples/components/field/field-with-error-text"
export { FieldWithHelperText as HelperText } from "../__compositions__/examples/components/field/field-with-helper-text"
export { FieldWithNativeSelect as NativeSelect } from "../__compositions__/examples/components/field/field-with-native-select"
export { FieldWithOptional as Optional } from "../__compositions__/examples/components/field/field-with-optional"
export { FieldWithRequired as Required } from "../__compositions__/examples/components/field/field-with-required"
