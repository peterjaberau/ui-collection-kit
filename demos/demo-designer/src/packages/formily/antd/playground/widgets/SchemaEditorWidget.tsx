'use client'
import React from 'react'
import {
  transformToSchema,
  transformToTreeNode,
} from '#packages/formily/transformer'
import { TreeNode, ITreeNode } from '#packages/core'
import { MonacoInput } from '#packages/react-settings-form'

export interface ISchemaEditorWidgetProps {
  tree: TreeNode | any
  onChange?: (tree: ITreeNode | any) => void
}

export const SchemaEditorWidget: React.FC<ISchemaEditorWidgetProps | any> | any = (
  props: any
) => {



  return (
    <MonacoInput
      {...props}
      value={JSON.stringify(transformToSchema(props.tree), null, 2)}
      onChange={(value) => {
        props.onChange?.(transformToTreeNode(JSON.parse(value)))
      }}
      language="json"
    />
  )
}
