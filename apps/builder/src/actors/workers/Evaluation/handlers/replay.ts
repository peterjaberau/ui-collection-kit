import ReplayEditor from "#actor-workers//core/Replay/ReplayEditor"
import { CANVAS, replayMap } from "./evalTree"

export function undo(request: any) {
  const { data } = request
  const { entityId } = data

  if (!replayMap) return

  if (!replayMap[entityId || CANVAS]) return

  const replayResult = replayMap[entityId || CANVAS].replay("UNDO")

  replayMap[entityId || CANVAS].clearLogs()

  return replayResult
}

export function redo(request: any) {
  const { data } = request
  const { entityId } = data

  if (!replayMap) return

  if (!replayMap[entityId ?? CANVAS]) return

  const replayResult = replayMap[entityId ?? CANVAS].replay("REDO")

  replayMap[entityId ?? CANVAS].clearLogs()

  return replayResult
}

export function updateReplayObject(request: any) {
  const { data } = request
  const { entity, entityId, entityType } = data

  if (!replayMap) return false

  const replayObject = replayMap[entityId]

  if (replayObject) {
    replayObject.update(entity)
  } else {
    replayMap[entityId] = new ReplayEditor(entity, entityType)
  }

  return true
}
