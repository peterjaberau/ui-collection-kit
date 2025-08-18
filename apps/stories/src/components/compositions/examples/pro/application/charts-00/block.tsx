import { Flex, Stack } from '@chakra-ui/react'
import { ChartCard } from './chart-card'
import { series } from './data'
import { StatCard } from './stat-card'

export const Block = () => {
  return (
    <Stack gap="8" padding="4">
      <Flex gap="8">
        <StatCard
          name="portfolio"
          series={series}
          items={[
            { title: 'Last 30 days', value: -0.56 },
            { title: 'Today', value: 12.34 },
          ]}
        />
        <StatCard
          name="s_and_p"
          series={series}
          items={[
            { title: 'Last 30 days', value: -3.49 },
            { title: 'Today', value: 0.01 },
          ]}
        />
      </Flex>
      <ChartCard />
    </Stack>
  )
}
