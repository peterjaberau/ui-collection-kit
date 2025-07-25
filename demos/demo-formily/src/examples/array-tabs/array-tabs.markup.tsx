import React from 'react'
import {
  FormItem,
  Input,
  ArrayTabs,
  FormButtonGroup,
  Submit,
} from '@ui-kit/forms'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    ArrayTabs,
  },
})

const form = createForm()

export const ArrayTabsMarkup = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Array
          name="string_array"
          x-decorator="FormItem"
          title="string array"
          maxItems={3}
          x-component="ArrayTabs"
        >
          <SchemaField.String
            x-decorator="FormItem"
            required
            x-component="Input"
          />
        </SchemaField.Array>
        <SchemaField.Array
          name="array"
          x-decorator="FormItem"
          title="Object array"
          maxItems={3}
          x-component="ArrayTabs"
        >
          <SchemaField.Object>
            <SchemaField.String
              x-decorator="FormItem"
              title="AAA"
              name="aaa"
              required
              x-component="Input"
            />
            <SchemaField.String
              x-decorator="FormItem"
              title="BBB"
              name="bbb"
              required
              x-component="Input"
            />
          </SchemaField.Object>
        </SchemaField.Array>
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
