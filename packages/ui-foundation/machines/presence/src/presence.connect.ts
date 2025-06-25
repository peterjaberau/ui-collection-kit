import type { Service } from "@ui-collection-kit/core"
import type { NormalizeProps, PropTypes } from "@ui-collection-kit/types"
import type { PresenceApi, PresenceSchema } from "./presence.types"

export function connect<T extends PropTypes>(
  service: Service<PresenceSchema>,
  _normalize: NormalizeProps<T>,
): PresenceApi {
  const { state, send, context } = service
  const present = state.matches("mounted", "unmountSuspended")
  return {
    skip: !context.get("initial"),
    present,
    setNode(node) {
      if (!node) return
      send({ type: "NODE.SET", node })
    },
    unmount() {
      send({ type: "UNMOUNT" })
    },
  }
}
