import { Button, type IconButtonProps, Span } from '@chakra-ui/react'
import { forwardRef } from 'react'
import { BsChevronRight } from 'react-icons/bs'

interface SocialLoginButtonProps extends IconButtonProps {
  icon: React.ReactElement
  children: string
}

export const SocialLoginButton = forwardRef<HTMLButtonElement, SocialLoginButtonProps>(
  function SocialLoginButton(props, ref) {
    const { icon, children, ...rest } = props
    return (
      <Button rounded="full" _icon={{ boxSize: '1em' }} {...rest} ref={ref}>
        {icon}
        <Span flex="1">{children}</Span>
        <BsChevronRight />
      </Button>
    )
  },
)
