import React from 'react'
import {
  FormCollapse,
  FormLayout,
  FormItem,
  Input,
  FormButtonGroup,
  Submit,
} from '../../components'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { Button } from 'antd'

const SchemaField: any = createSchemaField({
  components: {
    FormItem,
    FormCollapse,
    Input,
  },
})

const form = createForm()
const formCollapse = FormCollapse.createFormCollapse()
export const FormCollapseMarkup = () => {
  return (
    <FormProvider form={form}>
      <FormLayout labelCol={6} wrapperCol={10}>
        <SchemaField>
          <SchemaField.Void
            title="Folding Panel"
            x-decorator="FormItem"
            x-component="FormCollapse"
            x-component-props={{
              formCollapse,
            }}
          >
            <SchemaField.Void
              name="panel1"
              x-component="FormCollapse.CollapsePanel"
              x-component-props={{ header: 'A1' }}
            >
              <SchemaField.String
                name="aaa"
                title="AAA"
                x-decorator="FormItem"
                required
                x-component="Input"
              />
            </SchemaField.Void>
            <SchemaField.Void
              name="panel2"
              x-component="FormCollapse.CollapsePanel"
              x-component-props={{ header: 'A2' }}
            >
              <SchemaField.String
                name="bbb"
                title="BBB"
                x-decorator="FormItem"
                required
                x-component="Input"
              />
            </SchemaField.Void>
            <SchemaField.Void
              name="panel3"
              x-component="FormCollapse.CollapsePanel"
              x-component-props={{ header: 'A3' }}
            >
              <SchemaField.String
                name="ccc"
                title="CCC"
                x-decorator="FormItem"
                required
                x-component="Input"
              />
            </SchemaField.Void>
          </SchemaField.Void>
        </SchemaField>
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
