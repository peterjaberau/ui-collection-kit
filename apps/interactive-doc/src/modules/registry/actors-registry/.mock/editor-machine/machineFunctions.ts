import { init } from "@paralleldrive/cuid2";
import { get, isNil, omit } from "lodash-es";
import { match } from "ts-pattern";
import { AnyActorRef, assertEvent, assign, enqueueActions } from "xstate";

function createId(prefix: "node" | "conn" | "context" | "state" | "compute") {
  const createId = init({
    length: 10,
  });
  return `${prefix}_${createId()}`;
}

export const removeError = assign({
  error: () => null,
});

export const setError = assign({
  error: ({ event }: any, params: any) => {
    console.error("setError", event);
    return {
      name: params?.name || event?.params?.name || "Error",
      message: params?.message || event?.params?.message || "Something went wrong",
      err: params?.stack || event.error,
    };
  },
});

export const changeAction = assign({
  inputSockets: ({ event }) => event.inputSockets,
  outputSockets: ({ event }) => event.outputSockets,
  action: ({ event, context }) => ({
    ...context.action,
    type: event.value,
  }),
});

export const assignParent = enqueueActions(({ enqueue, check, self, system }) => {
  if (check(({ context }) => !isNil(context.parent))) {
    if (self.id.startsWith("call")) {
      enqueue.sendTo(
        ({ context, system }: any) => system.get(context.parent?.id!),
        ({ self }) => ({
          type: "ASSIGN_RUN",
          params: {
            actor: self,
          },
        }),
      );
    } else if (check(({ context }) => context.parent?.id !== system.get("editor").id)) {
      enqueue.sendTo(
        ({ context, system }: any) => system.get(context.parent?.id!),
        ({ context, self }) => ({
          type: "ASSIGN_CHILD",
          params: {
            actor: self,
            port: context.parent?.port!,
          },
        }),
      );
    }
  }
});

export const assignChild = enqueueActions(({ enqueue, event, context, check }: any) => {
  assertEvent(event, "ASSIGN_CHILD");
  enqueue.sendTo(
    ({ system }: any) => system.get(event.params.port) as AnyActorRef, //ActorRefFrom<typeof inputSocketMachine>
    ({ event }: any) => ({
      type: "ASSIGN_ACTOR",
      params: {
        value: event.params.actor,
      },
    }),
  );

  enqueue.assign({
    childs: ({ context, event }: any) => ({
      ...context.childs,
      [event.params.actor.src]: event.params.actor,
    }),
  });
});

export const initialize = enqueueActions(({ enqueue, context, system, self }) => {
  enqueue("assignParent");
  for (const [key, value] of Object.entries(context.inputSockets)) {
    if (isNil(value)) {
      // console.log("ASSIGNING PORT", self.src, key, system.get(key), value);
      enqueue.assign({
        inputSockets: ({ context, system }: any) => ({
          ...context.inputSockets,
          [key]: system.get(key),
        }),
      });
    }
  }
  for (const [key, value] of Object.entries(context.outputSockets)) {
    if (isNil(value)) {
      // console.log("ASSIGNING PORT", self.src, key, system.get(key), value);
      enqueue.assign({
        outputSockets: ({ context, system }: any) => ({
          ...context.outputSockets,
          [key]: system.get(key),
        }),
      });
    }
  }
});

export const addSocket = enqueueActions(({ enqueue, check, event }) => {
  match(event)
    .with(
      {
        type: "ADD_SOCKET",
        params: { side: "input" },
      },
      (event: any) => {
        enqueue.assign({
          inputSockets: ({ context, spawn, self }: any) => {
            const socketKey = `${self.id}:input:${event.params.definition["x-key"]}`;
            const socket = spawn("input", {
              input: {
                definition: {
                  ...event.params.definition,
                  "x-showSocket": true,
                },
                parent: self,
              },
              id: socketKey,
              syncSnapshot: true,
              systemId: socketKey,
            });
            return {
              ...context.inputSockets,
              [socketKey]: socket,
            };
          },
        });
      },
    )
    .with(
      {
        type: "ADD_SOCKET",
        params: {
          side: "output",
        },
      },
      (event: any) => {
        enqueue.assign({
          outputSockets: ({ context, spawn, self }: any) => {
            const socketKey = `${self.id}:output:${event.params.definition["x-key"]}`;
            const socket = spawn("output", {
              input: {
                definition: {
                  ...event.params.definition,
                  "x-showSocket": true,
                },
                parent: self,
              },
              id: socketKey,
              syncSnapshot: true,
              systemId: socketKey,
            });
            return {
              ...context.outputSockets,
              [socketKey]: socket,
            };
          },
        });
      },
    )
    .run();
});

