import diff from "deep-diff"
import { applyChange } from "deep-diff"
import { klona } from "klona"
import { isObject } from "#illa/utils/typeHelper"
import { get, set, toPath } from "lodash"
import deepDiff from "deep-diff"

/*
  workflow when loading builder app


  - useInitBuilderApp
  - updateCurrentAppInfo

*/

//------------constants---------------------
export enum VALIDATION_TYPES {
  STRING = "String",
  NUMBER = "Number",
  BOOLEAN = "Boolean",
  ARRAY = "Array",
  OBJECT = "Object",
  UNDEFINED = "Undefined",
  ANY = "any",
}
enum DynamicAttrPathActions {
  ADD = "ADD",
  REMOVE = "REMOVE",
  NONE = "NONE",
}

//------------utils---------------------
export function isLikInt(val: string | number): boolean {
  return Number.isInteger(val) || (typeof val === "string" && /^\d+$/.test(val))
}
export const convertPathToString: any = (attrPath: any[]) => {
  let string = ""
  attrPath.forEach((segment) => {
    if (isLikInt(segment)) {
      string = string + "[" + segment + "]"
    } else {
      if (string.length !== 0) {
        string = string + "."
      }
      string = string + segment
    }
  })
  return string
}
export const getStringSnippets: any = (dynamicString: string) => {

  let stringSnippets: string[] = []
  const indexOfDoubleParenStart = dynamicString.indexOf("{{")
  if (indexOfDoubleParenStart === -1) {
    return [dynamicString]
  }
  const firstString = dynamicString.substring(0, indexOfDoubleParenStart)
  if (firstString) stringSnippets.push(firstString)
  let rest = dynamicString.substring(
    indexOfDoubleParenStart,
    dynamicString.length,
  )
  let sum = 0
  for (let i = 0; i <= rest.length - 1; i++) {
    const char = rest[i]
    const prevChar = rest[i - 1]

    if (char === "{") {
      sum++
    } else if (char === "}") {
      sum--
      if (prevChar === "}" && sum === 0) {
        stringSnippets.push(rest.substring(0, i + 1))
        rest = rest.substring(i + 1, rest.length)
        if (rest) {
          stringSnippets = stringSnippets.concat(getStringSnippets(rest))
          break
        }
      }
    }
  }
  if (sum !== 0 && dynamicString !== "") {
    return [dynamicString]
  }
  return stringSnippets
}


//------------Dynamic---------------------
export const hasDynamicStringSnippet = (value: any): boolean => {
  if (typeof value !== "string") {
    return false
  }
  const dynamicStrings = getStringSnippets(value)
  return dynamicStrings.some((value: any) => isDynamicStringSnippet(value))
}
export const isDynamicStringSnippet = (value: any): boolean => typeof value === "string" && value.endsWith("}}") && value.startsWith("{{")
export const getWidgetOrActionDynamicAttrPaths: any = (widgetOrAction: any) => {
  if (Array.isArray(widgetOrAction.$dynamicAttrPaths)) {
    return [...widgetOrAction.$dynamicAttrPaths]
  }
  return []
}
const generateDynamicAttrPaths = (current: string[], update: any) => {
  if (update.action === 'ADD') {
    current.push(update.attrPath)
  } else if (update.action === 'REMOVE') {
    current = current.filter((path) => path !== update.attrPath)
  }
  return current
}


//------------generators---------------------
export const generateAllTypePathsFromWidgetConfig = (panelConfig: any[], widgetOrAction: any) => {
  let validationPaths: any = {}
  panelConfig.forEach((config: any) => {
    if (config.children) {
      const filedConfigs = config.children
      filedConfigs.forEach((filedConfig: any) => {
        const attrPath = filedConfig.attrName
        const configValidationPaths: any = {}

        if (Array.isArray(attrPath)) {
          const expectedType = filedConfig.expectedType
          if (Array.isArray(expectedType)) {
            attrPath.forEach((path, i) => {
              set(configValidationPaths, path, expectedType[i])
            })
          } else if (expectedType) {
            attrPath.forEach((path) => {
              set(configValidationPaths, path, expectedType)
            })
          }
        } else {
          if (filedConfig.expectedType) {
            const expectedType = filedConfig.expectedType

            if (Array.isArray(expectedType)) {
              set(configValidationPaths, attrPath, expectedType[0])
            } else if (expectedType) {
              set(configValidationPaths, attrPath, expectedType)
            }
          }
        }

        if (filedConfig.childrenSetter) {
          const basePropertyPath = filedConfig.attrName
          const widgetPropertyValue = get(widgetOrAction, basePropertyPath, [])
          if (Array.isArray(widgetPropertyValue)) {
            Object.keys(widgetPropertyValue).forEach((key) => {
              const objectIndexPropertyPath = convertPathToString(
                toPath(`${basePropertyPath}.${key}`),
              )
              filedConfig.childrenSetter?.forEach((childConfig: any) => {
                const childAttrPath = childConfig.attrName
                const expectedType = childConfig.expectedType
                if (Array.isArray(childAttrPath)) {
                  if (Array.isArray(expectedType)) {
                    childAttrPath.forEach((path, i) => {
                      set(
                        configValidationPaths,
                        convertPathToString(
                          toPath(`${objectIndexPropertyPath}.${path}`),
                        ),
                        expectedType[i],
                      )
                    })
                  } else if (expectedType) {
                    childAttrPath.forEach((path) => {
                      set(
                        configValidationPaths,
                        convertPathToString(
                          toPath(`${objectIndexPropertyPath}.${path}`),
                        ),
                        expectedType,
                      )
                    })
                  }
                } else {
                  if (expectedType) {
                    if (Array.isArray(expectedType)) {
                      set(
                        configValidationPaths,
                        convertPathToString(
                          toPath(`${objectIndexPropertyPath}.${childAttrPath}`),
                        ),
                        expectedType[0],
                      )
                    } else if (expectedType) {
                      set(
                        configValidationPaths,
                        convertPathToString(
                          toPath(`${objectIndexPropertyPath}.${childAttrPath}`),
                        ),
                        expectedType,
                      )
                    }
                  }
                }
              })
            })
          }
          if (isObject(widgetPropertyValue)) {
            Object.keys(widgetPropertyValue).forEach((key) => {
              const objectIndexPropertyPath = convertPathToString(
                toPath(`${basePropertyPath}.${key}`),
              )
              filedConfig.childrenSetter?.forEach((childConfig: any) => {
                const expectedType = childConfig.expectedType
                if (!Array.isArray(expectedType) && expectedType) {
                  set(
                    configValidationPaths,
                    objectIndexPropertyPath,
                    expectedType,
                  )
                }
              })
            })
          }
        }
        validationPaths = {
          ...validationPaths,
          ...configValidationPaths,
        }
      })
    }
  })

  return { validationPaths }
}

