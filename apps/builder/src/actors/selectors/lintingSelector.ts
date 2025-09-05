import { getActor } from "./utils"

export const lintingSelector = (system: any) => {
  const getLintingActor = getActor("linting", system)
  const getLintingState = getLintingActor?.getSnapshot()
  const getLintingContext = getLintingState?.context

  return {
    getLintingActor,
    getLintingState,
    getLintingContext,
  }
}
