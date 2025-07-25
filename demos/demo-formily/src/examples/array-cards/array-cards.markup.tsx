import React from 'react'
import {
  FormItem,
  Input,
  FormButtonGroup,

} from '../../components'
import { Submit } from '../../components/submit'
import ArrayCards from '../../components/array-cards'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    ArrayCards,
  },
})

const form = createForm()

export const ArrayCardsMarkup = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Array
          name="string_array"
          maxItems={3}
          x-decorator="FormItem"
          x-component="ArrayCards"
          x-component-props={{
            title: 'String array',
          }}
        >
          <SchemaField.Void>
            <SchemaField.Void x-component="ArrayCards.Index" />
            <SchemaField.String
              name="input"
              x-decorator="FormItem"
              title="Input"
              required
              x-component="Input"
            />
            <SchemaField.Void x-component="ArrayCards.Remove" />
            <SchemaField.Void x-component="ArrayCards.Copy" />
            <SchemaField.Void x-component="ArrayCards.MoveUp" />
            <SchemaField.Void x-component="ArrayCards.MoveDown" />
          </SchemaField.Void>
          <SchemaField.Void
            x-component="ArrayCards.Addition"
            title="Add entry"
          />
        </SchemaField.Array>
        <SchemaField.Array
          name="array"
          maxItems={3}
          x-decorator="FormItem"
          x-component="ArrayCards"
          x-component-props={{
            title: 'Object array',
          }}
        >
          <SchemaField.Object>
            <SchemaField.Void x-component="ArrayCards.Index" />
            <SchemaField.String
              name="input"
              x-decorator="FormItem"
              title="Input"
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
