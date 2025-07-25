import React from 'react'
import {
  NumberPicker,
  FormItem,
  FormButtonGroup,
  Submit,
} from '@ui-kit/forms'
import { createForm } from '@formily/core'
import { FormProvider, Field } from '@formily/react'

const form = createForm()
export const NumberPickerPureJsx: React.FC = () => {
  return (
    <FormProvider form={form}>
      <Field
        name="input"
        title="input box"
        required
        decorator={[FormItem]}
        component={[
          NumberPicker,
          {
            style: {
              width: 240,
            },
          },
        ]}
      />

      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}

