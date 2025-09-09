import { JSToString, stringToJS } from "#core-utils/dynamic-string"

export const realInputValue = (
  attrValue: string | undefined,
  widgetDisplayName: string,
) => {
  if (attrValue === "" || attrValue == undefined) return ""
  const value = `${attrValue.substring(
    `{{${widgetDisplayName}.dataSources.map((item) => ( `.length,
    attrValue.length - 4,
  )}`

  return JSToString(value)
}

export const getNeedComputedValue = (
  value: string,
  widgetDisplayName: string,
) => {
  const stringToCanEvaluate = stringToJS(value)
  if (stringToCanEvaluate === "") {
    return stringToCanEvaluate
  }
  return `{{${widgetDisplayName}.dataSources.map((item) => ( ${stringToCanEvaluate}))}}`
}
