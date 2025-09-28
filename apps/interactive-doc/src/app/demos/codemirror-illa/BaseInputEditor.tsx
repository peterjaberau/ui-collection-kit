"use client"
import { FC, useMemo } from "react"
import { CodeEditor } from "./components/CodeEditor"
import { CODE_LANG, CODE_TYPE } from "./components/CodeEditor/CodeMirror/extensions/interface"
import { hasDynamicStringSnippet, getNeedComputedValueWithList, realInputValueWithList } from "./utils"

import { VALIDATION_TYPES } from "./utils"
import { isString } from "lodash"

export interface NewBaseInputSetterProps {
  scopeOfAutoComplete?: "page" | "global"
  placeholder?: string
  expectedType?: VALIDATION_TYPES
  value?: string
  defaultValue?: any
  valueInputType?: string
  showLineNumbers?: boolean
  [key: string]: any
}

const BaseInputEditor: FC<NewBaseInputSetterProps> = (props) => {
  const {
    scopeOfAutoComplete = "page",
    placeholder,
    expectedType,
    value,
    defaultValue,
    showLineNumbers = false,
    valueInputType = VALIDATION_TYPES.STRING,
  } = props

  const onChange = (value: any) => {
    console.log("---onChange BaseInputEditor (codemirror) ----", {
      value,
      hasDynamicStringSnippet: hasDynamicStringSnippet(value ?? ""),
    })
  }

  const finalValue = useMemo(() => {
    if (value === undefined && defaultValue === undefined) {
      return undefined
    }

    if (!isString(value ?? defaultValue)) {
      return `{{ ${value ?? defaultValue} }}`
    }
    return value ?? defaultValue
  }, [defaultValue, value])

  return (
    <CodeEditor
      scopeOfAutoComplete="page"
      placeholder={placeholder}
      expectValueType={expectedType}
      value={finalValue}
      onChange={onChange}
      showLineNumbers={false}
      lang={CODE_LANG.JAVASCRIPT}
      maxHeight="208px"
      maxWidth="100%"

      codeType={CODE_TYPE.EXPRESSION}
    />
  )
}

BaseInputEditor.displayName = "BaseInputEditor"
export default BaseInputEditor
