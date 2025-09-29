import { setup, assign, raise, log } from "xstate";

export const workspaceMachine = setup({
  types: {
    context: {} as {},
    events: {} as
      | { type: "addAppBeingTrashed" }
      | { type: "addMessage" }
      | { type: "checkoutVersion.done" }
      | { type: "createPreview.done" }
      | { type: "createSession" }
      | { type: "internal.spawnSession" }
      | { type: "removeAppBeingTrashed" }
      | { type: "restartAllRuntimes" }
      | { type: "restartRuntime" }
      | { type: "session.done" }
      | { type: "spawnRuntime" }
      | { type: "stopRuntime" }
      | { type: "stopSessions" }
      | { type: "updateHeartbeat" }
      | { type: "updateInteractiveToolCall" }
      | { type: "workspaceServer.error" }
      | { type: "workspaceServer.heartbeat" }
      | { type: "workspaceServer.started" },
  },
  guards: {},
}).createMachine({
  context: ({ input, self, spawn }: any) => {
    const workspaceConfig: WorkspaceConfig = {
      captureEvent: input.captureEvent,
      captureException: input.captureException,
      getAIProviders: input.getAIProviders,
      previewCacheTimeMs: input.previewCacheTimeMs,
      previewsDir: AbsolutePathSchema.parse(
        path.join(input.rootDir, PREVIEWS_FOLDER),
      ),
      projectsDir: AbsolutePathSchema.parse(
        path.join(input.rootDir, PROJECTS_FOLDER),
      ),
      registryDir: AbsolutePathSchema.parse(input.registryDir),
      rootDir: WorkspaceDirSchema.parse(input.rootDir),
      runShellCommand: input.runShellCommand,
      trashItem: input.trashItem,
    };
    return {
      appsBeingTrashed: [],
      checkoutVersionRefs: new Map(),
      config: workspaceConfig,
      createPreviewRefs: new Map(),
      runPackageJsonScript: input.runPackageJsonScript,
      runtimeRefs: new Map(),
      sessionRefsBySubdomain: new Map(),
      workspaceServerRef: spawn("workspaceServerLogic", {
        input: {
          aiGatewayApp: input.aiGatewayApp,
          parentRef: self,
          serve,
          shimClientDir:
            input.shimClientDir === "dev-server"
              ? "dev-server"
              : AbsolutePathSchema.parse(input.shimClientDir),
          workspaceConfig,
        },
      }),
    };
  },
  id: "workspace",
  initial: "Running",
  on: {
    "*": {
      actions: ({ context, event, self }) => {
        logUnhandledEvent({
          captureException: context.config.captureException,
          event,
          self,
        });
      },
    },
    addAppBeingTrashed: {
      actions: [
        assign({
          appsBeingTrashed: ({ context, event }) => [
            ...context.appsBeingTrashed,
            event.value.subdomain,
          ],
        }),
        raise(({ event }) => {
          return {
            type: "stopRuntime",
            value: { includeChildren: true, subdomain: event.value.subdomain },
          };
        }),
        raise(({ event }) => {
          return {
            type: "stopSessions",
            value: { subdomain: event.value.subdomain },
          };
        }),
      ],
    },
    addMessage: [
      {
        actions: ({ context, event }) => {
          const subdomain = event.value.subdomain;
          const sessionRefs = context.sessionRefsBySubdomain.get(subdomain);
          // Send to existing session
          if (sessionRefs) {
            for (const sessionRef of sessionRefs) {
              sessionRef.send({
                type: "addMessage",
                value: event.value.message,
              });
            }
          }
        },
        guard: ({ context, event }) => {
          const subdomain = event.value.subdomain;
          const sessionRefs = context.sessionRefsBySubdomain.get(subdomain);
          const hasActiveSession = sessionRefs?.some(
            (ref) => ref.getSnapshot().status === "active",
          );
          return Boolean(hasActiveSession);
        },
      },
      {
        actions: ({ context, event }) => {
          const subdomain = event.value.subdomain;
          const sessionRefs = context.sessionRefsBySubdomain.get(subdomain);
          // Send to existing session
          if (sessionRefs) {
            for (const sessionRef of sessionRefs) {
              sessionRef.send({
                type: "addMessage",
                value: event.value.message,
              });
            }
          }
        },
      },
    ],
    "checkoutVersion.done": {
      actions: assign(({ context, event }) => {
        const subdomain = event.value.appConfig.subdomain;
        const checkoutVersionRefs = new Map(context.checkoutVersionRefs);
        checkoutVersionRefs.delete(subdomain);
        return {
          checkoutVersionRefs,
        };
      }),
    },
    "createPreview.done": {
      actions: assign(({ context, event }) => {
        const subdomain = event.value.appConfig.subdomain;
        const createPreviewRefs = new Map(context.createPreviewRefs);
        createPreviewRefs.delete(subdomain);
        return { createPreviewRefs };
      }),
    },
    createSession: {
      actions: raise(({ context, event }) => {
        const appConfig = createAppConfig({
          subdomain: event.value.subdomain,
          workspaceConfig: context.config,
        });
        return {
          type: "internal.spawnSession",
          value: {
            appConfig,
            message: event.value.message,
            model: event.value.model,
            sessionId: event.value.sessionId,
          },
        };
      }),
    },
    "internal.spawnSession": {
      actions: [
        raise(({ event }) => {
          const { appConfig } = event.value;
          return {
            type: "updateHeartbeat",
            value: {
              createdAt: Date.now(),
              subdomain: appConfig.subdomain,
            },
          };
        }),
        assign(({ context, event, self, spawn }) => {
          const { appConfig, message, model, sessionId } = event.value;
          const sessionMachineRef = spawn("sessionMachine", {
            input: {
              agent: AGENTS.code,
              appConfig,
              model,
              parentRef: self,
              queuedMessages: [message],
              sessionId,
            },
          });
          const existingSessionActorRefs =
            context.sessionRefsBySubdomain.get(appConfig.subdomain) ?? [];
          // Garbage collect done sessions
          const activeSessionActorRefs = existingSessionActorRefs.filter(
            (ref) => ref.getSnapshot().status !== "done",
          );
          const newsessionRefsBySubdomain = new Map(
            context.sessionRefsBySubdomain,
          );
          newsessionRefsBySubdomain.set(appConfig.subdomain, [
            ...activeSessionActorRefs,
            sessionMachineRef,
          ]);
          return {
            sessionRefsBySubdomain: newsessionRefsBySubdomain,
          };
        }),
      ],
      guard: ({ context, event }) => {
        const { subdomain } = event.value.appConfig;
        return !context.appsBeingTrashed.some(
          (trashingSubdomain) =>
            subdomain === trashingSubdomain ||
            // Includes sandboxes for projects being trashed
            subdomain.endsWith(trashingSubdomain),
        );
      },
    },
    removeAppBeingTrashed: {
      actions: assign(({ context, event }) => {
        return {
          appsBeingTrashed: context.appsBeingTrashed.filter(
            (subdomain) => subdomain !== event.value.subdomain,
          ),
        };
      }),
    },
    restartAllRuntimes: {
      actions: ({ context }) => {
        for (const runtimeRef of context.runtimeRefs.values()) {
          runtimeRef.send({ type: "restart" });
        }
      },
    },
    restartRuntime: [
      {
        actions: ({ context, event }) => {
          const { subdomain } = event.value;
          const runtimeRef = context.runtimeRefs.get(subdomain);
          runtimeRef?.send({ type: "restart" });
        },
        guard: ({ context, event }) => {
          const { subdomain } = event.value;
          return context.runtimeRefs.has(subdomain);
        },
      },
      {
        actions: ({ context, event }) => {
          const { subdomain } = event.value;
          const runtimeRef = context.runtimeRefs.get(subdomain);
          runtimeRef?.send({ type: "restart" });
        },
        guard: ({ context, event }) => {
          const { subdomain } = event.value;
          return context.runtimeRefs.has(subdomain);
        },
      },
    ],
    "session.done": [
      {
        actions: raise(({ event }) => {
          return {
            type: "restartRuntime",
            value: { subdomain: event.value.appConfig.subdomain },
          };
        }),
        guard: ({ event }) => event.value.usedNonReadOnlyTools,
      },
      {},
    ],
    spawnRuntime: {
      actions: assign(({ context, event, spawn }) => {
        return {
          runtimeRefs: new Map(context.runtimeRefs).set(
            event.value.appConfig.subdomain,
            spawn("runtimeMachine", {
              input: {
                appConfig: event.value.appConfig,
                runPackageJsonScript: context.runPackageJsonScript,
              },
            }),
          ),
        };
      }),
      guard: ({ context, event }) => {
        const subdomain = event.value.appConfig.subdomain;
        return !context.appsBeingTrashed.some(
          (trashingSubdomain) =>
            subdomain === trashingSubdomain ||
            // Includes sandboxes for projects being trashed
            subdomain.endsWith(trashingSubdomain),
        );
      },
    },
    stopRuntime: {
      actions: enqueueActions(
        ({
           context,
           enqueue,
           event: {
             value: { includeChildren, subdomain },
           },
         }) => {
          enqueue({
            params: { subdomain },
            type: "stopRuntime",
          });
          if (includeChildren) {
            for (const [runtimeSubdomain] of context.runtimeRefs.entries()) {
              if (runtimeSubdomain.includes(subdomain)) {
                enqueue({
                  params: { subdomain: runtimeSubdomain },
                  type: "stopRuntime",
                });
              }
            }
          }
        },
      ),
    },
    stopSessions: {
      actions: ({ context, event }) => {
        const sessionActorRefs = context.sessionRefsBySubdomain.get(
          event.value.subdomain,
        );
        if (sessionActorRefs) {
          for (const sessionActorRef of sessionActorRefs) {
            sessionActorRef.send({ type: "stop" });
          }
        }
      },
    },
    updateHeartbeat: {
      actions: ({ context, event }) => {
        const runtimeRef = context.runtimeRefs.get(event.value.subdomain);
        if (runtimeRef) {
          runtimeRef.send({
            type: "updateHeartbeat",
            value: { createdAt: event.value.createdAt },
          });
        }
      },
    },
    updateInteractiveToolCall: [
      {
        actions: ({ context, event }) => {
          const subdomain = event.value.subdomain;
          const sessionRefs = context.sessionRefsBySubdomain.get(subdomain);
          if (!sessionRefs) {
            return;
          }
          for (const sessionRef of sessionRefs) {
            // TODO: Don't send to all sessions, just the one that has the tool call
            sessionRef.send({
              type: "updateInteractiveToolCall",
              value: event.value.update,
            });
          }
        },
        guard: ({ context, event }) => {
          const subdomain = event.value.subdomain;
          const sessionRefs = context.sessionRefsBySubdomain.get(subdomain);
          return !!sessionRefs && sessionRefs.length > 0;
        },
      },
      {
        actions: ({ context, event }) => {
          const subdomain = event.value.subdomain;
          const sessionRefs = context.sessionRefsBySubdomain.get(subdomain);
          if (!sessionRefs) {
            return;
          }
          for (const sessionRef of sessionRefs) {
            // TODO: Don't send to all sessions, just the one that has the tool call
            sessionRef.send({
              type: "updateInteractiveToolCall",
              value: event.value.update,
            });
          }
        },
      },
    ],
    "workspaceServer.error": {
      actions: log(({ event }) => {
        return `Workspace server error: ${event.value.error.message}`;
      }),
    },
    "workspaceServer.heartbeat": [
      {
        actions: assign({
          createPreviewRefs: ({ context, event, self, spawn }) => {
            invariant(
              event.value.appConfig.type === "preview",
              "Expected preview app config",
            );
            const appConfig = event.value.appConfig;
            if (context.createPreviewRefs.has(appConfig.subdomain)) {
              // Already creating a preview for this app
              return context.createPreviewRefs;
            }
            const createPreviewRef = spawn("createPreviewLogic", {
              input: {
                appConfig,
                parentRef: self,
              },
            });
            return new Map(context.createPreviewRefs).set(
              appConfig.subdomain,
              createPreviewRef,
            );
          },
        }),
        guard: ({ event }) =>
          event.value.shouldCreate && event.value.appConfig.type === "preview",
      },
      {
        actions: assign({
          createPreviewRefs: ({ context, event, self, spawn }) => {
            invariant(
              event.value.appConfig.type === "preview",
              "Expected preview app config",
            );
            const appConfig = event.value.appConfig;
            if (context.createPreviewRefs.has(appConfig.subdomain)) {
              // Already creating a preview for this app
              return context.createPreviewRefs;
            }
            const createPreviewRef = spawn("createPreviewLogic", {
              input: {
                appConfig,
                parentRef: self,
              },
            });
            return new Map(context.createPreviewRefs).set(
              appConfig.subdomain,
              createPreviewRef,
            );
          },
        }),
        guard: ({ event }) =>
          event.value.shouldCreate && event.value.appConfig.type === "preview",
      },
      {
        actions: assign({
          createPreviewRefs: ({ context, event, self, spawn }) => {
            invariant(
              event.value.appConfig.type === "preview",
              "Expected preview app config",
            );
            const appConfig = event.value.appConfig;
            if (context.createPreviewRefs.has(appConfig.subdomain)) {
              // Already creating a preview for this app
              return context.createPreviewRefs;
            }
            const createPreviewRef = spawn("createPreviewLogic", {
              input: {
                appConfig,
                parentRef: self,
              },
            });
            return new Map(context.createPreviewRefs).set(
              appConfig.subdomain,
              createPreviewRef,
            );
          },
        }),
      },
    ],
    "workspaceServer.started": {
      actions: log(({ event }) => {
        return `Workspace server started on port ${event.value.port}`;
      }),
    },
  },
  states: {
    Running: {},
  },
});

