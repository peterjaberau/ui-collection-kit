import React from 'react'
import {
  Input,
  Select,
  FormItem,
  FormButtonGroup,
  Submit,
  FormLayout,
} from '../../components'
import { createForm } from '@formily/core'
import { FormProvider, Field } from '@formily/react'

const form = createForm()

export const FormLayoutPurejsx = () => (
  <FormProvider form={form}>
    <FormLayout labelCol={6} wrapperCol={10}>
      <Field
        name="input"
        required
        title="input box"
        decorator={[FormItem]}
        component={[Input]}
      />
      <Field
        name="select"
        required
        title="select box"
        decorator={[FormItem]}
        component={[Select]}
      />
      <FormButtonGroup.FormItem>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup.FormItem>
    </FormLayout>
  </FormProvider>
)
