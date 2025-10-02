import { assign, fromCallback, setup, stopChild, enqueueActions, raise, fromPromise, log, createActor } from "xstate";


const checkoutVersionLogic = fromCallback(({ input, self }) => {})
const createPreviewLogic = fromCallback(({ input, self }) => {})
const workspaceServerLogic = fromCallback(({ input }) => {})
const spawnRuntimeLogic = fromCallback(({ input: { appConfig, attempt, parentRef, runPackageJsonScript } }) => {})


const llmRequestLogic = fromPromise(async ({ input, signal }) => {})
const executeToolLogic = fromPromise(async ({ input: { appConfig, part }, signal }) => {})


function createWorkspaceActor() {}


const runtimeMachine = setup({
  actions: {
    appendErrorToLogs: () => {},
    appendLog: () => {},
    publishLogs: () => {},
    setLastHeartbeat: () => {},
    stopRuntime: stopChild(({ context }) => context.spawnRuntimeRef ?? "none")
  },
  actors: {
    spawnRuntimeLogic
  },
  delays: {
    retryBackoff: () => {},
  },
}).createMachine({
  context: ({ input }) => {
    return {
      appConfig: input.appConfig,
      lastHeartbeat: new Date(),
      logs: [],
      retryCount: 0,
      runPackageJsonScript: input.runPackageJsonScript
    };
  },
  id: "runtime",
  initial: "SpawningRuntime",
  on: {
    "*": {
      actions: ({ context, event, self }) => {
        // logUnhandledEvent({
        //   captureException: context.appConfig.workspaceConfig.captureException,
        //   event,
        //   self
        // });
      }
    },
    appendError: {
      actions: [
        {
          params: ({ event }) => event,
          type: "appendErrorToLogs"
        },
        "publishLogs"
      ]
    },
    clearLogs: {
      actions: [assign({ logs: () => [] }), "publishLogs"]
    },
    fail: ".Error",
    maybeRetry: ".MaybeRetrying",
    restart: ".Restarting",
    "spawnRuntime.error.*": {
      actions: [
        enqueueActions(({ enqueue, event }) => {
          if (event.shouldLog) {
            enqueue({
              params: event,
              type: "appendErrorToLogs"
            });
            enqueue({
              type: "publishLogs"
            });
          }
        }),
        ({ context, event }) => {
          context.appConfig.workspaceConfig.captureException(
            event.value.error,
            {
              scopes: ["workspace"]
            }
          );
        },
        raise(({ event }) => {
          return event.isRetryable ? { type: "maybeRetry" } : { type: "fail" };
        })
      ]
    },
    "spawnRuntime.exited": ".Stopped",
    "spawnRuntime.log": {
      actions: [
        assign({
          logs: ({ context, event }) => [
            ...context.logs,
            {
              createdAt: /* @__PURE__ */ new Date(),
              id: ulid$1(),
              message: event.value.message,
              type: event.value.type
            }
          ]
        }),
        "publishLogs"
      ]
    },
    updateHeartbeat: {
      actions: {
        params: ({ event }) => event,
        type: "setLastHeartbeat"
      }
    }
  },
  states: {
    Error: { tags: "error" },
    MaybeRetrying: {
      always: [
        {
          actions: assign({
            retryCount: ({ context }) => context.retryCount + 1
          }),
          guard: ({ context }) => context.retryCount < MAX_RETRIES,
          target: "RetryingWithDelay"
        },
        {
          actions: [
            {
              params: () => ({
                message: "Maximum retry attempts reached. Server failed to start.",
                type: "error"
              }),
              type: "appendLog"
            },
            "publishLogs"
          ],
          target: "Error"
        }
      ],
      tags: "loading"
    },
    PendingShutdown: {
      after: {
        5e3: {
          actions: "stopRuntime",
          target: "Stopped"
        }
      },
      on: {
        updateHeartbeat: {
          actions: {
            params: ({ event }) => event,
            type: "setLastHeartbeat"
          },
          target: "Running"
        }
      },
      tags: "ready"
    },
    Restarting: {
      always: {
        actions: [
          "stopRuntime",
          assign(() => ({
            logs: [],
            port: void 0,
            retryCount: 0,
            spawnRuntimeRef: void 0
          })),
          {
            params: () => ({
              message: "Restarting server...",
              type: "normal"
            }),
            type: "appendLog"
          },
          "publishLogs"
        ],
        target: "SpawningRuntime"
      },
      tags: "loading"
    },
    RetryingWithDelay: {
      after: {
        retryBackoff: {
          target: "SpawningRuntime"
        }
      },
      entry: {
        params: ({ context }) => ({
          message: `Retrying server start (attempt ${context.retryCount}/${MAX_RETRIES})...`,
          type: "normal"
        }),
        type: "appendLog"
      },
      tags: "loading"
    },
    Running: {
      after: {
        3e4: "PendingShutdown"
      },
      tags: "ready"
    },
    SpawningRuntime: {
      entry: assign(({ context, self, spawn: spawn2 }) => ({
        spawnRuntimeRef: spawn2("spawnRuntimeLogic", {
          input: {
            appConfig: context.appConfig,
            attempt: context.retryCount,
            parentRef: self,
            runPackageJsonScript: context.runPackageJsonScript
          }
        })
      })),
      on: {
        "spawnRuntime.started": {
          actions: [
            assign({
              port: ({ event }) => event.value.port
            }),
            {
              params: () => ({
                message: "Server started",
                type: "normal"
              }),
              type: "appendLog"
            },
            "publishLogs"
          ],
          target: "Running"
        }
      },
      tags: "loading"
    },
    Stopped: {
      entry: [
        assign(() => ({
          port: void 0,
          retryCount: 0,
          spawnRuntimeRef: void 0
        }))
      ],
      on: {
        updateHeartbeat: {
          actions: {
            params: ({ event }) => event,
            type: "setLastHeartbeat"
          },
          target: "Restarting"
        }
      },
      tags: "stopped"
    }
  }
});