export const sessionMachine = setup({
  types: {
    context: {} as {},
    events: {} as
      | { type: "agent.done" }
      | { type: "agent.paused" }
      | { type: "agent.resumed" }
      | { type: "agent.usingTool" }
      | { type: "stop" }
      | { type: "addMessage" }
      | { type: "updateInteractiveToolCall" },
  },
  actions: {
    clearAgentRef: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    markUsedNonReadOnlyTools: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    stopAgent: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    assignEventError: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
  },
  actors: {
    updateSession: createMachine({
      /* ... */
    }),
    saveQueuedMessage: createMachine({
      /* ... */
    }),
  },
  guards: {
    isAgentRefActive: function ({ context, event }) {
      // Add your guard condition here
      return true;
    },
  },
}).createMachine({
  context: ({ input }) => {
    return {
      agent: input.agent,
      appConfig: input.appConfig,
      llmRequestTimeoutMs: input.llmRequestTimeoutMs ?? 5 * 60 * 1000,
      maxStepCount: input.maxStepCount ?? 50,
      model: input.model,
      parentRef: input.parentRef,
      queuedMessages: input.queuedMessages,
      sessionId: input.sessionId,
      usedNonReadOnlyTools: false,
    };
  },
  id: "session",
  initial: "UpdatingSession",
  on: {
    "*": {
      actions: ({ context, event, self }) => {
        logUnhandledEvent({
          captureException: context.appConfig.workspaceConfig.captureException,
          event,
          self,
        });
      },
    },
    addMessage: {
      actions: assign({
        queuedMessages: ({ context, event }) => [
          ...context.queuedMessages,
          event.value,
        ],
      }),
    },
    stop: {
      actions: log("Agent not running"),
    },
    updateInteractiveToolCall: [
      {
        actions: ({ context, event }) => {
          invariant(
            context.agentRef,
            "Agent ref does not exist when finishing tool call",
          );
          context.agentRef.send({
            type: "updateInteractiveToolCall",
            value: event.value,
          });
        },
        guard: ({ context }) => !!context.agentRef,
      },
      {
        actions: ({ context, event }) => {
          invariant(
            context.agentRef,
            "Agent ref does not exist when finishing tool call",
          );
          context.agentRef.send({
            type: "updateInteractiveToolCall",
            value: event.value,
          });
        },
      },
    ],
  },
  states: {
    UpdatingSession: {
      tags: "agent.alive",
      invoke: {
        id: "session.UpdatingSession:invocation[0]",
        input: {},
        onDone: {
          target: "ProcessingQueuedMessages",
        },
        onError: {
          target: "Done",
          actions: {
            type: "assignEventError",
          },
        },
        src: "updateSession",
      },
    },
    ProcessingQueuedMessages: {
      always: [
        {
          target: "SavingMessageAndSpawningAgent",
          guard: ({ context }) => {
            return context.queuedMessages.length > 0;
          },
        },
        {
          target: "Done",
        },
      ],
      tags: "agent.alive",
    },
    Done: {
      type: "final",
      entry: ({ context, self }) => {
        context.parentRef.send({
          type: "session.done",
          value: {
            actorId: self.id,
            appConfig: context.appConfig,
            error: context.error,
            usedNonReadOnlyTools: context.usedNonReadOnlyTools,
          },
        });
      },
      tags: "agent.done",
    },
    SavingMessageAndSpawningAgent: {
      tags: "agent.alive",
      invoke: {
        id: "session.SavingMessageAndSpawningAgent:invocation[0]",
        input: {},
        onDone: {
          target: "Agent",
          actions: assign({
            agentRef: ({ context, event, self, spawn }) =>
              spawn("agentMachine", {
                id: "agent",
                input: {
                  agent: context.agent,
                  appConfig: context.appConfig,
                  llmRequestTimeoutMs: context.llmRequestTimeoutMs,
                  maxStepCount: context.maxStepCount,
                  model: context.model,
                  parentMessageId: event.output.id,
                  parentRef: self,
                  sessionId: context.sessionId,
                },
              }),
            queuedMessages: ({ context }) => {
              const [_, ...rest] = context.queuedMessages;
              return rest;
            },
          }),
        },
        onError: {
          target: "Done",
          actions: {
            type: "assignEventError",
          },
        },
        src: "saveQueuedMessage",
      },
    },
    Agent: {
      initial: "UsingReadOnlyTools",
      on: {
        "agent.done": {
          target: "#session.Agent.AgentDone",
          actions: ({ context, event }) => {
            if (event.value.error) {
              context.appConfig.workspaceConfig.captureException(
                event.value.error,
                { scopes: ["workspace"] },
              );
            }
          },
        },
        stop: [
          {
            target: "#session.Agent.Stopping",
            actions: {
              type: "stopAgent",
            },
            guard: {
              type: "isAgentRefActive",
            },
          },
          {
            target: "#session.Agent.AgentDone",
          },
        ],
      },
      onDone: {
        target: "Done",
      },
      tags: "agent.alive",
      states: {
        UsingReadOnlyTools: {
          initial: "Running",
          on: {
            "agent.paused": {
              target: "#session.Agent.UsingReadOnlyTools.Paused",
            },
            "agent.resumed": {
              target: "#session.Agent.UsingReadOnlyTools.Running",
            },
            "agent.usingTool": {},
          },
          states: {
            Running: {
              on: {
                "agent.usingTool": {
                  target: "#session.Agent.UsingNonReadOnlyTools.Running",
                  actions: {
                    type: "markUsedNonReadOnlyTools",
                  },
                  guard: ({ event }) => !event.value.readOnly,
                },
              },
              tags: "agent.running",
            },
            Paused: {
              on: {
                "agent.usingTool": {
                  target: "#session.Agent.UsingNonReadOnlyTools.Paused",
                  actions: {
                    type: "markUsedNonReadOnlyTools",
                  },
                  guard: ({ event }) => !event.value.readOnly,
                },
              },
              tags: "agent.paused",
            },
          },
        },
        AgentDone: {
          type: "final",
        },
        Stopping: {
          on: {
            "agent.done": {
              target: "AgentDone",
              actions: {
                type: "clearAgentRef",
              },
            },
          },
          after: {
            "1000": {
              target: "AgentDone",
            },
          },
          always: [
            {
              guard: {
                type: "isAgentRefActive",
              },
            },
            {
              target: "AgentDone",
            },
          ],
        },
        UsingNonReadOnlyTools: {
          initial: "Running",
          on: {
            "agent.paused": {
              target: "#session.Agent.UsingNonReadOnlyTools.Paused",
            },
            "agent.resumed": {
              target: "#session.Agent.UsingNonReadOnlyTools.Running",
            },
            "agent.usingTool": {},
          },
          tags: "agent.using-non-read-only-tools",
          states: {
            Running: {
              tags: "agent.running",
            },
            Paused: {
              tags: "agent.paused",
            },
          },
        },
      },
    },
  },
});



