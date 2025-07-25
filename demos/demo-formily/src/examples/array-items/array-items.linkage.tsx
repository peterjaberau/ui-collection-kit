import React from 'react'
import {
  FormItem,
  Input,
  ArrayItems,
  Editable,
  FormButtonGroup,
  Submit,
  Space,
} from '@ui-kit/forms'
import { createForm, onFieldChange, onFieldReact } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    Space,
    Editable,
    FormItem,
    Input,
    ArrayItems,
  },
})

const form = createForm({
  effects: () => {
    //Active linkage mode
    onFieldChange('array.*.aa', ['value'], (field: any, form) => {
      form.setFieldState(field.query('.bb'), (state) => {
        state.visible = field.value != '123'
      })
    })
    //Passive linkage mode
    onFieldReact('array.*.dd', (field) => {
      field.visible = field.query('.cc').get('value') != '123'
    })
  },
})

export const ArrayItemsLinkage = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Array
          name="array"
          title="Object array"
          maxItems={3}
          x-decorator="FormItem"
          x-component="ArrayItems"
          x-component-props={{
            style: {
              width: 300,
            },
          }}
        >
          <SchemaField.Object x-decorator="ArrayItems.Item">
            <SchemaField.Void x-component="Space">
              <SchemaField.Void
                x-decorator="FormItem"
                x-component="ArrayItems.SortHandle"
              />
              <SchemaField.Void
                x-decorator="FormItem"
                x-component="ArrayItems.Index"
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="Editable.Popover"
              title="Configuration data"
            >
              <SchemaField.String
                name="aa"
                x-decorator="FormItem"
                title="AA"
                required
                description="AA hide BB when entering 123"
                x-component="Input"
              />
              <SchemaField.String
                name="bb"
                x-decorator="FormItem"
                title="BB"
                required
                x-component="Input"
              />
              <SchemaField.String
                name="cc"
                x-decorator="FormItem"
                title="CC"
                required
                description="Hide DD when CC enters 123"
                x-component="Input"
              />
              <SchemaField.String
                name="dd"
                x-decorator="FormItem"
                title="DD"
                required
                x-component="Input"
              />
            </SchemaField.Void>
            <SchemaField.Void x-component="Space">
              <SchemaField.Void
                x-decorator="FormItem"
                x-component="ArrayItems.Remove"
              />
              <SchemaField.Void
                x-decorator="FormItem"
                x-component="ArrayItems.MoveUp"
              />
              <SchemaField.Void
                x-decorator="FormItem"
                x-component="ArrayItems.MoveDown"
              />
            </SchemaField.Void>
          </SchemaField.Object>
          <SchemaField.Void
            x-component="ArrayItems.Addition"
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
