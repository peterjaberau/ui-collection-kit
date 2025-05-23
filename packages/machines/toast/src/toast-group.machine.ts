import { createMachine } from "@ui-collection-kit/core"
import { trackDismissableBranch } from "@ui-collection-kit/dismissable"
import { addDomEvent } from "@ui-collection-kit/dom-query"
import { uuid } from "@ui-collection-kit/utils"
import * as dom from "./toast.dom"
import type { ToastGroupSchema } from "./toast.types"

export const groupMachine = createMachine<ToastGroupSchema>({
  props({ props }) {
    return {
      dir: "ltr",
      id: uuid(),
      ...props,
      store: props.store!,
    }
  },

  initialState({ prop }) {
    return prop("store").attrs.overlap ? "overlap" : "stack"
  },

  refs() {
    return {
      lastFocusedEl: null,
      isFocusWithin: false,
      dismissableCleanup: undefined,
    }
  },

  context({ bindable }) {
    return {
      toasts: bindable<any[]>(() => ({
        defaultValue: [],
        sync: true,
        hash: (toasts) => toasts.map((t) => t.id).join(","),
      })),
      heights: bindable<any[]>(() => ({
        defaultValue: [],
        sync: true,
      })),
    }
  },

  computed: {
    count: ({ context }) => context.get("toasts").length,
    overlap: ({ prop }) => prop("store").attrs.overlap,
    placement: ({ prop }) => prop("store").attrs.placement,
  },

  effects: ["subscribeToStore", "trackDocumentVisibility", "trackHotKeyPress"],

  watch({ track, context, action }) {
    track([() => context.hash("toasts")], () => {
      queueMicrotask(() => {
        action(["collapsedIfEmpty", "setDismissableBranch"])
      })
    })
  },

  exit: ["clearDismissableBranch", "clearLastFocusedEl"],

  on: {
    "DOC.HOTKEY": {
      actions: ["focusRegionEl"],
    },
    "REGION.BLUR": [
      {
        guard: "isOverlapping",
        target: "overlap",
        actions: ["collapseToasts", "resumeToasts", "restoreLastFocusedEl"],
      },
      {
        target: "stack",
        actions: ["resumeToasts", "restoreLastFocusedEl"],
      },
    ],
    "TOAST.REMOVE": {
      actions: ["removeToast", "removeHeight"],
    },
    "TOAST.PAUSE": {
      actions: ["pauseToasts"],
    },
  },

  states: {
    stack: {
      on: {
        "REGION.POINTER_LEAVE": [
          {
            guard: "isOverlapping",
            target: "overlap",
            actions: ["resumeToasts", "collapseToasts"],
          },
          {
            actions: ["resumeToasts"],
          },
        ],
        "REGION.OVERLAP": {
          target: "overlap",
          actions: ["collapseToasts"],
        },
        "REGION.FOCUS": {
          actions: ["setLastFocusedEl", "pauseToasts"],
        },
        "REGION.POINTER_ENTER": {
          actions: ["pauseToasts"],
        },
      },
    },

    overlap: {
      on: {
        "REGION.STACK": {
          target: "stack",
          actions: ["expandToasts"],
        },
        "REGION.POINTER_ENTER": {
          target: "stack",
          actions: ["pauseToasts", "expandToasts"],
        },
        "REGION.FOCUS": {
          target: "stack",
          actions: ["setLastFocusedEl", "pauseToasts", "expandToasts"],
        },
      },
    },
  },

  implementations: {
    guards: {
      isOverlapping: ({ computed }) => computed("overlap"),
    },

    effects: {
      subscribeToStore({ context, prop }) {
        return prop("store").subscribe((toast) => {
          if (toast.dismiss) {
            context.set("toasts", (prev) => prev.filter((t) => t.id !== toast.id))
            return
          }

          context.set("toasts", (prev) => {
            const index = prev.findIndex((t) => t.id === toast.id)
            if (index !== -1) {
              return [...prev.slice(0, index), { ...prev[index], ...toast }, ...prev.slice(index + 1)]
            }
            return [toast as any, ...prev]
          })
        })
      },
      trackHotKeyPress({ prop, send }) {
        const handleKeyDown = (event: KeyboardEvent) => {
          const { hotkey } = prop("store").attrs
          const isHotkeyPressed = hotkey.every((key) => (event as any)[key] || event.code === key)
          if (!isHotkeyPressed) return
          send({ type: "DOC.HOTKEY" })
        }
        return addDomEvent(document, "keydown", handleKeyDown, { capture: true })
      },
      trackDocumentVisibility({ prop, send, scope }) {
        const { pauseOnPageIdle } = prop("store").attrs
        if (!pauseOnPageIdle) return
        const doc = scope.getDoc()
        return addDomEvent(doc, "visibilitychange", () => {
          const isHidden = doc.visibilityState === "hidden"
          send({ type: isHidden ? "PAUSE_ALL" : "RESUME_ALL" })
        })
      },
    },

    actions: {
      setDismissableBranch({ refs, context, computed, scope }) {
        const toasts = context.get("toasts")
        const placement = computed("placement")
        const hasToasts = toasts.length > 0

        if (!hasToasts) {
          refs.get("dismissableCleanup")?.()
          return
        }

        if (hasToasts && refs.get("dismissableCleanup")) {
          return
        }

        //  mark toast as a dismissable branch
        //  so that interacting with them will not close dismissable layers
        const groupEl = () => dom.getRegionEl(scope, placement)
        const cleanup = trackDismissableBranch(groupEl, { defer: true })
        refs.set("dismissableCleanup", cleanup)
      },
      clearDismissableBranch({ refs }) {
        refs.get("dismissableCleanup")?.()
      },
      focusRegionEl({ scope, computed }) {
        queueMicrotask(() => {
          dom.getRegionEl(scope, computed("placement"))?.focus()
        })
      },
      pauseToasts({ prop }) {
        prop("store").pause()
      },
      resumeToasts({ prop }) {
        prop("store").resume()
      },
      expandToasts({ prop }) {
        prop("store").expand()
      },
      collapseToasts({ prop }) {
        prop("store").collapse()
      },
      removeToast({ prop, event }) {
        prop("store").remove(event.id)
      },
      removeHeight({ event, context }) {
        if (event?.id == null) return
        queueMicrotask(() => {
          context.set("heights", (heights) => heights.filter((height) => height.id !== event.id))
        })
      },
      collapsedIfEmpty({ send, computed }) {
        if (!computed("overlap") || computed("count") > 1) return
        send({ type: "REGION.OVERLAP" })
      },
      setLastFocusedEl({ refs, event }) {
        if (refs.get("isFocusWithin") || !event.target) return
        refs.set("isFocusWithin", true)
        refs.set("lastFocusedEl", event.target)
      },
      restoreLastFocusedEl({ refs }) {
        if (!refs.get("lastFocusedEl")) return
        refs.get("lastFocusedEl")?.focus({ preventScroll: true })
        refs.set("lastFocusedEl", null)
        refs.set("isFocusWithin", false)
      },
      clearLastFocusedEl({ refs }) {
        if (!refs.get("lastFocusedEl")) return
        refs.get("lastFocusedEl")?.focus({ preventScroll: true })
        refs.set("lastFocusedEl", null)
        refs.set("isFocusWithin", false)
      },
    },
  },
})
