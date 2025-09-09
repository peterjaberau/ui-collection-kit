import diff from "deep-diff"
import { applyChange } from "deep-diff"
import { klona } from "klona"
import { isObject } from "#illa/utils/typeHelper"
import { get, set, toPath, flatten, merge, unset } from "lodash"
import deepDiff from "deep-diff"
import { createMachine, setup, assign, spawnChild, enqueueActions, fromPromise } from "xstate"
import unescapeJS from "unescape-js"
import { Node, Options, parse } from "acorn"
import { ancestor } from "acorn-walk"
import toposort from "toposort"

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
const beginsWithLineBreakRegex = /^\s+|\s+$/
export enum NodeTypes {
  Identifier = "Identifier",
  AssignmentPattern = "AssignmentPattern",
  Literal = "Literal",
  Property = "Property",
  FunctionDeclaration = "FunctionDeclaration",
  ExportDefaultDeclaration = "ExportDefaultDeclaration",
  VariableDeclaration = "VariableDeclaration",
  VariableDeclarator = "VariableDeclarator",
  MemberExpression = "MemberExpression",
  FunctionExpression = "FunctionExpression",
  ArrowFunctionExpression = "ArrowFunctionExpression",
  AssignmentExpression = "AssignmentExpression",
  ObjectExpression = "ObjectExpression",
  ArrayExpression = "ArrayExpression",
  ThisExpression = "ThisExpression",
  CallExpression = "CallExpression",
  BinaryExpression = "BinaryExpression",
  ExpressionStatement = "ExpressionStatement",
  BlockStatement = "BlockStatement",
  ConditionalExpression = "ConditionalExpression",
  AwaitExpression = "AwaitExpression",
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
  let rest = dynamicString.substring(indexOfDoubleParenStart, dynamicString.length)
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
export const getSnippets = (dynamicString: string) => {
  if (!dynamicString || typeof dynamicString !== "string") {
    return { stringSnippets: [], jsSnippets: [] }
  }
  const sanitisedString = dynamicString.trim()
  let stringSnippets: string[], jsSnippets: string[]
  stringSnippets = getStringSnippets(sanitisedString)
  jsSnippets = stringSnippets.map((segment) => {
    const length = segment.length
    const matches = isDynamicStringSnippet(segment)
    if (matches) {
      return segment.substring(2, length - 2)
    }
    return ""
  })

  return { stringSnippets, jsSnippets }
}
export const extractReferencesFromScript = (script: string): string[] => {
  const newReference = new Set<string>()
  const { references }: any = extractIdentifierInfoFromCode(script)

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
export function sanitizeScript(js: string) {
  const trimmedJS = js.replace(beginsWithLineBreakRegex, "")
  return unescapeJS(trimmedJS)
}
export const wrapCode = (code: string) => {
  return `
      (function() {
        return ${code}
      })
    `
}
export const getAST = (code: string, options?: any) => parse(code, { ...options, ecmaVersion: 11 })
export const isMemberExpressionNode = (node: any) => {
  return node.type === NodeTypes.MemberExpression
}
export const isLiteralNode = (node: Node) => {
  return node.type === NodeTypes.Literal
}
export const isArrayAccessorNode = (node: any) => {
  return isMemberExpressionNode(node) && node.computed && isLiteralNode(node.property) && isFinite(node.property.value)
}
export const isIdentifierNode = (node: Node) => {
  return node.type === NodeTypes.Identifier
}
export function isString(obj: any): obj is string {
  return Object.prototype.toString.call(obj) === "[object String]"
}
export const isVariableDeclaration = (node: Node) => {
  return node.type === NodeTypes.VariableDeclaration
}
export const isFunctionDeclaration = (node: Node) => {
  return node.type === NodeTypes.FunctionDeclaration
}
export const isAssignmentPatternNode = (node: Node) => {
  return node.type === NodeTypes.AssignmentPattern
}
export const isFunctionExpression = (node: Node) => {
  return node.type === NodeTypes.FunctionExpression
}
export const isArrowFunctionExpression = (node: Node) => {
  return node.type === NodeTypes.ArrowFunctionExpression
}

//------------Dynamic---------------------
export const hasDynamicStringSnippet = (value: any): boolean => {
  if (typeof value !== "string") {
    return false
  }
  const dynamicStrings = getStringSnippets(value)
  return dynamicStrings.some((value: any) => isDynamicStringSnippet(value))
}
export const isDynamicStringSnippet = (value: any): boolean =>
  typeof value === "string" && value.endsWith("}}") && value.startsWith("{{")
export const getWidgetOrActionDynamicAttrPaths: any = (widgetOrAction: any) => {
  if (Array.isArray(widgetOrAction.$dynamicAttrPaths)) {
    return [...widgetOrAction.$dynamicAttrPaths]
  }
  return []
}
const generateDynamicAttrPaths = (current: string[], update: any) => {
  if (update.action === "ADD") {
    current.push(update.attrPath)
  } else if (update.action === "REMOVE") {
    current = current.filter((path) => path !== update.attrPath)
  }
  return current
}

// executionTreeUtils
export const getFunctionalParamsFromNode = (node: any, needValue = false) => {
  const functionalParams = new Set<any>()
  node.params.forEach((paramNode: any) => {
    if (isIdentifierNode(paramNode)) {
      functionalParams.add({
        paramName: paramNode.name,
        defaultValue: undefined,
      })
    } else if (isAssignmentPatternNode(paramNode)) {
      if (isIdentifierNode(paramNode.left)) {
        const paramName = paramNode.left.name
        if (!needValue) {
          functionalParams.add({ paramName, defaultValue: undefined })
        } else {
        }
      }
    }
  })
  return functionalParams
}
export const getFunctionalParamNamesFromNode = (node: any) => {
  return Array.from(getFunctionalParamsFromNode(node)).map((functionalParam) => functionalParam.paramName)
}

export const getPropertyAccessor = (propertyNode: any) => {
  if (isIdentifierNode(propertyNode)) {
    return `.${propertyNode.name}`
  } else if (isLiteralNode(propertyNode) && isString(propertyNode.value)) {
    return `.${propertyNode.value}`
  } else if (isLiteralNode(propertyNode) && isFinite(propertyNode.value)) {
    return `[${propertyNode.value}]`
  }
}
export const constructFinalMemberExpIdentifier: any = (node: any, child = "") => {
  const propertyAccessor = getPropertyAccessor(node.property)
  if (isIdentifierNode(node.object)) {
    return `${node.object.name}${propertyAccessor}${child}`
  } else {
    const propertyAccessor = getPropertyAccessor(node.property)
    const nestedChild = `${propertyAccessor}${child}`
    return constructFinalMemberExpIdentifier(node.object, nestedChild)
  }
}
export const ancestorWalk = (ast: any) => {
  const identifierList = new Array<any>()
  const references = new Set<string>()
  const variableDeclarations = new Set<string>()
  let functionalParams = new Set<string>()

  ancestor(ast, {
    Identifier(node: Node, ancestors: Node[]) {
      let candidateTopLevelNode: any = node
      let depth = ancestors.length - 2
      while (depth > 0) {
        const parent: any = ancestors[depth]
        if (isMemberExpressionNode(parent) && (!parent.computed || isArrayAccessorNode(parent)) && !parent.optional) {
          candidateTopLevelNode = parent
          depth = depth - 1
        } else {
          break
        }
      }
      const parentNode: any = ancestors[ancestors.length - 2]
      if (isMemberExpressionNode(parentNode)) {
        identifierList.push({
          ...node,
          property: parentNode.property,
        })
      } else identifierList.push(node)
      if (isIdentifierNode(candidateTopLevelNode)) {
        references.add(candidateTopLevelNode.name)
      } else {
        const memberExpIdentifier = constructFinalMemberExpIdentifier(candidateTopLevelNode)
        references.add(memberExpIdentifier)
      }
    },
    VariableDeclaration(node: any) {
      if (isVariableDeclaration(node))
        node.declarations.forEach((declaration: any) => {
          variableDeclarations.add(declaration.id.name)
        })
    },
    FunctionDeclaration(node: Node) {
      // params in function declarations are also counted as references so we keep
      // track of them and remove them from the final list of references
      if (!isFunctionDeclaration(node)) return
      functionalParams = new Set([...functionalParams, ...getFunctionalParamNamesFromNode(node)])
    },
    FunctionExpression(node: Node) {
      if (!isFunctionExpression(node)) return
      functionalParams = new Set([...functionalParams, ...getFunctionalParamNamesFromNode(node)])
    },
    ArrowFunctionExpression(node: Node) {
      if (!isArrowFunctionExpression(node)) return
      functionalParams = new Set([...functionalParams, ...getFunctionalParamNamesFromNode(node)])
    },
  })
  return {
    references,
    functionalParams,
    variableDeclarations,
    identifierList,
  }
}
export const extractIdentifierInfoFromCode = (code: string) => {
  let ast: Node = { end: 0, start: 0, type: "" } as any
  try {
    const sanitizedScript = sanitizeScript(code)
    const wrappedCode = wrapCode(sanitizedScript)
    ast = getAST(wrappedCode)
    const { functionalParams, references, variableDeclarations }: any = ancestorWalk(ast)
    const referencesArr = Array.from(references).filter((reference) => {
      return !(functionalParams.has(reference) || variableDeclarations.has(reference))
    })
    return {
      references: referencesArr,
      functionalParams: Array.from(functionalParams),
      variables: Array.from(variableDeclarations),
    }
  } catch (e) {
    if (e instanceof SyntaxError) {
      // Syntax error. Ignore and return empty list
      return {
        references: [],
        functionalParams: [],
        variables: [],
      }
    }
    throw e
  }
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
              const objectIndexPropertyPath = convertPathToString(toPath(`${basePropertyPath}.${key}`))
              filedConfig.childrenSetter?.forEach((childConfig: any) => {
                const childAttrPath = childConfig.attrName
                const expectedType = childConfig.expectedType
                if (Array.isArray(childAttrPath)) {
                  if (Array.isArray(expectedType)) {
                    childAttrPath.forEach((path, i) => {
                      set(
                        configValidationPaths,
                        convertPathToString(toPath(`${objectIndexPropertyPath}.${path}`)),
                        expectedType[i],
                      )
                    })
                  } else if (expectedType) {
                    childAttrPath.forEach((path) => {
                      set(
                        configValidationPaths,
                        convertPathToString(toPath(`${objectIndexPropertyPath}.${path}`)),
                        expectedType,
                      )
                    })
                  }
                } else {
                  if (expectedType) {
                    if (Array.isArray(expectedType)) {
                      set(
                        configValidationPaths,
                        convertPathToString(toPath(`${objectIndexPropertyPath}.${childAttrPath}`)),
                        expectedType[0],
                      )
                    } else if (expectedType) {
                      set(
                        configValidationPaths,
                        convertPathToString(toPath(`${objectIndexPropertyPath}.${childAttrPath}`)),
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
              const objectIndexPropertyPath = convertPathToString(toPath(`${basePropertyPath}.${key}`))
              filedConfig.childrenSetter?.forEach((childConfig: any) => {
                const expectedType = childConfig.expectedType
                if (!Array.isArray(expectedType) && expectedType) {
                  set(configValidationPaths, objectIndexPropertyPath, expectedType)
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
  const { content, transformer, actionID, resourceID, displayName, actionType, config, triggerMode } = action
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
  modifiedAction.$dynamicAttrPaths = [...((newProps?.$dynamicAttrPaths ?? []) as string[])]
  let context: any = {}

  modifiedAction.$context = context

  return modifiedAction
}

export const generateRawWidget = (widget: any) => {
  const mock = {
    input: {
      $dynamicAttrPaths: ["text"],
      colorScheme: "blue",
      hidden: false,
      text: "{{currentUserInfo.userID}}",
      variant: "fill",
      displayName: "btn_1",
      $parentNode: "bodySection1-bodySectionContainer1",
      $type: "WIDGET",
      $widgetType: "BUTTON_WIDGET",
      $childrenNode: [],
      $parentPageName: "page1",
    },
    output: {
      $dynamicAttrPaths: ["text"],
      colorScheme: "blue",
      hidden: false,
      text: "{{currentUserInfo.userID}}",
      variant: "fill",
      displayName: "btn_1",
      $parentNode: "bodySection1-bodySectionContainer1",
      $type: "WIDGET",
      $widgetType: "BUTTON_WIDGET",
      $childrenNode: [],
      $parentPageName: "page1",
      $validationPaths: {
        text: "String",
        loading: "Boolean",
        disabled: "Boolean",
        tooltipText: "String",
        hidden: "Boolean",
      },
    },
  }

  const { $widgetType } = widget
  const widgetConfig = widgetBuilder($widgetType)
  if (!widgetConfig) return widget
  const panelConfig = widgetConfig.panelConfig
  const { validationPaths } = generateAllTypePathsFromWidgetConfig(panelConfig, widget)

  return {
    ...widget,
    $validationPaths: validationPaths,
  }

  return {}
}
export const generateGlobalData = (globalData: any) => {
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
  const homepageDisplayName: string = rootNode.homepageDisplayName ?? pageNodes[0]
  pageNodes.forEach((pageNodeDisplayName) => {
    pageDisplayNameMapViewDisplayName[pageNodeDisplayName] = new Set()
    const pageNode = widgets[pageNodeDisplayName]
    const sectionNodes = pageNode.$childrenNode as any[]
    sectionNodes.forEach((sectionNodeDisplayName) => {
      const sectionNode = widgets[sectionNodeDisplayName]
      const sectionConfigs = (sectionNode.sectionViewConfigs as any[]) ?? []
      sectionConfigs.forEach((sectionConfig: any) => {
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
        id: "button-basic",
        groupName: "BASIC",
        children: [
          {
            id: "button-basic-Text",
            labelName: "Text",
            attrName: "text",
            setterType: "INPUT_SETTER",
            expectedType: "String",
          },
        ],
      },
    ],
    eventHandlerConfig: {
      events: [
        {
          label: "Click",
          value: "click",
        },
      ],
      methods: [],
    },
    widget: "",
  },
}
export const WidgetTypeList = Object.keys(WidgetConfigMap)
export const widgetBuilder = (type: any) => {
  return WidgetConfigMap[type]
}

//------------Component Node Utils---------------------
const getNewEffectByUpdateSlice: any = (path: string, rValue: any) => {
  if (isObject(rValue)) {
    return Object.keys(rValue)
      .map((key: string) => {
        const subPath = `${path}.${key}`
        return getNewEffectByUpdateSlice(subPath, rValue[key])
      })
      .flat()
  }
  if (Array.isArray(rValue)) {
    return rValue
      .map((item: any, index: number) => {
        const subPath = convertPathToString([path, `${index}`])
        return getNewEffectByUpdateSlice(subPath, item)
      })
      .flat()
  }
  const isRDynamic = hasDynamicStringSnippet(rValue)
  return { attrPath: path, action: isRDynamic ? "ADD" : "NONE" }
}
const getUpdateSlicePathAndEffect: any = (diff: any) => {
  const path = convertPathToString((diff?.path ?? []) as string[])
  switch (diff.kind) {
    case "N": {
      const { rhs } = diff
      if (!isObject(rhs) && !Array.isArray(rhs)) {
        let stringRValue: any = isObject(rhs) ? JSON.stringify(rhs) : rhs
        const isRDynamic = hasDynamicStringSnippet(stringRValue)

        return { attrPath: path, action: isRDynamic ? "ADD" : "NONE" }
      } else {
        return getNewEffectByUpdateSlice(path, rhs)
      }
    }
    case "D": {
      const { lhs } = diff
      let stringLValue: any = isObject(lhs) ? JSON.stringify(lhs) : lhs
      return {
        attrPath: path,
        action: stringLValue ? "REMOVE" : "NONE",
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
          action: "ADD",
        }
      }
      if (!isRDynamic && isLDynamic) {
        return {
          attrPath: path,
          action: "REMOVE",
        }
      }
      return {
        attrPath: path,
        action: "NONE",
      }
    }
    case "A": {
      return getUpdateSlicePathAndEffect({ ...diff.item, path: [...diff.path, diff.index] })
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

  const dynamicAttrPaths = dynamicAttrPathUpdates.reduce(generateDynamicAttrPaths, currentDynamicAttrPaths)

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
    if (
      ["userID", "nickname", "email", "avatar", "language", "createdAt", "updatedAt"].includes(key) &&
      currentUserInfo[key]
    ) {
      acc[key] = currentUserInfo[key]
    }
    return acc
  }, {})

  rawTree["builderInfo"] = builderInfo
  rawTree["currentUserInfo"] = canShownUserInfo
  rawTree["globalData"] = generateGlobalData(globalData)
  // rawTree['urlParams'] = generateUrlParams()
  rawTree["urlParams"] = {}
  // rawTree['localStorage'] = customStorage ? JSON.parse(customStorage) : {}
  rawTree["localStorage"] = {}
  rawTree["currentPageInfo"] = generateCurrentPageInfo()
  rawTree["pageInfos"] = generatePageInfos(widgets)

  return rawTree
}

//------------getRawTree - rawTreeFactory---------------------

const getActionList = () => {
  return []
}
const getAllComponentDisplayNameMapProps = () => {
  return {
    root: {
      currentPageIndex: 0,
      pageSortedKey: ["page1"],
      displayName: "root",
      $parentNode: "",
      $type: "WIDGET",
      $widgetType: "DOT_PANEL",
      $childrenNode: ["page1"],
    },
    page1: {
      bodyColumns: 32,
      bottomHeight: 0,
      canvasSize: "auto",
      canvasWidth: 100,
      footerColumns: 32,
      hasFooter: false,
      hasHeader: false,
      hasLeft: false,
      hasRight: false,
      headerColumns: 32,
      isFooterFixed: true,
      isHeaderFixed: true,
      isLeftFixed: true,
      isRightFixed: true,
      layout: "default",
      leftColumns: 8,
      leftPosition: "NONE",
      leftWidth: 0,
      rightColumns: 8,
      rightPosition: "NONE",
      rightWidth: 0,
      showLeftFoldIcon: false,
      showRightFoldIcon: false,
      topHeight: 0,
      displayName: "page1",
      $parentNode: "root",
      $type: "WIDGET",
      $widgetType: "PAGE_NODE",
      $childrenNode: ["bodySection1", "modalSection1"],
      $parentPageName: "page1",
    },
    bodySection1: {
      currentViewIndex: 0,
      defaultViewKey: "sub-page1",
      sectionViewConfigs: [
        {
          id: "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
          key: "sub-page1",
          path: "sub-page1",
          viewDisplayName: "bodySection1-bodySectionContainer1",
        },
      ],
      style: {
        padding: {
          mode: "all",
          size: "24",
        },
      },
      viewSortedKey: ["bodySection1-bodySectionContainer1"],
      displayName: "bodySection1",
      $parentNode: "page1",
      $type: "WIDGET",
      $widgetType: "SECTION_NODE",
      $childrenNode: ["bodySection1-bodySectionContainer1"],
      $parentPageName: "page1",
    },
    btn_1: {
      $dynamicAttrPaths: ["text"],
      colorScheme: "blue",
      hidden: false,
      text: "{{currentUserInfo.userID}}",
      variant: "fill",
      displayName: "btn_1",
      $parentNode: "bodySection1-bodySectionContainer1",
      $type: "WIDGET",
      $widgetType: "BUTTON_WIDGET",
      $childrenNode: [],
      $parentPageName: "page1",
    },
    modalSection1: {
      displayName: "modalSection1",
      $parentNode: "page1",
      $type: "WIDGET",
      $widgetType: "MODAL_SECTION_NODE",
      $childrenNode: [],
      $parentPageName: "page1",
    },
  }
}
const getCurrentUser = () => {
  return {
    userID: "ILAfx4p1C7dZ",
    uid: "158504d6-a47d-43a0-879e-79a57981cecc",
    nickname: "root",
    email: "root",
    avatar: "",
    language: "en-US",
    isTutorialViewed: true,
    createdAt: "2025-08-20T00:20:06.088056Z",
    updatedAt: "2025-08-20T00:29:59.556997Z",
  }
}
const getBuilderInfo = () => {
  return {
    version: "4.8.3",
    language: "English",
  }
}
const getOriginalGlobalData = () => {
  return {}
}

//------------executionTree - ExecutionTreeFactory---------------------
export const getExecutionInitialState = () => {
  return {
    dependenciesState: {},
    inDependencyTree: {},
    evalOrder: [],
    oldRawTree: {},
    hasCyclical: false,
    executedTree: {},
    errorTree: {},
    allKeys: {},
    runningActionsMap: {},
  }
}
export const destroyTree = () => {
  return {
    dependenciesState: {},
    inDependencyTree: {},
    evalOrder: [],
    oldRawTree: {},
    hasCyclical: false,
    executedTree: {},
    errorTree: {},
    allKeys: {},
    runningActionsMap: {},
  }
}

export const initTree = (rawTree: any) => {
  const currentRawTree = klona(rawTree)
  const oldRawTree = klona(currentRawTree)
  let dependenciesState = generateDependenciesMap(currentRawTree)
  let evalOrder = sortEvalOrder(dependenciesState)
  let inDependencyTree = this.generateInDependenciesMap()
}

export const generateDependenciesMap = (rawTree: any, evalOrder: any) => {
  let dependenciesMap: any = {}
  Object.keys(rawTree).forEach((displayName) => {
    const widgetProps = rawTree[displayName]
    const widgetOrActionDependencies = listEntityDependencies(widgetProps, displayName)
    dependenciesMap = { ...dependenciesMap, ...widgetOrActionDependencies }
  })
  Object.keys(dependenciesMap).forEach((key) => {
    dependenciesMap[key] = flatten(
      dependenciesMap[key].map((script: any) => {
        try {
          return extractReferencesFromScript(script)
        } catch (e) {
          return []
        }
      }),
    ).filter((path) => {
      const [currentDisplayName, ..._currentPaths]: any = toPath(key)
      const [targetDisplayName, ..._targetPaths]: any = toPath(path)
      const currentNode = rawTree[currentDisplayName]
      const targetNode = rawTree[targetDisplayName]
      if (!currentNode || !targetNode) return path
      if (currentNode.$type === "WIDGET" && targetNode.$type === "WIDGET")
        return currentNode.$parentPageName === targetNode.$parentPageName
      return path
    })
  })

  return dependenciesMap
}
export const generateInDependenciesMap = () => {
  const inverseDag: any = {}
  let evalOrderLocal = evalOrder
  evalOrderLocal.forEach((propertyPath: any) => {
    const incomingEdges: Array<string> = this.dependenciesState[propertyPath]
    if (incomingEdges) {
      incomingEdges.forEach((edge) => {
        const node = inverseDag[edge]
        if (node) {
          node.push(propertyPath)
        } else {
          inverseDag[edge] = [propertyPath]
        }
      })
    }
  })
  return inverseDag
}
export const listEntityDependencies = (widgetOrAction: any, displayName: string) => {
  let dependenciesMap: any = {}
  const dynamicAttrPaths: string[] = getWidgetOrActionDynamicAttrPaths(widgetOrAction)
  if (dynamicAttrPaths.length) {
    dynamicAttrPaths.forEach((attrPath) => {
      const originValue = get(widgetOrAction, attrPath)
      const { jsSnippets } = getSnippets(originValue)
      const existingDeps = dependenciesMap[`${displayName}.${attrPath}`] || []
      dependenciesMap[`${displayName}.${attrPath}`] = existingDeps.concat(jsSnippets.filter((jsSnippet) => !!jsSnippet))
    })
  }
  return dependenciesMap
}
export const sortEvalOrder = (dependenciesMap: any) => {
  let hasCyclical = false

  const dependencyTree: any = []
  Object.keys(dependenciesMap).forEach((key: string) => {
    if (dependenciesMap[key].length) {
      dependenciesMap[key].forEach((dep: any) => dependencyTree.push([key, dep]))
    } else {
      dependencyTree.push([key, ""])
    }
  })

  try {
    return toposort(dependencyTree)
      .reverse()
      .filter((d: any) => !!d)
  } catch (e) {
    hasCyclical = true
    if (e instanceof Error) {
      const nodes = e.message.match(new RegExp('Cyclic dependency, node was:"(.*)"'))
      if (nodes) {
        const node: any = nodes[1]
        const entityName = node.split(".")[0]
      }
    }
    throw new Error("Cyclic dependency")
  }
}

const getExecutionTree = () => {}

// same as handleStartExecution
export const startExecutionHandler = (/*actions, widgets, currentUserInfo, builderInfo, globalData*/) => {
  const actions = getActionList()
  const widgets = getAllComponentDisplayNameMapProps()
  const currentUserInfo = getCurrentUser()
  const builderInfo = getBuilderInfo()
  const globalData = getOriginalGlobalData()

  return {
    rawTree: rawTreeFactoryClass({
      actions,
      widgets,
      currentUserInfo,
      builderInfo,
      globalData,
    }),
    oldExecutionTree: {},
    executionTree: {
      dependenciesState: {},
      inDependencyTree: {},
      evalOrder: [],
      oldRawTree: {},
      hasCyclical: false,
      executedTree: {},
      errorTree: {},
      allKeys: {},
      runningActionsMap: {},
    },
  }
}

//------------initiate---------------------

//>>> initiating currentApp state
/* 1. currentApp.appInfo */
export const updateAppInfoReducer = (/*action*/) => {
  const action = {
    payload: {
      appId: "ILAfx4p1C7dV",
      uid: "b64ff14c-3a60-4925-883a-76d85e99d619",
      teamID: "ILAfx4p1C7d0",
      appName: "app-dynamic-string",
      releaseVersion: 2,
      mainlineVersion: 2,
      deployed: true,
      config: {
        public: false,
        waterMark: true,
        description: "",
        publishedToMarketplace: false,
        publishWithAIAgent: false,
        cover: "",
        appType: "pc",
        components: ["TEXT_WIDGET", "BUTTON_WIDGET", "CONTAINER_WIDGET"],
        actions: [],
      },
      updatedBy: "ILAfx4p1C7dZ",
      updatedAt: "2025-09-06T07:57:37.885943Z",
      appActivity: {
        modifier: "root",
        modifiedAt: "2025-09-06T07:57:37.885943Z",
      },
      editedBy: [
        {
          userID: "ILAfx4p1C7dZ",
          nickname: "root",
          email: "root",
          avatar: "",
          editedAt: "2025-09-06T07:57:37.88594371Z",
        },
      ],
    },
  }
}
/* 2. currentApp.components */
export const initComponentReducer = (/* action */) => {
  const action = {
    payload: {
      root: {
        version: 0,
        displayName: "root",
        parentNode: "",
        showName: "root",
        childrenNode: ["page1"],
        type: "DOT_PANEL",
        containerType: "EDITOR_DOT_PANEL",
        h: 0,
        w: 0,
        minH: 0,
        minW: 0,
        x: -1,
        y: -1,
        z: 0,
        props: {
          currentPageIndex: 0,
          pageSortedKey: ["page1"],
        },
      },
      page1: {
        version: 0,
        displayName: "page1",
        parentNode: "root",
        showName: "page",
        childrenNode: ["bodySection1", "modalSection1"],
        type: "PAGE_NODE",
        containerType: "EDITOR_PAGE_SQUARE",
        h: 0,
        w: 0,
        minH: 0,
        minW: 0,
        x: -1,
        y: -1,
        z: 0,
        props: {
          bodyColumns: 32,
          bottomHeight: 0,
          canvasSize: "auto",
          canvasWidth: 100,
          footerColumns: 32,
          hasFooter: false,
          hasHeader: false,
          hasLeft: false,
          hasRight: false,
          headerColumns: 32,
          isFooterFixed: true,
          isHeaderFixed: true,
          isLeftFixed: true,
          isRightFixed: true,
          layout: "default",
          leftColumns: 8,
          leftPosition: "NONE",
          leftWidth: 0,
          rightColumns: 8,
          rightPosition: "NONE",
          rightWidth: 0,
          showLeftFoldIcon: false,
          showRightFoldIcon: false,
          topHeight: 0,
        },
      },
      bodySection1: {
        version: 0,
        displayName: "bodySection1",
        parentNode: "page1",
        showName: "bodySection",
        childrenNode: ["bodySection1-bodySectionContainer1"],
        type: "SECTION_NODE",
        containerType: "EDITOR_LAYOUT_SQUARE",
        h: 0,
        w: 0,
        minH: 0,
        minW: 0,
        x: -1,
        y: -1,
        z: 0,
        props: {
          currentViewIndex: 0,
          defaultViewKey: "sub-page1",
          sectionViewConfigs: [
            {
              id: "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
              key: "sub-page1",
              path: "sub-page1",
              viewDisplayName: "bodySection1-bodySectionContainer1",
            },
          ],
          style: {
            padding: {
              mode: "all",
              size: "24",
            },
          },
          viewSortedKey: ["bodySection1-bodySectionContainer1"],
        },
      },
      "bodySection1-bodySectionContainer1": {
        version: 0,
        displayName: "bodySection1-bodySectionContainer1",
        parentNode: "bodySection1",
        showName: "bodySection1-bodySectionContainer1",
        childrenNode: ["btn_1"],
        type: "CONTAINER_NODE",
        containerType: "EDITOR_DOT_PANEL",
        h: 0,
        w: 0,
        minH: 0,
        minW: 0,
        x: -1,
        y: -1,
        z: 0,
        props: {},
      },
      btn_1: {
        version: 0,
        displayName: "btn_1",
        parentNode: "bodySection1-bodySectionContainer1",
        showName: "button",
        childrenNode: [],
        type: "BUTTON_WIDGET",
        containerType: "EDITOR_SCALE_SQUARE",
        h: 5,
        w: 6,
        minH: 3,
        minW: 1,
        x: 12,
        y: 34,
        z: 0,
        props: {
          $dynamicAttrPaths: ["text"],
          colorScheme: "blue",
          hidden: false,
          text: "{{currentUserInfo.userID}}",
          variant: "fill",
        },
      },
      modalSection1: {
        version: 0,
        displayName: "modalSection1",
        parentNode: "page1",
        showName: "modalSection",
        childrenNode: [],
        type: "MODAL_SECTION_NODE",
        containerType: "EDITOR_LAYOUT_SQUARE",
        h: 0,
        w: 0,
        minH: 0,
        minW: 0,
        x: -1,
        y: -1,
        z: 0,
        props: {},
      },
    },
  }
}
/* 3. currentApp.action */
export const initActionListReducer = (/* action */) => {
  const action = { payload: [] }
}

//>>> executing currentApp
/* 4. currentApp.execution */
/*
  - startExecutionReducer
    - handleStartExecution()
      - setExecutionResultReducer()
*/
export const startExecutionReducer = (/* action */) => {
  const action = { payload: {} }
}

export const handleStartExecution = (/*action*/) => {
  const action = {
    type: "execution/startExecutionReducer",
  }

  // const rawTree = getRawTree(rootState)
  const rawTree = {
    root: {
      currentPageIndex: 0,
      pageSortedKey: ["page1"],
      displayName: "root",
      $parentNode: "",
      $type: "WIDGET",
      $widgetType: "DOT_PANEL",
      $childrenNode: ["page1"],
    },
    page1: {
      bodyColumns: 32,
      bottomHeight: 0,
      canvasSize: "auto",
      canvasWidth: 100,
      footerColumns: 32,
      hasFooter: false,
      hasHeader: false,
      hasLeft: false,
      hasRight: false,
      headerColumns: 32,
      isFooterFixed: true,
      isHeaderFixed: true,
      isLeftFixed: true,
      isRightFixed: true,
      layout: "default",
      leftColumns: 8,
      leftPosition: "NONE",
      leftWidth: 0,
      rightColumns: 8,
      rightPosition: "NONE",
      rightWidth: 0,
      showLeftFoldIcon: false,
      showRightFoldIcon: false,
      topHeight: 0,
      displayName: "page1",
      $parentNode: "root",
      $type: "WIDGET",
      $widgetType: "PAGE_NODE",
      $childrenNode: ["bodySection1", "modalSection1"],
      $parentPageName: "page1",
    },
    bodySection1: {
      currentViewIndex: 0,
      defaultViewKey: "sub-page1",
      sectionViewConfigs: [
        {
          id: "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
          key: "sub-page1",
          path: "sub-page1",
          viewDisplayName: "bodySection1-bodySectionContainer1",
        },
      ],
      style: {
        padding: {
          mode: "all",
          size: "24",
        },
      },
      viewSortedKey: ["bodySection1-bodySectionContainer1"],
      displayName: "bodySection1",
      $parentNode: "page1",
      $type: "WIDGET",
      $widgetType: "SECTION_NODE",
      $childrenNode: ["bodySection1-bodySectionContainer1"],
      $parentPageName: "page1",
    },
    btn_1: {
      $dynamicAttrPaths: ["text"],
      colorScheme: "blue",
      hidden: false,
      text: "{{currentUserInfo.userID}}",
      variant: "fill",
      displayName: "btn_1",
      $parentNode: "bodySection1-bodySectionContainer1",
      $type: "WIDGET",
      $widgetType: "BUTTON_WIDGET",
      $childrenNode: [],
      $parentPageName: "page1",
      $validationPaths: {
        text: "String",
        loading: "Boolean",
        disabled: "Boolean",
        tooltipText: "String",
        hidden: "Boolean",
      },
    },
    modalSection1: {
      displayName: "modalSection1",
      $parentNode: "page1",
      $type: "WIDGET",
      $widgetType: "MODAL_SECTION_NODE",
      $childrenNode: [],
      $parentPageName: "page1",
    },
    builderInfo: {
      version: "4.8.3",
      language: "English",
    },
    currentUserInfo: {
      userID: "ILAfx4p1C7dZ",
      nickname: "root",
      email: "root",
      language: "en-US",
      createdAt: "2025-08-20T00:20:06.088056Z",
      updatedAt: "2025-08-20T00:29:59.556997Z",
    },
    globalData: {
      $dynamicAttrPaths: [],
    },
    urlParams: {
      query: {},
      url: "http://localhost:3000/0/app/ILAfx4p1C7dU",
      appURL: "http://localhost:3000/0/app/ILAfx4p1C7dU",
    },
    localStorage: {},
    currentPageInfo: {
      pagePath: "{{root.pageSortedKey[root.currentPageIndex]}}",
      subPagePath: "{{root.currentSubPagePath}}",
      $dynamicAttrPaths: ["pagePath", "subPagePath"],
    },
    pageInfos: [
      {
        pagePath: "/page1",
        subPagePath: "/page1/sub-page1",
        pageName: "page1",
        subPageName: "sub-page1",
        isHomePage: true,
        subPageGroup: "",
      },
    ],
  }

  // const oldExecutionTree = getExecutionResult(rootState)
  const oldExecutionTree = {}

  //executionTree
  let executionTree = null
  if (!executionTree) {
    executionTree = {
      dependenciesState: {},
      inDependencyTree: {},
      evalOrder: [],
      oldRawTree: {},
      hasCyclical: false,
      executedTree: {},
      errorTree: {},
      allKeys: {},
      runningActionsMap: {},
    }
    // executionTree = new ExecutionTreeFactory()
    // const executionResult = executionTree.initTree(rawTree)

    executionTree = {
      dependenciesState: {
        "btn_1.text": ["currentUserInfo.userID"],
        "currentPageInfo.pagePath": ["root.pageSortedKey", "root.currentPageIndex"],
        "currentPageInfo.subPagePath": ["root.currentSubPagePath"],
      },
      inDependencyTree: {
        "root.currentSubPagePath": ["currentPageInfo.subPagePath"],
        "root.pageSortedKey": ["currentPageInfo.pagePath"],
        "root.currentPageIndex": ["currentPageInfo.pagePath"],
        "currentUserInfo.userID": ["btn_1.text"],
      },
      evalOrder: [
        "root.currentSubPagePath",
        "currentPageInfo.subPagePath",
        "root.currentPageIndex",
        "root.pageSortedKey",
        "currentPageInfo.pagePath",
        "currentUserInfo.userID",
        "btn_1.text",
      ],
      oldRawTree: {
        root: {
          currentPageIndex: 0,
          pageSortedKey: ["page1"],
          displayName: "root",
          $parentNode: "",
          $type: "WIDGET",
          $widgetType: "DOT_PANEL",
          $childrenNode: ["page1"],
        },
        page1: {
          bodyColumns: 32,
          bottomHeight: 0,
          canvasSize: "auto",
          canvasWidth: 100,
          footerColumns: 32,
          hasFooter: false,
          hasHeader: false,
          hasLeft: false,
          hasRight: false,
          headerColumns: 32,
          isFooterFixed: true,
          isHeaderFixed: true,
          isLeftFixed: true,
          isRightFixed: true,
          layout: "default",
          leftColumns: 8,
          leftPosition: "NONE",
          leftWidth: 0,
          rightColumns: 8,
          rightPosition: "NONE",
          rightWidth: 0,
          showLeftFoldIcon: false,
          showRightFoldIcon: false,
          topHeight: 0,
          displayName: "page1",
          $parentNode: "root",
          $type: "WIDGET",
          $widgetType: "PAGE_NODE",
          $childrenNode: ["bodySection1", "modalSection1"],
          $parentPageName: "page1",
        },
        bodySection1: {
          currentViewIndex: 0,
          defaultViewKey: "sub-page1",
          sectionViewConfigs: [
            {
              id: "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
              key: "sub-page1",
              path: "sub-page1",
              viewDisplayName: "bodySection1-bodySectionContainer1",
            },
          ],
          style: {
            padding: {
              mode: "all",
              size: "24",
            },
          },
          viewSortedKey: ["bodySection1-bodySectionContainer1"],
          displayName: "bodySection1",
          $parentNode: "page1",
          $type: "WIDGET",
          $widgetType: "SECTION_NODE",
          $childrenNode: ["bodySection1-bodySectionContainer1"],
          $parentPageName: "page1",
        },
        btn_1: {
          $dynamicAttrPaths: ["text"],
          colorScheme: "blue",
          hidden: false,
          text: "{{currentUserInfo.userID}}",
          variant: "fill",
          displayName: "btn_1",
          $parentNode: "bodySection1-bodySectionContainer1",
          $type: "WIDGET",
          $widgetType: "BUTTON_WIDGET",
          $childrenNode: [],
          $parentPageName: "page1",
          $validationPaths: {
            text: "String",
            loading: "Boolean",
            disabled: "Boolean",
            tooltipText: "String",
            hidden: "Boolean",
          },
        },
        modalSection1: {
          displayName: "modalSection1",
          $parentNode: "page1",
          $type: "WIDGET",
          $widgetType: "MODAL_SECTION_NODE",
          $childrenNode: [],
          $parentPageName: "page1",
        },
        builderInfo: {
          version: "4.8.3",
          language: "English",
        },
        currentUserInfo: {
          userID: "ILAfx4p1C7dZ",
          nickname: "root",
          email: "root",
          language: "en-US",
          createdAt: "2025-08-20T00:20:06.088056Z",
          updatedAt: "2025-08-20T00:29:59.556997Z",
        },
        globalData: {
          $dynamicAttrPaths: [],
        },
        urlParams: {
          query: {},
          url: "http://localhost:3000/0/app/ILAfx4p1C7dU",
          appURL: "http://localhost:3000/0/app/ILAfx4p1C7dU",
        },
        localStorage: {},
        currentPageInfo: {
          pagePath: "{{root.pageSortedKey[root.currentPageIndex]}}",
          subPagePath: "{{root.currentSubPagePath}}",
          $dynamicAttrPaths: ["pagePath", "subPagePath"],
        },
        pageInfos: [
          {
            pagePath: "/page1",
            subPagePath: "/page1/sub-page1",
            pageName: "page1",
            subPageName: "sub-page1",
            isHomePage: true,
            subPageGroup: "",
          },
        ],
      },
      hasCyclical: false,
      executedTree: {
        root: {
          currentPageIndex: 0,
          pageSortedKey: ["page1"],
          displayName: "root",
          $parentNode: "",
          $type: "WIDGET",
          $widgetType: "DOT_PANEL",
          $childrenNode: ["page1"],
        },
        page1: {
          bodyColumns: 32,
          bottomHeight: 0,
          canvasSize: "auto",
          canvasWidth: 100,
          footerColumns: 32,
          hasFooter: false,
          hasHeader: false,
          hasLeft: false,
          hasRight: false,
          headerColumns: 32,
          isFooterFixed: true,
          isHeaderFixed: true,
          isLeftFixed: true,
          isRightFixed: true,
          layout: "default",
          leftColumns: 8,
          leftPosition: "NONE",
          leftWidth: 0,
          rightColumns: 8,
          rightPosition: "NONE",
          rightWidth: 0,
          showLeftFoldIcon: false,
          showRightFoldIcon: false,
          topHeight: 0,
          displayName: "page1",
          $parentNode: "root",
          $type: "WIDGET",
          $widgetType: "PAGE_NODE",
          $childrenNode: ["bodySection1", "modalSection1"],
          $parentPageName: "page1",
        },
        bodySection1: {
          currentViewIndex: 0,
          defaultViewKey: "sub-page1",
          sectionViewConfigs: [
            {
              id: "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
              key: "sub-page1",
              path: "sub-page1",
              viewDisplayName: "bodySection1-bodySectionContainer1",
            },
          ],
          style: {
            padding: {
              mode: "all",
              size: "24",
            },
          },
          viewSortedKey: ["bodySection1-bodySectionContainer1"],
          displayName: "bodySection1",
          $parentNode: "page1",
          $type: "WIDGET",
          $widgetType: "SECTION_NODE",
          $childrenNode: ["bodySection1-bodySectionContainer1"],
          $parentPageName: "page1",
        },
        btn_1: {
          $dynamicAttrPaths: ["text"],
          colorScheme: "blue",
          hidden: false,
          text: "ILAfx4p1C7dZ",
          variant: "fill",
          displayName: "btn_1",
          $parentNode: "bodySection1-bodySectionContainer1",
          $type: "WIDGET",
          $widgetType: "BUTTON_WIDGET",
          $childrenNode: [],
          $parentPageName: "page1",
          $validationPaths: {
            text: "String",
            loading: "Boolean",
            disabled: "Boolean",
            tooltipText: "String",
            hidden: "Boolean",
          },
        },
        modalSection1: {
          displayName: "modalSection1",
          $parentNode: "page1",
          $type: "WIDGET",
          $widgetType: "MODAL_SECTION_NODE",
          $childrenNode: [],
          $parentPageName: "page1",
        },
        builderInfo: {
          version: "4.8.3",
          language: "English",
        },
        currentUserInfo: {
          userID: "ILAfx4p1C7dZ",
          nickname: "root",
          email: "root",
          language: "en-US",
          createdAt: "2025-08-20T00:20:06.088056Z",
          updatedAt: "2025-08-20T00:29:59.556997Z",
        },
        globalData: {
          $dynamicAttrPaths: [],
        },
        urlParams: {
          query: {},
          url: "http://localhost:3000/0/app/ILAfx4p1C7dU",
          appURL: "http://localhost:3000/0/app/ILAfx4p1C7dU",
        },
        localStorage: {},
        currentPageInfo: {
          pagePath: "page1",
          $dynamicAttrPaths: ["pagePath", "subPagePath"],
        },
        pageInfos: [
          {
            pagePath: "/page1",
            subPagePath: "/page1/sub-page1",
            pageName: "page1",
            subPageName: "sub-page1",
            isHomePage: true,
            subPageGroup: "",
          },
        ],
      },
      errorTree: {},
      allKeys: {},
      runningActionsMap: {},
    }

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
export const setExecutionResultReducer = (/*action*/) => {
  const state = {
    dependencies: {},
    independencies: {},
    error: {},
    result: {},
  }
  const action: any = {
    payload: {
      updates: [
        {
          kind: "N",
          path: ["root"],
          rhs: {
            currentPageIndex: 0,
            pageSortedKey: ["page1"],
            displayName: "root",
            $parentNode: "",
            $type: "WIDGET",
            $widgetType: "DOT_PANEL",
            $childrenNode: ["page1"],
          },
        },
        {
          kind: "N",
          path: ["page1"],
          rhs: {
            bodyColumns: 32,
            bottomHeight: 0,
            canvasSize: "auto",
            canvasWidth: 100,
            footerColumns: 32,
            hasFooter: false,
            hasHeader: false,
            hasLeft: false,
            hasRight: false,
            headerColumns: 32,
            isFooterFixed: true,
            isHeaderFixed: true,
            isLeftFixed: true,
            isRightFixed: true,
            layout: "default",
            leftColumns: 8,
            leftPosition: "NONE",
            leftWidth: 0,
            rightColumns: 8,
            rightPosition: "NONE",
            rightWidth: 0,
            showLeftFoldIcon: false,
            showRightFoldIcon: false,
            topHeight: 0,
            displayName: "page1",
            $parentNode: "root",
            $type: "WIDGET",
            $widgetType: "PAGE_NODE",
            $childrenNode: ["bodySection1", "modalSection1"],
            $parentPageName: "page1",
          },
        },
        {
          kind: "N",
          path: ["bodySection1"],
          rhs: {
            currentViewIndex: 0,
            defaultViewKey: "sub-page1",
            sectionViewConfigs: [
              {
                id: "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
                key: "sub-page1",
                path: "sub-page1",
                viewDisplayName: "bodySection1-bodySectionContainer1",
              },
            ],
            style: {
              padding: {
                mode: "all",
                size: "24",
              },
            },
            viewSortedKey: ["bodySection1-bodySectionContainer1"],
            displayName: "bodySection1",
            $parentNode: "page1",
            $type: "WIDGET",
            $widgetType: "SECTION_NODE",
            $childrenNode: ["bodySection1-bodySectionContainer1"],
            $parentPageName: "page1",
          },
        },
        {
          kind: "N",
          path: ["btn_1"],
          rhs: {
            $dynamicAttrPaths: ["text"],
            colorScheme: "blue",
            hidden: false,
            text: "ILAfx4p1C7dZ",
            variant: "fill",
            displayName: "btn_1",
            $parentNode: "bodySection1-bodySectionContainer1",
            $type: "WIDGET",
            $widgetType: "BUTTON_WIDGET",
            $childrenNode: [],
            $parentPageName: "page1",
            $validationPaths: {
              text: "String",
              loading: "Boolean",
              disabled: "Boolean",
              tooltipText: "String",
              hidden: "Boolean",
            },
          },
        },
        {
          kind: "N",
          path: ["modalSection1"],
          rhs: {
            displayName: "modalSection1",
            $parentNode: "page1",
            $type: "WIDGET",
            $widgetType: "MODAL_SECTION_NODE",
            $childrenNode: [],
            $parentPageName: "page1",
          },
        },
        {
          kind: "N",
          path: ["builderInfo"],
          rhs: {
            version: "4.8.3",
            language: "English",
          },
        },
        {
          kind: "N",
          path: ["currentUserInfo"],
          rhs: {
            userID: "ILAfx4p1C7dZ",
            nickname: "root",
            email: "root",
            language: "en-US",
            createdAt: "2025-08-20T00:20:06.088056Z",
            updatedAt: "2025-08-20T00:29:59.556997Z",
          },
        },
        {
          kind: "N",
          path: ["globalData"],
          rhs: {
            $dynamicAttrPaths: [],
          },
        },
        {
          kind: "N",
          path: ["urlParams"],
          rhs: {
            query: {},
            url: "http://localhost:3000/0/app/ILAfx4p1C7dU",
            appURL: "http://localhost:3000/0/app/ILAfx4p1C7dU",
          },
        },
        {
          kind: "N",
          path: ["localStorage"],
          rhs: {},
        },
        {
          kind: "N",
          path: ["currentPageInfo"],
          rhs: {
            pagePath: "page1",
            $dynamicAttrPaths: ["pagePath", "subPagePath"],
          },
        },
        {
          kind: "N",
          path: ["pageInfos"],
          rhs: [
            {
              pagePath: "/page1",
              subPagePath: "/page1/sub-page1",
              pageName: "page1",
              subPageName: "sub-page1",
              isHomePage: true,
              subPageGroup: "",
            },
          ],
        },
      ],
    },
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
}

export const executionHandlerMachine = setup({
  types: {} as any,
  actions: {
    // fetch data - initial mock
    getActionList: assign(({ context, event }) => {
      context.input.actions = []
    }),
    getAllComponentDisplayNameMapProps: assign(({ context, event }) => {
      context.input.widgets = {
        root: {
          currentPageIndex: 0,
          pageSortedKey: ["page1"],
          displayName: "root",
          $parentNode: "",
          $type: "WIDGET",
          $widgetType: "DOT_PANEL",
          $childrenNode: ["page1"],
        },
        page1: {
          bodyColumns: 32,
          bottomHeight: 0,
          canvasSize: "auto",
          canvasWidth: 100,
          footerColumns: 32,
          hasFooter: false,
          hasHeader: false,
          hasLeft: false,
          hasRight: false,
          headerColumns: 32,
          isFooterFixed: true,
          isHeaderFixed: true,
          isLeftFixed: true,
          isRightFixed: true,
          layout: "default",
          leftColumns: 8,
          leftPosition: "NONE",
          leftWidth: 0,
          rightColumns: 8,
          rightPosition: "NONE",
          rightWidth: 0,
          showLeftFoldIcon: false,
          showRightFoldIcon: false,
          topHeight: 0,
          displayName: "page1",
          $parentNode: "root",
          $type: "WIDGET",
          $widgetType: "PAGE_NODE",
          $childrenNode: ["bodySection1", "modalSection1"],
          $parentPageName: "page1",
        },
        bodySection1: {
          currentViewIndex: 0,
          defaultViewKey: "sub-page1",
          sectionViewConfigs: [
            {
              id: "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
              key: "sub-page1",
              path: "sub-page1",
              viewDisplayName: "bodySection1-bodySectionContainer1",
            },
          ],
          style: {
            padding: {
              mode: "all",
              size: "24",
            },
          },
          viewSortedKey: ["bodySection1-bodySectionContainer1"],
          displayName: "bodySection1",
          $parentNode: "page1",
          $type: "WIDGET",
          $widgetType: "SECTION_NODE",
          $childrenNode: ["bodySection1-bodySectionContainer1"],
          $parentPageName: "page1",
        },
        btn_1: {
          $dynamicAttrPaths: ["text"],
          colorScheme: "blue",
          hidden: false,
          text: "{{currentUserInfo.userID}}",
          variant: "fill",
          displayName: "btn_1",
          $parentNode: "bodySection1-bodySectionContainer1",
          $type: "WIDGET",
          $widgetType: "BUTTON_WIDGET",
          $childrenNode: [],
          $parentPageName: "page1",
        },
        modalSection1: {
          displayName: "modalSection1",
          $parentNode: "page1",
          $type: "WIDGET",
          $widgetType: "MODAL_SECTION_NODE",
          $childrenNode: [],
          $parentPageName: "page1",
        },
      }
    }),
    getCurrentUser: assign(({ context, event }) => {
      context.input.currentUserInfo = {
        userID: "ILAfx4p1C7dZ",
        uid: "158504d6-a47d-43a0-879e-79a57981cecc",
        nickname: "root",
        email: "root",
        avatar: "",
        language: "en-US",
        isTutorialViewed: true,
        createdAt: "2025-08-20T00:20:06.088056Z",
        updatedAt: "2025-08-20T00:29:59.556997Z",
      }
    }),
    getBuilderInfo: assign(({ context, event }) => {
      context.input.builderInfo = {
        version: "4.8.3",
        language: "English",
      }
    }),
    getOriginalGlobalData: assign(({ context, event }) => {
      context.input.globalData = {}
    }),

    // rawTree
    generateRawAction: assign(({ context, event }) => {
      context.input.actions = []
    }),
    generateRawWidget: assign(({ context, event }) => {
      context.input.actions = []
    }),
    canShownUserInfo: assign(({ context, event }) => {
      context.input.actions = []
    }),
    generateGlobalData: assign(({ context, event }) => {
      context.input.actions = []
    }),
    generateUrlParams: assign(({ context, event }) => {
      context.input.actions = []
    }),
    generateCurrentPageInfo: assign(({ context, event }) => {
      context.input.actions = []
    }),
    generatePageInfos: assign(({ context, event }) => {
      context.input.actions = []
    }),
  },
  actors: {},
  guards: {},
}).createMachine({
  initial: "idle",
  context: ({ input }: any) => {
    return {
      input: {
        widgets: null,
        actions: [],
        builderInfo: null,
        currentUserInfo: null,
        globalData: null,
        ...input,
      },
      transform: {
        rawTree: {},
      },
      dependenciesState: {},
      inDependencyTree: {},
      evalOrder: {},
      oldRawTree: {},
      hasCyclical: false,
      executedTree: {},
      errorTree: {},
      allKeys: {},
      runningActionsMap: {},
    }
  },
  states: {
    idle: {
      entry: enqueueActions(({ context, event, enqueue }) => {
        // fetch data - initial mock
        enqueue("getActionList")
        enqueue("getAllComponentDisplayNameMapProps")
        enqueue("getCurrentUser")
        enqueue("getBuilderInfo")
        enqueue("getOriginalGlobalData")

        // rawTree
        enqueue("generateRawAction")
        enqueue("generateRawWidget")
        enqueue("canShownUserInfo")
        enqueue("generateGlobalData")
        enqueue("generateUrlParams")
        enqueue("generateCurrentPageInfo")
        enqueue("generatePageInfos")
      }),
    },
  },
})

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
    dependencyTree: {
      "btn_1.text": ["currentUserInfo.userID"],
      "currentPageInfo.pagePath": ["root.pageSortedKey", "root.currentPageIndex"],
      "currentPageInfo.subPagePath": ["root.currentSubPagePath"],
    },
    evaluatedTree: {
      root: {
        currentPageIndex: 0,
        pageSortedKey: ["page1"],
        displayName: "root",
        $parentNode: "",
        $type: "WIDGET",
        $widgetType: "DOT_PANEL",
        $childrenNode: ["page1"],
      },
      page1: {
        bodyColumns: 32,
        bottomHeight: 0,
        canvasSize: "auto",
        canvasWidth: 100,
        footerColumns: 32,
        hasFooter: false,
        hasHeader: false,
        hasLeft: false,
        hasRight: false,
        headerColumns: 32,
        isFooterFixed: true,
        isHeaderFixed: true,
        isLeftFixed: true,
        isRightFixed: true,
        layout: "default",
        leftColumns: 8,
        leftPosition: "NONE",
        leftWidth: 0,
        rightColumns: 8,
        rightPosition: "NONE",
        rightWidth: 0,
        showLeftFoldIcon: false,
        showRightFoldIcon: false,
        topHeight: 0,
        displayName: "page1",
        $parentNode: "root",
        $type: "WIDGET",
        $widgetType: "PAGE_NODE",
        $childrenNode: ["bodySection1", "modalSection1"],
        $parentPageName: "page1",
      },
      bodySection1: {
        currentViewIndex: 0,
        defaultViewKey: "sub-page1",
        sectionViewConfigs: [
          {
            id: "f5ac5fd4-7742-4a5f-9fcc-4f23a1aa4cf1",
            key: "sub-page1",
            path: "sub-page1",
            viewDisplayName: "bodySection1-bodySectionContainer1",
          },
        ],
        style: {
          padding: {
            mode: "all",
            size: "24",
          },
        },
        viewSortedKey: ["bodySection1-bodySectionContainer1"],
        displayName: "bodySection1",
        $parentNode: "page1",
        $type: "WIDGET",
        $widgetType: "SECTION_NODE",
        $childrenNode: ["bodySection1-bodySectionContainer1"],
        $parentPageName: "page1",
      },
      btn_1: {
        $dynamicAttrPaths: ["text"],
        colorScheme: "blue",
        hidden: false,
        text: "ILAfx4p1C7dZ",
        variant: "fill",
        displayName: "btn_1",
        $parentNode: "bodySection1-bodySectionContainer1",
        $type: "WIDGET",
        $widgetType: "BUTTON_WIDGET",
        $childrenNode: [],
        $parentPageName: "page1",
        $validationPaths: {
          text: "String",
          loading: "Boolean",
          disabled: "Boolean",
          tooltipText: "String",
          hidden: "Boolean",
        },
      },
      modalSection1: {
        displayName: "modalSection1",
        $parentNode: "page1",
        $type: "WIDGET",
        $widgetType: "MODAL_SECTION_NODE",
        $childrenNode: [],
        $parentPageName: "page1",
      },
      builderInfo: {
        version: "4.8.3",
        language: "English",
      },
      currentUserInfo: {
        userID: "ILAfx4p1C7dZ",
        nickname: "root",
        email: "root",
        language: "en-US",
        createdAt: "2025-08-20T00:20:06.088056Z",
        updatedAt: "2025-08-20T00:29:59.556997Z",
      },
      globalData: {
        $dynamicAttrPaths: [],
      },
      urlParams: {
        query: {},
        url: "http://localhost:3000/0/app/ILAfx4p1C7dU",
        appURL: "http://localhost:3000/0/app/ILAfx4p1C7dU",
      },
      localStorage: {},
      currentPageInfo: {
        pagePath: "page1",
        $dynamicAttrPaths: ["pagePath", "subPagePath"],
      },
      pageInfos: [
        {
          pagePath: "/page1",
          subPagePath: "/page1/sub-page1",
          pageName: "page1",
          subPageName: "sub-page1",
          isHomePage: true,
          subPageGroup: "",
        },
      ],
    },
    errorTree: {},
    independencyTree: {
      "root.currentSubPagePath": ["currentPageInfo.subPagePath"],
      "root.pageSortedKey": ["currentPageInfo.pagePath"],
      "root.currentPageIndex": ["currentPageInfo.pagePath"],
      "currentUserInfo.userID": ["btn_1.text"],
    },
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
