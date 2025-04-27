import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
import type { ToggleProps } from "./toggle.types"

export const props = createProps<ToggleProps>()(["defaultPressed", "pressed", "onPressedChange", "disabled"])
export const splitProps = createSplitProps<Partial<ToggleProps>>(props)
