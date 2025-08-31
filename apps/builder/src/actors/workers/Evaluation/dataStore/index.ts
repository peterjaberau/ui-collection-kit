import { convertPathToString } from "#actor-workers/Evaluation/evaluationUtils"
import { get, set, unset } from "lodash"

export default class DataStore {
  private static store: any = {}

  static setActionData(fullPath: string, value: unknown) {
    set(DataStore.store, fullPath, value)
  }

  static getActionData(fullPath: string): unknown | undefined {
    return get(DataStore.store, fullPath, undefined)
  }
  static getDataStore() {
    return DataStore.store
  }
  static deleteActionData(fullPath: string) {
    unset(DataStore.store, fullPath)
  }
  static clear() {
    DataStore.store = {}
  }

  static replaceDataStore(store: any) {
    DataStore.store = store
  }

  static update(dataTreeDiff: any[]) {
    const deleteDiffs = dataTreeDiff.filter((diff) => diff.kind === "D")

    deleteDiffs.forEach((diff) => {
      const deletedPath = diff.path || []
      const deletedPathString = convertPathToString(deletedPath)

      DataStore.deleteActionData(deletedPathString)
    })
  }
}
