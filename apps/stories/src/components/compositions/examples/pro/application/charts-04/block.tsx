'use client'

import { useChart } from '@chakra-ui/charts'
import { Box, Flex, FormatNumber, HStack, Span, Stack, Stat } from '@chakra-ui/react'
import { data, series } from './data'
import { MoneyChart } from './money-chart'

export const Block = () => {
  const chart = useChart({ data, series })
  return (
    <Stack gap="8" padding="4">
      <Flex gap="8">
        <Box minW="xs">
          <Stat.Root mb="10">
            <Stat.Label>Net cash</Stat.Label>
            <Stat.ValueText fontWeight="normal">
              <FormatNumber
                value={chart.getTotal('money_in') - chart.getTotal('money_out')}
                style="currency"
                currency="USD"
              />
            </Stat.ValueText>
          </Stat.Root>

          <Stack gap="4">
            {series.map((item) => (
              <HStack key={item.name}>
                <Box w="0.5" h="4" bg={item.color} />
                <Span textStyle="sm" flex="1">
                  {item.label}
                </Span>
                <Span textStyle="sm">
                  <FormatNumber style="currency" currency="USD" value={chart.getTotal(item.name)} />
                </Span>
              </HStack>
            ))}
          </Stack>
        </Box>
        <MoneyChart chart={chart} />
      </Flex>
    </Stack>
  )
}
