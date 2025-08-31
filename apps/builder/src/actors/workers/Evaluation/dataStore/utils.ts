import { isAction, isJSAction } from "#actor-workers/Evaluation/evaluationUtils"
import { get, isEmpty, set } from "lodash"

export function updateTreeWithData(tree: any, dataStore: any) {
  if (isEmpty(dataStore)) return

  for (const entityName of Object.keys(tree)) {
    const entity = tree[entityName]

    if (!dataStore.hasOwnProperty(entityName)) continue

    if (isAction(entity)) {
      set(entity, "data", get(dataStore, `${entityName}.data`))
    }

    if (isJSAction(entity)) {
      const allFunctionsInStore = Object.keys(dataStore[entityName])

      allFunctionsInStore.forEach((functionName) => {
        set(entity[functionName], `data`, get(dataStore, `${entityName}.${functionName}.data`))
      })
    }
  }
}
