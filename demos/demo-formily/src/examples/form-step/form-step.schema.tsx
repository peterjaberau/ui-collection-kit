import React from 'react'
import { FormStep, FormItem, Input, FormButtonGroup } from '../../components'
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

const schema = {
  type: 'object',
  properties: {
    step: {
      type: 'void',
      'x-component': 'FormStep',
      'x-component-props': {
        formStep: '{{formStep}}',
      },
      properties: {
        step1: {
          type: 'void',
          'x-component': 'FormStep.StepPane',
          'x-component-props': {
            title: 'First Step',
          },
          properties: {
            aaa: {
              type: 'string',
              title: 'AAA',
              required: true,
              'x-decorator': 'FormItem',
              'x-component': 'Input',
            },
          },
        },
        step2: {
          type: 'void',
          'x-component': 'FormStep.StepPane',
          'x-component-props': {
            title: 'Second Step',
          },
          properties: {
            bbb: {
              type: 'string',
              title: 'AAA',
              required: true,
              'x-decorator': 'FormItem',
              'x-component': 'Input',
            },
          },
        },
        step3: {
          type: 'void',
          'x-component': 'FormStep.StepPane',
          'x-component-props': {
            title: 'The third step',
          },
          properties: {
            ccc: {
              type: 'string',
              title: 'AAA',
              required: true,
              'x-decorator': 'FormItem',
              'x-component': 'Input',
            },
          },
        },
      },
    },
  },
}

export const FormStepSchema = () => {
  return (
    <FormProvider form={form}>
      <SchemaField schema={schema} scope={{ formStep }} />
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
