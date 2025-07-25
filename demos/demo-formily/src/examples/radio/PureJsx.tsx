import { FormButtonGroup, FormItem, Radio, Submit } from '@ui-kit/forms'
import { createForm } from '@formily/core'
import { Field, FormProvider } from '@formily/react'
import React from 'react'

const form = createForm()
export const RadioPureJsx: React.FC = () => {
  return (
    <FormProvider form={form}>
      <Field
        name="radio"
        title="single choice"
        dataSource={[
          {
            label: 'Option 1',
            value: 1,
          },
          {
            label: 'Option 2',
            value: 2,
          },
        ]}
        decorator={[FormItem]}
        component={[Radio.Group]}
      />
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}

