"use client"
import { FC, useCallback, useMemo, useState } from "react"
import { CodeEditor } from "./components/CodeEditor"
import { CODE_LANG, CODE_TYPE } from "./components/CodeEditor/CodeMirror/extensions/interface"
import { hasDynamicStringSnippet, getNeedComputedValueWithList, realInputValueWithList } from "./utils"

import { VALIDATION_TYPES } from "./utils"
import { isString } from "lodash"

export interface NewBaseInputSetterProps {
  scopeOfAutoComplete?: "page" | "global"
  valueInputType?: string
  showLineNumbers?: boolean
  isSetterSingleRow?: boolean
  placeholder?: string
  attrName: string
  defaultValue?: any
  onChange: (value: any) => void
  handleUpdateDsl?: (attrPath: string, value: any) => void
  expectedType?: VALIDATION_TYPES
  value?: string
  widgetDisplayName: string
  labelName?: string
  detailedDescription?: string
  labelDesc?: string
  widgetType: string
  wrappedCodeFunc?: (code: string) => string
  labelSize?: "medium" | "small"
  onlyHasSetter?: boolean
  [key: string]: any
}

const BaseInputEditor: FC<NewBaseInputSetterProps> = (props) => {
  const {
    scopeOfAutoComplete = "page",
    showLineNumbers = false,
    valueInputType = VALIDATION_TYPES.STRING,
    isSetterSingleRow,
    placeholder,
    attrName,
    // handleUpdateDsl,
    expectedType,
    value,
    widgetDisplayName,
    labelName,
    detailedDescription,
    defaultValue,
    labelDesc,
    onChange,
    widgetType,
    wrappedCodeFunc,
    labelSize,
    onlyHasSetter = false,
  } = props

  const [listWidgets]: any = useState({})
  const currentListDisplayName = useMemo(() => {
    const listWidgetDisplayNames: any = Object.keys(listWidgets)

    for (let i = 0; i < listWidgetDisplayNames.length; i++) {
      if (listWidgets[listWidgetDisplayNames[i]].includes(widgetDisplayName)) {
        return listWidgetDisplayNames[i]
      }
    }
    return ""
  }, [listWidgets, widgetDisplayName])



  const finalWrapperCode = useMemo(() => {
    if (
      currentListDisplayName &&
      hasDynamicStringSnippet(value ?? "") &&
      value?.includes("currentItem")
    ) {
      return (value: string) => {
        return getNeedComputedValueWithList(value, currentListDisplayName)
      }
    }
    return wrappedCodeFunc
  }, [currentListDisplayName, value, wrappedCodeFunc])


  const finalValue = useMemo(() => {
    if (currentListDisplayName) {
      return realInputValueWithList(
        value ?? defaultValue,
        currentListDisplayName,
      )
    }

    if (value === undefined && defaultValue === undefined) {
      return undefined
    }

    if (!isString(value ?? defaultValue)) {
      return `{{ ${value ?? defaultValue} }}`
    }
    return value ?? defaultValue
  }, [currentListDisplayName, defaultValue, value])

  const handleOnChange = useCallback(
    (value: string) => {
      let output = value

      if (
        currentListDisplayName &&
        hasDynamicStringSnippet(value ?? "") &&
        value.includes("currentItem")
      ) {
        output = getNeedComputedValueWithList(value, currentListDisplayName)
      }
      // handleUpdateDsl(attrName, output)

      onChange({ value: output, attrName})


    },
    [attrName, currentListDisplayName],
  )


  return (
    <CodeEditor
      scopeOfAutoComplete="page"
      value={finalValue}
      onChange={handleOnChange}
      showLineNumbers={false}
      placeholder={placeholder}
      expectValueType={currentListDisplayName ? undefined : expectedType}
      lang={CODE_LANG.JAVASCRIPT}
      maxHeight="208px"
      maxWidth="100%"
      codeType={CODE_TYPE.EXPRESSION}
      modalTitle={labelName}
      modalDescription={detailedDescription ?? labelDesc}
      wrappedCodeFunc={finalWrapperCode}

      // onFocus={onFocus}
      // onBlur={onBlur}



      // scopeOfAutoComplete={scopeOfAutoComplete}
      // placeholder={placeholder}
      // expectValueType={expectedType}
      // value={finalValue}
      // onChange={onChange}
      // showLineNumbers={false}
      // lang={CODE_LANG.JAVASCRIPT}
      // maxHeight="208px"
      // maxWidth="100%"
      //
      // codeType={CODE_TYPE.EXPRESSION}
    />
  )
}

BaseInputEditor.displayName = "BaseInputEditor"
export default BaseInputEditor




// onChange
