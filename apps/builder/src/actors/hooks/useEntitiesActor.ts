import { useSelector } from '@xstate/react';
import { useRootActor } from './useRootActor';


export function useEntitiesActor() {
  const { rootActorRef } = useRootActor();

  const entitiesActorRef = rootActorRef.system.get('entities');
  const sendToEntities = entitiesActorRef.send;

  const entitiesState: any = useSelector(entitiesActorRef, (state) => state);
  const entitiesContext = entitiesState.context;

  const entitiesWidgetsStructure = entitiesContext.canvasWidgetsStructure;
  const entitiesCanvasWidgets = entitiesContext.canvasWidgets;
  const entitiesMetaWidgets = entitiesContext.metaWidgets;
  const entitiesActions = entitiesContext.actions;
  const entitiesDatasources = entitiesContext.datasources;
  const entitiesPageList = entitiesContext.pageList;
  const entitiesPlugins = entitiesContext.plugins;
  const entitiesMeta = entitiesContext.meta;
  const entitiesApp = entitiesContext.app;
  const entitiesJsActions = entitiesContext.jsActions;
  const entitiesAutoHeightLayoutTree = entitiesContext.autoHeightLayoutTree;
  const entitiesCanvasLevels = entitiesContext.canvasLevels;
  const entitiesLayoutElementPositions = entitiesContext.layoutElementPositions;
  const entitiesModuleInstanceEntities = entitiesContext.moduleInstanceEntities;

  // selectors
  const currentPageId = entitiesPageList.currentPageId;
  const currentPageName = entitiesPageList.pages.find((page: any) => page.pageId === currentPageId)?.pageName
  const rendererMode = entitiesApp.mode === "EDIT" ? "CANVAS" : "PAGE";

  // guards
  const isPageHasWidgets = entitiesWidgetsStructure.children && entitiesWidgetsStructure.children.length > 0;


  // selectors


  return {
    entitiesActorRef,
    sendToEntities,

    entitiesState,
    entitiesContext,

    entitiesWidgetsStructure,
    entitiesCanvasWidgets,
    entitiesMetaWidgets,
    entitiesActions,
    entitiesDatasources,
    entitiesPageList,
    entitiesPlugins,
    entitiesMeta,
    entitiesApp,
    entitiesJsActions,
    entitiesAutoHeightLayoutTree,
    entitiesCanvasLevels,
    entitiesLayoutElementPositions,
    entitiesModuleInstanceEntities,

    // selectors
    currentPageId,
    currentPageName,
    rendererMode,

    // guards
    isPageHasWidgets

  };
}
