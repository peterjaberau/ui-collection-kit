import {
  EVAL_ERROR_PATH,
  isChildPropertyPath,
  isDynamicValue,
  isPathDynamicTrigger,
  isPathADynamicBinding,
} from "#actor-utils/DynamicBindingUtils"
import _, { difference, get, has, isEmpty, isNil, set } from "lodash"
import { klona } from "klona/full"
import { warn as logWarn } from "loglevel"
import { validateWidgetProperty } from "workers/common/DataTreeEvaluator/validationUtils"
import { isWidgetActionOrJsObject } from "#actor-workers/core/DataTree/dataTreeUtils"

export const IMMEDIATE_PARENT_REGEX = /^(.*)(\..*|\[.*\])$/

export class CrashingError extends Error {}

export const convertPathToString = (arrPath: any) => {
  let string = ""

  arrPath.forEach((segment: any) => {
    if (isInt(segment)) {
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

function isInt(val: string | number): boolean {
  return Number.isInteger(val) || (_.isString(val) && /^\d+$/.test(val))
}

export function getEntityNameAndPropertyPath(fullPath: string): {
  entityName: string
  propertyPath: string
} {
  const indexOfFirstDot = fullPath.indexOf(".")

  if (indexOfFirstDot === -1) {
    // No dot was found so path is the entity name itself
    return {
      entityName: fullPath,
      propertyPath: "",
    }
  }

  const entityName = fullPath.substring(0, indexOfFirstDot)
  const propertyPath = fullPath.substring(indexOfFirstDot + 1)

  return { entityName, propertyPath }
}

export function translateCollectionDiffs(propertyPath: string, data: any, event: any) {
  const dataTreeDiffs: any[] = []

  if (Array.isArray(data)) {
    data.forEach((diff, idx) => {
      dataTreeDiffs.push({
        event,
        payload: {
          propertyPath: `${propertyPath}[${idx}]`,
        },
      })
    })
  } else if (isTrueObject(data)) {
    Object.keys(data).forEach((diffKey) => {
      const path = `${propertyPath}.${diffKey}`

      dataTreeDiffs.push({
        event,
        payload: {
          propertyPath: path,
        },
      })
    })
  }

  return dataTreeDiffs
}

const ignorePathsForEvalRegex = ".(reactivePaths|bindingPaths|triggerPaths|validationPaths|dynamicBindingPathList)"

const isUninterestingChangeForDependencyUpdate = (path: string) => {
  return path.match(ignorePathsForEvalRegex)
}

export const translateDiffEventToDataTreeDiffEvent = (difference: any, unEvalDataTree: any): any[] => {
  let result: any | any[] = {
    payload: {
      propertyPath: "",
      value: "",
    },
    event: "NOOP",
  }

  if (!difference.path) {
    return result
  }

  const propertyPath = convertPathToString(difference.path)

  // add propertyPath to NOOP event
  result.payload = {
    propertyPath,
    value: "",
  }

  //we do not need evaluate these paths because these are internal paths
  const isUninterestingPathForUpdateTree = isUninterestingChangeForDependencyUpdate(propertyPath)

  if (!!isUninterestingPathForUpdateTree) {
    return result
  }

  const { entityName } = getEntityNameAndPropertyPath(propertyPath)
  const entity = unEvalDataTree[entityName]
  const isJsAction = isJSAction(entity)

  switch (difference.kind) {
    case "N": {
      result.event = "NEW"
      result.payload = {
        propertyPath,
      }
      break
    }
    case "D": {
      result.event = "DELETE"
      result.payload = { propertyPath }
      break
    }
    case "E": {
      const rhsChange = typeof difference.rhs === "string" && (isDynamicValue(difference.rhs) || isJsAction)

      const lhsChange = typeof difference.lhs === "string" && (isDynamicValue(difference.lhs) || isJsAction)

      if (rhsChange || lhsChange) {
        result = [
          {
            event: difference.lhs === undefined ? "NEW" : "EDIT",
            payload: {
              propertyPath,
              value: difference.rhs,
            },
          },
        ]
        /**
         * If lhs is an array/object
         * Add delete events for all memberExpressions
         */

        const dataTreeDeleteDiffs = translateCollectionDiffs(propertyPath, difference.lhs, "DELETE")

        result = result.concat(dataTreeDeleteDiffs)
      } else if (difference.lhs === undefined || difference.rhs === undefined) {
        // Handle static value changes that change structure that can lead to
        // old bindings being eligible
        if (difference.lhs === undefined && !isNil(difference.rhs)) {
          result.event = "NEW"
          result.payload = { propertyPath }
        }

        if (difference.rhs === undefined && !isNil(difference.lhs)) {
          result = [
            {
              event: "EDIT",
              payload: {
                propertyPath,
                value: difference.rhs,
              },
            },
          ]

          const dataTreeDeleteDiffs = translateCollectionDiffs(propertyPath, difference.lhs, "DELETE")

          result = dataTreeDeleteDiffs.concat(result)
        }
      } else if (isTrueObject(difference.lhs) && !isTrueObject(difference.rhs)) {
        // This will happen for static value changes where a property went
        // from being an object to any other type like string or number
        // in such a case we want to delete all nested paths of the
        // original lhs object

        result = translateCollectionDiffs(propertyPath, difference.lhs, "DELETE")

        // when an object is being replaced by an array
        // list all new array accessors that are being added
        // so dependencies will be created based on existing bindings
        if (Array.isArray(difference.rhs)) {
          result = result.concat(translateCollectionDiffs(propertyPath, difference.rhs, "NEW"))
        }
      } else if (!isTrueObject(difference.lhs) && isTrueObject(difference.rhs)) {
        // This will happen for static value changes where a property went
        // from being any other type like string or number to an object
        // in such a case we want to add all nested paths of the
        // new rhs object
        result = translateCollectionDiffs(propertyPath, difference.rhs, "NEW")

        // when an array is being replaced by an object
        // remove all array accessors that are deleted
        // so dependencies by existing bindings are removed
        if (Array.isArray(difference.lhs)) {
          result = result.concat(translateCollectionDiffs(propertyPath, difference.lhs, "DELETE"))
        }
      }

      break
    }
    case "A": {
      return translateDiffEventToDataTreeDiffEvent(
        {
          ...difference.item,
          path: [...difference.path, difference.index],
        },
        unEvalDataTree,
      )
    }
    default: {
      break
    }
  }

  return result
}

export const translateDiffArrayIndexAccessors = (propertyPath: string, array: unknown[], event: any) => {
  const result: any[] = []

  array.forEach((data, index) => {
    const path = `${propertyPath}[${index}]`

    result.push({
      event,
      payload: {
        propertyPath: path,
      },
    })
  })

  return result
}

export const addDependantsOfNestedPropertyPaths = (parentPaths: any, inverseMap: any): any => {
  const withNestedPaths: Set<string> = new Set(parentPaths)
  const dependantNodes = Object.keys(inverseMap)

  parentPaths.forEach((propertyPath: any) => {
    dependantNodes
      .filter((dependantNodePath) => isChildPropertyPath(propertyPath, dependantNodePath))
      .forEach((dependantNodePath) => {
        inverseMap[dependantNodePath].forEach((path: any) => {
          withNestedPaths.add(path)
        })
      })
  })

  return withNestedPaths
}

export function isWidget(entity: any): any {
  return typeof entity === "object" && "ENTITY_TYPE" in entity && entity.ENTITY_TYPE === "WIDGET"
}

export const shouldSuppressAutoComplete = (widget: any) => Boolean(widget.suppressAutoComplete)

export const shouldSuppressDebuggerError = (widget: any) => Boolean(widget.suppressDebuggerError)

export function isAction(entity: any): any {
  return typeof entity === "object" && "ENTITY_TYPE" in entity && entity.ENTITY_TYPE === "ACTION"
}

export function isActionConfig(entity: any): any {
  return typeof entity === "object" && "ENTITY_TYPE" in entity && entity.ENTITY_TYPE === "ACTION"
}

export function isAppsmithEntity(entity: any): any {
  return typeof entity === "object" && "ENTITY_TYPE" in entity && entity.ENTITY_TYPE === "APPSMITH"
}

export function isJSAction(entity: any): any {
  return typeof entity === "object" && "ENTITY_TYPE" in entity && entity.ENTITY_TYPE === "JSACTION"
}

export function isAnyJSAction(entity: any) {
  return isJSAction(entity)
}

export function isJSActionConfig(entity: any): any {
  return typeof entity === "object" && "ENTITY_TYPE" in entity && entity.ENTITY_TYPE === "JSACTION"
}

export function isJSObject(entity: any): any {
  return (
    typeof entity === "object" &&
    "ENTITY_TYPE" in entity &&
    entity.ENTITY_TYPE === "JSACTION" &&
    "pluginType" in entity &&
    entity.pluginType === "JS"
  )
}

export function isDataTreeEntity(entity: any) {
  return !!entity && typeof entity === "object" && "ENTITY_TYPE" in entity
}

export const serialiseToBigInt = (value: any) => {
  return JSON.stringify(value, (_, v) => (typeof v === "bigint" ? v.toString() : v))
}

export const removeFunctionsAndSerialzeBigInt = (value: any) => JSON.parse(serialiseToBigInt(value))

export const removeFunctions = (value: any) => {
  if (_.isFunction(value)) {
    return "Function call"
  } else if (_.isObject(value)) {
    return removeFunctionsAndSerialzeBigInt(value)
  } else {
    return value
  }
}

export const makeParentsDependOnChildren = (depMap: any, allkeys: any): any => {
  //return depMap;
  // Make all parents depend on child
  Object.keys(depMap).forEach((key) => {
    depMap = makeParentsDependOnChild(depMap, key, allkeys)
    depMap[key].forEach((path: any) => {
      depMap = makeParentsDependOnChild(depMap, path, allkeys)
    })
  })

  return depMap
}

export const makeParentsDependOnChild = (depMap: any, child: string, allkeys: any): any => {
  const result: any = depMap
  let curKey = child

  if (!allkeys[curKey]) {
    logWarn(
      `makeParentsDependOnChild - ${curKey} is not present in dataTree.`,
      "This might result in a cyclic dependency.",
    )
  }

  let matches: Array<string> | null

  // Note: The `=` is intentional
  // Stops looping when match is null
  while ((matches = curKey.match(IMMEDIATE_PARENT_REGEX)) !== null) {
    const parentKey: any = matches[1]
    // Todo: switch everything to set.
    const existing = new Set(result[parentKey] || [])

    existing.add(curKey)
    result[parentKey] = Array.from(existing)
    curKey = parentKey
  }

  return result
}

export const getImmediateParentsOfPropertyPaths = (propertyPaths: any): any => {
  // Use a set to ensure that we dont have duplicates
  const parents: Set<string> = new Set()

  propertyPaths.forEach((path: any) => {
    const matches = path.match(IMMEDIATE_PARENT_REGEX)

    if (matches !== null) {
      parents.add(matches[1])
    }
  })

  return Array.from(parents)
}

export const getAllPaths = (records: any, curKey: string = "", result: any = {}): any => {
  // Add the key if it exists
  if (curKey) result[curKey] = true

  if (Array.isArray(records)) {
    for (let i = 0; i < records.length; i++) {
      const tempKey = curKey ? `${curKey}[${i}]` : `${i}`

      getAllPaths(records[i], tempKey, result)
    }
  } else if (isTrueObject(records)) {
    for (const key of Object.keys(records)) {
      const tempKey = curKey ? `${curKey}.${key}` : `${key}`

      getAllPaths(records[key], tempKey, result)
    }
  }

  return result
}

export const getAllPathsBasedOnDiffPaths = (records: any, diff: any[], previousResult: any = {}): any => {
  const newResult = previousResult

  diff.forEach((curr) => {
    const { event, payload } = curr

    if (event === "DELETE") {
      delete newResult[payload.propertyPath]
    }

    if (event === "NEW" || event === "EDIT") {
      const newDataSegments = get(records, payload.propertyPath)

      // directly mutates on the result so we don't have to merge it back to the result
      getAllPaths(newDataSegments, payload.propertyPath, newResult)
    }
  })

  return newResult
}

export const trimDependantChangePaths = (changePaths: Set<string>, dependencyMap: any): any => {
  const trimmedPaths = []

  for (const path of changePaths) {
    let foundADependant = false

    if (path in dependencyMap) {
      const dependants = dependencyMap[path]

      for (const dependantPath of dependants) {
        if (changePaths.has(dependantPath)) {
          foundADependant = true
          break
        }
      }
    }

    if (!foundADependant) {
      trimmedPaths.push(path)
    }
  }

  return trimmedPaths
}

export function getSafeToRenderDataTree(tree: any, widgetTypeConfigMap: any, configTree: any) {
  return Object.keys(tree).reduce((tree, entityKey: string) => {
    const entity = tree[entityKey]

    if (!isWidget(entity)) {
      return tree
    }

    const entityConfig = configTree[entityKey] as any

    const safeToRenderEntity = { ...entity }

    // Set user input values to their parsed values
    Object.entries(entityConfig.validationPaths).forEach(([property, validation]: any) => {
      const value = _.get(entity, property)
      // Pass it through parse
      const { parsed } = validateWidgetProperty(validation, value, entityConfig, property)

      _.set(safeToRenderEntity, property, parsed)
    })
    // Set derived values to undefined or else they would go as bindings
    Object.keys(widgetTypeConfigMap[entityConfig.type].derivedProperties).forEach((property) => {
      _.set(safeToRenderEntity, property, undefined)
    })

    return { ...tree, [entityKey]: safeToRenderEntity }
  }, tree)
}

export const addErrorToEntityProperty = ({ configTree, errors, evalProps, fullPropertyPath }: any) => {
  const { entityName, propertyPath } = getEntityNameAndPropertyPath(fullPropertyPath)
  const isPrivateEntityPath = getAllPrivateWidgetsInDataTree(configTree)[entityName]
  const logBlackList = get(configTree, `${entityName}.logBlackList`, {})

  if (propertyPath && !(propertyPath in logBlackList) && !isPrivateEntityPath) {
    const errorPath = `${entityName}.${EVAL_ERROR_PATH}['${propertyPath}']`
    const existingErrors = get(evalProps, errorPath, []) as any[]

    set(evalProps, errorPath, existingErrors.concat(errors))
  }
}

export const resetValidationErrorsForEntityProperty = ({ evalProps, fullPropertyPath }: any) => {
  const { entityName, propertyPath } = getEntityNameAndPropertyPath(fullPropertyPath)

  if (propertyPath) {
    const errorPath = `${entityName}.${EVAL_ERROR_PATH}['${propertyPath}']`
    const existingErrorsExceptValidation = (_.get(evalProps, errorPath, []) as any[]).filter(
      (error) => error.errorType !== "VALIDATION",
    )

    _.set(evalProps, errorPath, existingErrorsExceptValidation)
  }
}

export const isTrueObject = (item: any): item is Record<string, any> => {
  return Object.prototype.toString.call(item) === "[object Object]"
}

export const findDatatype = (value: any) => {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}

export const isDynamicLeaf = (unEvalTree: any, propertyPath: string, configTree: any) => {
  const [entityName, ...propPathEls]: any = _.toPath(propertyPath)

  // Framework feature: Top level items are never leaves
  if (entityName === propertyPath) return false

  // Ignore if this was a delete op
  if (!unEvalTree.hasOwnProperty(entityName)) return false

  const entityConfig = configTree[entityName]
  const entity = unEvalTree[entityName]

  if (!isWidgetActionOrJsObject(entity)) return false

  const relativePropertyPath = convertPathToString(propPathEls)

  return (
    (!isEmpty(entityConfig.reactivePaths) && relativePropertyPath in entityConfig.reactivePaths) ||
    (isWidget(entityConfig) && relativePropertyPath in entityConfig?.triggerPaths)
  )
}

export const addWidgetPropertyDependencies = ({ widgetConfig, widgetName }: any) => {
  const dependencies: any = {}

  Object.entries(widgetConfig.propertyOverrideDependency).forEach(
    ([overriddenPropertyKey, overridingPropertyKeyMap]: any) => {
      const existingDependenciesSet = new Set(dependencies[`${widgetName}.${overriddenPropertyKey}`] || [])

      // add meta dependency
      overridingPropertyKeyMap.META && existingDependenciesSet.add(`${widgetName}.${overridingPropertyKeyMap.META}`)
      // add default dependency
      overridingPropertyKeyMap.DEFAULT &&
        existingDependenciesSet.add(`${widgetName}.${overridingPropertyKeyMap.DEFAULT}`)

      dependencies[`${widgetName}.${overriddenPropertyKey}`] = [...existingDependenciesSet]
    },
  )

  return dependencies
}

export const isPrivateEntityPath = (privateWidgets: any, fullPropertyPath: string) => {
  const entityName: any = fullPropertyPath.split(".")[0]

  if (Object.keys(privateWidgets).indexOf(entityName) !== -1) {
    return true
  }

  return false
}

export const getAllPrivateWidgetsInDataTree = (configTree: any): any => {
  let privateWidgets: any = {}

  Object.keys(configTree).forEach((entityName) => {
    const entityConfig = configTree[entityName] as any

    if (isWidget(entityConfig) && !_.isEmpty(entityConfig.privateWidgets)) {
      privateWidgets = { ...privateWidgets, ...entityConfig.privateWidgets }
    }
  })

  return privateWidgets
}

export const getDataTreeWithoutPrivateWidgets = (dataTree: any, configTree: any): any => {
  const privateWidgets = getAllPrivateWidgetsInDataTree(configTree)
  const privateWidgetNames = Object.keys(privateWidgets)
  const treeWithoutPrivateWidgets = _.omit(dataTree, privateWidgetNames)

  return treeWithoutPrivateWidgets
}

const getDataTreeWithoutSuppressedAutoComplete = (dataTree: any): any => {
  const entityIds = Object.keys(dataTree).filter((entityName) => {
    const entity = dataTree[entityName]

    return isWidget(entity) && shouldSuppressAutoComplete(entity as any)
  })

  return _.omit(dataTree, entityIds)
}

export const getDataTreeForAutocomplete = (dataTree: any, configTree: any): any => {
  const treeWithoutPrivateWidgets = getDataTreeWithoutPrivateWidgets(dataTree, configTree)
  const treeWithoutSuppressedAutoComplete = getDataTreeWithoutSuppressedAutoComplete(treeWithoutPrivateWidgets)

  return treeWithoutSuppressedAutoComplete
}

export const overrideWidgetProperties = (params: any) => {
  const {
    configTree,
    currentTree,
    entity,
    evalMetaUpdates,
    fullPropertyPath,
    isNewWidget,
    overriddenProperties,
    propertyPath,
    safeTree,
    shouldUpdateGlobalContext,
    value,
  } = params
  const { entityName } = getEntityNameAndPropertyPath(fullPropertyPath)

  const configEntity = configTree[entityName] as any

  if (propertyPath in configEntity.overridingPropertyPaths) {
    const clonedValue = klona(value)
    const overridingPropertyPaths = configEntity.overridingPropertyPaths[propertyPath]

    const pathsNotToOverride = widgetPathsNotToOverride(isNewWidget, propertyPath, configEntity)

    overridingPropertyPaths.forEach((overriddenPropertyPath: any) => {
      const overriddenPropertyPathArray = overriddenPropertyPath.split(".")

      if (pathsNotToOverride.includes(overriddenPropertyPath)) return

      const fullPath = [entityName, ...overriddenPropertyPathArray]

      _.set(currentTree, fullPath, clonedValue)

      if (safeTree) _.set(safeTree, fullPath, klona(value))

      if (shouldUpdateGlobalContext) {
        _.set(self, fullPath, clonedValue)
      }

      overriddenProperties?.push(overriddenPropertyPath)

      // evalMetaUpdates has all updates from property which overrides meta values.
      if (propertyPath.split(".")[0] !== "meta" && overriddenPropertyPathArray[0] === "meta") {
        const metaPropertyPath = overriddenPropertyPathArray.slice(1)

        evalMetaUpdates.push({
          widgetId: entity.widgetId,
          metaPropertyPath,
          value: clonedValue,
        })
      }
    })
  } else if (propertyPath in configEntity.propertyOverrideDependency && value === undefined) {
    // When a reset a widget its meta value becomes undefined, ideally they should reset to default value.
    // below we handle logic to reset meta values to default values.
    const propertyOverridingKeyMap = configEntity.propertyOverrideDependency[propertyPath]

    if (propertyOverridingKeyMap.DEFAULT) {
      const defaultValue = entity[propertyOverridingKeyMap.DEFAULT]

      if (defaultValue !== undefined) {
        const clonedDefaultValue = klona(defaultValue)
        const fullPath = [entityName, ...propertyPath.split(".")]

        _.set(currentTree, fullPath, clonedDefaultValue)

        if (safeTree) _.set(safeTree, fullPath, klona(defaultValue))

        if (shouldUpdateGlobalContext) {
          _.set(self, fullPath, clonedDefaultValue)
        }

        return {
          overwriteParsedValue: true,
          newValue: clonedDefaultValue,
        }
      }
    }
  }
}

export const isATriggerPath = (entityConfig: any, propertyPath: string) => {
  return isWidget(entityConfig) && isPathDynamicTrigger(entityConfig, propertyPath)
}

export const isNewEntity = (updates: Set<string>, entityName: string) => {
  return updates.has(entityName)
}

const widgetPathsNotToOverride = (isNewWidget: boolean, propertyPath: string, entityConfig: any) => {
  let pathsNotToOverride: string[] = []
  const overriddenPropertyPaths = entityConfig.overridingPropertyPaths[propertyPath]

  // Check if widget has pre-existing meta values (although newly added to the unevalTree)
  if (isNewWidget && entityConfig.isMetaPropDirty) {
    const overriddenMetaPaths = overriddenPropertyPaths.filter((path: any) => path.split(".")[0] === "meta")

    // If widget is newly added but has pre-existing meta values, this meta values take precedence and should not be overridden
    pathsNotToOverride = [...overriddenMetaPaths]
    // paths which these meta values override should also not get overridden
    overriddenMetaPaths.forEach((path: any) => {
      if (entityConfig.overridingPropertyPaths.hasOwnProperty(path)) {
        pathsNotToOverride = [...pathsNotToOverride, ...entityConfig.overridingPropertyPaths[path]]
      }
    })
  }

  return pathsNotToOverride
}

const isWidgetDefaultPropertyPath = (widget: any, propertyPath: string) => {
  for (const property of Object.keys(widget.propertyOverrideDependency)) {
    const overrideDependency = widget.propertyOverrideDependency[property]

    if (overrideDependency.DEFAULT === propertyPath) return true
  }

  return false
}

const isMetaWidgetTemplate = (widget: any) => {
  return !!widget.siblingMetaWidgets
}

export function getStaleMetaStateIds(args: any) {
  const { entity, entityConfig, isNewWidget, metaWidgets, propertyPath } = args

  return !isNewWidget && isWidgetDefaultPropertyPath(entityConfig, propertyPath) && isMetaWidgetTemplate(entity)
    ? difference(entity.siblingMetaWidgets, metaWidgets)
    : []
}

export function convertJSFunctionsToString(jscollections: any, configTree: any) {
  const collections = klona(jscollections)

  Object.keys(collections).forEach((collectionName) => {
    const jsCollection = collections[collectionName]
    const jsCollectionConfig = configTree[collectionName] as any
    const jsFunctions = jsCollectionConfig.meta

    for (const funcName in jsFunctions) {
      if (jsCollection[funcName] instanceof String) {
        if (has(jsCollection, [funcName, "data"])) {
          set(jsCollection, [`${funcName}.data`], {})
        }

        set(jsCollection, funcName, jsCollection[funcName].toString())
      }
    }
  })

  return collections
}

export const isAPathDynamicBindingPath = (entity: any, entityConfig: any, propertyPath: string) => {
  return isWidgetActionOrJsObject(entity) && isPathADynamicBinding(entityConfig, propertyPath)
}

export const isNotEntity = (entity: any) => {
  return !isAction(entity) && !isWidget(entity) && !isJSAction(entity)
}

export const isEntityAction = (entity: any) => {
  return isAction(entity)
}

export const isPropertyAnEntityAction = (entity: any, propertyPath: string, entityConfig: any) => {
  if (!isJSAction(entity)) return false

  const { actionNames } = entityConfig as any

  return actionNames.has(propertyPath)
}

export const convertMicroDiffToDeepDiff = (microDiffDifferences: any[]): any[] => {
  return microDiffDifferences.map((microDifference) => {
    const { path, type } = microDifference

    //convert microDiff format to deepDiff format
    if (type === "CREATE") {
      return {
        kind: "N",
        path,
        rhs: microDifference.value,
      }
    }

    if (type === "REMOVE") {
      return {
        kind: "D",
        path,
        lhs: microDifference.oldValue,
      }
    }

    return {
      kind: "E",
      path,
      lhs: microDifference.oldValue,
      rhs: microDifference.value,
    }
  })
}

export function getExternalChangedDependencies(
  property: string,
  dependencies: any,
  valuechanged: any,
  entityName: string,
  visited = new Set<string>(),
): boolean {
  if (visited.has(property)) return false

  visited.add(property)

  const deps = dependencies[property]

  if (!deps || deps.length === 0) return false

  for (const dep of deps) {
    if (!dep.startsWith(entityName + ".")) {
      // External dependency
      if (valuechanged[dep]) return true
    } else {
      // Internal dependency, recurse
      if (getExternalChangedDependencies(dep, dependencies, valuechanged, entityName, visited)) {
        return true
      }
    }
  }

  return false
}

export const isDataPath = (entity: any, fullPropertyPath: string) => {
  if (isWidget(entity)) {
    return false
  }

  const { propertyPath } = getEntityNameAndPropertyPath(fullPropertyPath)

  if (isAction(entity) && propertyPath === "data") {
    return true
  }

  if (isJSAction(entity)) {
    // Check if propertyPath matches <function>.data (not just 'data')
    if (propertyPath.endsWith(".data") && propertyPath !== "data") {
      return true
    }
  }

  return false
}

export function isJSModuleInstance(entity: any) {
  return false
}

export const entityTypeCheckForPathDynamicTrigger = (entityConfig: any) => {
  return (
    "ENTITY_TYPE" in entityConfig && (entityConfig.ENTITY_TYPE === "ACTION" || entityConfig.ENTITY_TYPE === "JSACTION")
  )
}
