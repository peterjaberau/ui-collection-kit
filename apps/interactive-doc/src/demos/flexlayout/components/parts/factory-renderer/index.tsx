"use client"
import { useEffect, useState } from "react"
import { WidgetRenderer } from "#modules/registry/widgets-registry"
import { useJsonataRoot } from "#demos/jsonata/actors/hooks/useJsonataRoot"
import { useFlexLayoutNode } from "#demos/flexlayout/hooks/useFlexLayoutNode"

const bindWidgetMonacoEditor = ({ nodeSelector, logicSelector, onValueChange }: any) => {
  const { configParams, configProps, configData, nodeId } = nodeSelector
  const { jsonataContext, sendToJsonataRoot } = logicSelector

  return {
    id: nodeId,
    title: configProps?.title || configParams?.scope,
    subtitle: configProps?.subtitle || configParams?.scope,
    value: jsonataContext[configParams?.scope],
    renderEditorWhenEmpty: true,
    errors: [],
    onChange: (value: any) => {
      // const input = value ? JSON.parse(value) : null

      const parsed = val ? JSON.parse(val) : null
      onValueChange?.(configParams?.scope, parsed)
    },
    readOnly: false,
  }
}

const bindWidgetAction = ({ nodeSelector, logicSelector }: any) => {
  const { configParams, configProps, configData, nodeId } = nodeSelector
  const { jsonataContext, sendToJsonataRoot } = logicSelector

  return {
    id: nodeId,
    text: configProps?.text || "Action",
    onClick: () => sendToJsonataRoot({ type: "execute" }),
  }
}

const bindWidgetDefaults = ({ nodeSelector, logicSelector }: any) => {
  const { configParams, configProps, configData, nodeId } = nodeSelector
  const { jsonataContext, sendToJsonataRoot } = logicSelector

  return {
    id: nodeId,
  }
}

export const FactoryRenderer = (node: any) => {
  const logicSelector = useJsonataRoot()
  const nodeSelector = useFlexLayoutNode({ node })

  // No need for a value state here
  const handleValueChange = (scope: string, newValue: any) => {
    logicSelector.sendToJsonataRoot({ type: "update", scope, value: newValue })
  }

  // const [componentProps, setComponentProps]: any = useState(null)

  const getComponentProps = () => {
    if (nodeSelector.componentName === "widget-monaco-editor") {
      return bindWidgetMonacoEditor({
        nodeSelector,
        logicSelector,
        onValueChange: handleValueChange,
      })
    } else if (nodeSelector.componentName === "widget-action") {
      return bindWidgetAction({ nodeSelector, logicSelector })
    } else {
      return bindWidgetDefaults({ nodeSelector, logicSelector })
    }
  }

  const componentProps = getComponentProps()

  return <WidgetRenderer name={nodeSelector.componentName} {...componentProps} />
}
