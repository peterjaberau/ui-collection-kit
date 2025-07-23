import { createProps } from "@ui-kit/core-types"
import type { PresenceProps } from "./presence.types"

export const props = createProps<PresenceProps>()(["onExitComplete", "present", "immediate"])
