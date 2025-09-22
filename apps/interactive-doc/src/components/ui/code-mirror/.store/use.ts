import { useSelector } from '@xstate/store/react';
import { databaseStore } from './create'

export const useDatabaseStore = () => {
  const state = useSelector(databaseStore, (state) => state)
  const context = state.context

  const functions = context.connectionSchema.functions

  const getState = () => state.context

  return {
    state,
    context,
    functions,
    getState
  }

}