export const executeToolCallMachine = setup({
  types: {
    context: {} as {},
    events: {} as { type: "stop" },
  },
  actors: {
    executeToolLogic: createMachine({
      /* ... */
    }),
    cancelToolCallLogic: createMachine({
      /* ... */
    }),
  },
}).createMachine({
  context: ({ input }) => ({
    appConfig: input.appConfig,
    cancellationReason: "unknown",
    part: input.part,
  }),
  id: "executeToolCall",
  initial: "Executing",
  on: {
    stop: {
      target: "#executeToolCall.Cancelling",
      actions: assign({ cancellationReason: "manual" }),
    },
  },
  states: {
    Executing: {
      after: {
        toolCallTimeout: {
          target: "Cancelling",
          actions: assign({ cancellationReason: "timeout" }),
        },
      },
      invoke: {
        id: "executeToolCall.Executing:invocation[0]",
        input: {},
        onDone: {
          target: "Done",
        },
        onError: {
          target: "Done",
          actions: log(({ event }) => event.error),
        },
        src: "executeToolLogic",
      },
    },
    Cancelling: {
      invoke: {
        id: "executeToolCall.Cancelling:invocation[0]",
        input: {},
        onDone: {
          target: "Done",
        },
        onError: {
          target: "Done",
          actions: log(({ event }) => event.error),
        },
        src: "cancelToolCallLogic",
      },
    },
    Done: {
      type: "final",
    },
  },
});


