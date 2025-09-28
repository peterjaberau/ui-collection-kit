import { parse } from "qs"
import { klona } from "klona"
import { toPath } from "lodash"
import {
  hasDynamicStringSnippet,
  isObject,
  VALIDATION_TYPES,
  generateAllTypePathsFromWidgetConfig,
  getNewWidgetPropsByUpdateSlice,
  extractIdentifierInfoFromCode,
  convertPathToString,
} from "#codemirror-illa/utils"


// global data
export const generateGlobalData = (globalData: Record<string, unknown>) => {
  const clonedGlobalData = klona(globalData)
  const $dynamicAttrPaths: string[] = []
  if (isObject(globalData)) {
    Object.keys(globalData).forEach((key) => {
      if (hasDynamicStringSnippet(globalData[key])) {
        $dynamicAttrPaths.push(key)
      }
    })
  }
  clonedGlobalData.$dynamicAttrPaths = $dynamicAttrPaths

  return clonedGlobalData
}

// current page
export const generateCurrentPageInfo = () => {
  return {
    pagePath: "{{root.pageSortedKey[root.currentPageIndex]}}",
    subPagePath: "{{root.currentSubPagePath}}",
    $dynamicAttrPaths: ["pagePath", "subPagePath"],
  }
}

export const generatePageInfos = (widgets: any) => {
  const rootNode = widgets.root
  if (!rootNode) return []
  const pageDisplayNameMapViewDisplayName: any = {}
  const pageNodes = rootNode.$childrenNode as string[]
  const homepageDisplayName: string = rootNode.homepageDisplayName ?? pageNodes[0]
  pageNodes.forEach((pageNodeDisplayName) => {
    pageDisplayNameMapViewDisplayName[pageNodeDisplayName] = new Set()
    const pageNode = widgets[pageNodeDisplayName]
    const sectionNodes = pageNode.$childrenNode as string[]
    sectionNodes.forEach((sectionNodeDisplayName) => {
      const sectionNode = widgets[sectionNodeDisplayName]
      const sectionConfigs = (sectionNode.sectionViewConfigs as Record<string, string>[]) ?? []
      sectionConfigs.forEach((sectionConfig: Record<string, string>) => {
        pageDisplayNameMapViewDisplayName[pageNodeDisplayName].add(sectionConfig.path)
      })
    })
  })
  const result: any[] = []
  Object.keys(pageDisplayNameMapViewDisplayName).forEach((pageDisplayName) => {
    const subPagePaths = Array.from(pageDisplayNameMapViewDisplayName[pageDisplayName])
    if (subPagePaths.length > 0) {
      subPagePaths.forEach((path, index, array) => {
        if (array.length === 1) {
          result.push({
            pagePath: `/${pageDisplayName}`,
            subPagePath: `/${pageDisplayName}/${path}`,
            pageName: pageDisplayName,
            subPageName: path,
            isHomePage: pageDisplayName === homepageDisplayName,
            subPageGroup: "",
          })
        } else {
          result.push({
            pagePath: `/${pageDisplayName}`,
            subPagePath: `/${pageDisplayName}/${path}`,
            pageName: pageDisplayName,
            subPageName: path,
            isHomePage: pageDisplayName === homepageDisplayName,
            subPageGroup: pageDisplayName,
          })
        }
      })
    } else {
      result.push({
        pagePath: `/${pageDisplayName}`,
        pageName: pageDisplayName,
        isHomePage: pageDisplayName === homepageDisplayName,
        subPageGroup: "",
      })
    }
  })

  return result
}

// raw action
export const generateActionValidatePaths = () => {
  return {
    "config.advancedConfig.delayWhenLoaded": VALIDATION_TYPES.NUMBER,
    "config.advancedConfig.periodInterval": VALIDATION_TYPES.NUMBER,
  }
}

export const generateRawAction = (action: any) => {
  const { content, transformer, actionID, resourceID, displayName, actionType, config, triggerMode }: any = action
  const modifiedAction: any = {
    $actionID: actionID,
    $resourceID: resourceID,
    displayName,
    actionType,
    $type: "ACTION",
    $dynamicAttrPaths: [],
  }
  if (actionType === "transformer") {
    modifiedAction.value = content.transformerString
  } else {
    modifiedAction.data = undefined
    modifiedAction.content = content
    modifiedAction.config = config
    modifiedAction.triggerMode = triggerMode
    modifiedAction.transformer = transformer
    modifiedAction.$validationPaths = generateActionValidatePaths()
  }

  const newProps = getNewWidgetPropsByUpdateSlice(modifiedAction, {})
  modifiedAction.$dynamicAttrPaths = [...((newProps?.$dynamicAttrPaths ?? []) as string[])]
  let context: Record<string, unknown> = {}

  modifiedAction.$context = context

  return modifiedAction
}

// raw widget
export const generateRawWidget = (widget: any, widgetBuilder: any) => {
  const { $widgetType } = widget
  const widgetConfig = widgetBuilder($widgetType)
  if (!widgetConfig) return widget
  const panelConfig = widgetConfig.panelConfig
  const { validationPaths } = generateAllTypePathsFromWidgetConfig(panelConfig, widget)

  return {
    ...widget,
    $validationPaths: validationPaths,
  }
}

// url params
export const generateUrlParams = (href: string, mode: "preview" | "edit" | "production" | "template-edit" = "preview" ) => {
  // const href = window.location.href
  const query: any = href.split("?")[1]
  const queryArray = parse(query)
  let appURL = href
  //TODO: production url
  // if (mode === "production") {
  // appURL = window.location.origin + window.location.pathname

  //   appURL = "#"
  // }

  const result = {
    query: queryArray,
    url: href,
    appURL,
  }
  return result
}

export const extractReferencesFromScript = (script: string): string[] => {
  const newReference = new Set<string>()
  const { references } = extractIdentifierInfoFromCode(script)

  references.forEach((identifier: string) => {
    newReference.add(identifier)
    const subPaths = toPath(identifier)
    let current = ""
    while (subPaths.length > 1) {
      current = convertPathToString(subPaths)
      newReference.add(current)
      subPaths.pop()
    }
  })
  return Array.from(newReference)
}

