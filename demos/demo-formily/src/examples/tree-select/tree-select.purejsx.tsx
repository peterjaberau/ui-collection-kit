import React from 'react'
import { TreeSelect, FormItem, FormButtonGroup, Submit } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { FormProvider, Field } from '@formily/react'

const form = createForm()

export const TreeSelectPurejsx = () => (
  <FormProvider form={form}>
    <Field
      name="select"
      title="select box"
      dataSource={[
        {
          label: 'Option 1',
          value: 1,
          children: [
            {
              title: 'Child Node1',
              value: '0-0-0',
              key: '0-0-0',
            },
            {
              title: 'Child Node2',
              value: '0-0-1',
              key: '0-0-1',
            },
            {
              title: 'Child Node3',
              value: '0-0-2',
              key: '0-0-2',
            },
          ],
        },
        {
          label: 'Option 2',
          value: 2,
          children: [
            {
              title: 'Child Node3',
              value: '0-1-0',
              key: '0-1-0',
            },
            {
              title: 'Child Node4',
              value: '0-1-1',
              key: '0-1-1',
            },
            {
              title: 'Child Node5',
              value: '0-1-2',
              key: '0-1-2',
            },
          ],
        },
      ]}
      decorator={[FormItem]}
      component={[TreeSelect]}
    />
    <FormButtonGroup>
      <Submit onSubmit={console.log}>Submit</Submit>
    </FormButtonGroup>
  </FormProvider>
)
