import { IconButton, type IconButtonProps, Portal, Span, Tooltip } from '@chakra-ui/react'

export interface ActionProps extends IconButtonProps {
  icon?: React.ReactElement
}

export const Action = (props: ActionProps) => {
  const { icon, title, ...rest } = props
  const button = (
    <IconButton size="xs" variant="ghost" colorPalette="gray" {...rest}>
      {icon}
      <Span srOnly>{title}</Span>
    </IconButton>
  )

  if (title) {
    return (
      <Tooltip.Root closeDelay={50} openDelay={100}>
        <Tooltip.Trigger asChild>{button}</Tooltip.Trigger>
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content>
              <Tooltip.Arrow />
              {title}
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
    )
  }

  return button
}
