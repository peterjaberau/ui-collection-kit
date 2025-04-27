import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
import type { EditableProps } from "./editable.types"

export const props = createProps<EditableProps>()([
  "activationMode",
  "autoResize",
  "dir",
  "disabled",
  "finalFocusEl",
  "form",
  "getRootNode",
  "id",
  "ids",
  "invalid",
  "maxLength",
  "name",
  "onEditChange",
  "onFocusOutside",
  "onInteractOutside",
  "onPointerDownOutside",
  "onValueChange",
  "onValueCommit",
  "onValueRevert",
  "placeholder",
  "readOnly",
  "required",
  "selectOnFocus",
  "edit",
  "defaultEdit",
  "submitMode",
  "translations",
  "defaultValue",
  "value",
])

export const splitProps = createSplitProps<Partial<EditableProps>>(props)
