import { Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import { functionCallsData, relayRequestsData, totalGasUsedData } from './data'
import { StatCard } from './stat-card'

export const Block = () => {
  return (
    <Stack gap="8" padding="4">
      <Heading>Overview</Heading>
      <SimpleGrid gap="8" columns={{ base: 1, md: 3 }}>
        <StatCard title="Relay Requests" data={relayRequestsData} />
        <StatCard title="Function Calls" data={functionCallsData} />
        <StatCard title="Total Gas Used" data={totalGasUsedData} />
      </SimpleGrid>
    </Stack>
  )
}
