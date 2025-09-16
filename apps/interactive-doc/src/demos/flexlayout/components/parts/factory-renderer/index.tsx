'use client'

import { WidgetRenderer } from "#modules/registry/widgets-registry"
// import { WidgetRenderer } from "../../widgets"
import { useJsonataRoot } from "#demos/jsonata/actors/hooks/useJsonataRoot"
import { useEffect, useState } from "react"


export const FactoryRenderer = (node: any) => {
  const { jsonataContext } = useJsonataRoot()
  const [inputJson, setInputJson]: any = useState(jsonataContext[node?.attributes?.config?.params?.scope])
  useEffect(() => {
    setInputJson(jsonataContext[node?.attributes?.config?.params?.scope])
  }, [jsonataContext])

  console.log("'----node----'", {node})

  const [componentProps, setComponentProps]: any = useState({
    value: inputJson || "",
    // renderEditorWhenEmpty: true,
    title: node?.attributes?.config?.params?.scope,
    subtitle: "",
    id: node?.attributes?.config?.params?.scope
    })


  const componentName = node.getComponent()
  return <WidgetRenderer name={componentName} {...componentProps} />
}
