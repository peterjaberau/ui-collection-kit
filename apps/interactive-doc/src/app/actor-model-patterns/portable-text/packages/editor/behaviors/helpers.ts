import { defaultKeyGenerator } from "#actor-portable-text/packages/editor/utils"
export const isCustomBehaviorEvent: any = (event: any) => event.type.startsWith("custom.")
export const nativeBehaviorEventTypes = [
  "clipboard.copy",
  "clipboard.cut",
  "clipboard.paste",
  "drag.dragstart",
  "drag.drag",
  "drag.dragend",
  "drag.dragenter",
  "drag.dragover",
  "drag.dragleave",
  "drag.drop",
  "input.*",
  "keyboard.keydown",
  "keyboard.keyup",
  "mouse.click",
] as const
export const isNativeBehaviorEvent: any = (event: any) =>
  (nativeBehaviorEventTypes as readonly string[]).includes(event.type)

const IS_PERFORMING_OPERATION: WeakMap<any, boolean | undefined> = new WeakMap()
const CURRENT_UNDO_STEP: WeakMap<any, { undoStepId: string } | undefined> = new WeakMap()

export function withPerformingBehaviorOperation(editor: any, fn: () => void) {
  const prev = IS_PERFORMING_OPERATION.get(editor)

  IS_PERFORMING_OPERATION.set(editor, true)

  fn()

  IS_PERFORMING_OPERATION.set(editor, prev)
}
export function createUndoStep(editor: any) {
  CURRENT_UNDO_STEP.set(editor, {
    undoStepId: defaultKeyGenerator(),
  })
}
export function clearUndoStep(editor: any) {
  CURRENT_UNDO_STEP.set(editor, undefined)
}


