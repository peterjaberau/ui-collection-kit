import { performOperation } from "./behavior.operations"
import { createEditorDom } from "../editor/fn"

import { isNativeBehaviorEvent, createUndoStep, clearUndoStep, withPerformingBehaviorOperation } from "./helpers"

export function performEvent({
  mode,
  behaviors,
  remainingEventBehaviors,
  event,
  editor,
  keyGenerator,
  schema,
  getSnapshot,
  nativeEvent,
  sendBack,
}: {
  mode: "send" | "raise" | "execute" | "forward"
  behaviors: any[]
  remainingEventBehaviors: any[]
  event: any
  editor: any
  keyGenerator: () => string
  schema: any
  getSnapshot: () => any
  nativeEvent?: any
  sendBack: (event: { type: "set drag ghost"; ghost: HTMLElement } | any) => void
}) {
  if (mode === "send" && !isNativeBehaviorEvent(event)) {
    createUndoStep(editor)
  }

  const eventBehaviors = [
    ...remainingEventBehaviors,
    // ...abstractBehaviors,
  ].filter((behavior) => {
    // Catches all events
    if (behavior.on === "*") {
      return true
    }

    const [listenedNamespace] =
      behavior.on.includes("*") && behavior.on.includes(".") ? behavior.on.split(".") : [undefined]
    const [eventNamespace] = event.type.includes(".") ? event.type.split(".") : [undefined]

    // Handles scenarios like a Behavior listening for `select.*` and the event
    // `select.block` is fired.
    if (listenedNamespace !== undefined && eventNamespace !== undefined && listenedNamespace === eventNamespace) {
      return true
    }

    // Handles scenarios like a Behavior listening for `select.*` and the event
    // `select` is fired.
    if (listenedNamespace !== undefined && eventNamespace === undefined && listenedNamespace === event.type) {
      return true
    }

    return behavior.on === event.type
  })

  if (eventBehaviors.length === 0 /*&& isSyntheticBehaviorEvent(event)*/) {
    nativeEvent?.preventDefault()

    if (mode === "send") {
      clearUndoStep(editor)
    }

    withPerformingBehaviorOperation(editor, () => {
      // console.log(`(execute:${eventCategory(event)})`, JSON.stringify(event, null, 2))

      performOperation({
        context: {
          keyGenerator,
          schema,
        },
        operation: {
          ...event,
          editor,
        },
      })
    })

    editor.onChange()

    return
  }

  const guardSnapshot = getSnapshot()

  let nativeEventPrevented = false
  let defaultBehaviorOverwritten = false
  let eventBehaviorIndex = -1

  for (const eventBehavior of eventBehaviors) {
    eventBehaviorIndex++

    let shouldRun = false

    try {
      shouldRun =
        eventBehavior.guard === undefined ||
        eventBehavior.guard({
          snapshot: guardSnapshot,
          event,
          dom: createEditorDom(sendBack, editor),
        })
    } catch (error) {
      // console.error(new Error(`Evaluating guard for "${event.type}" failed due to: ${error.message}`))
    }

    if (!shouldRun) {
      continue
    }

    // This Behavior now "owns" the event and we can consider the default
    // action prevented
    defaultBehaviorOverwritten = true

    if (eventBehavior.actions.length === 0) {
      nativeEventPrevented = true
    }

    let actionSetIndex = -1

    for (const actionSet of eventBehavior.actions) {
      actionSetIndex++

      const actionsSnapshot = getSnapshot()

      let actions: any[] = []

      try {
        actions = actionSet(
          {
            snapshot: actionsSnapshot,
            event,
            dom: createEditorDom(sendBack, editor),
          },
          shouldRun,
        )
      } catch (error) {
        // console.error(new Error(`Evaluating actions for "${event.type}" failed due to: ${error.message}`))
      }

      if (actions.length === 0) {
        continue
      }

      nativeEventPrevented =
        actions.some((action) => action.type === "raise" || action.type === "execute") ||
        !actions.some((action) => action.type === "forward")

      let undoStepCreated = false

      if (actionSetIndex > 0) {
        // Since there are multiple action sets
        createUndoStep(editor)

        undoStepCreated = true
      }

      if (!undoStepCreated && actions.some((action) => action.type === "execute")) {
        // Since at least one action is about to `execute` changes in the editor,
        // we set up a new undo step.
        // All actions performed recursively from now will be squashed into this
        // undo step
        createUndoStep(editor)

        undoStepCreated = true
      }

      const actionTypes = actions.map((action) => action.type)
      const uniqueActionTypes = new Set(actionTypes)

      // The set of actions are all `raise` actions
      const raiseGroup = actionTypes.length > 1 && uniqueActionTypes.size === 1 && uniqueActionTypes.has("raise")

      // The set of actions are all `execute` actions
      const executeGroup = actionTypes.length > 1 && uniqueActionTypes.size === 1 && uniqueActionTypes.has("execute")

      for (const action of actions) {
        if (action.type === "effect") {
          try {
            action.effect({
              send: sendBack,
            })
          } catch (error) {
            // console.error(
            //   new Error(`Executing effect as a result of "${event.type}" failed due to: ${error.message}`),
            // )
          }

          continue
        }

        if (action.type === "forward") {
          const remainingEventBehaviors = eventBehaviors.slice(eventBehaviorIndex + 1)

          performEvent({
            mode: mode === "execute" ? "execute" : "forward",
            behaviors,
            remainingEventBehaviors: remainingEventBehaviors,
            event: action.event,
            editor,
            keyGenerator,
            schema,
            getSnapshot,
            nativeEvent,
            sendBack,
          })

          continue
        }

        if (action.type === "raise") {
          performEvent({
            mode: mode === "execute" ? "execute" : "raise",
            behaviors,
            remainingEventBehaviors: mode === "execute" ? remainingEventBehaviors : behaviors,
            event: action.event,
            editor,
            keyGenerator,
            schema,
            getSnapshot,
            nativeEvent,
            sendBack,
          })

          continue
        }

        performEvent({
          mode: "execute",
          behaviors,
          remainingEventBehaviors: [],
          event: action.event,
          editor,
          keyGenerator,
          schema,
          getSnapshot,
          nativeEvent: undefined,
          sendBack,
        })
      }

      if (undoStepCreated) {
        clearUndoStep(editor)
      }
    }

    break
  }

  if (!defaultBehaviorOverwritten /*&& isSyntheticBehaviorEvent(event)*/) {
    nativeEvent?.preventDefault()

    if (mode === "send") {
      clearUndoStep(editor)
    }

    withPerformingBehaviorOperation(editor, () => {
      // console.log(`(execute:${eventCategory(event)})`, JSON.stringify(event, null, 2))

      performOperation({
        context: { keyGenerator, schema },
        operation: {
          ...event,
          editor,
        },
      })
    })

    editor.onChange()
  } else if (nativeEventPrevented) {
    nativeEvent?.preventDefault()
  }
}