export const removeSocket = enqueueActions(({ enqueue, check, event }: any) => {
  console.log("REMOVE SOCKET", event);
  enqueue.stopChild(event.params.id);
  match(event)
    .with(
      {
        type: "REMOVE_SOCKET",
        params: { side: "input" },
      },
      (event: any) => {
        enqueue.assign({
          inputSockets: ({ context }: any) => {
            return omit(context.inputSockets, event.params.id);
          },
        });
      },
    )
    .with(
      {
        type: "REMOVE_SOCKET",
        params: {
          side: "output",
        },
      },
      (event: any) => {
        enqueue.assign({
          outputSockets: ({ context }: any) => {
            return omit(context.outputSockets, event.params.id);
          },
        });
      },
    )
    .run();
});

export const setOutput = assign({
  outputs: (
    { context, event },
    params: {
      key: string;
      value: any;
    },
  ) => {
    const p = event.params || params;
    return {
      ...context.outputs,
      [p.key]: p.value,
    };
  },
});

export const triggerSuccessors = enqueueActions(
  (
    { enqueue },
    params: {
      port: string;
    },
  ) => {
    enqueue.sendTo(
      ({ context, system }: any) =>
        system.get(Object.keys(context.outputSockets).find((k) => k.endsWith(params.port))),
      {
        type: "TRIGGER",
      },
    );
  },
);
export const resolveOutputSockets = enqueueActions(({ enqueue, context, system }) => {
  for (const outputSocketKey of Object.keys(context.outputSockets)) {
    const outputSocketActor = system.get(outputSocketKey);
    if (!outputSocketActor) {
      console.error("OUTPUT RESOLVE EVENT KEY CANNOT FOUND", outputSocketKey, outputSocketActor);
      continue;
    }

    const definition = outputSocketActor.getSnapshot().context.definition;
    const outputKey = definition["x-key"];
    const hasConnection = Object.values(definition["x-connection"] || {}).length > 0;

    if (hasConnection) {
      enqueue.sendTo(
        ({ system }) => system.get(outputSocketKey) as AnyActorRef,
        ({ context }) => ({
          type: "RESOLVE",
          params: {
            value: context.outputs[outputKey],
          },
        }),
      );
    }
  }
});

export const removeComputation = enqueueActions(({ enqueue, event, self }: any) => {
  enqueue.stopChild(event?.origin?.id);
  enqueue.assign({
    computes: ({ context, event }: any) => {
      return omit(context.computes, event.origin.id);
    },
  });
});

export const computeEvent = enqueueActions(
  ({ enqueue, context, event, self }: any, params: { event: string }) => {
    const childId = createId("compute");
    enqueue.assign({
      computes: ({ spawn, context, event }: any) => {
        return {
          ...context.computes,
          [childId]: spawn("computeEvent", {
            input: {
              inputSockets: context.inputSockets,
              inputs: {
                ...get(event, "params.inputs", {}),
              },
              senders: get(event, "params.senders"),
              callId: get(event, "params.callId"),
              event: params.event,
              parent: self,
            },
            syncSnapshot: false,
            systemId: childId,
            id: childId,
          }),
        };
      },
    });
  },
);

export const setValue = enqueueActions(({ enqueue, context, event, self }: any, params: any) => {
  assertEvent(event, "SET_VALUE");
  const values = event.params?.values || params?.values;
  for (const [computeKey, computeValue] of Object.entries(context.computes)) {
    if ((computeValue as any).getSnapshot().status !== "done") {
      enqueue.sendTo(
        ({ system }: any) => system.get(computeKey),
        ({ self }: any) => ({
          type: "SET_VALUE",
          params: {
            values: values,
          },
          origin: {
            type: self.src,
            id: self.id,
            target: computeKey,
          },
        }),
      );
    }
  }
  enqueue.assign({
    inputs: ({ context, event }: any) => {
      return {
        ...context.inputs,
        ...values,
      };
    },
  });
});
