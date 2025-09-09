import { get } from "lodash"
import unescapeJS from "unescape-js"
import { getSnippets } from "./converter"
import { QUOTED_DYNAMIC_STRING_REGEX } from "./constants"
import { isDynamicStringSnippet } from "./helper"
import { beginsWithLineBreakRegex } from "./constants"

export const getDynamicAttrPaths = (widgetOrAction: Record<string, any>): string[] => {
  if (Array.isArray(widgetOrAction.$dynamicAttrPaths)) {
    return [...widgetOrAction.$dynamicAttrPaths]
  }
  return []
}

export function getDependencyFromEntityPath(propertyPath: string, entity: Record<string, any>) {
  const unevalPropValue = get(entity, propertyPath, "").toString()
  const { jsSnippets } = getSnippets(unevalPropValue)
  const validJSSnippets = jsSnippets.filter((jsSnippet) => !!jsSnippet)

  return validJSSnippets
}

export function getValidJSSnippetsFromCode(code: string) {
  const { jsSnippets } = getSnippets(code)
  const validJSSnippets = jsSnippets.filter((jsSnippet) => !!jsSnippet)

  return validJSSnippets
}

export const isTrueObject = (item: unknown): item is Record<string, unknown> => {
  return Object.prototype.toString.call(item) === "[object Object]"
}

export const getAllPaths = (records: unknown, curKey = "", result: Record<string, true> = {}): Record<string, true> => {
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

export const filterBindingSegmentsAndRemoveQuotes = (
  originDynamicString: string,
  originStringSnippets: string[],
  originValues: unknown[],
) => {
  const dynamicStringStrippedQuotes = originDynamicString.replace(
    QUOTED_DYNAMIC_STRING_REGEX,
    (original, firstGroup) => {
      return firstGroup
    },
  )
  const stringSnippets: string[] = []
  const values: unknown[] = []
  originStringSnippets.forEach((segment, i) => {
    if (isDynamicStringSnippet(segment)) {
      stringSnippets.push(segment)
      values.push(originValues[i])
    }
  })
  return { dynamicString: dynamicStringStrippedQuotes, stringSnippets, values }
}

export const stringToJS = (string: string): string => {
  const { jsSnippets, stringSnippets } = getSnippets(string)
  return stringSnippets
    .map((segment, index) => {
      if (jsSnippets[index] && jsSnippets[index].length > 0) {
        return jsSnippets[index]
      } else {
        return `'${segment}'`
      }
    })
    .join(" + ")
}

export const JSToString = (js: string): string => {
  const segments = js.split(" + ")
  return segments
    .map((segment) => {
      if (segment.charAt(0) === "'") {
        return segment.substring(1, segment.length - 1)
      } else return "{{" + segment + "}}"
    })
    .join("")
}

export const wrapCode = (code: string) => {
  return `
    (function() {
      return ${code}
    })
  `
}
export function getDisplayNameAndAttrPath(fullPath: string): {
  displayName: string
  attrPath: string
} {
  const indexOfFirstDot = fullPath.indexOf(".")
  if (indexOfFirstDot === -1) {
    // No dot was found so path is the entity name itself
    return {
      displayName: fullPath,
      attrPath: "",
    }
  }
  const displayName = fullPath.substring(0, indexOfFirstDot)
  const attrPath = fullPath.substring(indexOfFirstDot + 1)
  return { displayName, attrPath }
}

export const getWidgetOrActionDynamicAttrPaths = (widgetOrAction: Record<string, any>): string[] => {
  if (Array.isArray(widgetOrAction.$dynamicAttrPaths)) {
    return [...widgetOrAction.$dynamicAttrPaths]
  }
  return []
}

export const wrapFunctionCode = (code: string) => {
  return `(function (){
      ${code}
    })
  `
}



export function sanitizeScript(js: string) {
  // We remove any line breaks from the beginning of the script because that
  // makes the final function invalid. We also unescape any escaped characters
  // so that eval can happen
  const trimmedJS = js.replace(beginsWithLineBreakRegex, "")
  return unescapeJS(trimmedJS)
}
