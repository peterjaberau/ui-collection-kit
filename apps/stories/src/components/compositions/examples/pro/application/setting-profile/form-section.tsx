import { Fieldset, Stack } from '@chakra-ui/react'

interface FormSectionProps {
  title: string
  description: string
  children: React.ReactNode
}

export const FormSection = (props: FormSectionProps) => {
  return (
    <Fieldset.Root size="lg" flexDir={{ base: 'column', md: 'row' }}>
      <Stack flex="1" maxW="2xl">
        <Fieldset.Legend textStyle="xl">{props.title}</Fieldset.Legend>
        <Fieldset.HelperText>{props.description}</Fieldset.HelperText>
      </Stack>
      <Fieldset.Content flex="1" alignItems="flex-start" mt={{ md: '0' }}>
        {props.children}
      </Fieldset.Content>
    </Fieldset.Root>
  )
}
