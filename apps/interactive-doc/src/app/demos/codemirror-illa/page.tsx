"use client"
import { useState, useCallback } from "react"
import { CodeEditor } from "#codemirror-illa/components/CodeEditor"
export default function Page() {
  const [value, setValue] = useState("")

  const onChange = (e: any) => {
    console.log("---e---", e)
  }

  return (
    <>

      <CodeEditor
        scopeOfAutoComplete="global"
        canShowCompleteInfo={true}
        value={value}
        onChange={onChange}
        showLineNumbers={false}
        placeholder="add code here"
        // expectValueType={currentListDisplayName ? undefined : expectedType}
        lang={"javascript"}
        maxHeight="208px"
        maxWidth="100%"
        codeType={"EXPRESSION"} //EXPRESSION, FUNCTION, NO_METHOD_FUNCTION
        // wrappedCodeFunc={finalWrapperCode}
      />
    </>
  )
}
