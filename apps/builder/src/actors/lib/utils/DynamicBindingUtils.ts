import _, { get, isString } from "lodash"
import { getEntityNameAndPropertyPath, isAction, isJSAction, isTrueObject, isWidget } from "../Evaluation/evaluationUtils"
import { getType } from "./TypeHelpers"

export const DATA_BIND_REGEX = /{{([\s\S]*?)}}/

function hasNonStringSemicolons(stringifiedJS: string) {
  const regex: any = /;(?=(?:[^']*'[^']*')*[^']*$)(?=(?:[^"]*"[^"]*")*[^"]*$)/g
  return regex.test(stringifiedJS)
}

export const isDynamicValue = (value: string): boolean => DATA_BIND_REGEX.test(value)

export function getDynamicStringSegments(dynamicString: string): string[] {
  let stringSegments = []
  const indexOfDoubleParanStart = dynamicString.indexOf("{{")

  if (indexOfDoubleParanStart === -1) {
    return [dynamicString]
  }

  //{{}}{{}}}
  const firstString = dynamicString.substring(0, indexOfDoubleParanStart)

  firstString && stringSegments.push(firstString)
  let rest = dynamicString.substring(indexOfDoubleParanStart, dynamicString.length)
  //{{}}{{}}}
  let sum = 0

  for (let i = 0; i <= rest.length - 1; i++) {
    const char = rest[i]
    const prevChar = rest[i - 1]

    if (char === "{") {
      sum++
    } else if (char === "}") {
      sum--

      if (prevChar === "}" && sum === 0) {
        stringSegments.push(rest.substring(0, i + 1))
        rest = rest.substring(i + 1, rest.length)

        if (rest) {
          stringSegments = stringSegments.concat(getDynamicStringSegments(rest))
          break
        }
      }
    }
  }

  if (sum !== 0 && dynamicString !== "") {
    return [dynamicString]
  }

  return stringSegments
}

export const getDynamicBindings = (
  dynamicString: string,
  entity?: any,
): { stringSegments: string[]; jsSnippets: string[] } => {
  // Protect against bad string parse
  if (!isString(dynamicString)) {
    return { stringSegments: [], jsSnippets: [] }
  }

  const sanitisedString = dynamicString.trim()

  if (entity && isJSAction(entity)) {
    return { stringSegments: [sanitisedString], jsSnippets: [sanitisedString] }
  }

  // Get the {{binding}} bound values
  const stringSegments = getDynamicStringSegments(sanitisedString)
  // Get the "binding" path values
  const jsSnippets = stringSegments.map((segment) => {
    const length = segment.length
    const matches = isDynamicValue(segment)

    if (matches) {
      return segment.substring(2, length - 2)
    }

    return ""
  })

  return { stringSegments, jsSnippets }
}

export const combineDynamicBindings = (jsSnippets: string[], stringSegments: string[]) => {
  return stringSegments
    .map((segment, index) => {
      if (jsSnippets[index] && jsSnippets[index].length > 0) {
        return addOperatorPrecedenceIfNeeded(jsSnippets[index])
      } else {
        return JSON.stringify(segment)
      }
    })
    .join(" + ")
}

function addOperatorPrecedenceIfNeeded(stringifiedJS: string) {
  /**
   *  parenthesis doesn't work with ; i.e Color is  {{ currentItem.color || "Blue" ;}} cant be (() =>  "Color is" + (currentItem.color || "Blue";))()
   */
  if (!hasNonStringSemicolons(stringifiedJS)) {
    return `(${stringifiedJS})`
  }

  return stringifiedJS
}

export const getEntityDynamicBindingPathList = (entity: any): any[] => {
  if (entity && entity.dynamicBindingPathList && Array.isArray(entity.dynamicBindingPathList)) {
    return [...entity.dynamicBindingPathList]
  }

  return []
}

export const isPathADynamicBinding = (entity: any, path: string): boolean => {
  if (entity && entity.dynamicBindingPathList && Array.isArray(entity.dynamicBindingPathList)) {
    return _.find(entity.dynamicBindingPathList, { key: path }) !== undefined
  }

  return false
}

export const getPropertyPath = (fullPropertyPath: string) => {
  return fullPropertyPath.substring(fullPropertyPath.indexOf(".") + 1)
}

export const getWidgetDynamicTriggerPathList = (widget: any): any[] => {
  if (widget && widget.dynamicTriggerPathList && Array.isArray(widget.dynamicTriggerPathList)) {
    return [...widget.dynamicTriggerPathList]
  }

  return []
}

export const isPathDynamicTrigger = (entity: any, path: string): boolean => {
  if (entity && entity.dynamicTriggerPathList && Array.isArray(entity.dynamicTriggerPathList)) {
    return _.find(entity.dynamicTriggerPathList, { key: path }) !== undefined
  }

  return false
}

export const getWidgetDynamicPropertyPathList = (widget: any): any[] => {
  if (widget && widget.dynamicPropertyPathList && Array.isArray(widget.dynamicPropertyPathList)) {
    return [...widget.dynamicPropertyPathList]
  }

  return []
}

export const isPathDynamicProperty = (widget: any, path: string): boolean => {
  if (widget && widget.dynamicPropertyPathList && Array.isArray(widget.dynamicPropertyPathList)) {
    return _.find(widget.dynamicPropertyPathList, { key: path }) !== undefined
  }

  return false
}

export const THEME_BINDING_REGEX = /{{.*appsmith\.theme\..*}}/

export const isThemeBoundProperty = (widget: any, path: string): boolean => {
  return widget && widget[path] && THEME_BINDING_REGEX.test(widget[path])
}

export const unsafeFunctionForEval = ["XMLHttpRequest", "setImmediate", "Navigator"]

export const isChildPropertyPathStartsWithParent = (parentPropertyPath: string, childPropertyPath: string): boolean => {
  if (!parentPropertyPath || !childPropertyPath) {
    return false
  }

  const parentLength = parentPropertyPath.length

  if (childPropertyPath.length <= parentLength) {
    return false
  }

  // Most common case: dot notation
  if (childPropertyPath[parentLength] === ".") {
    return childPropertyPath.startsWith(parentPropertyPath)
  }

  // Less common case: bracket notation
  if (childPropertyPath[parentLength] === "[") {
    return childPropertyPath.startsWith(parentPropertyPath)
  }

  return false
}

export const isChildPropertyPath = (parentPropertyPath: string, childPropertyPath: string, strict = false): boolean => {
  return (
    (!strict && parentPropertyPath === childPropertyPath) ||
    isChildPropertyPathStartsWithParent(parentPropertyPath, childPropertyPath)
  )
}

export const EVALUATION_PATH = "__evaluation__"
export const EVAL_ERROR_PATH = `${EVALUATION_PATH}.errors`
export const EVAL_VALUE_PATH = `${EVALUATION_PATH}.evaluatedValues`

const getNestedEvalPath = (fullPropertyPath: string, pathType: string, fullPath = true, isPopulated = false) => {
  const { entityName, propertyPath } = getEntityNameAndPropertyPath(fullPropertyPath)
  const nestedPath = isPopulated ? `${pathType}.${propertyPath}` : `${pathType}.['${propertyPath}']`

  if (fullPath) {
    return `${entityName}.${nestedPath}`
  }

  return nestedPath
}

export const getEvalErrorPath = (
  fullPropertyPath: string,
  options = {
    fullPath: true,
    isPopulated: false,
  },
) => {
  return getNestedEvalPath(fullPropertyPath, EVAL_ERROR_PATH, options.fullPath, options.isPopulated)
}

export const getEvalValuePath = (
  fullPropertyPath: string,
  options = {
    fullPath: true,
    isPopulated: false,
  },
) => {
  return getNestedEvalPath(fullPropertyPath, EVAL_VALUE_PATH, options.fullPath, options.isPopulated)
}

export const PropertyEvalErrorTypeDebugMessage: any = {
  VALIDATION: (propertyPath: string) => `The value at ${propertyPath} is invalid`,
  PARSE: () => `Could not parse the binding`,
  LINT: () => `Errors found while evaluating`,
}

let temporaryDynamicPathStore: any[] = []

const getDynamicValuePaths = (val: any, parentPath: string) => {
  if (isString(val) && isDynamicValue(val)) {
    return temporaryDynamicPathStore.push({ key: `${parentPath}` })
  }

  if (Array.isArray(val)) {
    val.forEach((obj, index) => {
      return getDynamicValuePaths(obj, `${parentPath}[${index}]`)
    })
  }

  if (isTrueObject(val)) {
    Object.entries(val).forEach(([key, value]) => {
      getDynamicValuePaths(value, `${parentPath}.${key}`)
    })
  }
}

export function getDynamicBindingsChangesSaga(action: any, value: unknown, field: string, formData?: any) {
  const bindingField = field.replace("actionConfiguration.", "")
  // we listen to any viewType changes.
  const viewType = field.endsWith(".viewType")
  let dynamicBindings: any[] = action.dynamicBindingPathList ? [...action.dynamicBindingPathList] : []

  if (field.endsWith(".jsonData") || field.endsWith(".componentData")) {
    return dynamicBindings
  }

  if (
    action.datasource &&
    ("datasourceConfiguration" in action.datasource || "datasourceConfiguration" in (formData?.datasource || {})) &&
    field === "datasource"
  ) {
    // only the datasource.datasourceConfiguration.url can be a dynamic field
    dynamicBindings = dynamicBindings.filter((binding) => binding.key !== "datasourceUrl" && binding.key !== "path")
    // ideally as we check for the datasource url, we should check for the path field as well.
    const datasourceUrl = action.datasource?.datasourceConfiguration?.url || ""
    const datasourcePathField = action.actionConfiguration?.path
    const datasourceFormPathField = formData?.actionConfiguration?.path

    isDynamicValue(datasourceUrl) && dynamicBindings.push({ key: "datasourceUrl" })

    // as we check the datasource url for bindings, check the path too.
    isDynamicValue(datasourcePathField || datasourceFormPathField) && dynamicBindings.push({ key: "path" })

    return dynamicBindings
  }

  if (Array.isArray(value)) {
    // first we clear the dynamic bindings of any paths that is a child of the current path.
    dynamicBindings = dynamicBindings.filter((binding) => !isChildPropertyPath(bindingField, binding.key))

    // then we recursively go through the value and find paths with dynamic bindings
    temporaryDynamicPathStore = []

    if (!!value) {
      getDynamicValuePaths(value, bindingField)
    }

    if (!!temporaryDynamicPathStore && temporaryDynamicPathStore.length > 0) {
      dynamicBindings = [...dynamicBindings, ...temporaryDynamicPathStore]
    }
  } else if (getType(value) === "OBJECT") {
    dynamicBindings = dynamicBindings.filter((dynamicPath) => {
      if (isChildPropertyPath(bindingField, dynamicPath.key)) {
        const childPropertyValue = _.get(value, dynamicPath.key)

        return isDynamicValue(childPropertyValue)
      }

      return !!dynamicPath
    })
  } else if (typeof value === "string") {
    const fieldExists = _.some(dynamicBindings, { key: bindingField })

    const isDynamic = isDynamicValue(value)

    if (!isDynamic && fieldExists) {
      dynamicBindings = dynamicBindings.filter((d) => d.key !== bindingField)
    }

    if (isDynamic && !fieldExists) {
      dynamicBindings = [...dynamicBindings, { key: bindingField }]
    }
  }

  if (!!viewType) {
    const dataBindingField = bindingField.replace(".viewType", ".data")

    // then we filter the field of any paths that includes the binding fields
    dynamicBindings = dynamicBindings.filter((dynamicPath) => !dynamicPath?.key?.includes(dataBindingField))

    // if the value of the viewType is of json and, we push in the field
    if (value === "json") {
      const jsonFieldPath = field.replace(".viewType", ".jsonData")
      const jsonFieldValue = get(action, jsonFieldPath)

      if (isDynamicValue(jsonFieldValue)) {
        dynamicBindings.push({ key: dataBindingField })
      }
    } else if (value === "component") {
      const componentFieldPath = field.replace(".viewType", ".componentData")
      const componentFieldValue = get(action, componentFieldPath)

      temporaryDynamicPathStore = []

      if (!!componentFieldValue) {
        getDynamicValuePaths(componentFieldValue, dataBindingField)
      }

      if (!!temporaryDynamicPathStore && temporaryDynamicPathStore.length > 0) {
        dynamicBindings = [...dynamicBindings, ...temporaryDynamicPathStore]
      }
    }
  }

  return dynamicBindings
}

export function getEntityType(entity: any) {
  return "ENTITY_TYPE" in entity && entity.ENTITY_TYPE
}

export function getEntityId(entity: any) {
  if (isAction(entity)) return entity.actionId

  if (isWidget(entity)) return entity.widgetId

  if (isJSAction(entity)) return entity.actionId
}

export function getEntityName(entity: any, entityConfig: any) {
  if (isAction(entity)) return entityConfig.name

  if (isWidget(entity)) return entity.widgetName

  if (isJSAction(entity)) return entityConfig.name
}

export function getDifferences<T>(a: any, b: any): any[] {
  const diff: any[] = []

  for (const val of a) {
    if (!b.has(val)) diff.push(val)
  }

  return diff
}
