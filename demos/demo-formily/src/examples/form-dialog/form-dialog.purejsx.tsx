import React from 'react'
import { FormDialog, FormItem, FormLayout, Input } from '@formily/antd-v5'
import { Field } from '@formily/react'
import { Button } from 'antd'

export const FormDialogPurejsx = () => {
  return (
    <Button
      onClick={() => {
        const dialog = FormDialog('Pop-up form', () => {
          return (
            <FormLayout labelCol={6} wrapperCol={10}>
              <Field
                name="aaa"
                required
                title="input box 1"
                decorator={[FormItem]}
                component={[Input]}
              />
              <Field
                name="bbb"
                required
                title="input box 2"
                decorator={[FormItem]}
                component={[Input]}
              />
              <Field
                name="ccc"
                required
                title="input box 3"
                decorator={[FormItem]}
                component={[Input]}
              />
              <Field
                name="ddd"
                required
                title="input box 4"
                decorator={[FormItem]}
                component={[Input]}
              />
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
