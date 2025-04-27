import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
import type { AvatarProps } from "./avatar.types"

export const props = createProps<AvatarProps>()(["dir", "id", "ids", "onStatusChange", "getRootNode"])
export const splitProps = createSplitProps<Partial<AvatarProps>>(props)
