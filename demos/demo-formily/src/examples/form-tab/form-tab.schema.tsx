import React from 'react'
import {
  FormTab,
  FormItem,
  Input,
  FormButtonGroup,
  Submit,
} from '../../components'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { Button } from 'antd'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    FormTab,
    Input,
  },
})

const form = createForm()
const formTab = FormTab.createFormTab()

const schema = {
  type: 'object',
  properties: {
    collapse: {
      type: 'void',
      'x-component': 'FormTab',
      'x-component-props': {
        formTab: '{{formTab}}',
      },
      properties: {
        tab1: {
          type: 'void',
          'x-component': 'FormTab.TabPane',
          'x-component-props': {
            tab: 'A1',
          },
          properties: {
            aaa: {
              type: 'string',
              title: 'AAA',
              'x-decorator': 'FormItem',
              required: true,
              'x-component': 'Input',
            },
          },
        },
        tab2: {
          type: 'void',
          'x-component': 'FormTab.TabPane',
          'x-component-props': {
            tab: 'A2',
          },
          properties: {
            bbb: {
              type: 'string',
              title: 'BBB',
              'x-decorator': 'FormItem',
              required: true,
              'x-component': 'Input',
            },
          },
        },
        tab3: {
          type: 'void',
          'x-component': 'FormTab.TabPane',
          'x-component-props': {
            tab: 'A3',
          },
          properties: {
            ccc: {
              type: 'string',
              title: 'CCC',
              'x-decorator': 'FormItem',
              required: true,
              'x-component': 'Input',
            },
          },
        },
      },
    },
  },
}

export const FormTabSchema = () => {
  return (
    <FormProvider form={form}>
      <SchemaField schema={schema} scope={{ formTab }} />
      <FormButtonGroup.FormItem>
        <Button
          onClick={() => {
            form.query('tab3').take((field) => {
              field.visible = !field.visible
            })
          }}
        >
          Show/hide the last tab
        </Button>
        <Button
          onClick={() => {
            formTab.setActiveKey('tab2')
          }}
        >
          Switch to the second Tab
        </Button>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup.FormItem>
    </FormProvider>
  )
}
