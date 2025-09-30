import { toRawExecutionTreeTransformer } from '#codemirror-illa/utils'
import { useRootStore } from "./store"

const [state]: any = useRootStore((s: any) => s.context)

/*
  currentUser Selectors
*/
export function getCurrentUser() {
  return state.currentUser
}

export function getCurrentUserEmail() {
  return state.currentUser.email
}

export function getCurrentUserID() {
  return state.currentUser.userID
}


export function getIsTutorialViewed() {
  return state.currentUser.isTutorialViewed
}

export function getCurrentUserIsLogin() {
  return state.currentUser.userID !== ""
}

export function getCurrentTranslateLanguage() {
  return state.currentUser?.language ?? "en-US"
}

export function getCanApplyAppSumo() {
  return  state.currentUser?.haveAppSumoSubscription &&
    !state.currentUser?.doesAppSumoSubscriptionAppliedToTeam
}

/*
  currentApp Selectors
*/
export function getCurrentApp() {
  return {}
}


/*
  currentApp Components Selectors
*/
export function searchDSLByDisplayName() {
  return {}
}

export function searchComponentFromMap() {
  return {}
}

export function searchDSLFromTree() {
  return {}
}

export function filterContainerNode(components: any) {
  let res = {}
  Object.keys(components).forEach((key) => {
    if (components[key].type !== "CONTAINER_NODE") {
      res = { ...res, [key]: components[key] }
    }
  })

  return res
}

export function flattenDslToArray() {
  return {}
}

export function getComponentMap() {
  return state.currentApp.components
}

export function getRootComponentNode() {
  const components = getComponentMap();
  return components.root
}

export function getComponentNodeBySingleSelected() {
  return {}
}

export function getAllDescendantNodeDisplayNames(
  nodeDisplayName: string,
  components: any
) {
  const node = components[nodeDisplayName]
  const queue = [node]
  let res: string[] = []
  while (queue.length > 0) {
    const head = queue[queue.length - 1]
    res.push(head.displayName)
    queue.pop()
    if (head.childrenNode) {
      head.childrenNode.forEach((child) => {
        if (components[child]) {
          queue.push(components[child])
        }
      })
    }
  }
  return res
}

export function getCurrentAppPageNames() {
  return {}
}

export function getPageNameMapDescendantNodeDisplayNames() {
  const components = getComponentMap()

  const rootNode = components.root
  const rootNodeProps = rootNode?.props

  if (!rootNode || !rootNodeProps || !rootNodeProps.pageSortedKey) return {}
  const pageDisplayNames = rootNodeProps.pageSortedKey as string[]
  const pageNameMapHasNodeDisplayNames: Record<string, string[]> = {}
  pageDisplayNames.forEach((pageDisplayName) => {
    const pageNode = components[pageDisplayName]
    if (!pageNode || !Array.isArray(pageNode.childrenNode)) return
    const descendantNodeDisplayNames = getAllDescendantNodeDisplayNames(
      pageNode.displayName,
      components,
    )
    pageNameMapHasNodeDisplayNames[pageDisplayName] =
      descendantNodeDisplayNames
  })
  return pageNameMapHasNodeDisplayNames

  return {}
}

export function getAllComponentDisplayNameMapProps() {

  const componentsMap = getComponentMap()
  const pageNameMapDescendantNodeDisplayNames = getPageNameMapDescendantNodeDisplayNames()

  if (componentsMap == null) {
    return null
  }
  const reversePageNameMapDescendantNodeDisplayNames: Record<string, string> =
    {}

  Object.keys(pageNameMapDescendantNodeDisplayNames).forEach((pageName) => {
    pageNameMapDescendantNodeDisplayNames[pageName].forEach((displayName) => {
      reversePageNameMapDescendantNodeDisplayNames[displayName] = pageName
    })
  })

  const filteredResult = filterContainerNode(componentsMap)
  if (!filteredResult) return
  const res: Record<string, any> = {}
  Object.keys(filteredResult).forEach((key) => {
    res[key] = {
      ...filteredResult[key].props,
      displayName: filteredResult[key].displayName,
      $parentNode: filteredResult[key].parentNode,
      $type: "WIDGET",
      $widgetType: filteredResult[key].type,
      $childrenNode: filteredResult[key].childrenNode,
      $parentPageName: reversePageNameMapDescendantNodeDisplayNames[key],
    }
  })
  return res

}

export function getAllComponentDisplayNameMapLayoutInfo() {
  return {}
}

export function getAllContainerWidget() {
  return {}
}

export function getFlattenArrayComponentNodes() {
  return {}
}

export function getCurrentPageNode() {
  return {}
}

export function getCurrentPageProps() {
  return {}
}

export function getCurrentPageDisplayName() {
  return {}
}

export function getRootNodeProps() {
  return {}
}

export function getContainerListWidget() {
  return {}
}

