import { getRawTree, getExecutionResult } from "./selectors"
import { useRootStore } from "./store"
const [state]: any = useRootStore((s: any) => s.context)

async function handleStartExecution(context: any, event: any) {
  const rootState = state

  let executionTreeNew: any = null

  // rawTree --> from currentApp.components --> app config data
  // executionTree --> from currentApp.execution --> app runtime data (config rendered to runtime)
  const rawTree = getRawTree()

  if (!rawTree) return
  const executionTreeOld = getExecutionResult(state)


  if (!executionTreeNew) {


    executionTreeNew = new ExecutionTreeFactory()
    const executionResult = executionTreeNew.initTree(rawTree)
    asyncExecutionDataToRedux(executionResult, executionTreeOld, listenerApi)
  } else {
    const isAddAction =
      action.type.startsWith("components/add") ||
      action.type.startsWith("action/add") ||
      action.type.startsWith("action/batchAdd") ||
      componentsActions.batchUpdateMultiComponentSlicePropsReducer.match(action) ||
      actionActions.batchUpdateMultiActionSlicePropsReducer.match(action)
    const executionResult = executionTreeNew.updateTree(rawTree, isAddAction)
    asyncExecutionDataToRedux(executionResult, executionTreeOld, listenerApi)
  }
}
