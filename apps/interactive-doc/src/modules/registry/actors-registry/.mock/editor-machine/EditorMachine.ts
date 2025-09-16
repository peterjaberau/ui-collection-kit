import {AnyActorRef, assertEvent, enqueueActions, setup, assign, AnyActor} from "xstate";
import { EditorMachineContextType, EditorMachineEventType, EditorMachineInputType} from "~/plugins/registry/types";
import { get, omit } from "lodash-es";



export const EditorMachineSimplified = setup({
    types: {
        context: {} as any,
        events: {} as any,
    },
    actions: {
        setSelectedNodeId: assign({
            selectedNodeId: ({context, event}: any) => event.params.id as any
        }),
        setInputOutput: assign({
            inputOutput: ({context, event}: any) => event.params as any
        })
    }
}).createMachine({
    id: "EditorSimplified",
    description: "Editor machine responsible of spawning and destroying node actors.",
    context: ({ input }: any) => {
        return {
            inputSockets: {},
            outputSockets: {},
            inputs: {},
            outputs: {},
            actors: [],
            runs: [],
        };
    },
    initial: "idle",
    entry: enqueueActions(({ enqueue, event }) => {
        enqueue("initialize");
    }),
    on: {
        INITIALIZE: {
            actions: ["initialize"],
        },
        SET_VALUE: {
            actions: ["setValue"],
        },
        SET_SELECTED_NODE_ID: {
            actions: ["setSelectedNodeId"],
        },
    },
    states: {
        error: {},
        idle: {
            on: {
                ADD_INPUT_SOCKET: {
                    actions: enqueueActions(({ enqueue }) => {
                        enqueue.assign({
                            inputSockets: ({ context, event }: any) => ({
                                ...context.inputSockets,
                                [event.params.socket.id]: event.params.socket,
                            }),
                        });
                    }),
                },
                REMOVE_INPUT_SOCKET: {
                    actions: enqueueActions(({ enqueue }) => {
                        enqueue.assign({
                            inputSockets: ({ context, event }: any) => {
                                return omit(context.inputSockets, event.params.id);
                            },
                        });
                    }),
                },
                ADD_OUTPUT_SOCKET: {
                    actions: enqueueActions(({ enqueue }) => {
                        enqueue.assign({
                            outputSockets: ({ context, event }: any) => ({
                                ...context.outputSockets,
                                [event.params.socket.id]: event.params.socket,
                            }),
                        });
                    }),
                },
                REMOVE_OUTPUT_SOCKET: {
                    actions: enqueueActions(({ enqueue }) => {
                        enqueue.assign({
                            outputSockets: ({ context, event }: any) => {
                                return omit(context.outputSockets, event.params.id);
                            },
                        });
                    }),
                },
                DESTROY: {
                    description: "Destroy a node actor",
                    actions: enqueueActions(({ enqueue, system, event, check }) => {
                        const actor: AnyActor = system.get(event.params.id);
                        if (!actor) {
                            console.log("CAN NOT FIND THE ACTOR", event.params.id);
                            return;
                            // throw new Error(`Actor with id ${event.params.id} not found`);
                        }

                        // If actor has child actors, destroy them as well.
                        const childs =
                            (actor.getSnapshot().context.childs as Record<
                                string,
                                AnyActorRef
                            >) || {};
                        Object.entries(childs).forEach(([key, childActor]) => {
                            enqueue.raise({
                                type: "DESTROY",
                                params: {
                                    id: childActor.id,
                                },
                            });
                        });
                        enqueue.stopChild(({ system, event }) =>
                            system.get(event.params.id),
                        );
                        enqueue.assign({
                            actors: ({ context, event }) => {
                                const actors = { ...context.actors };
                                delete actors[event.params.id];
                                return actors;
                            },
                        });
                        if (
                            check(({ context }) =>
                                Object.keys(context.inputSockets).some((k) =>
                                    k.startsWith(event.params.id),
                                ),
                            )
                        ) {
                            enqueue.assign({
                                inputSockets: ({ context }: any) => {
                                    const keys = Object.keys(context.inputSockets).filter((k) =>
                                        k.startsWith(event.params.id),
                                    );
                                    return omit(context.inputSockets, keys);
                                },
                            });
                        }
                        if (
                            check(({ context }) =>
                                Object.keys(context.outputSockets).some((k) =>
                                    k.startsWith(event.params.id),
                                ),
                            )
                        ) {
                            enqueue.assign({
                                outputSockets: ({ context }: any) => {
                                    const keys = Object.keys(context.outputSockets).filter((k) =>
                                        k.startsWith(event.params.id),
                                    );
                                    return omit(context.outputSockets, keys);
                                },
                            });
                        }
                    }),
                },
                SPAWN_RUN: {
                    description: "Spawn a run actor ",
                    actions: enqueueActions(({ enqueue, event, system }) => {
                        console.log("SPAWNING RUN", event);
                        enqueue.assign({
                            runs: ({ spawn, context }: any) => {
                                const actor = spawn(event.params.machineId, {
                                    input: event.params.input,
                                    id: event.params.id,
                                    syncSnapshot: true,
                                    systemId: event.params.systemId,
                                });

                                return {
                                    ...context.runs,
                                    [event.params.id]: actor,
                                };
                            },
                        });
                    }),
                },
                SPAWN: {
                    description:
                        "Spawn a node actor and inline actors. (a.k.a nested actors)",
                    actions: enqueueActions(({ enqueue, event, system }) => {
                        console.log("SPANWING", event);
                        enqueue.assign({
                            actors: ({ spawn, context }: any) => {
                                const actor = spawn(event.params.machineId, {
                                    input: event.params.input,
                                    id: event.params.id,
                                    syncSnapshot: true,
                                    systemId: event.params.systemId,
                                });

                                return {
                                    ...context.actors,
                                    [event.params.id]: actor,
                                };
                            },
                        });

                        const port = get(event.params.input, ["parent", "port"]);
                        if (port) {
                            const parentId = get(event.params.input, ["parent", "id"]);
                            /**
                             * INPUT PART,
                             */
                            const sourcePort = system.get(port);
                            const definition = sourcePort.getSnapshot().context.definition;

                            const actorConf = get(definition, [
                                "x-actor-config",
                                event.params.machineId!,
                            ]) as ActorConfig;

                            console.log("CHILD ACTOR GOT CONFIG", {
                                sourcePort,
                                definition,
                                actorConf,
                            });

                            for (const [source, target] of Object.entries(
                                actorConf.internal,
                            )) {
                                console.log("SENDING OUT", source, target);
                                const targetId = `${parentId}:input:${target}`;
                                const sourceId = `${event.params.id}:output:${source}`;
                                enqueue.sendTo(
                                    ({ system }) => {
                                        return system.get(sourceId);
                                    },
                                    {
                                        type: "ADD_CONNECTION",
                                        params: {
                                            [targetId]: "NECOLA",
                                        } as any,
                                    }  as any,
                                );
                                enqueue.sendTo(
                                    ({ system }) => {
                                        return system.get(targetId);
                                    },
                                    {
                                        type: "ADD_CONNECTION",
                                        params: {
                                            [sourceId]: "NECOLA",
                                        },
                                    } as any,
                                );
                            }
                        }
                    }),
                },
            },
        },
    },
})

