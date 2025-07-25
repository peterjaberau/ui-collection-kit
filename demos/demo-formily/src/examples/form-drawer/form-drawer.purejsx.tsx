import React from 'react'
import {
  FormDrawer,
  FormItem,
  FormLayout,
  Input,
  Submit,
  Reset,
  FormButtonGroup,
} from '@ui-kit/forms'
import { Field } from '@formily/react'
import { Button } from 'antd'

export const FormDrawerPurejsx = () => {
  return (
    <Button
      onClick={() => {
        FormDrawer('Pop-up form', () => {
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
              <FormDrawer.Extra>
                <FormButtonGroup align="right">
                  <Submit
                    onSubmit={() => {
                      return new Promise((resolve) => {
                        setTimeout(resolve, 1000)
                      })
                    }}
                  >
                    Submit
                  </Submit>
                  <Reset>Reset</Reset>
                </FormButtonGroup>
              </FormDrawer.Extra>
            </FormLayout>
          )
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
