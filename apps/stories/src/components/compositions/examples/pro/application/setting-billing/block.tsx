import { Badge, Button, Container, Flex, Heading, Stack, Stat, Text } from '@chakra-ui/react'
import { LuCheck } from 'react-icons/lu'
import { InfoTip } from '@/components/ui/toggle-tip'
import { invoices } from './data'
import { InvoiceTable } from './invoice-table'
import { PlanCard } from './plan-card'

export const Block = () => {
  return (
    <Container maxW="3xl" py="20">
      <Stack gap="12">
        <Stack gap="1">
          <Heading>Billing</Heading>
          <Text textStyle="sm" color="fg.muted">
            Manage your billing information and view your billing history.
          </Text>
        </Stack>

        <Stack gap="3">
          <Text fontWeight="medium">Overview</Text>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            divideX={{ md: '1px' }}
            divideY={{ base: '1px', md: '0' }}
            borderWidth="1px"
            rounded="l2"
            bg="bg.panel"
          >
            <Stat.Root padding="4">
              <Stat.Label>
                Files
                <InfoTip>The number of files you have uploaded.</InfoTip>
              </Stat.Label>
              <Stat.ValueText>2</Stat.ValueText>
            </Stat.Root>
            <Stat.Root padding="4">
              <Stat.Label>
                Members
                <InfoTip>The number of members in your team.</InfoTip>
              </Stat.Label>
              <Stat.ValueText>1</Stat.ValueText>
            </Stat.Root>
            <Stat.Root padding="4">
              <Stat.Label>
                Editors
                <InfoTip>The number of editors in your team.</InfoTip>
              </Stat.Label>
              <Stat.ValueText>3</Stat.ValueText>
            </Stat.Root>
          </Flex>
        </Stack>

        <Stack gap="3">
          <Text fontWeight="medium">Plan</Text>
          <Flex direction={{ base: 'column', md: 'row' }} gap="3">
            <PlanCard title="Free" description="Some description about the plan.">
              <Button size="xs" variant="surface">
                Downgrade
              </Button>
            </PlanCard>
            <PlanCard title="Premium" description="Some description about the plan.">
              <Badge variant="solid">
                <LuCheck /> Current plan
              </Badge>
            </PlanCard>
          </Flex>
        </Stack>

        <Stack gap="4" align="flex-start">
          <Stack gap="1">
            <Text fontWeight="medium">Manage subscription</Text>
            <Text textStyle="sm" color="fg.muted">
              You can manage your subscription by clicking the button below. This will take you to
              the Stripe billing portal.
            </Text>
          </Stack>
          <Button variant="surface">Manage subscription</Button>
        </Stack>

        <Stack gap="3">
          <Text fontWeight="medium">Billing history</Text>
          <InvoiceTable invoices={invoices} />
        </Stack>
      </Stack>
    </Container>
  )
}
