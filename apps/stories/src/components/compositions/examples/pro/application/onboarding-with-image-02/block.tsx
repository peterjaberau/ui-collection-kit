import { Box, Button, CheckboxCard, CheckboxGroup, HStack, Icon } from '@chakra-ui/react'
import { LuArrowRight } from 'react-icons/lu'
import * as Logo from './brand-logo-icons'
import { Layout } from './layout-with-image'

export const Block = () => {
  return (
    <Layout
      title="Which of these tools do you use frequently?"
      description="Select as many as you like."
      totalSteps={5}
      currentStep={2}
    >
      <CheckboxGroup>
        <HStack wrap="wrap" gap="3">
          {items.map((item) => (
            <CheckboxCard.Root
              align="center"
              flex="0"
              whiteSpace="nowrap"
              key={item.value}
              value={item.value}
            >
              <CheckboxCard.HiddenInput />
              <CheckboxCard.Control>
                <Icon boxSize="1em" fontSize="2xl">
                  {item.icon}
                </Icon>
                <CheckboxCard.Label>{item.label}</CheckboxCard.Label>
              </CheckboxCard.Control>
            </CheckboxCard.Root>
          ))}
        </HStack>
      </CheckboxGroup>

      <Box mt="8">
        <Button size="xl" minW="8rem">
          Next <LuArrowRight />
        </Button>
      </Box>
    </Layout>
  )
}

const items = [
  { label: 'Google Analytics', icon: <Logo.GoogleAnalytics />, value: 'marketing' },
  { label: 'Google Sheet', icon: <Logo.GoogleSheet />, value: 'sales' },
  { label: 'Figma', icon: <Logo.Figma />, value: 'engineering' },
  { label: 'Notion', icon: <Logo.Notion />, value: 'design' },
  { label: 'Google Tag Manager', icon: <Logo.GoogleTagManager />, value: 'gtm' },
  { label: 'Intercom', icon: <Logo.Intercom />, value: 'intercom' },
  { label: 'Amplitude', icon: <Logo.Amplitude />, value: 'amplitude' },
  { label: 'Hubspot', icon: <Logo.Hubspot />, value: 'hubspot' },
  { label: 'Sentry', icon: <Logo.Sentry />, value: 'sentry' },
]
