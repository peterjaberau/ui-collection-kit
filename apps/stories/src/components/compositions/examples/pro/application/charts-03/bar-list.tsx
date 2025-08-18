'use client'

import { type BarListData, BarList as ChakraBarList, useChart } from '@chakra-ui/charts'

interface BarListProps {
  data: BarListData[]
  labels: { title: string; value: string }
}

export const BarList = (props: BarListProps) => {
  const { data, labels } = props

  const chart = useChart<BarListData>({
    sort: { by: 'value', direction: 'desc' },
    data,
    series: [{ name: 'name', color: 'teal.subtle' }],
  })

  return (
    <ChakraBarList.Root chart={chart} barSize="8">
      <ChakraBarList.Content>
        <ChakraBarList.Label title={labels.title} flex="1">
          <ChakraBarList.Bar />
        </ChakraBarList.Label>
        <ChakraBarList.Label title={labels.value} titleAlignment="end">
          <ChakraBarList.Value />
        </ChakraBarList.Label>
      </ChakraBarList.Content>
    </ChakraBarList.Root>
  )
}
