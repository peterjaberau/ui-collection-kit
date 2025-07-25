import React from 'react'
import { FormDialog, FormItem, FormLayout, Input } from '@ui-kit/forms'
import { createSchemaField } from '@formily/react'
import { Button } from 'antd'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

export const FormDialogMarkup = () => {
  return (
    <Button
      onClick={() => {
        const dialog = FormDialog('Pop-up form', () => {
          return (
            <FormLayout labelCol={6} wrapperCol={10}>
              <SchemaField>
                <SchemaField.String
                  name="aaa"
                  required
                  title="input box 1"
                  x-decorator="FormItem"
                  x-component="Input"
                />
                <SchemaField.String
                  name="bbb"
                  required
                  title="input box 2"
                  x-decorator="FormItem"
                  x-component="Input"
                />
                <SchemaField.String
                  name="ccc"
                  required
                  title="input box 3"
                  x-decorator="FormItem"
                  x-component="Input"
                />
                <SchemaField.String
                  name="ddd"
                  required
                  title="input box 4"
                  x-decorator="FormItem"
                  x-component="Input"
                />
              </SchemaField>
              <FormDialog.Footer>
                <span
                  onClick={() => {
                    dialog.close()
                  }}
                  style={{ marginLeft: 4 }}
                >
                  Extended copywriting(Click me to close the form)
                </span>
              </FormDialog.Footer>
            </FormLayout>
          )
        })
        dialog
          .forOpen((payload, next) => {
            setTimeout(() => {
              next({
                initialValues: {
                  aaa: '123',
                },
              })
            }, 1000)
          })
          .forConfirm((payload, next) => {
            setTimeout(() => {
              console.log(payload)
              next(payload)
            }, 1000)
          })
          .forCancel((payload, next) => {
            setTimeout(() => {
              console.log(payload)
              next(payload)
            }, 1000)
          })
          .open({
            initialValues: {
              aaa: '123',
            },
          })
          .then(console.log)
      }}
    >
      Click me to open the form
    </Button>
  )
}
