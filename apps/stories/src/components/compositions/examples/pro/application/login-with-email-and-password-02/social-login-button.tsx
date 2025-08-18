import { IconButton, type IconButtonProps, Text, VStack } from '@chakra-ui/react'
import { forwardRef } from 'react'

interface SocialLoginButtonProps extends IconButtonProps {
  icon: React.ReactElement
  children: string
}

export const SocialLoginButton = forwardRef<HTMLButtonElement, SocialLoginButtonProps>(
  function SocialLoginButton(props, ref) {
    const { icon, children, ...rest } = props
    return (
      <VStack gap="2" colorPalette="gray">
        <IconButton variant="outline" size="xl" {...rest} ref={ref}>
          {icon}
        </IconButton>
        <Text textStyle="sm" fontWeight="medium">
          {children}
        </Text>
      </VStack>
    )
  },
)
