import { Box, Flex } from '@chakra-ui/react'
import { ConversationArea } from './conversation-area'
import { project } from './data'
import { PreviewArea } from './preview-area'
import { TopNav } from './top-nav'

export const Block = () => {
  return (
    <Flex
      h="full"
      direction="column"
      overflow="hidden"
      css={{
        '--sidebar-width': 'sizes.lg',
        '--top-nav-height': 'sizes.12',
        '--content-height': 'calc(100vh - var(--top-nav-height))',
      }}
    >
      <TopNav title={project.title} />
      <Box h="var(--content-height)" flex="1" display="flex">
        <ConversationArea messages={project.messages} streaming={true} />
        <PreviewArea hideBelow="md" url={project.url} />
      </Box>
    </Flex>
  )
}
