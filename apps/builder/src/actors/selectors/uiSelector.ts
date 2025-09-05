import { getActor } from "./utils"

export const uiSelector = (system: any) => {
  const getUiActor = getActor("ui", system)
  const getUiState = getUiActor?.getSnapshot()
  const getUiContext = getUiState?.context

  return {
    getUiActor,
    getUiState,
    getUiContext,
  }
}


export const getLayoutSystemType = (context: any) => {

  const applicationLayoutSystemType = context.applications?.currentApplication?.applicationDetail?.appPositioning?.type;
  if (applicationLayoutSystemType) {
    return applicationLayoutSystemType; // FIXED | AUTO | ANVIL
  }
  return "FIXED";

}

export const getIsMobileBreakPoint = (context: any) => {
  return context.mainCanvas.isMobile
}
