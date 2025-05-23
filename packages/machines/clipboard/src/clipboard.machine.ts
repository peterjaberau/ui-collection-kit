import { createMachine } from "@ui-collection-kit/core"
import { setElementValue } from "@ui-collection-kit/dom-query"
import { setRafTimeout } from "@ui-collection-kit/utils"
import * as dom from "./clipboard.dom"
import type { ClipboardSchema } from "./clipboard.types"

export const machine = createMachine<ClipboardSchema>({
  props({ props }) {
    return {
      timeout: 3000,
      defaultValue: "",
      ...props,
    }
  },

  initialState() {
    return "idle"
  },

  context({ prop, bindable }) {
    return {
      value: bindable(() => ({
        defaultValue: prop("defaultValue"),
        value: prop("value"),
        onChange(value) {
          prop("onValueChange")?.({ value })
        },
      })),
    }
  },

  watch({ track, context, action }) {
    track([() => context.get("value")], () => {
      action(["syncInputElement"])
    })
  },

  on: {
    "VALUE.SET": {
      actions: ["setValue"],
    },
    COPY: {
      target: "copied",
      actions: ["copyToClipboard", "invokeOnCopy"],
    },
  },
  states: {
    idle: {
      on: {
        "INPUT.COPY": {
          target: "copied",
          actions: ["invokeOnCopy"],
        },
      },
    },
    copied: {
      effects: ["waitForTimeout"],
      on: {
        "COPY.DONE": {
          target: "idle",
        },
        COPY: {
          target: "copied",
          actions: ["copyToClipboard", "invokeOnCopy"],
        },
        "INPUT.COPY": {
          actions: ["invokeOnCopy"],
        },
      },
    },
  },

  implementations: {
    effects: {
      waitForTimeout({ prop, send }) {
        return setRafTimeout(() => {
          send({ type: "COPY.DONE" })
        }, prop("timeout"))
      },
    },
    actions: {
      setValue({ context, event }) {
        context.set("value", event.value)
      },
      copyToClipboard({ context, scope }) {
        dom.writeToClipboard(scope, context.get("value"))
      },
      invokeOnCopy({ prop }) {
        prop("onStatusChange")?.({ copied: true })
      },
      syncInputElement({ context, scope }) {
        const inputEl = dom.getInputEl(scope)
        if (!inputEl) return
        setElementValue(inputEl, context.get("value"))
      },
    },
  },
})
