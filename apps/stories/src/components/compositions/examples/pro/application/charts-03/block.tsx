import { Box, SimpleGrid } from '@chakra-ui/react'
import { topPagesData, topSourcesData } from './data'
import { StatCard } from './stat-card'

export const Block = () => {
  return (
    <Box padding="4">
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
        <StatCard labels={{ title: 'Top Sources', value: 'Downloads' }} data={topSourcesData} />
        <StatCard labels={{ title: 'Top Pages', value: 'Views' }} data={topPagesData} />
      </SimpleGrid>
    </Box>
  )
}
