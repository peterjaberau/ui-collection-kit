import * as React from 'react'
import { Meta } from '@storybook/react'

import { useLocalStorage } from '..'

import { Container, Button, ButtonGroup } from '@chakra-ui/react'

export default {
  title: 'SaasUI/Hooks/useLocalStorage',
} as Meta

export const Basic = () => {
  const [value, setValue] = useLocalStorage<string | undefined>(
    'story.basic',
    ''
  )

  return (
    <Container>
      <ButtonGroup>
        <Button onClick={() => setValue('Clicked')}>Value: {value}</Button>

        <Button onClick={() => setValue(undefined)}>Reset</Button>
      </ButtonGroup>
    </Container>
  )
}

export const DefaultValue = () => {
  const [value, setValue] = useLocalStorage<string | undefined>(
    'story.default',
    'Not clicked'
  )

  return (
    <Container>
      <ButtonGroup>
        <Button onClick={() => setValue('Clicked')}>Value: {value}</Button>

        <Button onClick={() => setValue(undefined)}>Reset</Button>
      </ButtonGroup>
    </Container>
  )
}
