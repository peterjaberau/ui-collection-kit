import React from 'react'
import {
  FormDrawer,
  FormItem,
  FormLayout,
  Input,
  Submit,
  Reset,
  FormButtonGroup,
} from '../../components'
import { createSchemaField } from '@formily/react'
import { Button } from 'antd'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

export const FormDrawerMarkup = () => {
  return (
    <Button
      onClick={() => {
        FormDrawer('Drawer Form', () => {
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
              <FormDrawer.Footer>
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
              </FormDrawer.Footer>
            </FormLayout>
          )
        })
          .forOpen((props, next) => {
            setTimeout(() => {
              next({
                initialValues: {
                  aaa: '123',
                },
              })
            }, 1000)
          })
          .open()
          .then(console.log)
      }}
    >
      Click me to open the form
    </Button>
  )
}
