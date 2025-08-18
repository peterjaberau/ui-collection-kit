import { Box, Button, type ButtonProps, HStack, Text } from '@chakra-ui/react'

interface PromptButtonProps extends ButtonProps {
  icon: React.ReactElement
  title: string
  description: string
}

export const PromptButton = (props: PromptButtonProps) => {
  const { icon, title, description, ...rest } = props
  return (
    <Button
      unstyled
      flexDirection="column"
      bg="bg.subtle"
      borderWidth="1px"
      rounded="md"
      px="4"
      py="2"
      fontSize="sm"
      {...rest}
    >
      <HStack>
        <Box color="colorPalette.solid">{icon}</Box>
        <Text textAlign="start" fontWeight="medium">
          {title}
        </Text>
      </HStack>
      <Text textAlign="start" color="fg.muted" truncate>
        {description}
      </Text>
    </Button>
  )
}
