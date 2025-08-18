'use client'
import { useChart } from '@chakra-ui/charts'
import { Box, Card, FormatNumber, HStack, Show, SimpleGrid, Span, Stat } from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import { LuEye } from 'react-icons/lu'
import { AreaChart } from './area-chart'
import { summaries } from './data'

export const Block = () => {
  const [active, setActive] = useState('unique-visitors')
  const isActive = (id: string) => active === id

  const label = useMemo(() => summaries.find((summary) => summary.id === active)?.title, [active])

  const data = useMemo(
    () => summaries.find((summary) => summary.id === active)?.data ?? [],
    [active],
  )

  const chart = useChart({
    data,
    series: [{ name: 'value', color: 'teal.solid', label }],
  })

  return (
    <Box padding="4">
      <Card.Root>
        <Card.Header>
          <SimpleGrid minChildWidth="100px" gap="4">
            {summaries.map((summary) => (
              <Stat.Root key={summary.id} cursor="pointer" onClick={() => setActive(summary.id)}>
                <Stat.Label
                  data-current={isActive(summary.id) ? '' : undefined}
                  textUnderlineOffset="4px"
                  fontWeight="medium"
                  _current={{
                    textDecoration: 'underline',
                    color: 'fg',
                  }}
                >
                  {summary.title} {isActive(summary.id) && <LuEye />}
                </Stat.Label>
                <HStack gap="5">
                  <Stat.ValueText>
                    <FormatNumber
                      notation="compact"
                      unitDisplay="short"
                      value={summary.total}
                      maximumFractionDigits={1}
                    />
                  </Stat.ValueText>
                  <HStack gap="0">
                    <Show when={summary.diff > 0} fallback={<Stat.DownIndicator />}>
                      <Stat.UpIndicator />
                    </Show>
                    <Span>
                      <FormatNumber value={summary.diff} style="percent" />
                    </Span>
                  </HStack>
                </HStack>
              </Stat.Root>
            ))}
          </SimpleGrid>
        </Card.Header>
        <Card.Body mt="8">
          <AreaChart chart={chart} />
        </Card.Body>
      </Card.Root>
    </Box>
  )
}
