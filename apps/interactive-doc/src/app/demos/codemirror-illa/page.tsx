"use client"
import { useState } from "react"
import BaseInputEditor from "./BaseInputEditor"

export default function Page() {
  const [value, setValue] = useState("")

  return (
    <>
      <BaseInputEditor
        scopeOfAutoComplete="global"
        canShowCompleteInfo={true}
        value={value}
        showLineNumbers={false}
        placeholder="add code here"
        lang={"javascript"}
        maxHeight="208px"
        maxWidth="100%"
        codeType={"EXPRESSION"}
      />
    </>
  )
}
