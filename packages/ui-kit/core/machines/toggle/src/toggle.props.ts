import { createProps } from "@ui-kit/core-types"
import { createSplitProps } from "@ui-kit/core-utils"
import type { ToggleProps } from "./toggle.types"

export const props = createProps<ToggleProps>()(["defaultPressed", "pressed", "onPressedChange", "disabled"])
export const splitProps = createSplitProps<Partial<ToggleProps>>(props)
