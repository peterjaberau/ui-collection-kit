import { type ButtonProps, IconButton } from '@chakra-ui/react'
import { Tooltip } from '@ui-kit/components'

interface SideNavbarLinkProps extends ButtonProps {
  label: string
  href?: string
}

export const SideNavbarLink = ({ label, ...props }: SideNavbarLinkProps) => {
  return (
    <Tooltip content={label} openDelay={100} positioning={{ placement: 'right' }}>
      <IconButton
        asChild
        size="sm"
        variant="ghost"
        _currentPage={{
          bg: 'colorPalette.subtle',
          color: 'colorPalette.fg',
        }}
        {...props}
      >
        <a href={props.href}>{props.children}</a>
      </IconButton>
    </Tooltip>
  )
}
