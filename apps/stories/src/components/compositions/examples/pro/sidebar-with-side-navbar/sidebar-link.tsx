import { Button, type ButtonProps } from '@chakra-ui/react'

interface Props extends ButtonProps {
  href?: string
}

export const SidebarLink = (props: Props) => {
  const { children, href, ...buttonProps } = props
  return (
    <Button
      variant="ghost"
      width="full"
      justifyContent="start"
      gap="3"
      color="fg.muted"
      _hover={{
        bg: 'colorPalette.subtle',
        color: 'colorPalette.fg',
      }}
      _currentPage={{
        color: 'colorPalette.fg',
      }}
      asChild
      {...buttonProps}
    >
      <a href={href}>{children}</a>
    </Button>
  )
}
