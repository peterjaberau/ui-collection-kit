import _, { get, isEmpty, omit } from "lodash";

// move to widgetConstants
export const WIDGET_PROPS_TO_SKIP_FROM_EVAL = {
  children: true,
  parentId: true,
  renderMode: true,
  detachFromLayout: true,
  noContainerOffset: false,
  hideCard: true,
  isDeprecated: true,
  searchTags: true,
  iconSVG: true,
  thumbnailSVG: true,
  version: true,
  displayName: true,
  topRowBeforeCollapse: false,
  bottomRowBeforeCollapse: false,
  tags: false,
};


export const generateDataTreeModuleInputs = (moduleInputs: any) => {
  return {
    unEvalEntity: null,
    configEntity: null,
  };
}


export const generateModuleInstance = (moduleInstance: any, moduleInstanceEntities: any) => {
  return {
    configEntity: null,
    unEvalEntity: null,
  };
}

export const generateDataTreeWidget = (
  widget, widgetMetaProps, loadingEntities, layoutSystemType = 'FIXED', isMobile = false
) => {

}


export const generateDataTreeWidgetWithoutMeta = (widgetWithEval) => {
  const widget = omit(widgetWithEval, Object.keys(WIDGET_PROPS_TO_SKIP_FROM_EVAL));
  const derivedProps: any = {};
  const blockedDerivedProps: any = {};
  const unInitializedDefaultProps: any = {};
  const propertyOverrideDependency: any = {};
  const overridingPropertyPaths: any = {};

  const defaultMetaProps = {}
}
