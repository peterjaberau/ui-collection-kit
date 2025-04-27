import { createProps } from "@ui-collection-kit/types"
import type { PresenceProps } from "./presence.types"

export const props = createProps<PresenceProps>()(["onExitComplete", "present", "immediate"])
