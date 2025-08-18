import { Badge, Button, Container, Flex, Heading, HStack, Stack, Status } from '@chakra-ui/react'
import Link from 'next/link'
import { LuGitBranch, LuGithub, LuGlobe, LuRocket, LuRotateCcw } from 'react-icons/lu'

export const Block = () => {
  return (
    <Container maxW="6xl" py={{ base: '16', md: '24' }}>
      <Flex
        justify="space-between"
        align="flex-start"
        gap="8"
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack gap="3">
          <HStack fontWeight="medium" color="fg.muted">
            <LuGlobe /> Deployment
          </HStack>

          <HStack>
            <Heading size="2xl" mr="4">
              chakra-v3-docs
            </Heading>
            <Badge size="md" colorPalette="gray" fontWeight="medium">
              Public
            </Badge>
            <Badge size="md" fontWeight="medium">
              Template
            </Badge>
          </HStack>

          <HStack fontFamily="mono" color="fg.muted" textStyle="sm" gap="5" mb="2">
            <HStack>
              <LuGithub /> chakra-ui/chakra-v3-docs
            </HStack>
            <HStack>
              <LuGitBranch /> main
            </HStack>
            <Status.Root colorPalette="green">
              <Status.Indicator />
              Ready
            </Status.Root>
          </HStack>

          <Link color="colorPalette.fg" href="#">
            https://chakra-v3-docs.vercel.app
          </Link>
        </Stack>

        <HStack gap="4">
          <Button variant="outline" colorPalette="gray" size="lg">
            <LuRotateCcw /> Rollback
          </Button>
          <Button size="lg">
            <LuRocket />
            Deploy
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}
