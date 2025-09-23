import { omit } from "lodash";
import { createStore } from "@xstate/store"
import { StateSnapshot } from "#app/sureal/components/code-editor";
import { queryStoreDemo } from './data'
import { createStoreHook } from "@xstate/store/react"

export const useQueryStore = createStoreHook({
  context: {
    queryState: {},
    isQueryValid: true,
  },
  on: {
    loadSample: (context) => ({
      ...context,
      ...queryStoreDemo
    }),

    updateQueryState: (context, event: { key: any, value: any }) => ({
      ...context,
      queryState: { ...context.queryState, [event.key]: event.value },
    }),
    removeQueryState: (context, event: { key: any }) => ({
      ...context,
      queryState: omit(context.queryState, [event.key])
    }),
    setQueryValid: (context, event: { valid: any }) => ({
      ...context,
      isQueryValid: event.valid,
    }),
  },
})
