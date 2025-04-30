import { handleInvokeError } from './utils';
import { create } from 'mutative';
import { assertEvent, assign, fromPromise, sendParent, setup } from 'xstate';

export const nodeMachine = setup({
  types: {
    input: {} as any,
    context: {} as {
      component: any;
      filters: any;
      selectedItems: Map<string, any>;
      currentQuery: any;
      currentResources: any[];
      currentPageInfo: any;
      [k: string]: any;
    } as any,
    events: {} as {
      type: 'select' | 'unselect' | 'config.done';
      payload: any;
    },
  },

  actors: {
    getLibraryItem: fromPromise(async ({ input }: any) => {
      return input.handler(input.query);
    }),

    getFilters: fromPromise(async ({ input }: any) => {
      return input.handler(input.resourceType);
    }),
  },
  actions: {
    logEvent: (({ event, context }: any) => {
      console.log('event:', {
        event,
        context,
      });
    }) as any,

    injectSelectedItems: assign(({ event, context }: any) =>
      create(context, (draft) => {
        assertEvent(event, 'open');
        draft.selectedItems = event.payload?.selectedItems ?? new Map();
      }),
    ),
    clearQueryEndCursor: assign(({ context }: any) =>
      create(context, (draft) => {
        draft.currentQuery.endCursor = null;
      }),
    ),
    editSearch: assign(({ context, event }: any) => {
      assertEvent(event, 'library.query.editQuery');
      return create(context, (draft) => {
        draft.currentQuery.query = event.payload.query;
      });
    }),
    clearSelected: assign(({ context }: any) =>
      create(context, (draft) => {
        draft.selectedItems.clear();
      }),
    ),
    clearFilters: assign(({ event, context }: any) => {
      assertEvent(event, 'library.query.filters.clearAll');
      return create(context, (draft) => {
        if (draft.currentQuery.queryType === 'library') {
          for (const filterToken in draft.currentQuery.filters) {
            draft.currentQuery.filters[filterToken] = [];
          }
        }
      });
    }),
    editFilter: assign(({ event, context }: any) => {
      assertEvent(event, 'rp.query.filters.edit');
      return create(context, (draft) => {
        if (draft.currentQuery.queryType === 'library')
          draft.currentQuery.filters[event.payload.filterId] = event.payload.value;
      });
    }),
    sendSelectedItemsToParent: sendParent(({ context, self }: any) => {
      return {
        type: 'rp.items.selected',
        payload: {
          selectedItems: context.selectedItems,
          senderId: self.id,
          resourceSettings: context.resourceSettings,
        },
      };
    }),
  },
}).createMachine({
  id: 'nodeMachine',
  initial: 'Closed',
  context: ({ input }: any): any => ({
    component: {
      ...input,
    },
    filters: undefined,
    selectedItems: new Map(),
    currentResources: [],
    currentPageInfo: {
      endCursor: null,
      hasNextPage: true,
      hasPreviousPage: false,
      startCursor: '0',
    },
  }),
  states: {
    Unselected: {
      entry: ['logEvent'],
      on: {
        select: {
          actions: ['injectSelectedItems'],
          target: 'Selected',
        },
      },
    },
    Selected: {
      on: {
        unselect: {
          target: 'Unselected',
        },
      },
    },
    Done: {
      always: [
        {
          actions: ['sendSelectedItemsToParent', 'clearSelected'],
          target: '#nodeMachine.Unselected',
        },
      ],
    },
  },
});
