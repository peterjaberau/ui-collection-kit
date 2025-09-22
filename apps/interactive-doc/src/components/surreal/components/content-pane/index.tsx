import { Box, Separator, Group, Text, Icon, Container, Stack, Card, HStack, VStack } from "@chakra-ui/react"

export interface ContentPaneProps {
  title?: string
  icon?: React.ReactNode
  leftSection?: React.ReactNode
  infoSection?: React.ReactNode
  rightSection?: React.ReactNode
  withTopPadding?: boolean
  withDivider?: boolean
  disabled?: boolean
  [key: string]: any
}

export function ContentPane({
  children,
  title,
  icon,
  className,
  leftSection,
  infoSection,
  rightSection,
  withTopPadding,
  withDivider,
  disabled,
  ...rest
}: ContentPaneProps) {
  return (
    <Stack
      css={{
        height: "100%",
        width: "100%",
        flexWrap: "nowrap",
        position: "relative",
      }}
      opacity={disabled ? 0.5 : 1}
      style={{ pointerEvents: disabled ? "none" : undefined }}
    >
      <Card.Root>
        {(title || icon || leftSection || rightSection || infoSection) && (
          <Card.Header>
            <VStack>
              <HStack justifyContent={"space-between"}>
                <HStack flex={0}>
                  {leftSection}
                  {icon && <Icon>{icon}</Icon>}
                  <Card.Title>{title}</Card.Title>
                  {infoSection}
                </HStack>
                <HStack justifyContent={"flex-end"}>{rightSection}</HStack>
              </HStack>
              {withDivider !== false && <Separator />}
            </VStack>
          </Card.Header>
        )}
        {children && <Card.Body>{children}</Card.Body>}
      </Card.Root>
    </Stack>
  )
}
