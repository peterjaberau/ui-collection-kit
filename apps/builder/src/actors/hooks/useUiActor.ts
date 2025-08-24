import { useSelector } from '@xstate/react';
import { useRootActor } from './useRootActor';

export function useUiActor() {
  const { rootActorRef } = useRootActor();

  const uiActorRef = rootActorRef.system.get('ui');
  const sendToUi = uiActorRef.send;

  const uiState: any = useSelector(uiActorRef, (state) => state);
  const uiContext = uiState.context;


  const uiAnalytics = uiContext.analytics;
  const uiEditor = uiContext.editor;
  const uiErrors = uiContext.errors;
  const uiPropertyPane = uiContext.propertyPane;
  const uiTableFilterPane = uiContext.tableFilterPane;
  const uiAppView = uiContext.appView;
  const uiApplications = uiContext.applications;
  const uiAuth = uiContext.auth;
  const uiTemplates = uiContext.templates;
  const uiBuildingBlocks = uiContext.buildingBlocks;
  const uiWorkspaces = uiContext.workspaces;
  const uiSelectedWorkspace = uiContext.selectedWorkspace;
  const uiUsers = uiContext.users;
  const uiWidgetDragResize = uiContext.widgetDragResize;
  const uiImports = uiContext.imports;
  const uiDatasourcePane = uiContext.datasourcePane;
  const uiDatasourceName = uiContext.datasourceName;
  const uiHelp = uiContext.help;
  const uiApiName = uiContext.apiName;
  const uiExplorer = uiContext.explorer;
  const uiPageCanvasStructure = uiContext.pageCanvasStructure;
  const uiPageWidgets = uiContext.pageWidgets;
  const uiModalAction = uiContext.modalAction;
  const uiOnBoarding = uiContext.onBoarding;
  const uiGlobalSearch = uiContext.globalSearch;
  const uiReleases = uiContext.releases;
  const uiDebugger = uiContext.debugger;
  const uiTour = uiContext.tour;
  const uiJsPane = uiContext.jsPane;
  const uiJsObjectName = uiContext.jsObjectName;
  const uiCanvasSelection = uiContext.canvasSelection;
  const uiGitSync = uiContext.gitSync;
  const uiCrudInfoModal = uiContext.crudInfoModal;
  const uiWidgetReflow = uiContext.widgetReflow;
  const uiAppTheming = uiContext.appTheming;
  const uiMainCanvas = uiContext.mainCanvas;
  const uiAppSettingsPane = uiContext.appSettingsPane;
  const uiFocusHistory = uiContext.focusHistory;
  const uiEditorContext = uiContext.editorContext;
  const uiLibraries = uiContext.libraries;
  const uiAutoHeightUI = uiContext.autoHeightUI;
  const uiLayoutConversion = uiContext.layoutConversion;
  const uiActionSelector = uiContext.actionSelector;
  const uiOneClickBinding = uiContext.oneClickBinding;
  const uiActiveField = uiContext.activeField;
  const uiIde = uiContext.ide;
  const uiConsolidatedPageLoad = uiContext.consolidatedPageLoad;
  const uiPluginActionEditor = uiContext.pluginActionEditor;

  // selectors
  const currentApplication = uiApplications.currentApplication;

  // guards
  const isPreviewMode = uiEditor.isPreviewMode;

  return {
    uiActorRef,
    sendToUi,

    uiState,
    uiContext,

    uiAnalytics,
    uiEditor,
    uiErrors,
    uiPropertyPane,
    uiTableFilterPane,
    uiAppView,
    uiApplications,
    uiAuth,
    uiTemplates,
    uiBuildingBlocks,
    uiWorkspaces,
    uiSelectedWorkspace,
    uiUsers,
    uiWidgetDragResize,
    uiImports,
    uiDatasourcePane,
    uiDatasourceName,
    uiHelp,
    uiApiName,
    uiExplorer,
    uiPageCanvasStructure,
    uiPageWidgets,
    uiModalAction,
    uiOnBoarding,
    uiGlobalSearch,
    uiReleases,
    uiDebugger,
    uiTour,
    uiJsPane,
    uiJsObjectName,
    uiCanvasSelection,
    uiGitSync,
    uiCrudInfoModal,
    uiWidgetReflow,
    uiAppTheming,
    uiMainCanvas,
    uiAppSettingsPane,
    uiFocusHistory,
    uiEditorContext,
    uiLibraries,
    uiAutoHeightUI,
    uiLayoutConversion,
    uiActionSelector,
    uiOneClickBinding,
    uiActiveField,
    uiIde,
    uiConsolidatedPageLoad,
    uiPluginActionEditor,


    //selectors
    currentApplication,

    // guards
    isPreviewMode

  };
}
