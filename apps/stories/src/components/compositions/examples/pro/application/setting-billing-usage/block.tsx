import {
  Button,
  Card,
  Container,
  DataList,
  FormatNumber,
  Heading,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import { LuArrowRight } from 'react-icons/lu'
import { PlanUsage } from './plan-usage'

export const Block = () => {
  return (
    <Container maxW="3xl" py="20">
      <Stack gap="8">
        <Heading>Billing and Usage</Heading>

        <Card.Root>
          <Card.Header
            gap="4"
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent="space-between"
          >
            <Stack gap="0">
              <Card.Description>Current plan</Card.Description>
              <Card.Title textStyle="xl">Pro</Card.Title>
            </Stack>
            <Button size="sm" variant="outline">
              Manage plan <LuArrowRight />
            </Button>
          </Card.Header>
          <Card.Body>
            <DataList.Root orientation="horizontal">
              <DataList.Item justifyContent="space-between">
                <DataList.ItemLabel>Estimated usage for this month</DataList.ItemLabel>
                <DataList.ItemValue flex="unset">
                  <FormatNumber
                    value={45.5656}
                    currency="USD"
                    style="currency"
                    maximumFractionDigits={2}
                  />
                </DataList.ItemValue>
              </DataList.Item>

              <DataList.Item justifyContent="space-between">
                <DataList.ItemLabel>Pro plan with 1,000 MAU and 5 flows</DataList.ItemLabel>
                <DataList.ItemValue flex="unset">$29.99/month</DataList.ItemValue>
              </DataList.Item>
            </DataList.Root>
          </Card.Body>
        </Card.Root>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
          <PlanUsage
            title="Monthly Active Users"
            description="1000 included MAU. Additional MAU will be charged at $0.01/MAU"
            max={1000}
            value={200}
          />
          <PlanUsage
            title="Flows"
            description="5 included flows. Additional flows will be charged at $0.01/flow"
            max={5}
            value={2}
          />
        </SimpleGrid>

        <Card.Root>
          <Card.Header
            gap="4"
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent="space-between"
          >
            <Stack gap="0">
              <Card.Description>Payment</Card.Description>
              <Card.Title textStyle="xl">Company Name</Card.Title>
            </Stack>
            <Button size="sm" variant="outline">
              Edit <LuArrowRight />
            </Button>
          </Card.Header>
          <Card.Body>
            <DataList.Root orientation="horizontal">
              <DataList.Item justifyContent="space-between">
                <DataList.ItemLabel>Card</DataList.ItemLabel>
                <DataList.ItemValue flex="unset">Mastercard ending in **** 1111</DataList.ItemValue>
              </DataList.Item>

              <DataList.Item justifyContent="space-between">
                <DataList.ItemLabel>Billing address</DataList.ItemLabel>
                <DataList.ItemValue flex="unset">1234 Main St, Anytown, USA</DataList.ItemValue>
              </DataList.Item>
            </DataList.Root>
          </Card.Body>
        </Card.Root>
      </Stack>
    </Container>
  )
}
