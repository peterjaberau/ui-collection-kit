import { Engine } from '#packages/core'
import { toaster } from '@ui-kit/components'

import {
  transformToSchema,
  transformToTreeNode,
} from '#packages/formily/transformer'
import { message } from 'antd'

export const saveSchema = (designer: Engine) => {
  localStorage.setItem(
    'formily-schema',
    JSON.stringify(transformToSchema(designer.getCurrentTree()))
  )


  toaster.create({
    title: "Save Success",
    closable: true,
    duration: 6000,
  })
}

export const loadInitialSchema = (designer: Engine) => {
  try {
    designer.setCurrentTree(
      transformToTreeNode(JSON.parse(localStorage.getItem('formily-schema')))
    )
  } catch {}
}