export const generateActionValidatePaths = () => {
  return {
    "config.advancedConfig.delayWhenLoaded": VALIDATION_TYPES.NUMBER,
    "config.advancedConfig.periodInterval": VALIDATION_TYPES.NUMBER,
  }
}
export const generateRawAction = (action: any) => {
  const {
    content,
    transformer,
    actionID,
    resourceID,
    displayName,
    actionType,
    config,
    triggerMode,
  } = action
  const modifiedAction: any = {
    $actionID: actionID,
    $resourceID: resourceID,
    displayName,
    actionType,
    $type: "ACTION",
    $dynamicAttrPaths: [],
  }
  if (actionType === "transformer") {
    modifiedAction.value = (content as any).transformerString
  } else {
    modifiedAction.data = undefined
    modifiedAction.content = content
    modifiedAction.config = config
    modifiedAction.triggerMode = triggerMode
    modifiedAction.transformer = transformer
    modifiedAction.$validationPaths = generateActionValidatePaths()
  }

  const newProps = getNewWidgetPropsByUpdateSlice(modifiedAction, {})
  modifiedAction.$dynamicAttrPaths = [
    ...((newProps?.$dynamicAttrPaths ?? []) as string[]),
  ]
  let context: any = {}

  modifiedAction.$context = context

  return modifiedAction
}

