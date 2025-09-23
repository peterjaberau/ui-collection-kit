import { useSelector } from '@xstate/store/react';
import { databaseStore, configStore } from './create'

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


export const useConfigStore = () => {
  const state = useSelector(configStore, (state) => state)
  const context = state.context
  const getState = () => state.context

  const getSetting = (category: any, key: any) => context.settings[category][key]


  return {
    state,
    context,
    getSetting,
    getState
  }

}
