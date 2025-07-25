import { FormButtonGroup, FormItem, Submit, Transfer } from '@ui-kit/forms'
import { createForm } from '@formily/core'
import { Field, FormProvider } from '@formily/react'
import React from 'react'

const form = createForm()
export const TransferPurejsx: React.FC = () => {
  return (
    <FormProvider form={form}>
      <Field
        name="transfer"
        title="shuttle box"
        dataSource={[
          { title: 'Option 1', key: 1 },
          { title: 'Option 2', key: 2 },
        ]}
        decorator={[FormItem]}
        component={[
          Transfer,
          {
            render: (item) => item.title,
          },
        ]}
      />
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
