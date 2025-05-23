import { createMachine } from "@ui-collection-kit/core"
import { setRafInterval, setRafTimeout } from "@ui-collection-kit/utils"
import type { Time, TimerSchema } from "./timer.types"

export const machine = createMachine<TimerSchema>({
  props({ props }) {
    return {
      interval: 1000,
      ...props,
    }
  },

  initialState({ prop }) {
    return prop("autoStart") ? "running" : "idle"
  },

  context({ prop, bindable }) {
    return {
      currentMs: bindable(() => ({
        defaultValue: prop("startMs") ?? 0,
      })),
    }
  },

  watch({ track, send, prop }) {
    track([() => prop("startMs")], () => {
      send({ type: "RESTART" })
    })
  },

  on: {
    RESTART: {
      target: "running:temp",
      actions: ["resetTime"],
    },
  },

  computed: {
    time: ({ context }) => msToTime(context.get("currentMs")),
    formattedTime: ({ computed }) => formatTime(computed("time")),
    progressPercent: ({ context, prop }) => {
      const targetMs = prop("targetMs")
      if (targetMs == null) return 0
      return toPercent(context.get("currentMs"), prop("startMs") ?? 0, targetMs)
    },
  },

  states: {
    idle: {
      on: {
        START: {
          target: "running",
        },
        RESET: {
          actions: ["resetTime"],
        },
      },
    },

    "running:temp": {
      effects: ["waitForNextTick"],
      on: {
        CONTINUE: {
          target: "running",
        },
      },
    },

    running: {
      effects: ["keepTicking"],
      on: {
        PAUSE: {
          target: "paused",
        },
        TICK: [
          {
            target: "idle",
            guard: "hasReachedTarget",
            actions: ["invokeOnComplete"],
          },
          {
            actions: ["updateTime", "invokeOnTick"],
          },
        ],
        RESET: {
          actions: ["resetTime"],
        },
      },
    },
    paused: {
      on: {
        RESUME: {
          target: "running",
        },
        RESET: {
          target: "idle",
          actions: ["resetTime"],
        },
      },
    },
  },

  implementations: {
    effects: {
      keepTicking({ prop, send }) {
        return setRafInterval(({ deltaMs }) => {
          send({ type: "TICK", deltaMs })
        }, prop("interval"))
      },
      waitForNextTick({ send }) {
        return setRafTimeout(() => {
          send({ type: "CONTINUE" })
        }, 0)
      },
    },

    actions: {
      updateTime({ context, prop, event }) {
        const sign = prop("countdown") ? -1 : 1
        const deltaMs = roundToInterval(event.deltaMs, prop("interval"))
        context.set("currentMs", (prev) => prev + sign * deltaMs)
      },
      resetTime({ context, prop }) {
        let targetMs = prop("targetMs")
        if (targetMs == null && prop("countdown")) targetMs = 0
        context.set("currentMs", prop("startMs") ?? 0)
      },
      invokeOnTick({ context, prop, computed }) {
        prop("onTick")?.({
          value: context.get("currentMs"),
          time: computed("time"),
          formattedTime: computed("formattedTime"),
        })
      },
      invokeOnComplete({ prop }) {
        prop("onComplete")?.()
      },
    },

    guards: {
      hasReachedTarget: ({ context, prop }) => {
        let targetMs = prop("targetMs")
        if (targetMs == null && prop("countdown")) targetMs = 0
        if (targetMs == null) return false
        return context.get("currentMs") === targetMs
      },
    },
  },
})

function msToTime(ms: number): Time {
  const milliseconds = ms % 1000
  const seconds = Math.floor(ms / 1000) % 60
  const minutes = Math.floor(ms / (1000 * 60)) % 60
  const hours = Math.floor(ms / (1000 * 60 * 60)) % 24
  const days = Math.floor(ms / (1000 * 60 * 60 * 24))
  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  }
}

function toPercent(value: number, minValue: number, maxValue: number) {
  return (value - minValue) / (maxValue - minValue)
}

function padStart(num: number, size = 2) {
  return num.toString().padStart(size, "0")
}

function roundToInterval(value: number, interval: number) {
  return Math.round(value / interval) * interval
}

function formatTime(time: Time): Time<string> {
  const { days, hours, minutes, seconds } = time
  return {
    days: padStart(days),
    hours: padStart(hours),
    minutes: padStart(minutes),
    seconds: padStart(seconds),
    milliseconds: time.milliseconds.toString(),
  }
}
