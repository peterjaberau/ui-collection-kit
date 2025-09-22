import { createStoreHook } from "@xstate/store/react"

export const useCodeEditorStore: any = createStoreHook({
  context: {
    variables: null,
    isVariablesValid: true,
    lineNumbers: true

  },
  on: {
    setVariables: (context, event: { value: any }) => ({
      ...context,
      variables: event.value,
    }),
    setVariablesValid: (context, event: boolean ) => (
      {
        ...context,
        isVariablesValid: event,
      }
    )
  }
})

