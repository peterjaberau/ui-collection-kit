import React from 'react'
import {
  FormItem,
  Input,
  ArrayCollapse,
  FormButtonGroup,
  Submit,
} from '@ui-kit/forms'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { Button, Typography } from 'antd'

const SchemaField: any = createSchemaField({
  components: {
    FormItem,
    Input,
    ArrayCollapse,
  },
})

const form = createForm()

export const ArrayCollapseMarkup = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Array
          name="string_array"
          maxItems={3}
          x-decorator="FormItem"
          x-component="ArrayCollapse"
          x-component-props={{
            accordion: true,
            defaultOpenPanelCount: 3,
          }}
        >
          <SchemaField.Void
            x-component="ArrayCollapse.CollapsePanel"
            x-component-props={{
              header: 'String array',
            }}
          >
            <SchemaField.Void x-component="ArrayCollapse.Index" />
            <SchemaField.String
              name="input"
              x-decorator="FormItem"
              title="Input"
              required
              x-component="Input"
            />
            <SchemaField.Void x-component="ArrayCollapse.Remove" />
            <SchemaField.Void x-component="ArrayCollapse.MoveUp" />
            <SchemaField.Void x-component="ArrayCollapse.MoveDown" />
          </SchemaField.Void>
          <SchemaField.Void
            x-component="ArrayCollapse.Addition"
            title="Add entry"
          />
        </SchemaField.Array>
        <SchemaField.Array
          name="array"
          maxItems={3}
          x-decorator="FormItem"
          x-component="ArrayCollapse"
        >
          <SchemaField.Object
            x-component="ArrayCollapse.CollapsePanel"
            x-component-props={{
              header: 'Object array',
            }}
          >
            <SchemaField.Void x-component="ArrayCollapse.Index" />
            <SchemaField.String
              name="input"
              x-decorator="FormItem"
              title="Input"
              required
              x-component="Input"
            />
            <SchemaField.Void x-component="ArrayCollapse.Remove" />
            <SchemaField.Void x-component="ArrayCollapse.MoveUp" />
            <SchemaField.Void x-component="ArrayCollapse.MoveDown" />
          </SchemaField.Object>
          <SchemaField.Void
            x-component="ArrayCollapse.Addition"
            title="Add entry"
          />
        </SchemaField.Array>
        <SchemaField.Array
          name="string_array_unshift"
          maxItems={3}
          x-decorator="FormItem"
          x-component="ArrayCollapse"
          x-component-props={{
            defaultOpenPanelCount: 8,
          }}
        >
          <SchemaField.Void
            x-component="ArrayCollapse.CollapsePanel"
            x-component-props={{
              header: (
                <Typography.Text type="danger" style={{ marginLeft: 4 }}>
                  String Array
                </Typography.Text>
              ),
              extra: 'extra text',
            }}
          >
            <SchemaField.Void x-component="ArrayCollapse.Index" />
            <SchemaField.String
              name="input"
              x-decorator="FormItem"
              title="Input"
              required
              x-component="Input"
            />
            <SchemaField.Void x-component="ArrayCollapse.Remove" />
            <SchemaField.Void x-component="ArrayCollapse.MoveUp" />
            <SchemaField.Void x-component="ArrayCollapse.MoveDown" />
          </SchemaField.Void>
          <SchemaField.Void
            x-component="ArrayCollapse.Addition"
            title="Add entry (unshift)"
            x-component-props={{
              method: 'unshift',
            }}
          />
        </SchemaField.Array>
      </SchemaField>
      <FormButtonGroup>
        <Button
          onClick={() => {
            form.setInitialValues({
              array: Array.from({ length: 10 }).map(() => ({
                input: 'default value',
              })),
              string_array: Array.from({ length: 10 }).map(
                () => 'default value'
              ),
              string_array_unshift: Array.from({ length: 10 }).map(
                () => 'default value'
              ),
            })
          }}
        >
          Load default data
        </Button>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
