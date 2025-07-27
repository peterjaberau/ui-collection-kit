import React from 'react'
import { Alert as ChakraAlert } from '@chakra-ui/react'
import { createBehavior, createResource } from '#packages/core'
import { DnFC } from '#packages/react'
import { createVoidFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Alert: DnFC<any> = (props: any) => {
  return (
    <>
      <ChakraAlert.Root
        status={props.status}
        title={props.title}
        variant={props.variant} {...props}
      >
        <ChakraAlert.Indicator />
        <ChakraAlert.Content>
          <ChakraAlert.Title>{props.title}</ChakraAlert.Title>
          <ChakraAlert.Description>{props.description}</ChakraAlert.Description>
        </ChakraAlert.Content>
      </ChakraAlert.Root>
    </>
  );
}
Alert.Behavior = createBehavior({
  name: 'Alert',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Alert',
  designerProps: {
    droppable: true,
    propsSchema: createVoidFieldSchema(AllSchemas.Alert),
  },
  designerLocales: AllLocales.Alert,
})

Alert.Resource = createResource({
  icon: 'CardSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'void',
        title: 'Alert',
        'x-component': 'Alert',
        'x-component-props': {
          title: 'This is an alert',
          status: 'info',
        },
      },
    },
  ],
})
