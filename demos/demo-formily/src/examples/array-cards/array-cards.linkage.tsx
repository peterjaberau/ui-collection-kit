import React from 'react'
import {
  FormItem,
  Input,
  FormButtonGroup,
} from '@ui-kit/forms'
import { Submit } from '@ui-kit/forms'
import { ArrayCards } from "@ui-kit/forms"
import { createForm, onFieldChange, onFieldReact } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    ArrayCards,
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

export const ArrayCardsLinkage = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Array
          name="array"
          maxItems={3}
          x-component="ArrayCards"
          x-decorator="FormItem"
          x-component-props={{
            title: 'Object array',
          }}
        >
          <SchemaField.Object>
            <SchemaField.Void x-component="ArrayCards.Index" />
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
            <SchemaField.Void x-component="ArrayCards.Remove" />
            <SchemaField.Void x-component="ArrayCards.MoveUp" />
            <SchemaField.Void x-component="ArrayCards.MoveDown" />
          </SchemaField.Object>
          <SchemaField.Void
            x-component="ArrayCards.Addition"
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