export const generateRawWidget = (widget: any) => {
  const mock = {
    input: {
      "$dynamicAttrPaths": [
        "text"
      ],
      "colorScheme": "blue",
      "hidden": false,
      "text": "{{currentUserInfo.userID}}",
      "variant": "fill",
      "displayName": "btn_1",
      "$parentNode": "bodySection1-bodySectionContainer1",
      "$type": "WIDGET",
      "$widgetType": "BUTTON_WIDGET",
      "$childrenNode": [],
      "$parentPageName": "page1"
    },
    output: {
      "$dynamicAttrPaths": [
        "text"
      ],
      "colorScheme": "blue",
      "hidden": false,
      "text": "{{currentUserInfo.userID}}",
      "variant": "fill",
      "displayName": "btn_1",
      "$parentNode": "bodySection1-bodySectionContainer1",
      "$type": "WIDGET",
      "$widgetType": "BUTTON_WIDGET",
      "$childrenNode": [],
      "$parentPageName": "page1",
      "$validationPaths": {
        "text": "String",
        "loading": "Boolean",
        "disabled": "Boolean",
        "tooltipText": "String",
        "hidden": "Boolean"
      }
    }
  }


  const { $widgetType } = widget
  const widgetConfig = widgetBuilder($widgetType)
  if (!widgetConfig) return widget
  const panelConfig = widgetConfig.panelConfig
  const { validationPaths } = generateAllTypePathsFromWidgetConfig(
    panelConfig,
    widget,
  )

  return {
    ...widget,
    $validationPaths: validationPaths,
  }

  return {}
}
export const generateGlobalData = (globalData:any) => {
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
  const pageNodes = rootNode.$childrenNode as any[]
  const homepageDisplayName: string =
    rootNode.homepageDisplayName ?? pageNodes[0]
  pageNodes.forEach((pageNodeDisplayName) => {
    pageDisplayNameMapViewDisplayName[pageNodeDisplayName] = new Set()
    const pageNode = widgets[pageNodeDisplayName]
    const sectionNodes = pageNode.$childrenNode as any[]
    sectionNodes.forEach((sectionNodeDisplayName) => {
      const sectionNode = widgets[sectionNodeDisplayName]
      const sectionConfigs =
        (sectionNode.sectionViewConfigs as any[]) ?? []
      sectionConfigs.forEach((sectionConfig: any) => {
        pageDisplayNameMapViewDisplayName[pageNodeDisplayName].add(sectionConfig.path)
      })
    })
  })
  const result: any[] = []
  Object.keys(pageDisplayNameMapViewDisplayName).forEach((pageDisplayName) => {
    const subPagePaths = Array.from(pageDisplayNameMapViewDisplayName[pageDisplayName],)
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





//------------widgetLibrary---------------------
export const WidgetConfigMap: any = {
  BUTTON_WIDGET: {
    config: {
      type: "BUTTON_WIDGET",
      displayName: "button",
      widgetName: "Button",
      keywords: ["Button"],
      icon: null,
      sessionType: "PRESENTATION",
      w: 6,
      h: 5,
      version: 0,
      defaults: {
        text: "Button",
        variant: "fill",
        colorScheme: "blue",
        hidden: false,
      },
    },
    panelConfig: [
      {
        "id": "button-basic",
        "groupName": "BASIC",
        "children": [
          {
            "id": "button-basic-Text",
            "labelName": "Text",
            "attrName": "text",
            "setterType": "INPUT_SETTER",
            "expectedType": "String"
          }
        ]
      }
    ],
    eventHandlerConfig: {
      events: [
        {
          label: "Click",
          value: "click"
        }
      ],
      methods: [],
    },
    widget: ""
  }
}
export const WidgetTypeList = Object.keys(WidgetConfigMap)
export const widgetBuilder = (type: any) => {
  return WidgetConfigMap[type]
}


//------------Component Node Utils---------------------
const getNewEffectByUpdateSlice: any = (path: string, rValue: any) => {
  if (isObject(rValue)) {
    return Object.keys(rValue).map((key: string) => {
        const subPath = `${path}.${key}`
        return getNewEffectByUpdateSlice(subPath, (rValue)[key])
      }).flat()
  }
  if (Array.isArray(rValue)) {
    return rValue.map((item: any, index: number) => {
        const subPath = convertPathToString([path, `${index}`])
        return getNewEffectByUpdateSlice(subPath, item)
      }).flat()
  }
  const isRDynamic = hasDynamicStringSnippet(rValue)
  return { attrPath: path, action: isRDynamic ? 'ADD' : 'NONE', }
}
const getUpdateSlicePathAndEffect: any = (diff: any) => {
  const path = convertPathToString((diff?.path ?? []) as string[])
  switch (diff.kind) {
    case "N": {
      const { rhs } = diff
      if (!isObject(rhs) && !Array.isArray(rhs)) {
        let stringRValue: any = isObject(rhs) ? JSON.stringify(rhs) : rhs
        const isRDynamic = hasDynamicStringSnippet(stringRValue)

        return { attrPath: path, action: isRDynamic ? 'ADD' : 'NONE', }
      } else {
        return getNewEffectByUpdateSlice(path, rhs)
      }
    }
    case "D": {
      const { lhs } = diff
      let stringLValue: any = isObject(lhs) ? JSON.stringify(lhs) : lhs
      return {
        attrPath: path,
        action: stringLValue ? 'REMOVE' : 'NONE',
      }
    }
    case "E": {
      const { lhs, rhs } = diff
      let stringRValue: any = isObject(rhs) ? JSON.stringify(rhs) : rhs
      let stringLValue: any = isObject(lhs) ? JSON.stringify(lhs) : lhs

      const isRDynamic = hasDynamicStringSnippet(stringRValue)
      const isLDynamic = hasDynamicStringSnippet(stringLValue)
      if (isRDynamic && !isLDynamic) {
        return {
          attrPath: path,
          action: 'ADD',
        }
      }
      if (!isRDynamic && isLDynamic) {
        return {
          attrPath: path,
          action: 'REMOVE',
        }
      }
      return {
        attrPath: path,
        action: 'NONE',
      }
    }
    case "A": {
      return getUpdateSlicePathAndEffect({ ...diff.item, path: [...(diff.path), diff.index], })
    }
  }
}

export const getNewWidgetPropsByUpdateSlice = (updateSlice: any, oldWidgetProps: any) => {
  let newWidgetProps = klona(oldWidgetProps)
  Object.keys(updateSlice).forEach((attrPath) => {
    set(newWidgetProps, attrPath, updateSlice[attrPath])
  })

  const diffs = deepDiff(oldWidgetProps, newWidgetProps)
  if (!Array.isArray(diffs)) return oldWidgetProps
  const dynamicAttrPathUpdates: any[] = diffs.map((diff) => getUpdateSlicePathAndEffect(diff)).flat()
  const currentDynamicAttrPaths = getWidgetOrActionDynamicAttrPaths(oldWidgetProps)

  const dynamicAttrPaths = dynamicAttrPathUpdates.reduce(generateDynamicAttrPaths, currentDynamicAttrPaths,)

  newWidgetProps.$dynamicAttrPaths = dynamicAttrPaths
  return newWidgetProps
}

//------------RawTreeFactory (rawTreeFactoryClass)---------------------
export const rawTreeFactoryClass = (seeds: any) => {

  const { widgets, actions, builderInfo, currentUserInfo, globalData }: any = seeds
  const rawTree: any = {}

  actions.forEach((action: any) => {
    rawTree[action.displayName] = generateRawAction(action)
  })

  Object.keys(widgets).forEach((key: any) => {
    rawTree[key] = generateRawWidget(widgets[key])
  })

  const canShownUserInfo = Object.keys(currentUserInfo).reduce((acc: any, key: any) => {
    if (["userID","nickname", "email", "avatar", "language", "createdAt", "updatedAt"].includes(key) && currentUserInfo[key]) {
      acc[key] = currentUserInfo[key]
    }
    return acc
  }, {})

  rawTree['builderInfo'] = builderInfo
  rawTree['currentUserInfo'] = canShownUserInfo
  rawTree['globalData'] = generateGlobalData(globalData)
  // rawTree['urlParams'] = generateUrlParams()
  rawTree['urlParams'] = {}
  // rawTree['localStorage'] = customStorage ? JSON.parse(customStorage) : {}
  rawTree['localStorage'] = {}
  rawTree['currentPageInfo'] = generateCurrentPageInfo()
  rawTree['pageInfos'] = generatePageInfos(widgets)

  return rawTree

}


//------------getRawTree---------------------

const getActionList = () => {
  return []
}
const getAllComponentDisplayNameMapProps = () => {
  return {
    "root": {
      "currentPageIndex": 0,
      "pageSortedKey": [
        "page1"
      ],
      "displayName": "root",
      "$parentNode": "",
      "$type": "WIDGET",
      "$widgetType": "DOT_PANEL",
      "$childrenNode": [
        "page1"
      ]
    },
    "page1": {
      "bodyColumns": 32,
      "bottomHeight": 0,
      "canvasSize": "auto",
      "canvasWidth": 100,
      "footerColumns": 32,
      "hasFooter": false,
      "hasHeader": false,
      "hasLeft": false,
      "hasRight": false,
      "headerColumns": 32,
      "isFooterFixed": true,
      "isHeaderFixed": true,
      "isLeftFixed": true,
      "isRightFixed": true,
      "layout": "default",
      "leftColumns": 8,
      "leftPosition": "NONE",
      "leftWidth": 0,
      "rightColumns": 8,
      "rightPosition": "NONE",
      "rightWidth": 0,
      "showLeftFoldIcon": false,
      "showRightFoldIcon": false,
      "topHeight": 0,
      "displayName": "page1",
      "$parentNode": "root",
      "$type": "WIDGET",
      "$widgetType": "PAGE_NODE",
      "$childrenNode": [
        "bodySection1",
        "modalSection1"
      ],
      "$parentPageName": "page1"
    },
    "bodySection1": {
      "currentViewIndex": 0,
      "defaultViewKey": "sub-page1",
      "sectionViewConfigs": [
        {
          "id": "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
          "key": "sub-page1",
          "path": "sub-page1",
          "viewDisplayName": "bodySection1-bodySectionContainer1"
        }
      ],
      "style": {
        "padding": {
          "mode": "all",
          "size": "24"
        }
      },
      "viewSortedKey": [
        "bodySection1-bodySectionContainer1"
      ],
      "displayName": "bodySection1",
      "$parentNode": "page1",
      "$type": "WIDGET",
      "$widgetType": "SECTION_NODE",
      "$childrenNode": [
        "bodySection1-bodySectionContainer1"
      ],
      "$parentPageName": "page1"
    },
    "btn_1": {
      "$dynamicAttrPaths": [
        "text"
      ],
      "colorScheme": "blue",
      "hidden": false,
      "text": "{{currentUserInfo.userID}}",
      "variant": "fill",
      "displayName": "btn_1",
      "$parentNode": "bodySection1-bodySectionContainer1",
      "$type": "WIDGET",
      "$widgetType": "BUTTON_WIDGET",
      "$childrenNode": [],
      "$parentPageName": "page1"
    },
    "modalSection1": {
      "displayName": "modalSection1",
      "$parentNode": "page1",
      "$type": "WIDGET",
      "$widgetType": "MODAL_SECTION_NODE",
      "$childrenNode": [],
      "$parentPageName": "page1"
    }
  }
}
const getCurrentUser = () => {
  return {
    "userID": "ILAfx4p1C7dZ",
    "uid": "158504d6-a47d-43a0-879e-79a57981cecc",
    "nickname": "root",
    "email": "root",
    "avatar": "",
    "language": "en-US",
    "isTutorialViewed": true,
    "createdAt": "2025-08-20T00:20:06.088056Z",
    "updatedAt": "2025-08-20T00:29:59.556997Z"
  }
}
const getBuilderInfo = () => {
  return {
    "version": "4.8.3",
    "language": "English"
  }
}
const getOriginalGlobalData = () => {
  return {}
}


export const getRawTree = (/*actions, widgets, currentUserInfo, builderInfo, globalData*/) => {
  const actions = getActionList()
  const widgets = getAllComponentDisplayNameMapProps()
  const currentUserInfo = getCurrentUser()
  const builderInfo = getBuilderInfo()
  const globalData = getOriginalGlobalData()

  return rawTreeFactoryClass({
    actions,
    widgets,
    currentUserInfo,
    builderInfo,
    globalData
  })


}




export const useInitBuilderApp = () => {

  //1. useDestroyApp()

  //3. updateCurrentAppInfo()

  //4. fetchPrivateAppInitData

  //5. fetchResources

}

export const updateCurrentAppInfo = () => {
  //store.dispatch(configActions.updateIllaMode(mode))
  //store.dispatch(componentsActions.initComponentReducer(flatTreeToMap(fixedComponents)))
  //fixedActionToNewAction(data.actions)
  //DisplayNameGenerator.initApp(appId, teamID, uid)
  //DisplayNameGenerator.initApp(appId, teamID, uid)


  //store.dispatch(executionActions.startExecutionReducer())

}

// listeners
// executionListerners


const asyncExecutionDataToRedux = (/* executionResult, oldExecutionTree, listenerApi */) => {
 const executionResult = {
   "dependencyTree": {
     "btn_1.text": [
       "currentUserInfo.userID"
     ],
     "currentPageInfo.pagePath": [
       "root.pageSortedKey",
       "root.currentPageIndex"
     ],
     "currentPageInfo.subPagePath": [
       "root.currentSubPagePath"
     ]
   },
   "evaluatedTree": {
     "root": {
       "currentPageIndex": 0,
       "pageSortedKey": [
         "page1"
       ],
       "displayName": "root",
       "$parentNode": "",
       "$type": "WIDGET",
       "$widgetType": "DOT_PANEL",
       "$childrenNode": [
         "page1"
       ]
     },
     "page1": {
       "bodyColumns": 32,
       "bottomHeight": 0,
       "canvasSize": "auto",
       "canvasWidth": 100,
       "footerColumns": 32,
       "hasFooter": false,
       "hasHeader": false,
       "hasLeft": false,
       "hasRight": false,
       "headerColumns": 32,
       "isFooterFixed": true,
       "isHeaderFixed": true,
       "isLeftFixed": true,
       "isRightFixed": true,
       "layout": "default",
       "leftColumns": 8,
       "leftPosition": "NONE",
       "leftWidth": 0,
       "rightColumns": 8,
       "rightPosition": "NONE",
       "rightWidth": 0,
       "showLeftFoldIcon": false,
       "showRightFoldIcon": false,
       "topHeight": 0,
       "displayName": "page1",
       "$parentNode": "root",
       "$type": "WIDGET",
       "$widgetType": "PAGE_NODE",
       "$childrenNode": [
         "bodySection1",
         "modalSection1"
       ],
       "$parentPageName": "page1"
     },
     "bodySection1": {
       "currentViewIndex": 0,
       "defaultViewKey": "sub-page1",
       "sectionViewConfigs": [
         {
           "id": "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
           "key": "sub-page1",
           "path": "sub-page1",
           "viewDisplayName": "bodySection1-bodySectionContainer1"
         }
       ],
       "style": {
         "padding": {
           "mode": "all",
           "size": "24"
         }
       },
       "viewSortedKey": [
         "bodySection1-bodySectionContainer1"
       ],
       "displayName": "bodySection1",
       "$parentNode": "page1",
       "$type": "WIDGET",
       "$widgetType": "SECTION_NODE",
       "$childrenNode": [
         "bodySection1-bodySectionContainer1"
       ],
       "$parentPageName": "page1"
     },
     "btn_1": {
       "$dynamicAttrPaths": [
         "text"
       ],
       "colorScheme": "blue",
       "hidden": false,
       "text": "ILAfx4p1C7dZ",
       "variant": "fill",
       "displayName": "btn_1",
       "$parentNode": "bodySection1-bodySectionContainer1",
       "$type": "WIDGET",
       "$widgetType": "BUTTON_WIDGET",
       "$childrenNode": [],
       "$parentPageName": "page1",
       "$validationPaths": {
         "text": "String",
         "loading": "Boolean",
         "disabled": "Boolean",
         "tooltipText": "String",
         "hidden": "Boolean"
       }
     },
     "modalSection1": {
       "displayName": "modalSection1",
       "$parentNode": "page1",
       "$type": "WIDGET",
       "$widgetType": "MODAL_SECTION_NODE",
       "$childrenNode": [],
       "$parentPageName": "page1"
     },
     "builderInfo": {
       "version": "4.8.3",
       "language": "English"
     },
     "currentUserInfo": {
       "userID": "ILAfx4p1C7dZ",
       "nickname": "root",
       "email": "root",
       "language": "en-US",
       "createdAt": "2025-08-20T00:20:06.088056Z",
       "updatedAt": "2025-08-20T00:29:59.556997Z"
     },
     "globalData": {
       "$dynamicAttrPaths": []
     },
     "urlParams": {
       "query": {},
       "url": "http://localhost:3000/0/app/ILAfx4p1C7dU",
       "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dU"
     },
     "localStorage": {},
     "currentPageInfo": {
       "pagePath": "page1",
       "$dynamicAttrPaths": [
         "pagePath",
         "subPagePath"
       ]
     },
     "pageInfos": [
       {
         "pagePath": "/page1",
         "subPagePath": "/page1/sub-page1",
         "pageName": "page1",
         "subPageName": "sub-page1",
         "isHomePage": true,
         "subPageGroup": ""
       }
     ]
   },
   "errorTree": {},
   "independencyTree": {
     "root.currentSubPagePath": [
       "currentPageInfo.subPagePath"
     ],
     "root.pageSortedKey": [
       "currentPageInfo.pagePath"
     ],
     "root.currentPageIndex": [
       "currentPageInfo.pagePath"
     ],
     "currentUserInfo.userID": [
       "btn_1.text"
     ]
   }
 }

  const errorTree = executionResult.errorTree
  const evaluatedTree = executionResult.evaluatedTree
  const dependencyMap = executionResult.dependencyTree
  const independencyMap = executionResult.independencyTree

  // const updates = diff(oldExecutionTree, evaluatedTree) || []
  // listenerApi.setExecutionResultReducer({updates})
  // listenerApi.setDependenciesReducer({...dependencyMap})
  // listenerApi.setIndependenciesReducer({...independencyMap})
  // listenerApi.setExecutionErrorReducer({...errorTree}

}

export const setExecutionResultReducer = (/*state, action*/) => {

  const state = {
    dependencies: {},
    independencies: {},
    error: {},
    result: {}
  }
  console.debug('---updated state ---', state)

  const action = {
    "type": "execution/setExecutionResultReducer",
    "payload": {
      "updates": [
        {
          "kind": "N",
          "path": [
            "root"
          ],
          "rhs": {
            "currentPageIndex": 0,
            "pageSortedKey": [
              "page1"
            ],
            "displayName": "root",
            "$parentNode": "",
            "$type": "WIDGET",
            "$widgetType": "DOT_PANEL",
            "$childrenNode": [
              "page1"
            ]
          }
        },
        {
          "kind": "N",
          "path": [
            "page1"
          ],
          "rhs": {
            "bodyColumns": 32,
            "bottomHeight": 0,
            "canvasSize": "auto",
            "canvasWidth": 100,
            "footerColumns": 32,
            "hasFooter": false,
            "hasHeader": false,
            "hasLeft": false,
            "hasRight": false,
            "headerColumns": 32,
            "isFooterFixed": true,
            "isHeaderFixed": true,
            "isLeftFixed": true,
            "isRightFixed": true,
            "layout": "default",
            "leftColumns": 8,
            "leftPosition": "NONE",
            "leftWidth": 0,
            "rightColumns": 8,
            "rightPosition": "NONE",
            "rightWidth": 0,
            "showLeftFoldIcon": false,
            "showRightFoldIcon": false,
            "topHeight": 0,
            "displayName": "page1",
            "$parentNode": "root",
            "$type": "WIDGET",
            "$widgetType": "PAGE_NODE",
            "$childrenNode": [
              "bodySection1",
              "modalSection1"
            ],
            "$parentPageName": "page1"
          }
        },
        {
          "kind": "N",
          "path": [
            "bodySection1"
          ],
          "rhs": {
            "currentViewIndex": 0,
            "defaultViewKey": "sub-page1",
            "sectionViewConfigs": [
              {
                "id": "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
                "key": "sub-page1",
                "path": "sub-page1",
                "viewDisplayName": "bodySection1-bodySectionContainer1"
              }
            ],
            "style": {
              "padding": {
                "mode": "all",
                "size": "24"
              }
            },
            "viewSortedKey": [
              "bodySection1-bodySectionContainer1"
            ],
            "displayName": "bodySection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "SECTION_NODE",
            "$childrenNode": [
              "bodySection1-bodySectionContainer1"
            ],
            "$parentPageName": "page1"
          }
        },
        {
          "kind": "N",
          "path": [
            "btn_1"
          ],
          "rhs": {
            "$dynamicAttrPaths": [
              "text"
            ],
            "colorScheme": "blue",
            "hidden": false,
            "text": "ILAfx4p1C7dZ",
            "variant": "fill",
            "displayName": "btn_1",
            "$parentNode": "bodySection1-bodySectionContainer1",
            "$type": "WIDGET",
            "$widgetType": "BUTTON_WIDGET",
            "$childrenNode": [],
            "$parentPageName": "page1",
            "$validationPaths": {
              "text": "String",
              "loading": "Boolean",
              "disabled": "Boolean",
              "tooltipText": "String",
              "hidden": "Boolean"
            }
          }
        },
        {
          "kind": "N",
          "path": [
            "modalSection1"
          ],
          "rhs": {
            "displayName": "modalSection1",
            "$parentNode": "page1",
            "$type": "WIDGET",
            "$widgetType": "MODAL_SECTION_NODE",
            "$childrenNode": [],
            "$parentPageName": "page1"
          }
        },
        {
          "kind": "N",
          "path": [
            "builderInfo"
          ],
          "rhs": {
            "version": "4.8.3",
            "language": "English"
          }
        },
        {
          "kind": "N",
          "path": [
            "currentUserInfo"
          ],
          "rhs": {
            "userID": "ILAfx4p1C7dZ",
            "nickname": "root",
            "email": "root",
            "language": "en-US",
            "createdAt": "2025-08-20T00:20:06.088056Z",
            "updatedAt": "2025-08-20T00:29:59.556997Z"
          }
        },
        {
          "kind": "N",
          "path": [
            "globalData"
          ],
          "rhs": {
            "$dynamicAttrPaths": []
          }
        },
        {
          "kind": "N",
          "path": [
            "urlParams"
          ],
          "rhs": {
            "query": {},
            "url": "http://localhost:3000/0/app/ILAfx4p1C7dU",
            "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dU"
          }
        },
        {
          "kind": "N",
          "path": [
            "localStorage"
          ],
          "rhs": {}
        },
        {
          "kind": "N",
          "path": [
            "currentPageInfo"
          ],
          "rhs": {
            "pagePath": "page1",
            "$dynamicAttrPaths": [
              "pagePath",
              "subPagePath"
            ]
          }
        },
        {
          "kind": "N",
          "path": [
            "pageInfos"
          ],
          "rhs": [
            {
              "pagePath": "/page1",
              "subPagePath": "/page1/sub-page1",
              "pageName": "page1",
              "subPageName": "sub-page1",
              "isHomePage": true,
              "subPageGroup": ""
            }
          ]
        }
      ]
    }
  }

  const { updates } = action.payload
  if (updates.length === 0) {
    return state
  }

  for (const update of updates as any) {
    if (!Array.isArray(update.path) || update.path.length === 0) {
      continue
    }
    try {
      // @ts-ignore
      applyChange(state.result, undefined, update)
    } catch (e) {
      console.error(e)
    }
  }

  console.log('---updated state ---', state)
}


export const handleStartExecution = (/*action*/) => {

  const action = {
    "type": "execution/startExecutionReducer"
  }

  // const rawTree = getRawTree(rootState)
  const rawTree = {
    "root": {
      "currentPageIndex": 0,
      "pageSortedKey": [
        "page1"
      ],
      "displayName": "root",
      "$parentNode": "",
      "$type": "WIDGET",
      "$widgetType": "DOT_PANEL",
      "$childrenNode": [
        "page1"
      ]
    },
    "page1": {
      "bodyColumns": 32,
      "bottomHeight": 0,
      "canvasSize": "auto",
      "canvasWidth": 100,
      "footerColumns": 32,
      "hasFooter": false,
      "hasHeader": false,
      "hasLeft": false,
      "hasRight": false,
      "headerColumns": 32,
      "isFooterFixed": true,
      "isHeaderFixed": true,
      "isLeftFixed": true,
      "isRightFixed": true,
      "layout": "default",
      "leftColumns": 8,
      "leftPosition": "NONE",
      "leftWidth": 0,
      "rightColumns": 8,
      "rightPosition": "NONE",
      "rightWidth": 0,
      "showLeftFoldIcon": false,
      "showRightFoldIcon": false,
      "topHeight": 0,
      "displayName": "page1",
      "$parentNode": "root",
      "$type": "WIDGET",
      "$widgetType": "PAGE_NODE",
      "$childrenNode": [
        "bodySection1",
        "modalSection1"
      ],
      "$parentPageName": "page1"
    },
    "bodySection1": {
      "currentViewIndex": 0,
      "defaultViewKey": "sub-page1",
      "sectionViewConfigs": [
        {
          "id": "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
          "key": "sub-page1",
          "path": "sub-page1",
          "viewDisplayName": "bodySection1-bodySectionContainer1"
        }
      ],
      "style": {
        "padding": {
          "mode": "all",
          "size": "24"
        }
      },
      "viewSortedKey": [
        "bodySection1-bodySectionContainer1"
      ],
      "displayName": "bodySection1",
      "$parentNode": "page1",
      "$type": "WIDGET",
      "$widgetType": "SECTION_NODE",
      "$childrenNode": [
        "bodySection1-bodySectionContainer1"
      ],
      "$parentPageName": "page1"
    },
    "btn_1": {
      "$dynamicAttrPaths": [
        "text"
      ],
      "colorScheme": "blue",
      "hidden": false,
      "text": "{{currentUserInfo.userID}}",
      "variant": "fill",
      "displayName": "btn_1",
      "$parentNode": "bodySection1-bodySectionContainer1",
      "$type": "WIDGET",
      "$widgetType": "BUTTON_WIDGET",
      "$childrenNode": [],
      "$parentPageName": "page1",
      "$validationPaths": {
        "text": "String",
        "loading": "Boolean",
        "disabled": "Boolean",
        "tooltipText": "String",
        "hidden": "Boolean"
      }
    },
    "modalSection1": {
      "displayName": "modalSection1",
      "$parentNode": "page1",
      "$type": "WIDGET",
      "$widgetType": "MODAL_SECTION_NODE",
      "$childrenNode": [],
      "$parentPageName": "page1"
    },
    "builderInfo": {
      "version": "4.8.3",
      "language": "English"
    },
    "currentUserInfo": {
      "userID": "ILAfx4p1C7dZ",
      "nickname": "root",
      "email": "root",
      "language": "en-US",
      "createdAt": "2025-08-20T00:20:06.088056Z",
      "updatedAt": "2025-08-20T00:29:59.556997Z"
    },
    "globalData": {
      "$dynamicAttrPaths": []
    },
    "urlParams": {
      "query": {},
      "url": "http://localhost:3000/0/app/ILAfx4p1C7dU",
      "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dU"
    },
    "localStorage": {},
    "currentPageInfo": {
      "pagePath": "{{root.pageSortedKey[root.currentPageIndex]}}",
      "subPagePath": "{{root.currentSubPagePath}}",
      "$dynamicAttrPaths": [
        "pagePath",
        "subPagePath"
      ]
    },
    "pageInfos": [
      {
        "pagePath": "/page1",
        "subPagePath": "/page1/sub-page1",
        "pageName": "page1",
        "subPageName": "sub-page1",
        "isHomePage": true,
        "subPageGroup": ""
      }
    ]
  }


  // const oldExecutionTree = getExecutionResult(rootState)
  const oldExecutionTree = {}

  //executionTree
  let executionTree = null
  if (!executionTree) {

    executionTree = {
      "dependenciesState": {},
      "inDependencyTree": {},
      "evalOrder": [],
      "oldRawTree": {},
      "hasCyclical": false,
      "executedTree": {},
      "errorTree": {},
      "allKeys": {},
      "runningActionsMap": {}
    }
    // executionTree = new ExecutionTreeFactory()
    // const executionResult = executionTree.initTree(rawTree)


    executionTree = {
      "dependenciesState": {
        "btn_1.text": [
          "currentUserInfo.userID"
        ],
        "currentPageInfo.pagePath": [
          "root.pageSortedKey",
          "root.currentPageIndex"
        ],
        "currentPageInfo.subPagePath": [
          "root.currentSubPagePath"
        ]
      },
      "inDependencyTree": {
        "root.currentSubPagePath": [
          "currentPageInfo.subPagePath"
        ],
        "root.pageSortedKey": [
          "currentPageInfo.pagePath"
        ],
        "root.currentPageIndex": [
          "currentPageInfo.pagePath"
        ],
        "currentUserInfo.userID": [
          "btn_1.text"
        ]
      },
      "evalOrder": [
        "root.currentSubPagePath",
        "currentPageInfo.subPagePath",
        "root.currentPageIndex",
        "root.pageSortedKey",
        "currentPageInfo.pagePath",
        "currentUserInfo.userID",
        "btn_1.text"
      ],
      "oldRawTree": {
        "root": {
          "currentPageIndex": 0,
          "pageSortedKey": [
            "page1"
          ],
          "displayName": "root",
          "$parentNode": "",
          "$type": "WIDGET",
          "$widgetType": "DOT_PANEL",
          "$childrenNode": [
            "page1"
          ]
        },
        "page1": {
          "bodyColumns": 32,
          "bottomHeight": 0,
          "canvasSize": "auto",
          "canvasWidth": 100,
          "footerColumns": 32,
          "hasFooter": false,
          "hasHeader": false,
          "hasLeft": false,
          "hasRight": false,
          "headerColumns": 32,
          "isFooterFixed": true,
          "isHeaderFixed": true,
          "isLeftFixed": true,
          "isRightFixed": true,
          "layout": "default",
          "leftColumns": 8,
          "leftPosition": "NONE",
          "leftWidth": 0,
          "rightColumns": 8,
          "rightPosition": "NONE",
          "rightWidth": 0,
          "showLeftFoldIcon": false,
          "showRightFoldIcon": false,
          "topHeight": 0,
          "displayName": "page1",
          "$parentNode": "root",
          "$type": "WIDGET",
          "$widgetType": "PAGE_NODE",
          "$childrenNode": [
            "bodySection1",
            "modalSection1"
          ],
          "$parentPageName": "page1"
        },
        "bodySection1": {
          "currentViewIndex": 0,
          "defaultViewKey": "sub-page1",
          "sectionViewConfigs": [
            {
              "id": "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
              "key": "sub-page1",
              "path": "sub-page1",
              "viewDisplayName": "bodySection1-bodySectionContainer1"
            }
          ],
          "style": {
            "padding": {
              "mode": "all",
              "size": "24"
            }
          },
          "viewSortedKey": [
            "bodySection1-bodySectionContainer1"
          ],
          "displayName": "bodySection1",
          "$parentNode": "page1",
          "$type": "WIDGET",
          "$widgetType": "SECTION_NODE",
          "$childrenNode": [
            "bodySection1-bodySectionContainer1"
          ],
          "$parentPageName": "page1"
        },
        "btn_1": {
          "$dynamicAttrPaths": [
            "text"
          ],
          "colorScheme": "blue",
          "hidden": false,
          "text": "{{currentUserInfo.userID}}",
          "variant": "fill",
          "displayName": "btn_1",
          "$parentNode": "bodySection1-bodySectionContainer1",
          "$type": "WIDGET",
          "$widgetType": "BUTTON_WIDGET",
          "$childrenNode": [],
          "$parentPageName": "page1",
          "$validationPaths": {
            "text": "String",
            "loading": "Boolean",
            "disabled": "Boolean",
            "tooltipText": "String",
            "hidden": "Boolean"
          }
        },
        "modalSection1": {
          "displayName": "modalSection1",
          "$parentNode": "page1",
          "$type": "WIDGET",
          "$widgetType": "MODAL_SECTION_NODE",
          "$childrenNode": [],
          "$parentPageName": "page1"
        },
        "builderInfo": {
          "version": "4.8.3",
          "language": "English"
        },
        "currentUserInfo": {
          "userID": "ILAfx4p1C7dZ",
          "nickname": "root",
          "email": "root",
          "language": "en-US",
          "createdAt": "2025-08-20T00:20:06.088056Z",
          "updatedAt": "2025-08-20T00:29:59.556997Z"
        },
        "globalData": {
          "$dynamicAttrPaths": []
        },
        "urlParams": {
          "query": {},
          "url": "http://localhost:3000/0/app/ILAfx4p1C7dU",
          "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dU"
        },
        "localStorage": {},
        "currentPageInfo": {
          "pagePath": "{{root.pageSortedKey[root.currentPageIndex]}}",
          "subPagePath": "{{root.currentSubPagePath}}",
          "$dynamicAttrPaths": [
            "pagePath",
            "subPagePath"
          ]
        },
        "pageInfos": [
          {
            "pagePath": "/page1",
            "subPagePath": "/page1/sub-page1",
            "pageName": "page1",
            "subPageName": "sub-page1",
            "isHomePage": true,
            "subPageGroup": ""
          }
        ]
      },
      "hasCyclical": false,
      "executedTree": {
        "root": {
          "currentPageIndex": 0,
          "pageSortedKey": [
            "page1"
          ],
          "displayName": "root",
          "$parentNode": "",
          "$type": "WIDGET",
          "$widgetType": "DOT_PANEL",
          "$childrenNode": [
            "page1"
          ]
        },
        "page1": {
          "bodyColumns": 32,
          "bottomHeight": 0,
          "canvasSize": "auto",
          "canvasWidth": 100,
          "footerColumns": 32,
          "hasFooter": false,
          "hasHeader": false,
          "hasLeft": false,
          "hasRight": false,
          "headerColumns": 32,
          "isFooterFixed": true,
          "isHeaderFixed": true,
          "isLeftFixed": true,
          "isRightFixed": true,
          "layout": "default",
          "leftColumns": 8,
          "leftPosition": "NONE",
          "leftWidth": 0,
          "rightColumns": 8,
          "rightPosition": "NONE",
          "rightWidth": 0,
          "showLeftFoldIcon": false,
          "showRightFoldIcon": false,
          "topHeight": 0,
          "displayName": "page1",
          "$parentNode": "root",
          "$type": "WIDGET",
          "$widgetType": "PAGE_NODE",
          "$childrenNode": [
            "bodySection1",
            "modalSection1"
          ],
          "$parentPageName": "page1"
        },
        "bodySection1": {
          "currentViewIndex": 0,
          "defaultViewKey": "sub-page1",
          "sectionViewConfigs": [
            {
              "id": "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
              "key": "sub-page1",
              "path": "sub-page1",
              "viewDisplayName": "bodySection1-bodySectionContainer1"
            }
          ],
          "style": {
            "padding": {
              "mode": "all",
              "size": "24"
            }
          },
          "viewSortedKey": [
            "bodySection1-bodySectionContainer1"
          ],
          "displayName": "bodySection1",
          "$parentNode": "page1",
          "$type": "WIDGET",
          "$widgetType": "SECTION_NODE",
          "$childrenNode": [
            "bodySection1-bodySectionContainer1"
          ],
          "$parentPageName": "page1"
        },
        "btn_1": {
          "$dynamicAttrPaths": [
            "text"
          ],
          "colorScheme": "blue",
          "hidden": false,
          "text": "ILAfx4p1C7dZ",
          "variant": "fill",
          "displayName": "btn_1",
          "$parentNode": "bodySection1-bodySectionContainer1",
          "$type": "WIDGET",
          "$widgetType": "BUTTON_WIDGET",
          "$childrenNode": [],
          "$parentPageName": "page1",
          "$validationPaths": {
            "text": "String",
            "loading": "Boolean",
            "disabled": "Boolean",
            "tooltipText": "String",
            "hidden": "Boolean"
          }
        },
        "modalSection1": {
          "displayName": "modalSection1",
          "$parentNode": "page1",
          "$type": "WIDGET",
          "$widgetType": "MODAL_SECTION_NODE",
          "$childrenNode": [],
          "$parentPageName": "page1"
        },
        "builderInfo": {
          "version": "4.8.3",
          "language": "English"
        },
        "currentUserInfo": {
          "userID": "ILAfx4p1C7dZ",
          "nickname": "root",
          "email": "root",
          "language": "en-US",
          "createdAt": "2025-08-20T00:20:06.088056Z",
          "updatedAt": "2025-08-20T00:29:59.556997Z"
        },
        "globalData": {
          "$dynamicAttrPaths": []
        },
        "urlParams": {
          "query": {},
          "url": "http://localhost:3000/0/app/ILAfx4p1C7dU",
          "appURL": "http://localhost:3000/0/app/ILAfx4p1C7dU"
        },
        "localStorage": {},
        "currentPageInfo": {
          "pagePath": "page1",
          "$dynamicAttrPaths": [
            "pagePath",
            "subPagePath"
          ]
        },
        "pageInfos": [
          {
            "pagePath": "/page1",
            "subPagePath": "/page1/sub-page1",
            "pageName": "page1",
            "subPageName": "sub-page1",
            "isHomePage": true,
            "subPageGroup": ""
          }
        ]
      },
      "errorTree": {},
      "allKeys": {},
      "runningActionsMap": {}
    };

    // asyncExecutionDataToRedux(executionResult, oldExecutionTree, listenerApi)
  } else {
    /*
     const isAddAction =
      action.type.startsWith("components/add") ||
      action.type.startsWith("action/add") ||
      action.type.startsWith("action/batchAdd") ||
      componentsActions.batchUpdateMultiComponentSlicePropsReducer.match(
        action,
      ) ||
      actionActions.batchUpdateMultiActionSlicePropsReducer.match(action)
    const executionResult = executionTree.updateTree(rawTree, isAddAction)
    asyncExecutionDataToRedux(executionResult, oldExecutionTree, listenerApi)
     */
  }

}
