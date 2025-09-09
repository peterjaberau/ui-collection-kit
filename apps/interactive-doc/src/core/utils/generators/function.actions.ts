import { get, set, toPath } from "lodash"
import { convertPathToString, isObject } from "#core-utils"

export const generateAllTypePathsFromWidgetConfig = (panelConfig: any[], widgetOrAction: Record<string, any>) => {
  let validationPaths: any = {}
  panelConfig.forEach((config) => {
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
