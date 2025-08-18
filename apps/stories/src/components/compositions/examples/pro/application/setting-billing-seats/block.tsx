import {
  Button,
  Container,
  DataList,
  FormatNumber,
  Heading,
  HStack,
  Progress,
  SimpleGrid,
  Span,
  Stack,
  Text,
} from '@chakra-ui/react'
import { LuCreditCard } from 'react-icons/lu'
import { InfoTip } from '@/components/ui/toggle-tip'
import { invoices } from './data'
import { InvoiceTable } from './invoice-table'

export const Block = () => {
  return (
    <Container maxW="3xl" py="20">
      <Stack gap="12">
        <Stack gap="1">
          <Heading>Billing</Heading>
          <Text textStyle="sm" color="fg.muted">
            Update your billing information and view your billing history.
          </Text>
        </Stack>

        <Stack gap="3">
          <Text fontWeight="medium">Plan</Text>
          <SimpleGrid asChild columns={{ base: 1, md: 2 }} gap="6" width="full">
            <DataList.Root>
              <DataList.Item flex="1" alignItems="flex-start">
                <DataList.ItemLabel>Plus Monthly</DataList.ItemLabel>
                <DataList.ItemValue>
                  <HStack gap="1">
                    <FormatNumber value={100} currency="usd" style="currency" />
                    <Span>per seat per month</Span>
                  </HStack>
                </DataList.ItemValue>
                <Button size="xs" mt="2">
                  View Plans
                </Button>
              </DataList.Item>

              <DataList.Item flex="1" alignItems="flex-start">
                <DataList.ItemLabel>Billing period</DataList.ItemLabel>
                <DataList.ItemValue>
                  <HStack gap="1">
                    <Span>Monthly</Span>
                    <Span color="fg.muted">(renewing on December 15, 2024)</Span>
                  </HStack>
                </DataList.ItemValue>
                <Button size="xs" mt="2" variant="outline" colorPalette="gray">
                  Change to yearly
                </Button>
              </DataList.Item>
            </DataList.Root>
          </SimpleGrid>
        </Stack>

        <Stack gap="3">
          <Text fontWeight="medium">Seats</Text>
          <Progress.Root>
            <Progress.Label mb="2">
              Remaining seats
              <InfoTip>The number of seats you have purchased.</InfoTip>
            </Progress.Label>
            <Progress.Track>
              <Progress.Range />
            </Progress.Track>
          </Progress.Root>
          <HStack justify="space-between">
            <HStack textStyle="sm">
              <Span fontWeight="bold">1</Span>
              <Span>/ 10 seats used</Span>
            </HStack>
            <HStack>
              <Button size="xs" variant="outline" colorPalette="gray">
                Manage seats
              </Button>
            </HStack>
          </HStack>
        </Stack>

        <Stack gap="3">
          <Text fontWeight="medium">Billing Details</Text>
          <SimpleGrid asChild columns={{ base: 1, md: 2 }} gap="6">
            <DataList.Root>
              <DataList.Item alignItems="flex-start">
                <DataList.ItemLabel>Address</DataList.ItemLabel>
                <DataList.ItemValue>
                  <Stack gap="1">
                    <Span>1234 Main St</Span>
                    <Span>Anytown, USA 12345</Span>
                    <Span>United States</Span>
                    <Span>12345</Span>
                  </Stack>
                </DataList.ItemValue>
                <Button variant="outline" colorPalette="gray" size="xs" mt="2">
                  Edit billing address
                </Button>
              </DataList.Item>

              <DataList.Item alignItems="flex-start" alignSelf="flex-start">
                <DataList.ItemLabel>Payment method</DataList.ItemLabel>
                <DataList.ItemValue>
                  <HStack gap="1">
                    <LuCreditCard />
                    <Span>Mastercard ending in 1234</Span>
                    <Span color="fg.muted">(exp on 12/2024)</Span>
                  </HStack>
                </DataList.ItemValue>
                <Button size="xs" mt="2" variant="outline" colorPalette="gray">
                  Add payment method
                </Button>
              </DataList.Item>
            </DataList.Root>
          </SimpleGrid>
        </Stack>

        <Stack gap="3">
          <Text fontWeight="medium">Billing history</Text>
          <InvoiceTable invoices={invoices} />
        </Stack>
      </Stack>
    </Container>
  )
}
