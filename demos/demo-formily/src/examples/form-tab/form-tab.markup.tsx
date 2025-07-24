import React from 'react'
import {
  FormTab,
  FormItem,
  Input,
  FormButtonGroup,
  Submit,
} from '@formily/antd-v5'
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

export const FormTabMarkup = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Void
          type="void"
          x-component="FormTab"
          x-component-props={{ formTab }}
        >
          <SchemaField.Void
            type="void"
            name="tab1"
            x-component="FormTab.TabPane"
            x-component-props={{ tab: 'A1' }}
          >
            <SchemaField.String
              name="aaa"
              x-decorator="FormItem"
              title="AAA"
              required
              x-component="Input"
            />
          </SchemaField.Void>
          <SchemaField.Void
            name="tab2"
            x-component="FormTab.TabPane"
            x-component-props={{ tab: 'A2' }}
          >
            <SchemaField.String
              name="bbb"
              x-decorator="FormItem"
              title="BBB"
              required
              x-component="Input"
            />
          </SchemaField.Void>
          <SchemaField.Void
            name="tab3"
            x-component="FormTab.TabPane"
            x-component-props={{ tab: 'A3' }}
          >
            <SchemaField.String
              name="ccc"
              x-decorator="FormItem"
              title="CCC"
              required
              x-component="Input"
            />
          </SchemaField.Void>
        </SchemaField.Void>
      </SchemaField>
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
