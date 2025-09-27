import { builderData } from './data'
import { createStoreHook } from "@xstate/store/react"

export const useBuilderStore = createStoreHook({
  context: {
    ...builderData
  } as any,
  on: {


  },
})
