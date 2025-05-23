import { ariaHidden } from "@ui-collection-kit/aria-hidden"
import { createMachine } from "@ui-collection-kit/core"
import { trackDismissableElement } from "@ui-collection-kit/dismissable"
import { getComputedStyle, raf } from "@ui-collection-kit/dom-query"
import { trapFocus } from "@ui-collection-kit/focus-trap"
import { preventBodyScroll } from "@ui-collection-kit/remove-scroll"
import * as dom from "./dialog.dom"
import type { DialogSchema } from "./dialog.types"

export const machine = createMachine<DialogSchema>({
  props({ props, scope }) {
    const alertDialog = props.role === "alertdialog"
    const initialFocusEl: any = alertDialog ? () => dom.getCloseTriggerEl(scope) : undefined
    return {
      role: "dialog",
      modal: true,
      trapFocus: true,
      preventScroll: true,
      closeOnInteractOutside: !alertDialog,
      closeOnEscape: true,
      restoreFocus: true,
      initialFocusEl,
      ...props,
    }
  },

  initialState({ prop }) {
    const open = prop("open") || prop("defaultOpen")
    return open ? "open" : "closed"
  },

  context({ bindable }) {
    return {
      rendered: bindable<{ title: boolean; description: boolean }>(() => ({
        defaultValue: { title: true, description: true },
      })),
    }
  },

  watch({ track, action, prop }) {
    track([() => prop("open")], () => {
      action(["toggleVisibility"])
    })
  },

  states: {
    open: {
      entry: ["checkRenderedElements", "syncZIndex"],
      effects: ["trackDismissableElement", "trapFocus", "preventScroll", "hideContentBelow"],
      on: {
        "CONTROLLED.CLOSE": {
          target: "closed",
        },
        CLOSE: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnClose"],
          },
          {
            target: "closed",
            actions: ["invokeOnClose"],
          },
        ],
        TOGGLE: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnClose"],
          },
          {
            target: "closed",
            actions: ["invokeOnClose"],
          },
        ],
      },
    },

    closed: {
      on: {
        "CONTROLLED.OPEN": {
          target: "open",
        },
        OPEN: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnOpen"],
          },
          {
            target: "open",
            actions: ["invokeOnOpen"],
          },
        ],
        TOGGLE: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnOpen"],
          },
          {
            target: "open",
            actions: ["invokeOnOpen"],
          },
        ],
      },
    },
  },

  implementations: {
    guards: {
      isOpenControlled: ({ prop }) => prop("open") != undefined,
    },

    effects: {
      trackDismissableElement({ scope, send, prop }) {
        const getContentEl = () => dom.getContentEl(scope)
        return trackDismissableElement(getContentEl, {
          defer: true,
          pointerBlocking: prop("modal"),
          exclude: [dom.getTriggerEl(scope)],
          onInteractOutside(event) {
            prop("onInteractOutside")?.(event)
            if (!prop("closeOnInteractOutside")) {
              event.preventDefault()
            }
          },
          persistentElements: prop("persistentElements"),
          onFocusOutside: prop("onFocusOutside"),
          onPointerDownOutside: prop("onPointerDownOutside"),
          onEscapeKeyDown(event) {
            prop("onEscapeKeyDown")?.(event)
            if (!prop("closeOnEscape")) {
              event.preventDefault()
            }
          },
          onDismiss() {
            send({ type: "CLOSE", src: "interact-outside" })
          },
        })
      },

      preventScroll({ scope, prop }) {
        if (!prop("preventScroll")) return
        return preventBodyScroll(scope.getDoc())
      },

      trapFocus({ scope, prop }) {
        if (!prop("trapFocus") || !prop("modal")) return
        const contentEl = () => dom.getContentEl(scope)
        return trapFocus(contentEl, {
          preventScroll: true,
          returnFocusOnDeactivate: !!prop("restoreFocus"),
          initialFocus: prop("initialFocusEl"),
          setReturnFocus: (el) => prop("finalFocusEl")?.() ?? el,
        })
      },

      hideContentBelow({ scope, prop }) {
        if (!prop("modal")) return
        const getElements = () => [dom.getContentEl(scope)]
        return ariaHidden(getElements, { defer: true })
      },
    },

    actions: {
      checkRenderedElements({ context, scope }) {
        raf(() => {
          context.set("rendered", {
            title: !!dom.getTitleEl(scope),
            description: !!dom.getDescriptionEl(scope),
          })
        })
      },

      syncZIndex({ scope }) {
        raf(() => {
          const contentEl = dom.getContentEl(scope)
          if (!contentEl) return

          const styles = getComputedStyle(contentEl)
          const elems = [dom.getPositionerEl(scope), dom.getBackdropEl(scope)]
          elems.forEach((node) => {
            node?.style.setProperty("--z-index", styles.zIndex)
          })
        })
      },

      invokeOnClose({ prop }) {
        prop("onOpenChange")?.({ open: false })
      },

      invokeOnOpen({ prop }) {
        prop("onOpenChange")?.({ open: true })
      },

      toggleVisibility({ prop, send, event }) {
        send({
          type: prop("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
          previousEvent: event,
        })
      },
    },
  },
})
