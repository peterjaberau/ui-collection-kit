import { Box, Center, Container, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { ImagePlaceholder } from './image-placeholder'
import { Logo } from './logo'

interface ProgressIndicatorProps {
  totalSteps: number
  currentStep: number
}

const ProgressIndicator = (props: ProgressIndicatorProps) => {
  const { totalSteps, currentStep } = props
  const stepsArray = Array.from({ length: totalSteps }, (_, i) => i + 1)
  return (
    <HStack>
      {stepsArray.map((step) => (
        <Box
          key={step}
          bg={currentStep === step ? 'colorPalette.solid' : 'colorPalette.muted'}
          w={currentStep === step ? '10' : '6'}
          transition="all"
          h="1.5"
        />
      ))}
    </HStack>
  )
}

interface LayoutProps extends ProgressIndicatorProps {
  title: string
  description: string
  children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
  const { title, description, children, totalSteps, currentStep } = props
  return (
    <Box minH="full">
      <Flex h="full" w="full">
        <Container maxW="2xl" display="flex" flex="1" flexDirection="column">
          <HStack py="8">
            <Logo />
          </HStack>
          <Stack gap="8" flex="1" py="20">
            <Stack>
              <Text fontWeight="medium" textStyle="xs" color="fg.muted">
                Step {currentStep} of {totalSteps}
              </Text>
              <Heading size="3xl">{title}</Heading>
              <Text color="fg.muted">{description}</Text>
            </Stack>
            {children}
          </Stack>
          <Center py="10">
            <ProgressIndicator totalSteps={totalSteps} currentStep={currentStep} />
          </Center>
        </Container>
        <Box flex="1" maxW="2xl" hideBelow="lg">
          <ImagePlaceholder />
        </Box>
      </Flex>
    </Box>
  )
}
