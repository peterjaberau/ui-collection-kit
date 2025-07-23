import { createProps } from "@ui-kit/core-types"
import { createSplitProps } from "@ui-kit/core-utils"
import type { AvatarProps } from "./avatar.types"

export const props = createProps<AvatarProps>()(["dir", "id", "ids", "onStatusChange", "getRootNode"])
export const splitProps = createSplitProps<Partial<AvatarProps>>(props)
