'use client'
import React from "react"
import { observer } from "@formily/reactive-react"
import JsonView from "react18-json-view"
import { useOperation, usePrefix, useSelected, useSelectedNode, useSelection, useWorkbench } from "#packages/react"

export const CurrentWorkbench = observer((props: any) => {
  const workbench = useWorkbench()
  const currentWorkspace = workbench?.activeWorkspace || workbench?.currentWorkspace
  const currentWorkspaceId = currentWorkspace?.id
  const operation = useOperation(currentWorkspaceId)
  const node = useSelectedNode(currentWorkspaceId)
  const selected = useSelected(currentWorkspaceId)
  const prefix = usePrefix("settings-form")
  const schema = node?.designerProps?.propsSchema
  const isEmpty = !(node && node.designerProps?.propsSchema && selected.length === 1)
  const selection = useSelection(currentWorkspaceId);

  return (
    <>
      <JsonView
        theme="github"
        style={{ fontSize: 12}}
        src={{
          workbench: workbench,
          currentWorkspace: currentWorkspace,
          currentWorkspaceId: currentWorkspaceId,
          operation: operation,
          node: node,
          selected: selected,
          selection: selection,
          prefix: prefix,
          schema: schema,
          isEmpty: isEmpty,
        }}
        collapsed={1}
      />
    </>
  )
})
