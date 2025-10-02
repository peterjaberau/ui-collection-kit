import { createActor,  and, assertEvent, assign, emit, enqueueActions, fromCallback, not, raise, setup, } from "xstate"
import { isEqual } from "lodash"
import { performEvent, coreBehaviorsConfig } from "../behaviors"
import { syncValueLogic, fromSlateValue, createEditorSnapshot, rerouteExternalBehaviorEvent } from './fn'
import { KEY_TO_VALUE_ELEMENT } from './utils'

export const editorMachine: any = setup({
  types: {
    context: {} as {
      behaviors: Set<any>
      behaviorsSorted: boolean
      converters: Set<any>
      getLegacySchema: () => any
      keyGenerator: () => string
      pendingEvents: any[]
      pendingIncomingPatchesEvents: any[]
      schema: any
      initialReadOnly: boolean
      maxBlocks: number | undefined
      selection: any
      initialValue?: any[]
      internalDrag?: {
        origin: any
      }
      dragGhost?: HTMLElement
      slateEditor?: any
    },
    events: {} as any,
    emitted: {} as any,
    input: {} as {
      converters?: any[]
      getLegacySchema: () => any
      keyGenerator: () => string
      maxBlocks?: number
      readOnly?: boolean
      schema: any
      initialValue?: any[]
    },
    tags: {} as 'dragging internally',
  } as any,
  actions: {
    'add behavior to context': assign({
      behaviors: ({context, event}: any) => {
        assertEvent(event, 'add behavior')

        return new Set([...context.behaviors, event.behaviorConfig])
      },
      behaviorsSorted: false,
    }),
    'remove behavior from context': assign({
      behaviors: ({context, event}: any) => {
        assertEvent(event, 'remove behavior')

        context.behaviors.delete(event.behaviorConfig)

        return new Set([...context.behaviors])
      },
    }),
    'emit patch event': emit(({event}: any) => {
      assertEvent(event, 'internal.patch')
      return event
    }),
    'emit mutation event': emit(({event}: any) => {
      assertEvent(event, 'mutation')
      return event
    }),
    'emit read only': emit({type: 'read only'}),
    'emit editable': emit({type: 'editable'}),
    'defer event': assign({
      pendingEvents: ({context, event}: any) => {
        assertEvent(event, ['internal.patch', 'mutation'])
        return [...context.pendingEvents, event]
      },
    }),
    'emit pending events': enqueueActions(({context, enqueue}: any) => {
      for (const event of context.pendingEvents) {
        enqueue.emit(event)
      }
    }),
    'emit ready': emit({type: 'ready'}),
    'clear pending events': assign({
      pendingEvents: [],
    }),
    'defer incoming patches': assign({
      pendingIncomingPatchesEvents: ({context, event}: any) => {
        return event.type === 'patches'
          ? [...context.pendingIncomingPatchesEvents, event]
          : context.pendingIncomingPatchesEvents
      },
    }),
    'emit pending incoming patches': enqueueActions(({context, enqueue}: any) => {
      for (const event of context.pendingIncomingPatchesEvents) {
        enqueue.emit(event)
      }
    }),
    'clear pending incoming patches': assign({
      pendingIncomingPatchesEvents: [],
    }),
    'handle blur': ({event}: any) => {
      assertEvent(event, 'blur')

      try {
        // ReactEditor.blur(event.editor)
      } catch (error: any) {
        console.error(new Error(`Failed to blur editor: ${error.message}`))
      }
    },
    'handle focus': ({context}: any) => {
      if (!context.slateEditor) {
        console.error('No Slate editor found to focus')
        return
      }

      try {
        const currentSelection = context.slateEditor.selection
        // ReactEditor.focus(context.slateEditor)
        if (currentSelection) {
          // Transforms.select(context.slateEditor, currentSelection)
        }
      } catch (error: any) {
        console.error(new Error(`Failed to focus editor: ${error.message}`))
      }
    },
    'handle behavior event': ({context, event, self}: any) => {
      assertEvent(event, ['behavior event'])

      try {
        const behaviors: any = [...context.behaviors.values()].map(
          (config) => config.behavior,
        )

        performEvent({
          mode: 'send',
          behaviors,
          remainingEventBehaviors: behaviors,
          event: event.behaviorEvent,
          editor: event.editor,
          keyGenerator: context.keyGenerator,
          schema: context.schema,
          getSnapshot: () =>
            createEditorSnapshot({
              converters: [...context.converters],
              editor: event.editor,
              keyGenerator: context.keyGenerator,
              readOnly: self.getSnapshot().matches({'edit mode': 'read only'}),
              schema: context.schema,
            }),
          nativeEvent: event.nativeEvent,
          sendBack: (eventSentBack) => {
            if (eventSentBack.type === 'set drag ghost') {
              self.send(eventSentBack)
              return
            }

            self.send(
              rerouteExternalBehaviorEvent({
                event: eventSentBack,
                slateEditor: event.editor,
              }),
            )
          },
        })
      } catch (error) {
        console.error(
          new Error(
            // `Raising "${event.behaviorEvent.type}" failed due to: ${error.message}`,
          ),
        )
      }
    },
    'sort behaviors': assign({
      behaviors: ({context}) => {
        return   {
          // ... !context.behaviorsSorted
          //   ? new Set(sortByPriority([...context.behaviors.values()]))
          //   : context.behaviors,
          behaviorsSorted: true,
        }
      }



    }),
  },
  guards: {
    'slate is busy': ({context}) => {
      if (!context.slateEditor) {
        return false
      }

      return context.slateEditor.operations.length > 0
    },
  },
}).createMachine({
  id: 'editor',
  context: ({input}: any) => ({
    behaviors: new Set(coreBehaviorsConfig),
    behaviorsSorted: false,
    converters: new Set(input.converters ?? []),
    getLegacySchema: input.getLegacySchema,
    keyGenerator: input.keyGenerator,
    pendingEvents: [],
    pendingIncomingPatchesEvents: [],
    schema: input.schema,
    selection: null,
    initialReadOnly: input.readOnly ?? false,
    maxBlocks: input.maxBlocks,
    initialValue: input.initialValue,
  }),
  on: {
    'add behavior': {actions: 'add behavior to context'},
    'remove behavior': {actions: 'remove behavior from context'},
    'update maxBlocks': {
      actions: assign({maxBlocks: ({event}) => event.maxBlocks}),
    },
    'update selection': {
      actions: [
        assign({selection: ({event}) => event.selection}),
        emit(({event}) => ({...event, type: 'selection'})),
      ],
    },
    'set drag ghost': {
      actions: assign({dragGhost: ({event}) => event.ghost}),
    },
  },
  type: 'parallel',
  states: {
    'edit mode': {
      initial: 'read only',
      states: {
        'read only': {
          initial: 'determine initial edit mode',
          on: {
            'behavior event': {
              actions: ['sort behaviors', 'handle behavior event'],
              guard: ({event}) =>
                event.behaviorEvent.type === 'clipboard.copy' ||
                event.behaviorEvent.type === 'mouse.click' ||
                event.behaviorEvent.type === 'serialize' ||
                event.behaviorEvent.type === 'serialization.failure' ||
                event.behaviorEvent.type === 'serialization.success' ||
                event.behaviorEvent.type === 'select',
            },
          },
          states: {
            'determine initial edit mode': {
              entry: [
                () => {
                  console.log(
                    'entry: edit mode->read only->determine initial edit mode',
                  )
                },
              ],
              exit: [
                () => {
                  console.log(
                    'exit: edit mode->read only->determine initial edit mode',
                  )
                },
              ],
              on: {
                'done syncing value': [
                  {
                    target: '#editor.edit mode.read only.read only',
                    guard: ({context}) => context.initialReadOnly,
                  },
                  {
                    target: '#editor.edit mode.editable',
                  },
                ],
              },
            },
            'read only': {
              entry: [
                () => {
                  console.log('entry: edit mode->read only->read only')
                },
              ],
              exit: [
                () => {
                  console.log('exit: edit mode->read only->read only')
                },
              ],
              on: {
                'update readOnly': {
                  guard: ({event}) => !event.readOnly,
                  target: '#editor.edit mode.editable',
                  actions: ['emit editable'],
                },
              },
            },
          },
        },
        'editable': {
          on: {
            'update readOnly': {
              guard: ({event}) => event.readOnly,
              target: '#editor.edit mode.read only.read only',
              actions: ['emit read only'],
            },
            'behavior event': {
              actions: ['sort behaviors', 'handle behavior event'],
            },
            'blur': {
              actions: 'handle blur',
            },
            'focus': {
              target: '.focusing',
              actions: [assign({slateEditor: ({event}) => event.editor})],
            },
          },
          initial: 'idle',
          states: {
            'idle': {
              entry: [
                () => {
                  console.log('entry: edit mode->editable->idle')
                },
              ],
              exit: [
                () => {
                  console.log('exit: edit mode->editable-idle')
                },
              ],
              on: {
                dragstart: {
                  actions: [
                    assign({
                      internalDrag: ({event}) => ({
                        origin: event.origin,
                      }),
                    }),
                  ],
                  target: 'dragging internally',
                },
              },
            },
            'focusing': {
              initial: 'checking if busy',
              states: {
                'checking if busy': {
                  entry: [
                    () => {
                      console.log(
                        'entry: edit mode->editable->focusing->checking if busy',
                      )
                    },
                  ],
                  exit: [
                    () => {
                      console.log(
                        'exit: edit mode->editable->focusing->checking if busy',
                      )
                    },
                  ],
                  always: [
                    {
                      guard: 'slate is busy',
                      target: 'busy',
                    },
                    {
                      target: '#editor.edit mode.editable.idle',
                      actions: ['handle focus'],
                    },
                  ],
                },
                'busy': {
                  entry: [
                    () => {
                      console.log('entry: edit mode->editable->focusing-busy')
                    },
                  ],
                  exit: [
                    () => {
                      console.log('exit: edit mode->editable->focusing->busy')
                    },
                  ],
                  after: {
                    10: {
                      target: 'checking if busy',
                    },
                  },
                },
              },
            },
            'dragging internally': {
              entry: [
                () => {
                  console.log('entry: edit mode->editable->dragging internally')
                },
              ],
              exit: [
                () => {
                  console.log('exit: edit mode->editable->dragging internally')
                },
                ({context}) => {
                  if (context.dragGhost) {
                    try {
                      context.dragGhost.parentNode?.removeChild(
                        context.dragGhost,
                      )
                    } catch (error) {
                      console.error(
                        // new Error(
                        //   `Removing the drag ghost failed due to: ${error.message}`,
                        // ),
                      )
                    }
                  }
                },
                assign({dragGhost: undefined}),
                assign({internalDrag: undefined}),
              ],
              tags: ['dragging internally'],
              on: {
                dragend: {target: 'idle'},
                drop: {target: 'idle'},
              },
            },
          },
        },
      },
    },
    'setup': {
      initial: 'setting up',
      states: {
        'setting up': {
          entry: [
            () => {
              console.log('entry: setup->setting up')
            },
          ],
          exit: [
            () => {
              console.log('exit: setup->setting up')
            },
            'emit ready',
            'emit pending incoming patches',
            'clear pending incoming patches',
          ],
          on: {
            'internal.patch': {
              actions: 'defer event',
            },
            'mutation': {
              actions: 'defer event',
            },
            'done syncing value': {
              target: 'set up',
            },
            'patches': {
              actions: ['defer incoming patches'],
            },
          },
        },
        'set up': {
          type: 'parallel',
          states: {
            'value sync': {
              initial: 'idle',
              states: {
                'idle': {
                  entry: [
                    () => {
                      console.log('entry: setup->set up->value sync->idle')
                    },
                  ],
                  exit: [
                    () => {
                      console.log('exit: setup->set up->value sync->idle')
                    },
                  ],
                  on: {
                    'patches': {
                      actions: [emit(({event}) => event)],
                    },
                    'syncing value': {
                      target: 'syncing value',
                    },
                  },
                },
                'syncing value': {
                  entry: [
                    () => {
                      console.log('entry: setup->set up->value sync->syncing value')
                    },
                  ],
                  exit: [
                    () => {
                      console.log('exit: setup->set up->value sync->syncing value')
                    },
                    'emit pending incoming patches',
                    'clear pending incoming patches',
                  ],
                  on: {
                    'patches': {
                      actions: ['defer incoming patches'],
                    },
                    'done syncing value': {
                      target: 'idle',
                    },
                  },
                },
              },
            },
            'writing': {
              initial: 'pristine',
              states: {
                pristine: {
                  initial: 'idle',
                  states: {
                    idle: {
                      entry: [
                        () => {
                          console.log('entry: setup->set up->writing->pristine->idle')
                        },
                      ],
                      exit: [
                        () => {
                          console.log('exit: setup->set up->writing->pristine->idle')
                        },
                      ],
                      on: {
                        'normalizing': {
                          target: 'normalizing',
                        },
                        'internal.patch': {
                          actions: 'defer event',
                          target: '#editor.setup.set up.writing.dirty',
                        },
                        'mutation': {
                          actions: 'defer event',
                          target: '#editor.setup.set up.writing.dirty',
                        },
                      },
                    },
                    normalizing: {
                      entry: [
                        () => {
                          console.log(
                            'entry: setup->set up->writing->pristine->normalizing',
                          )
                        },
                      ],
                      exit: [
                        () => {
                          console.log(
                            'exit: setup->set up->writing->pristine->normalizing',
                          )
                        },
                      ],
                      on: {
                        'done normalizing': {
                          target: 'idle',
                        },
                        'internal.patch': {
                          actions: 'defer event',
                        },
                        'mutation': {
                          actions: 'defer event',
                        },
                      },
                    },
                  },
                },
                dirty: {
                  entry: [
                    () => {
                      console.log('entry: setup->set up->writing->dirty')
                    },
                    'emit pending events',
                    'clear pending events',
                  ],
                  exit: [
                    () => {
                      console.log('exit: setup->set up->writing->dirty')
                    },
                  ],
                  on: {
                    'internal.patch': {
                      actions: 'emit patch event',
                    },
                    'mutation': {
                      actions: 'emit mutation event',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})


/**
 * Makes sure editor mutation events are debounced
 */
export const mutationMachine: any = setup({
  types: {
    context: {} as {
      pendingMutations: any[]
      pendingPatchEvents: any[]
      readOnly: boolean
      schema: any
      slateEditor: any
    },
    events: {} as any,
    input: {} as {
      readOnly: boolean
      schema: any
      slateEditor: any
    },
    emitted: {} as any,
  },
  actions: {
    'assign readOnly': assign({
      readOnly: ({context, event}: any) =>
        event.type === 'update readOnly' ? event.readOnly : context.readOnly,
    }),
    'emit patch': emit(({event}: any) => {
      assertEvent(event, 'patch')
      return {type: 'patch' as const, patch: event.patch}
    }),
    'emit has pending mutations': emit({type: 'has pending mutations'}),
    'emit mutations': enqueueActions(({context, enqueue}: any) => {
      for (const bulk of context.pendingMutations) {
        enqueue.emit({
          type: 'mutation',
          patches: bulk.patches,
          snapshot: bulk.value,
        })
      }
    }),
    'clear pending mutations': assign({
      pendingMutations: [],
    }),
    'defer mutation': assign({
      pendingMutations: ({context, event}: any) => {
        assertEvent(event, 'patch')

        if (context.pendingMutations.length === 0) {
          return [
            {
              operationId: event.operationId,
              value: event.value,
              patches: [event.patch],
            },
          ]
        }

        const lastBulk = context.pendingMutations.at(-1)

        if (lastBulk && lastBulk.operationId === event.operationId) {
          return context.pendingMutations.slice(0, -1).concat({
            value: event.value,
            operationId: lastBulk.operationId,
            patches: [...lastBulk.patches, event.patch],
          })
        }

        return context.pendingMutations.concat({
          value: event.value,
          operationId: event.operationId,
          patches: [event.patch],
        })
      },
    }),
    'clear pending patch events': assign({
      pendingPatchEvents: [],
    }),
    'defer patch': assign({
      pendingPatchEvents: ({context, event}: any) =>
        event.type === 'patch'
          ? [...context.pendingPatchEvents, event]
          : context.pendingPatchEvents,
    }),
    'emit pending patch events': enqueueActions(({context, enqueue}) => {
      for (const event of context.pendingPatchEvents) {
        enqueue.emit(event)
      }
    }),
  },
  actors: {
    'type listener': fromCallback(({input, sendBack}: any) => {
      const originalApply = input.slateEditor.apply

      input.slateEditor.apply = (op: any) => {
        if (op.type === 'insert_text' || op.type === 'remove_text') {
          sendBack({type: 'typing'})
        } else {
          sendBack({type: 'not typing'})
        }
        originalApply(op)
      }

      return () => {
        input.slateEditor.apply = originalApply
      }
    }),
    'mutation interval': fromCallback(({sendBack}) => {
      const interval = setInterval(
        () => {
          sendBack({type: 'emit changes'})
        },
        process.env.NODE_ENV === 'test' ? 250 : 1000,
      )

      return () => {
        clearInterval(interval)
      }
    }),
  },
  guards: {
    'is read-only': ({context}: any) => context.readOnly,
    'slate is normalizing': ({context}: any) => false
  },
  delays: {
    'type debounce': 250,
  },
}).createMachine({
  id: 'mutation',
  context: ({input}: any) => ({
    pendingMutations: [],
    pendingPatchEvents: [],
    readOnly: input.readOnly,
    schema: input.schema,
    slateEditor: input.slateEditor,
  }),
  on: {
    'update readOnly': {
      actions: ['assign readOnly'],
    },
  },
  type: 'parallel',
  states: {
    typing: {
      initial: 'idle',
      invoke: {
        src: 'type listener',
        input: ({context}) => ({slateEditor: context.slateEditor}),
      },
      states: {
        idle: {
          entry: [
            () => {
              console.log('entry: typing->idle')
            },
          ],
          exit: [
            () => {
              console.log('exit: typing->idle')
              console.log('entry: typing->typing')
            },
          ],
          on: {
            typing: {
              target: 'typing',
            },
          },
        },
        typing: {
          after: {
            'type debounce': {
              target: 'idle',
              actions: [
                raise({type: 'emit changes'}),
                () => {
                  console.log('exit: typing->typing')
                },
              ],
            },
          },
          on: {
            'not typing': {
              target: 'idle',
              actions: [raise({type: 'emit changes'})],
            },
            'typing': {
              target: 'typing',
              reenter: true,
            },
          },
        },
      },
    },
    mutations: {
      initial: 'idle',
      states: {
        'idle': {
          entry: [
            () => {
              console.log('entry: mutations->idle')
            },
          ],
          exit: [
            () => {
              console.log('exit: mutations->idle')
            },
          ],
          on: {
            patch: [
              {
                guard: 'is read-only',
                actions: ['defer patch', 'defer mutation'],
                target: 'has pending mutations',
              },
              {
                actions: ['emit patch', 'defer mutation'],
                target: 'has pending mutations',
              },
            ],
          },
        },
        'has pending mutations': {
          entry: [
            () => {
              console.log('entry: mutations->has pending mutations')
            },
            'emit has pending mutations',
          ],
          exit: [
            () => {
              console.log('exit: mutations->has pending mutations')
            },
          ],
          invoke: {
            src: 'mutation interval',
          },
          on: {
            'emit changes': {
              guard: and([not('is read-only'), 'slate is normalizing']),
              target: 'idle',
              actions: [
                'emit pending patch events',
                'clear pending patch events',
                'emit mutations',
                'clear pending mutations',
              ],
            },
            'patch': [
              {
                guard: 'is read-only',
                actions: ['defer patch', 'defer mutation'],
              },
              {
                actions: ['emit patch', 'defer mutation'],
              },
            ],
          },
        },
      },
    },
  },
})


/**
 * Sync value with the editor state
 *
 * Normally nothing here should apply, and the editor and the real world are perfectly aligned.
 *
 * Inconsistencies could happen though, so we need to check the editor state when the value changes.
 *
 * For performance reasons, it makes sense to also do the content validation here, as we already
 * iterate over the value and can validate only the new content that is actually changed.
 *
 * @internal
 */
export const syncMachine: any = setup({
  types: {
    context: {} as {
      initialValue: any[]
      initialValueSynced: boolean
      isProcessingLocalChanges: boolean
      keyGenerator: () => string
      schema: any
      readOnly: boolean
      slateEditor: any
      pendingValue: any[]
      previousValue: any[]
    },
    input: {} as {
      initialValue: any[]
      keyGenerator: () => string
      schema: any
      readOnly: boolean
      slateEditor: any
    },
    events: {} as any,
    emitted: {} as any
  } as any,
  actions: {
    'assign initial value synced': assign({
      initialValueSynced: true,
    }),
    'assign readOnly': assign({
      readOnly: ({event}) => {
        assertEvent(event, 'update readOnly')
        return event.readOnly
      },
    }),
    'assign pending value': assign({
      pendingValue: ({event}) => {
        assertEvent(event, 'update value')
        return event.value
      },
    }),
    'clear pending value': assign({
      pendingValue: undefined,
    }),
    'assign previous value': assign({
      previousValue: ({event}) => {
        assertEvent(event, 'done syncing')
        return event.value
      },
    }),
    'emit done syncing value': emit({
      type: 'done syncing value',
    }),
    'emit syncing value': emit({
      type: 'syncing value',
    }),
  },
  guards: {
    'initial value synced': ({context}: any) => context.initialValueSynced,
    'is busy': ({context}: any) => {
      const isProcessingLocalChanges = context.isProcessingLocalChanges
      const isChanging = false //isChangingRemotely(context.slateEditor) ?? false
      const isBusy = isProcessingLocalChanges || isChanging

      console.log('isBusy', {isBusy, isProcessingLocalChanges, isChanging})

      return isBusy
    },
    'is empty value': ({event}) => {
      return event.type === 'update value' && event.value === undefined
    },
    'is empty array': ({event}) => {
      return (
        event.type === 'update value' &&
        Array.isArray(event.value) &&
        event.value.length === 0
      )
    },
    'is new value': ({context, event}) => {
      return (
        event.type === 'update value' && context.previousValue !== event.value
      )
    },
    'value changed while syncing': ({context, event}) => {
      assertEvent(event, 'done syncing')
      return context.pendingValue !== event.value
    },
    'pending value equals previous value': ({context}) => {
      return isEqual(context.pendingValue, context.previousValue)
    },
  },
  actors: {
    'sync value': syncValueLogic,
  },
}).createMachine({
  id: 'sync',
  context: ({input}: any) => ({
    initialValue: input.initialValue,
    initialValueSynced: false,
    isProcessingLocalChanges: false,
    keyGenerator: input.keyGenerator,
    schema: input.schema,
    readOnly: input.readOnly,
    slateEditor: input.slateEditor,
    pendingValue: undefined,
    previousValue: undefined,
  }),
  entry: [
    raise(({context}) => {
      return {type: 'update value', value: context.initialValue}
    }),
  ],
  on: {
    'has pending mutations': {
      actions: assign({
        isProcessingLocalChanges: true,
      }),
    },
    'mutation': {
      actions: assign({
        isProcessingLocalChanges: false,
      }),
    },
    'update readOnly': {
      actions: ['assign readOnly'],
    },
  },
  initial: 'idle',
  states: {
    idle: {
      entry: [
        () => {
          console.log('entry: syncing->idle')
        },
      ],
      exit: [
        () => {
          console.log('exit: syncing->idle')
        },
      ],
      on: {
        'update value': [
          {
            guard: and(['is empty value', not('initial value synced')]),
            actions: ['assign initial value synced', 'emit done syncing value'],
          },
          {
            guard: and(['is empty array', not('initial value synced')]),
            actions: [
              'assign initial value synced',
              emit({type: 'value changed', value: [] as any} as any),
              'emit done syncing value',
            ],
          },
          {
            guard: and(['is busy', 'is new value']),
            target: 'busy',
            actions: ['assign pending value'],
          },
          {
            guard: 'is new value',
            target: 'syncing',
            actions: ['assign pending value'],
          },
          {
            guard: not('initial value synced'),
            actions: [
              () => {
                console.log('no new value – setting initial value as synced')
              },
              'assign initial value synced',
              'emit done syncing value',
            ],
          },
          {
            actions: [
              () => {
                console.log('no new value and initial value already synced')
              },
            ],
          },
        ],
      },
    },
    busy: {
      entry: [
        () => {
          console.log('entry: syncing->busy')
        },
      ],
      exit: [
        () => {
          console.log('exit: syncing->busy')
        },
      ],
      after: {
        1000: [
          {
            guard: 'is busy',
            target: '.',
            reenter: true,
            actions: [
              () => {
                console.log('reenter: syncing->busy')
              },
            ],
          },
          {
            target: 'syncing',
          },
        ],
      },
      on: {
        'update value': [
          {
            guard: 'is new value',
            actions: ['assign pending value'],
          },
        ],
      },
    },
    syncing: {
      entry: [
        () => {
          console.log('entry: syncing->syncing')
        },
        'emit syncing value',
      ],
      exit: [
        () => {
          console.log('exit: syncing->syncing')
        },
        'emit done syncing value',
      ],
      invoke: {
        src: 'sync value',
        id: 'sync value',
        input: ({context}) => {
          return {
            context: {
              keyGenerator: context.keyGenerator,
              previousValue: context.previousValue,
              readOnly: context.readOnly,
              schema: context.schema,
            },
            slateEditor: context.slateEditor,
            streamBlocks: !context.initialValueSynced,
            value: context.pendingValue,
          }
        },
      },
      on: {
        'update value': {
          guard: 'is new value',
          actions: ['assign pending value'],
        },
        'patch': {
          actions: [emit(({event}) => event)],
        },
        'invalid value': {
          actions: [emit(({event}) => event)],
        },
        'value changed': {
          actions: [emit(({event}) => event)],
        },
        'done syncing': [
          {
            guard: 'value changed while syncing',
            actions: ['assign previous value', 'assign initial value synced'],
            target: 'syncing',
            reenter: true,
          },
          {
            target: 'idle',
            actions: [
              'clear pending value',
              'assign previous value',
              'assign initial value synced',
            ],
          },
        ],
      },
    },
  },
})


export function createInternalEditor(config: any): {
  actors: {
    editorActor: any
    mutationActor: any
    relayActor: any
    syncActor: any
  }
  editor: any
  subscriptions: any[]
} {
  console.log('Creating new Editor instance')

  const subscriptions: any[] = []
  const editorActor = createActor(editorMachine, {
    input: editorConfigToMachineInput(config),
  })
  const relayActor = createActor(relayMachine)
  const slateEditor = createSlateEditor({
    editorActor,
    relayActor,
    subscriptions,
  })
  const editable = createEditableAPI(slateEditor.instance, editorActor)
  const {mutationActor, syncActor} = createActors({
    editorActor,
    relayActor,
    slateEditor: slateEditor.instance,
    subscriptions,
  })

  const editor = {
    dom: createEditorDom(
      (event) => editorActor.send(event),
      slateEditor.instance,
    ),
    getSnapshot: () =>
      getEditorSnapshot({
        editorActorSnapshot: editorActor.getSnapshot(),
        slateEditorInstance: slateEditor.instance,
      }),
    registerBehavior: (behaviorConfig) => {
      const priority = createEditorPriority({
        name: 'custom',
        reference: {
          priority: corePriority,
          importance: 'higher',
        },
      })
      const behaviorConfigWithPriority = {
        ...behaviorConfig,
        priority,
      }

      editorActor.send({
        type: 'add behavior',
        behaviorConfig: behaviorConfigWithPriority,
      })

      return () => {
        editorActor.send({
          type: 'remove behavior',
          behaviorConfig: behaviorConfigWithPriority,
        })
      }
    },
    send: (event) => {
      switch (event.type) {
        case 'update value':
          syncActor.send(event)
          break

        case 'update readOnly':
        case 'patches':
        case 'update maxBlocks':
          editorActor.send(event)
          break

        default:
          editorActor.send(
            rerouteExternalBehaviorEvent({
              event,
              slateEditor: slateEditor.instance,
            }),
          )
      }
    },
    on: (event, listener) => {
      const subscription = relayActor.on(event, (event) => {
        switch (event.type) {
          case 'blurred':
          case 'done loading':
          case 'editable':
          case 'focused':
          case 'invalid value':
          case 'loading':
          case 'mutation':
          case 'patch':
          case 'read only':
          case 'ready':
          case 'selection':
          case 'value changed':
            listener(event)
            break
        }
      })

      return subscription
    },
    _internal: {
      editable,
      editorActor,
      slateEditor,
    },
  } satisfies InternalEditor

  return {
    actors: {
      editorActor,
      mutationActor,
      relayActor,
      syncActor,
    },
    editor,
    subscriptions,
  }
}



function createActors(config: {
  editorActor: any
  relayActor: any
  slateEditor: any
  subscriptions: any[]
}): {
  mutationActor: any
  syncActor: any
} {

  const mutationActor = createActor(mutationMachine, {
    input: {
      readOnly: config.editorActor
        .getSnapshot()
        .matches({'edit mode': 'read only'}),
      schema: config.editorActor.getSnapshot().context.schema,
      slateEditor: config.slateEditor,
    },
  })

  const syncActor = createActor(syncMachine, {
    input: {
      initialValue: config.editorActor.getSnapshot().context.initialValue,
      keyGenerator: config.editorActor.getSnapshot().context.keyGenerator,
      readOnly: config.editorActor
        .getSnapshot()
        .matches({'edit mode': 'read only'}),
      schema: config.editorActor.getSnapshot().context.schema,
      slateEditor: config.slateEditor,
    },
  })

  config.subscriptions.push(() => {
    const subscription = mutationActor.on('*', (event: any) => {
      if (event.type === 'has pending mutations') {
        syncActor.send({type: 'has pending mutations'})
      }
      if (event.type === 'mutation') {
        syncActor.send({type: 'mutation'})
        config.editorActor.send({
          type: 'mutation',
          patches: event.patches,
          snapshot: event.snapshot,
          value: event.snapshot,
        })
      }
      if (event.type === 'patch') {
        config.relayActor.send(event)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  })

  config.subscriptions.push(() => {
    const subscription = syncActor.on('*', (event) => {
      switch (event.type) {
        case 'invalid value':
          config.relayActor.send(event)
          break
        case 'value changed':
          config.relayActor.send(event)
          break
        case 'patch':
          config.editorActor.send({
            ...event,
            type: 'internal.patch',
            value: fromSlateValue(
              config.slateEditor.children,
              config.editorActor.getSnapshot().context.schema.block.name,
              KEY_TO_VALUE_ELEMENT.get(config.slateEditor),
            ),
          })
          break

        default:
          config.editorActor.send(event)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  })

  config.subscriptions.push(() => {
    const subscription = config.editorActor.subscribe((snapshot: any) => {
      if (snapshot.matches({'edit mode': 'read only'})) {
        mutationActor.send({type: 'update readOnly', readOnly: true} as any)
        syncActor.send({type: 'update readOnly', readOnly: true} as any)
      } else {
        mutationActor.send({type: 'update readOnly', readOnly: false} as any)
        syncActor.send({type: 'update readOnly', readOnly: false} as any)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  })

  config.subscriptions.push(() => {
    const subscription = config.editorActor.on('*', (event: any) => {
      switch (event.type) {
        case 'editable':
        case 'mutation':
        case 'ready':
        case 'read only':
        case 'selection':
          config.relayActor.send(event)
          break
        case 'internal.patch':
          mutationActor.send({...event, type: 'patch'})
          break
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  })

  return {
    mutationActor,
    syncActor,
  }
}
