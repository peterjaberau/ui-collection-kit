import React from 'react'
import {
  TreeSelect,
  Select,
  FormItem,
  FormButtonGroup,
  Submit,
} from '@ui-kit/forms'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { action } from '@formily/reactive'

const SchemaField = createSchemaField({
  components: {
    Select,
    TreeSelect,
    FormItem,
  },
})

const loadData = async (field: any) => {
  const linkage = field.query('linkage').get('value')
  if (!linkage) return []
  return new Promise((resolve) => {
    setTimeout(() => {
      if (linkage === 1) {
        resolve([
          {
            label: 'AAA',
            value: 'aaa',
            children: [
              {
                title: 'Child Node1',
                value: '0-0-0',
                key: '0-0-0',
              },
              {
                title: 'Child Node2',
                value: '0-0-1',
                key: '0-0-1',
              },
              {
                title: 'Child Node3',
                value: '0-0-2',
                key: '0-0-2',
              },
            ],
          },
          {
            label: 'BBB',
            value: 'ccc',
            children: [
              {
                title: 'Child Node1',
                value: '0-1-0',
                key: '0-1-0',
              },
              {
                title: 'Child Node2',
                value: '0-1-1',
                key: '0-1-1',
              },
              {
                title: 'Child Node3',
                value: '0-1-2',
                key: '0-1-2',
              },
            ],
          },
        ])
      } else if (linkage === 2) {
        resolve([
          {
            label: 'CCC',
            value: 'ccc',
            children: [
              {
                title: 'Child Node1',
                value: '0-0-0',
                key: '0-0-0',
              },
              {
                title: 'Child Node2',
                value: '0-0-1',
                key: '0-0-1',
              },
              {
                title: 'Child Node3',
                value: '0-0-2',
                key: '0-0-2',
              },
            ],
          },
          {
            label: 'DDD',
            value: 'ddd',
            children: [
              {
                title: 'Child Node1',
                value: '0-1-0',
                key: '0-1-0',
              },
              {
                title: 'Child Node2',
                value: '0-1-1',
                key: '0-1-1',
              },
              {
                title: 'Child Node3',
                value: '0-1-2',
                key: '0-1-2',
              },
            ],
          },
        ])
      }
    }, 1500)
  })
}

const useAsyncDataSource = (service: any) => (field: any) => {
  field.loading = true
  service(field).then(
    // @ts-ignore
    action.bound((data) => {
      field.dataSource = data
      field.loading = false
    })
  )
}

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    linkage: {
      type: 'string',
      title: 'Linkage selection box',
      enum: [
        { label: 'Request 1', value: 1 },
        { label: 'Request 2', value: 2 },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        style: {
          width: 200,
        },
      },
    },
    select: {
      type: 'string',
      title: 'Asynchronous selection box',
      'x-decorator': 'FormItem',
      'x-component': 'TreeSelect',
      'x-component-props': {
        style: {
          width: 200,
        },
      },
      'x-reactions': ['{{useAsyncDataSource(loadData)}}'],
    },
  },
}

export const TreeSelectSchemaAsync = () => (
  <FormProvider form={form}>
    <SchemaField schema={schema} scope={{ useAsyncDataSource, loadData }} />
    <FormButtonGroup>
      <Submit onSubmit={console.log}>Submit</Submit>
    </FormButtonGroup>
  </FormProvider>
)
