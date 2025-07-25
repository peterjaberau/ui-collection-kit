import React from 'react'
import {
  FormItem,
  Input,
  ArrayTable,
  Switch,
  FormButtonGroup,
  Submit,
} from '@ui-kit/forms'
import { createForm, onFieldChange, onFieldReact } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { Button } from 'antd'

const SchemaField: any = createSchemaField({
  components: {
    FormItem,
    Switch,
    Input,
    Button,
    ArrayTable,
  },
})

const form = createForm({
  effects: () => {
    //Active linkage mode
    onFieldChange('hideFirstColumn', ['value'], (field: any) => {
      field.query('array.column4').take((target: any) => {
        target.visible = !field.value
      })
      field.query('array.*.a2').take((target: any) => {
        target.visible = !field.value
      })
    })
    //Passive linkage mode
    onFieldReact('array.*.a2', (field) => {
      field.visible = !field.query('.a1').get('value')
    })
  },
})

export const ArrayTableLinkage = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Boolean
          name="hideFirstColumn"
          x-decorator="FormItem"
          x-component="Switch"
          title="Hide A2"
        />
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
              name="column1"
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
              name="column2"
              x-component-props={{ width: 80, title: 'Index', align: 'center' }}
            >
              <SchemaField.String
                x-decorator="FormItem"
                required
                x-component="ArrayTable.Index"
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="ArrayTable.Column"
              name="column3"
              x-component-props={{
                title: 'Explicitly hidden->A2',
                dataIndex: 'a1',
                width: 100,
              }}
            >
              <SchemaField.Boolean
                name="a1"
                x-decorator="FormItem"
                required
                x-component="Switch"
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="ArrayTable.Column"
              name="column4"
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
              name="column5"
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
              name="column6"
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
      </FormButtonGroup>
    </FormProvider>
  )
}
