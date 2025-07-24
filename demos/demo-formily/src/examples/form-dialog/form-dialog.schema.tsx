import React from 'react'
import { FormDialog, FormItem, FormLayout, Input } from '@formily/antd-v5'
import { createSchemaField } from '@formily/react'
import { Button } from 'antd'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

const schema = {
  type: 'object',
  properties: {
    aaa: {
      type: 'string',
      title: 'input box 1',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    bbb: {
      type: 'string',
      title: 'input box 2',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    ccc: {
      type: 'string',
      title: 'input box 3',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    ddd: {
      type: 'string',
      title: 'input box 4',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
}

export const FormDialogSchema = () => {
  return (
    <Button
      onClick={() => {
        const dialog = FormDialog('Pop-up form', () => {
          return (
            <FormLayout labelCol={6} wrapperCol={10}>
              <SchemaField schema={schema} />
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
