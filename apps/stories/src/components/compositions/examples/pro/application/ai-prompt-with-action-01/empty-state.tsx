import { Center, Circle, Icon, Text } from '@chakra-ui/react'
import { HiMicrophone } from 'react-icons/hi'

export const EmptyStatePrompt = (props: React.PropsWithChildren) => {
  const { children } = props
  return (
    <Center height="full" gap="6">
      <Circle
        bg="colorPalette.solid"
        size="12"
        outline="8px solid"
        outlineColor="colorPalette.subtle"
      >
        <Icon color="colorPalette.contrast">
          <HiMicrophone />
        </Icon>
      </Circle>
      <Text textStyle="xl" fontWeight="medium">
        {children}
      </Text>
    </Center>
  )
}