export const agentMachine = import { setup, assign, raise } from "xstate";

export const machine = setup({
  types: {
    context: {} as {},
    events: {} as
      | { type: "executeToolCalls" }
      | { type: "retry" }
      | { type: "error" }
      | { type: "stop" }
      | { type: "updateInteractiveToolCall" },
  },
  actions: {
    assignEventError: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
  },
  actors: {
    onStart: createMachine({
      /* ... */
    }),
    onFinish: createMachine({
      /* ... */
    }),
    llmRequestLogic: createMachine({
      /* ... */
    }),
    saveMaxStepsMessage: createMachine({
      /* ... */
    }),
    executeToolCallMachine: createMachine({
      /* ... */
    }),
    shouldContinue: createMachine({
      /* ... */
    }),
  },
  guards: {},
}).createMachine({
  context: ({ input }) => ({
    agent: input.agent,
    appConfig: input.appConfig,
    llmRequestTimeoutMs: input.llmRequestTimeoutMs,
    maxRetryCount: 3,
    maxStepCount: input.maxStepCount || 1,
    model: input.model,
    parentMessageId: input.parentMessageId,
    parentRef: input.parentRef,
    pendingToolCalls: [],
    retryCount: 0,
    sessionId: input.sessionId,
    stepCount: 0,
    toolCallExecuteRef: null,
    toolCallQueue: [],
    toolChoice: input.toolChoice,
  }),
  id: "agent",
  initial: "Starting",
  on: {
    "*": {
      actions: ({ context, event, self }) => {
        logUnhandledEvent({
          captureException: context.appConfig.workspaceConfig.captureException,
          event,
          self,
        });
      },
    },
    error: {
      target: "#agent.Finishing",
    },
    stop: {
      target: "#agent.Finishing",
      actions: ({ context }) => {
        if (context.toolCallExecuteRef) {
          context.toolCallExecuteRef.send({ type: "stop" });
        }
      },
    },
    updateInteractiveToolCall: {
      actions: assign({
        pendingToolCalls: ({ context, event: { value } }) => {
          // TODO Only allow one match and use our ids
          const pendingToolCalls = context.pendingToolCalls.filter(
            ({ context: call }) => call.toolCallId === value.toolCallId,
          );
          for (const pendingToolCall of pendingToolCalls) {
            // TODO Save these promises and handle them async in the state machine
            void Store.savePart(
              value.type === "success"
                ? {
                  ...pendingToolCall,
                  metadata: {
                    ...pendingToolCall.metadata,
                    endedAt: new Date(),
                  },
                  output: value.value.output as never,
                  state: "output-available",
                }
                : {
                  ...pendingToolCall,
                  errorText: value.errorText,
                  metadata: {
                    ...pendingToolCall.metadata,
                    endedAt: new Date(),
                  },
                  state: "output-error",
                },
              context.appConfig,
            );
          }
          return context.pendingToolCalls.filter(
            ({ context: call }) => call.toolCallId !== value.toolCallId,
          );
        },
      }),
    },
  },
  states: {
    Starting: {
      invoke: {
        id: "agent.Starting:invocation[0]",
        input: {},
        onDone: {
          target: "MaybeStartingLLMRequest",
        },
        onError: {
          target: "Finishing",
          actions: {
            type: "assignEventError",
          },
        },
        src: "onStart",
      },
    },
    MaybeStartingLLMRequest: {
      always: [
        {
          target: "LLMStreaming",
          guard: ({ context }) => {
            return context.stepCount < context.maxStepCount;
          },
        },
        {
          target: "SavingMaxStepsMessage",
        },
      ],
    },
    Finishing: {
      invoke: {
        id: "agent.Finishing:invocation[0]",
        input: {},
        onDone: {
          target: "Done",
        },
        onError: {
          target: "Done",
          actions: {
            type: "assignEventError",
          },
        },
        src: "onFinish",
      },
    },
    LLMStreaming: {
      on: {
        executeToolCalls: {
          target: "MaybeExecutingToolCalls",
          actions: assign({ retryCount: 0 }),
        },
        retry: [
          {
            target: "RetryingWithDelay",
            guard: ({ context }) => {
              return context.retryCount < context.maxRetryCount;
            },
          },
          {
            target: "Finishing",
          },
        ],
      },
      after: {
        llmRequestTimeoutMs: {
          actions: raise({ type: "retry" }),
        },
      },
      entry: assign({ stepCount: ({ context }) => context.stepCount + 1 }),
      invoke: {
        id: "agent.LLMStreaming:invocation[0]",
        input: {},
        onDone: {
          actions: [
            raise(({ event: { output } }) => {
              const { message } = output;
              if (message.metadata.error?.kind === "aborted") {
                return { type: "stop" };
              }
              if (message.metadata.error?.kind === "unknown") {
                return {
                  error: new Error(message.metadata.error.message),
                  type: "error",
                };
              }
              const hasRetryableError =
                message.metadata.error?.kind === "api-call" ||
                message.metadata.error?.kind === "no-such-tool" ||
                message.metadata.error?.kind === "invalid-tool-input";
              if (hasRetryableError) {
                return { type: "retry" };
              }
              return { type: "executeToolCalls" };
            }),
            assign(({ event: { output } }) => {
              const { message, parts } = output;
              const hasRetryableError =
                message.metadata.error?.kind === "api-call" ||
                message.metadata.error?.kind === "no-such-tool" ||
                message.metadata.error?.kind === "invalid-tool-input";
              if (hasRetryableError) {
                return {};
              }
              const pendingToolCalls: SessionMessagePart.ToolPartInputAvailable[] =
                [];
              const toolCallQueue: SessionMessagePart.ToolPartInputAvailable[] =
                [];
              for (const part of parts) {
                if (!SessionMessagePart.isToolPart(part)) {
                  continue;
                }
                if (part.state !== "input-available") {
                  continue;
                }
                const tool = getToolByType(part.type);
                if (isInteractiveTool(tool.name)) {
                  pendingToolCalls.push(part);
                  continue;
                }
                // Add to queue for sequential execution
                toolCallQueue.push(part);
              }
              return { pendingToolCalls, toolCallQueue };
            }),
          ],
        },
        onError: {
          target: "Finishing",
          actions: {
            type: "assignEventError",
          },
        },
        src: "llmRequestLogic",
      },
    },
    SavingMaxStepsMessage: {
      invoke: {
        id: "agent.SavingMaxStepsMessage:invocation[0]",
        input: {},
        onDone: {
          target: "Finishing",
        },
        onError: {
          target: "Finishing",
          actions: {
            type: "assignEventError",
          },
        },
        src: "saveMaxStepsMessage",
      },
    },
    Done: {
      entry: ({ context }) => {
        context.parentRef.send({
          type: "agent.done",
          value: { error: context.error },
        });
      },
    },
    MaybeExecutingToolCalls: {
      always: [
        {
          target: "ExecutingToolCall",
          guard: ({ context }) => context.toolCallQueue.length > 0,
        },
        {
          target: "MaybeWaitingForPendingToolCalls",
          guard: ({ context }) => context.toolCallQueue.length > 0,
        },
      ],
    },
    RetryingWithDelay: {
      after: {
        retryBackoff: {
          target: "LLMStreaming",
          actions: assign({
            retryCount: ({ context }) => context.retryCount + 1,
          }),
        },
      },
    },
    ExecutingToolCall: {
      invoke: {
        id: "agent.ExecutingToolCall:invocation[0]",
        input: {},
        onDone: {
          target: "MaybeExecutingToolCalls",
          actions: assign({
            toolCallQueue: ({ context }) => {
              const [_, ...remainingQueue] = context.toolCallQueue;
              return remainingQueue;
            },
            toolCallExecuteRef: () => null,
          }),
        },
        onError: {
          target: "MaybeExecutingToolCalls",
          actions: [
            {
              type: "assignEventError",
            },
            assign({ toolCallExecuteRef: () => null }),
          ],
        },
        src: "executeToolCallMachine",
      },
    },
    MaybeWaitingForPendingToolCalls: {
      always: [
        {
          target: "WaitingForPendingToolCalls",
          guard: ({ context }) => {
            return context.pendingToolCalls.length > 0;
          },
        },
        {
          target: "MaybeContinuing",
        },
      ],
    },
    WaitingForPendingToolCalls: {
      always: {
        target: "MaybeContinuing",
        guard: ({ context }) => {
          return context.pendingToolCalls.length === 0;
        },
      },
      entry: ({ context }) => {
        context.parentRef.send({ type: "agent.paused" });
      },
      exit: ({ context }) => {
        context.parentRef.send({ type: "agent.resumed" });
      },
    },
    MaybeContinuing: {
      invoke: {
        id: "agent.MaybeContinuing:invocation[0]",
        input: {},
        onDone: [
          {
            target: "MaybeStartingLLMRequest",
            guard: ({ event: { output } }) => {
              return output;
            },
          },
          {
            target: "Finishing",
          },
        ],
        onError: {
          target: "Finishing",
          actions: {
            type: "assignEventError",
          },
        },
        src: "shouldContinue",
      },
    },
  },
});
