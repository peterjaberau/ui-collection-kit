import {
  Box,
  Button,
  CheckboxCard,
  CheckboxGroup,
  Field,
  Fieldset,
  HStack,
  Span,
  Stack,
  Text,
} from '@chakra-ui/react'
import { LuArrowRight } from 'react-icons/lu'
import { Layout } from './layout-with-image'
import { BestTimeSelect, WorkHourSelect } from './select'

export const Block = () => {
  return (
    <Layout
      title="What's your time schedule?"
      description="This will help us determine the best time to contact you."
      totalSteps={5}
      currentStep={5}
    >
      <Fieldset.Root spaceY="1.5">
        <Fieldset.Legend>Working days</Fieldset.Legend>
        <CheckboxGroup>
          <HStack wrap="wrap" gap="3">
            {items.map((item) => (
              <CheckboxCard.Root size="sm" flex="0" minW="11" key={item.value} value={item.value}>
                <CheckboxCard.HiddenInput />
                <CheckboxCard.Control>
                  <CheckboxCard.Label justifyContent="center">{item.label}</CheckboxCard.Label>
                </CheckboxCard.Control>
              </CheckboxCard.Root>
            ))}
          </HStack>
        </CheckboxGroup>
      </Fieldset.Root>

      <Stack gap="1.5" maxW="sm">
        <Text fontWeight="medium" textStyle="sm">
          Working hours
        </Text>
        <HStack gap="4">
          <WorkHourSelect name="bestTimeFrom" />
          <Span textStyle="sm">to</Span>
          <WorkHourSelect name="bestTimeTo" />
        </HStack>
      </Stack>
      <Field.Root maxW="sm">
        <Field.Label>Best time to contact</Field.Label>
        <BestTimeSelect />
      </Field.Root>

      <Box mt="8">
        <Button size="xl" minW="8rem">
          Next <LuArrowRight />
        </Button>
      </Box>
    </Layout>
  )
}

const items = [
  { label: 'M', value: 'Monday' },
  { label: 'T', value: 'Tuesday' },
  { label: 'W', value: 'Wednesday' },
  { label: 'T', value: 'Thursday' },
  { label: 'F', value: 'Friday' },
  { label: 'S', value: 'Saturday' },
  { label: 'S', value: 'Sunday' },
]