export function getContainerListDisplayNameMappedChildrenNodeDisplayName() {
  return {}
}

export function getViewportSizeSelector() {
  return {}
}

export function getNodeDepths() {
  return {}
}

export function getOriginalGlobalData() {
  const rootNode = getRootComponentNode()
  return (rootNode?.props?.globalData ?? {}) as Record<string, string>
}

export function getOriginalGlobalDataNames() {
  return {}
}

export function getGlobalDataToActionList() {
  return {}
}

export function getPageDisplayNameMapViewDisplayName() {
  return {}
}

export function getCurrentPageSortedKeys() {
  return {}
}

export function getWidgetCount() {
  return {}
}

/* currentApp Action Selectors ****************************************/
export function getActionList() {
  return state.currentApp.action
}

export function getActionIDMapAction() {
  return {}
}

export function getDisplayNameMapActions() {
  return {}
}

export function getActionMixedList() {
  return {}
}

export function getMissingResourceActionList() {
  return {}
}

export function getMissingResourceActionGroupByTutorialOrResourceID() {
  return {}
}

export function getHasMissingResourceAction() {
  return {}
}

/* currentApp Execution Selectors *************************************/
export function getRawTree() {

  const actions = getActionList() ?? []
  const widgets = getAllComponentDisplayNameMapProps() ?? {}
  const currentUserInfo = getCurrentUser()
  const builderInfo = getBuilderInfo()
  const globalData = getOriginalGlobalData()

  return toRawExecutionTreeTransformer({
    actions,
    widgets,
    currentUserInfo,
    builderInfo,
    globalData
  })
}

export function getExecution() {
  return getCurrentApp().execution
}

export function getExecutionResult() {
  return getExecution().result || {}
}

export function getExecutionError() {
  return getExecution().error ?? {}
}

export function getWidgetExecutionResult() {
  return {}
}

export function getPageExecutionResultArray() {
  return {}
}

export function getSectionExecutionResultArray() {
  return {}
}

export function getRootNodeExecutionResult() {
  return {}
}

export function getActionExecutionResult() {
  return {}
}

export function getActionExecutionResultWithOutIgnoreKey() {
  return {}
}

export function getActionExecutionResultArray() {
  return {}
}

export function getCurrentPageIndex() {
  return {}
}

// export function getCurrentPageDisplayName() {
// }

export function getExecutionResultToGlobalCodeMirror() {
  return {}
}

export function getExecutionResultToCurrentPageCodeMirror() {
  return {}
}

export function getDependenciesMap() {
  return {}
}

export function getInDependenciesMap() {
  return {}
}

export function getGlobalDataExecutionResult() {
  return {}
}

export function getBuilderInfoExecutionResult() {
  return {}
}

export function getCurrentUserInfoExecutionResult() {
  return {}
}

export function getURLParamsExecutionResult() {
  return {}
}

export function getLocalStorageExecutionResult() {
  return {}
}

export function getPageInfosExecutionResult() {
  return {}
}

export function getCurrentPageInfoExecutionResult() {
  return {}
}

export function getGlobalInfoExecutionResult() {
  return {}
}

export function getPageLoadingActions() {
  return {}
}

export function getAppLoadedActions() {
  return {}
}

export function getIntervalActions() {
  return {}
}

export function getCurrentPageWidgetExecutionResultArray() {
  return {}
}

export function getCurrentPageGeneralWidgetExecutionResultArray() {
  return {}
}

export function getCurrentPageModalWidgetExecutionResultArray() {
  return {}
}

export function getTargetSectionWidget() {
  return {}
}

export function getCurrentPageBodyWidgetTree() {
  return {}
}

export function getCurrentPageFooterWidgetTree() {
  return {}
}

export function getCurrentPageLeftWidgetTree() {
  return {}
}

export function getCurrentPageHeaderWidgetTree() {
  return {}
}

export function getCurrentPageRightWidgetTree() {
  return {}
}

export function getCurrentPageModalWidgetTree() {
  return {}
}

export function getDraggingComponentIDs() {
  return {}
}

export function getResizingComponentIDs() {
  return {}
}

export function getIsDragging() {
  return {}
}

export function getIsResizing() {
  return {}
}

export function getCurrentPageStyle() {
  return {}
}

export function getCurrentPageExecutionResult() {
  return {}
}

export function getCurrentPageBodySection() {
  return {}
}

export function getCurrentPageLeftSection() {
  return {}
}

export function getCurrentPageRightSection() {
  return {}
}

export function getCurrentPageHeaderSection() {
  return {}
}

export function getCurrentPageFooterSection() {
  return {}
}

export function getCurrentPageModalSection() {
  return {}
}


/*
  builder Info Selectors
*/

export function getBuilderInfo() {
  return state.builderInfo
}


export function getLanguageValue() {
  return state.builderInfo.language
}
