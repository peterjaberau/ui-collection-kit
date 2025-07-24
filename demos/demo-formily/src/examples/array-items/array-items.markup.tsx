import React from 'react'
import {
  FormItem,
  Input,
  Editable,
  Select,
  DatePicker,
  ArrayItems,
  FormButtonGroup,
  Submit,
  Space,
} from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'

const SchemaField: any = createSchemaField({
  components: {
    FormItem,
    DatePicker,
    Editable,
    Space,
    Input,
    Select,
    ArrayItems,
  },
})

const form = createForm()

export const ArrayItemsMarkup = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Array
          name="string_array"
          title="string array"
          x-decorator="FormItem"
          x-component="ArrayItems"
        >
          <SchemaField.Void x-component="Space">
            <SchemaField.Void
              x-decorator="FormItem"
              x-component="ArrayItems.SortHandle"
            />
            <SchemaField.String
              x-decorator="FormItem"
              required
              name="input"
              x-component="Input"
            />
            <SchemaField.Void
              x-decorator="FormItem"
              x-component="ArrayItems.Remove"
            />
            <SchemaField.Void
              x-decorator="FormItem"
              x-component="ArrayItems.Copy"
            />
          </SchemaField.Void>
          <SchemaField.Void
            x-component="ArrayItems.Addition"
            title="Add entry"
          />
        </SchemaField.Array>
        <SchemaField.Array
          name="array"
          title="Object array"
          x-decorator="FormItem"
          x-component="ArrayItems"
        >
          <SchemaField.Object>
            <SchemaField.Void x-component="Space">
              <SchemaField.Void
                x-decorator="FormItem"
                x-component="ArrayItems.SortHandle"
              />
              <SchemaField.String
                x-decorator="FormItem"
                required
                title="date"
                name="date"
                x-component="DatePicker.RangePicker"
                x-component-props={{
                  style: {
                    width: 160,
                  },
                }}
              />
              <SchemaField.String
                x-decorator="FormItem"
                required
                title="input box"
                name="input"
                x-component="Input"
              />
              <SchemaField.String
                x-decorator="FormItem"
                required
                title="select box"
                name="select"
                enum={[
                  { label: 'Option 1', value: 1 },
                  { label: 'Option 2', value: 2 },
                ]}
                x-component="Select"
                x-component-props={{
                  style: {
                    width: 160,
                  },
                }}
              />
              <SchemaField.Void
                x-decorator="FormItem"
                x-component="ArrayItems.Remove"
              />
            </SchemaField.Void>
          </SchemaField.Object>
          <SchemaField.Void
            x-component="ArrayItems.Addition"
            title="Add entry"
          />
        </SchemaField.Array>
        <SchemaField.Array
          name="array2"
          title="Object array"
          x-decorator="FormItem"
          x-component="ArrayItems"
          x-component-props={{ style: { width: 300 } }}
        >
          <SchemaField.Object x-decorator="ArrayItems.Item">
            <SchemaField.Void
              x-decorator="FormItem"
              x-component="ArrayItems.SortHandle"
            />
            <SchemaField.String
              x-decorator="Editable"
              title="input box"
              name="input"
              x-component="Input"
              x-component-props={{ bordered: false }}
            />
            <SchemaField.Object
              name="config"
              x-component="Editable.Popover"
              required
              title="Configure complex data"
              x-reactions={(field: any) => {
                field.title = field.value?.input || field.title
              }}
            >
              <SchemaField.String
                x-decorator="FormItem"
                required
                title="date"
                name="date"
                x-component="DatePicker.RangePicker"
                x-component-props={{ style: { width: '100%' } }}
              />
              <SchemaField.String
                x-decorator="FormItem"
                required
                title="input box"
                name="input"
                x-component="Input"
              />
            </SchemaField.Object>
            <SchemaField.Void
              x-decorator="FormItem"
              x-component="ArrayItems.Remove"
            />
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
