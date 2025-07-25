import React from 'react'
import { FormStep, FormItem, Input, FormButtonGroup } from '@ui-kit/forms'
import { createForm } from '@formily/core'
import { FormProvider, FormConsumer, createSchemaField } from '@formily/react'
import { Button } from 'antd'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    FormStep,
    Input,
  },
})

const form = createForm()
const formStep = FormStep.createFormStep()

export const FormStepMarkup = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Void
          x-component="FormStep"
          x-component-props={{ formStep }}
        >
          <SchemaField.Void
            x-component="FormStep.StepPane"
            x-component-props={{ title: 'First Step' }}
          >
            <SchemaField.String
              name="aaa"
              x-decorator="FormItem"
              required
              x-component="Input"
            />
          </SchemaField.Void>
          <SchemaField.Void
            x-component="FormStep.StepPane"
            x-component-props={{ title: 'Second Step' }}
          >
            <SchemaField.String
              name="bbb"
              x-decorator="FormItem"
              required
              x-component="Input"
            />
          </SchemaField.Void>
          <SchemaField.Void
            type="void"
            x-component="FormStep.StepPane"
            x-component-props={{ title: 'Step 3' }}
          >
            <SchemaField.String
              name="ccc"
              x-decorator="FormItem"
              required
              x-component="Input"
            />
          </SchemaField.Void>
        </SchemaField.Void>
      </SchemaField>
      <FormConsumer>
        {() => (
          <FormButtonGroup>
            <Button
              disabled={!formStep.allowBack}
              onClick={() => {
                formStep.back()
              }}
            >
              Previous
            </Button>
            <Button
              disabled={!formStep.allowNext}
              onClick={() => {
                formStep.next()
              }}
            >
              Next step
            </Button>
            <Button
              disabled={formStep.allowNext}
              onClick={() => {
                formStep.submit(console.log)
              }}
            >
              submit
            </Button>
          </FormButtonGroup>
        )}
      </FormConsumer>
    </FormProvider>
  )
}
