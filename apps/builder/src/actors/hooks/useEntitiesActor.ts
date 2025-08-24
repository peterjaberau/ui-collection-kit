import { useSelector } from '@xstate/react';
import { useRootActor } from './useRootActor';


export function useEntitiesActor() {
  const { rootActorRef } = useRootActor();

  const entitiesActorRef = rootActorRef.system.get('entities');
  const entitiesActorState: any = useSelector(entitiesActorRef, (state) => state);
  const entitiesContext = entitiesActorState.context;
  const sendToEntitiesActor = entitiesActorRef.send;



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

  // pageList
  const pageList = entitiesPageList;
  const app = entitiesApp;

  const currentPageId = entitiesPageList.currentPageId;
  const currentPageName = entitiesPageList.pages.find((page: any) => page.pageId === currentPageId)?.pageName


  // canvasWidgetsStructure
  const widgetsStructure = entitiesActorState.context.canvasWidgetsStructure;




  // guards
  const isPageHasWidgets = widgetsStructure.children && widgetsStructure.children.length > 0;

  return {
    entitiesActorRef,
    entitiesActorState,
    sendToEntitiesActor,

    entitiesContext,
    entitiesWidgetsStructure,
    entitiesCanvasWidgets,
    entitiesMetaWidgets,
    entitiesActions,
    entitiesDatasources,
    entitiesPageList,
    entitiesPlugins,
    entitiesMeta,
    entitiesJsActions,
    entitiesAutoHeightLayoutTree,
    entitiesCanvasLevels,
    entitiesLayoutElementPositions,
    entitiesModuleInstanceEntities,



    pageList,
    currentPageId,
    currentPageName,

    app,


    widgetsStructure,

    //guards
    isPageHasWidgets

  };
}
