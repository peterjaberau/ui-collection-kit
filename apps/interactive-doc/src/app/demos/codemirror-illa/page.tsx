"use client"
import { useState } from "react"
import BaseInputEditor from "./BaseInputEditor"

import { VALIDATION_TYPES } from "./utils"
import { useRootStore } from "./store"

const scope = {
  component: "txt_left_summary",
  attribute: "value",
}

export default function Page() {
  const [rootContext, rootStore]: any = useRootStore((s: any) => s.context)

  const selectedComponents = rootContext.config.selectedComponents
  const selectedWidget = rootContext.currentApp.components[scope.component]
  const selectedWidgetResult = rootContext.currentApp.execution.result[scope.component]

  const [value, setValue] = useState(selectedWidget.props[scope.attribute])

  const handleUpdateDsl: any = (attrPath: string, value: unknown) => {

    const updateSlice = { [attrPath]: value }
    rootStore.trigger.updateComponentPropsReducer({
      payload: {
        displayName: scope.component,
        updateSlice,
      },
    })

  }

  const onChange: any = (event: any) => {

    const { attrName, value } = event
    handleUpdateDsl(attrName, value)

  }

  return (
    <>
      <BaseInputEditor
        isSetterSingleRow={true}
        onlyHasSetter={false}
        attrName={scope.attribute}
        expectedType={"String" as any}
        value={selectedWidget.props[scope.attribute]}
        widgetDisplayName={selectedWidget.displayName}
        widgetType={selectedWidget.type}
        // handleUpdateDsl={handleUpdateDsl}
        onChange={onChange}

        // scopeOfAutoComplete="global"
        // canShowCompleteInfo={true}
        // showLineNumbers={false}
        // placeholder="add code here"
        // lang={"javascript"}
        // maxHeight="208px"
        // maxWidth="100%"
        // codeType={"EXPRESSION"}
      />
    </>
  )
}
