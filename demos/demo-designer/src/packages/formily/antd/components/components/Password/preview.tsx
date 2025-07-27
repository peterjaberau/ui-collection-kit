import React from 'react'
import { Password as FormilyPassword } from '@ui-kit/forms'
import { createBehavior, createResource } from '#packages/core'
import { DnFC } from '#packages/react'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Password: DnFC<React.ComponentProps<typeof FormilyPassword>> =
  FormilyPassword

Password.Behavior = createBehavior({
  name: 'Password',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Password',
  designerProps: {
    propsSchema: createFieldSchema(AllSchemas.Password),
  },
  designerLocales: AllLocales.Password,
})

Password.Resource = createResource({
  icon: 'PasswordSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        title: 'Password',
        'x-decorator': 'FormItem',
        'x-component': 'Password',
      },
    },
  ],
})
