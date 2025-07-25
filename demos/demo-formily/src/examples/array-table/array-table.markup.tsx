import React from 'react'
import {
  FormItem,
  Input,
  ArrayTable,
  Editable,
  FormButtonGroup,
  Submit,
} from '@ui-kit/forms'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { Button, Alert } from 'antd'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Editable,
    Input,
    ArrayTable,
  },
})

const form = createForm()

const range = (count: number) =>
  Array.from(new Array(count)).map((_, key) => ({
    aaa: key,
  }))

export const ArrayTableMarkup = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Array
          name="array"
          x-decorator="FormItem"
          x-component="ArrayTable"
          x-component-props={{
            pagination: { pageSize: 10 },
            scroll: { x: '100%' },
          }}
        >
          <SchemaField.Object>
            <SchemaField.Void
              x-component="ArrayTable.Column"
              x-component-props={{ width: 50, title: 'Sort', align: 'center' }}
            >
              <SchemaField.Void
                x-decorator="FormItem"
                required
                x-component="ArrayTable.SortHandle"
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="ArrayTable.Column"
              x-component-props={{ width: 80, title: 'Index', align: 'center' }}
            >
              <SchemaField.Void
                x-decorator="FormItem"
                required
                x-component="ArrayTable.Index"
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="ArrayTable.Column"
              x-component-props={{ title: 'A1', dataIndex: 'a1', width: 200 }}
            >
              <SchemaField.String
                name="a1"
                x-decorator="Editable"
                required
                x-component="Input"
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="ArrayTable.Column"
              x-component-props={{ title: 'A2', width: 200 }}
            >
              <SchemaField.String
                x-decorator="FormItem"
                name="a2"
                required
                x-component="Input"
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="ArrayTable.Column"
              x-component-props={{ title: 'A3', width: 200 }}
            >
              <SchemaField.String
                x-decorator="FormItem"
                name="a3"
                required
                x-component="Input"
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="ArrayTable.Column"
              x-component-props={{
                title: 'Operations',
                dataIndex: 'operations',
                width: 200,
                fixed: 'right',
              }}
            >
              <SchemaField.Void x-component="FormItem">
                <SchemaField.Void x-component="ArrayTable.Remove" />
                <SchemaField.Void x-component="ArrayTable.MoveDown" />
                <SchemaField.Void x-component="ArrayTable.MoveUp" />
              </SchemaField.Void>
            </SchemaField.Void>
          </SchemaField.Object>
          <SchemaField.Void
            x-component="ArrayTable.Addition"
            title="Add entry"
          />
        </SchemaField.Array>
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
        <Button
          block
          onClick={() => {
            form.setInitialValues({
              array: range(100000),
            })
          }}
        >
          Load 10W pieces of large data
        </Button>
      </FormButtonGroup>
      <Alert
        style={{ marginTop: 10 }}
        message="Note: Open the formily plug-in page, because there is data communication in the background, which will occupy the browser's computing power, it is best to test in the incognito mode (no formily plug-in)"
        type="warning"
      />
    </FormProvider>
  )
}
