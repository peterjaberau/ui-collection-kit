import { getActor } from "./utils"

export const entitiesSelector = (system: any) => {
  const getEntitiesActor = getActor("entities", system)
  const getEntitiesState = getEntitiesActor?.getSnapshot()
  const getEntitiesContext = getEntitiesState?.context

  const getEntitiesWidgetsStructure = getEntitiesContext.canvasWidgetsStructure;
  const getEntitiesCanvasWidgets = getEntitiesContext.canvasWidgets;
  const getEntitiesMetaWidgets = getEntitiesContext.metaWidgets;
  const getEntitiesActions = getEntitiesContext.actions;
  const getEntitiesDatasources = getEntitiesContext.datasources;
  const getEntitiesPageList = getEntitiesContext.pageList;
  const getEntitiesPlugins = getEntitiesContext.plugins;
  const getEntitiesMeta = getEntitiesContext.meta;
  const getEntitiesApp = getEntitiesContext.app;
  const getEntitiesJsActions = getEntitiesContext.jsActions;
  const getEntitiesAutoHeightLayoutTree = getEntitiesContext.autoHeightLayoutTree;
  const getEntitiesCanvasLevels = getEntitiesContext.canvasLevels;
  const getEntitiesLayoutElementPositions = getEntitiesContext.layoutElementPositions;
  const getEntitiesModuleInstanceEntities = getEntitiesContext.moduleInstanceEntities;



  const currentPageId = getEntitiesPageList.currentPageId;
  const currentPageName = getEntitiesPageList.pages.find((page: any) => page.pageId === currentPageId)?.pageName
  const rendererMode = getEntitiesApp.mode === "EDIT" ? "CANVAS" : "PAGE";


  return {
    getEntitiesActor,
    getEntitiesState,
    getEntitiesContext,

    getEntitiesWidgetsStructure,
    getEntitiesCanvasWidgets,
    getEntitiesMetaWidgets,
    getEntitiesActions,
    getEntitiesDatasources,
    getEntitiesPageList,
    getEntitiesPlugins,
    getEntitiesMeta,
    getEntitiesApp,
    getEntitiesJsActions,
    getEntitiesAutoHeightLayoutTree,
    getEntitiesCanvasLevels,
    getEntitiesLayoutElementPositions,
    getEntitiesModuleInstanceEntities,
  }
}


export const getAction = (context, actionId) => {
  if (!actionId) return null
  return context.actions.find((action) => action.actionId === actionId)
}

export const getActions = (context) => {
  return context.actions
}

export const getAllJSActionsData = (context) => {}

export const getActionResponses = (context) => {}

export const getAllWidgetsMap = (context) => {}

const getCurrentJSActionsEntities = (context) => {}

export const getCurrentActions = (context) => {
  const { currentPageId } = getCurrentPageId()
  const { actions } = getActions(context)

  if (!currentPageId) return []
  return actions.filter((action) => action.pageId === currentPageId)

}

export const getCurrentJSCollections = (context) => {}

export const getCurrentModuleActions = (context) => {
  return []
}

export const getCurrentPageId = (context) => {
  return context.pageList.currentPageId
}

export const getAppData = (context) => {
  return context.app
}


// modules
export const getInputsForModule = () => {
  return []
}

export const getModuleInstances = () => {
  return null
}

export const getModuleInstanceEntities = () => {
  return null
}


// widgets
export const getWidgets = (context) => {
  return context.canvasWidgets
}

export const getWidgetsMeta = (context) => {
  return context.meta
}
