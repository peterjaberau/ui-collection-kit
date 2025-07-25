import React from 'react'
import {
  FormCollapse,
  FormItem,
  FormLayout,
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
    FormCollapse,
    Input,
  },
})

const form = createForm()
const formCollapse = FormCollapse.createFormCollapse()
const schema = {
  type: 'object',
  properties: {
    collapse: {
      type: 'void',
      title: 'Folding Panel',
      'x-decorator': 'FormItem',
      'x-component': 'FormCollapse',
      'x-component-props': {
        formCollapse: '{{formCollapse}}',
      },
      properties: {
        panel1: {
          type: 'void',
          'x-component': 'FormCollapse.CollapsePanel',
          'x-component-props': {
            header: 'A1',
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
        panel2: {
          type: 'void',
          'x-component': 'FormCollapse.CollapsePanel',
          'x-component-props': {
            header: 'A2',
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
        panel3: {
          type: 'void',
          'x-component': 'FormCollapse.CollapsePanel',
          'x-component-props': {
            header: 'A3',
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

export const FormCollapseSchema = () => {
  return (
    <FormProvider form={form}>
      <FormLayout labelCol={6} wrapperCol={10}>
        <SchemaField schema={schema} scope={{ formCollapse }} />
        <FormButtonGroup.FormItem>
          <Button
            onClick={() => {
              form.query('panel3').take((field) => {
                field.visible = !field.visible
              })
            }}
          >
            Show/hide the last tab
          </Button>
          <Button
            onClick={() => {
              formCollapse.toggleActiveKey('panel2')
            }}
          >
            Switch to the second Tab
          </Button>
          <Submit onSubmit={console.log}>Submit</Submit>
        </FormButtonGroup.FormItem>
      </FormLayout>
    </FormProvider>
  )
}
