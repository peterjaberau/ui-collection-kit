"use client"

import { Card, Icon, HStack } from "@chakra-ui/react"

export interface PaneHeaderProps {
  title?: string
  icon?: React.ReactNode
  leftSection?: React.ReactNode
  infoSection?: React.ReactNode
  rightSection?: React.ReactNode
  withDivider?: boolean
  [key: string]: any
}

export const PaneHeader = ({ title, icon, leftSection, infoSection, rightSection, withDivider }: PaneHeaderProps) => {
  return (
    (title || icon || leftSection || rightSection || infoSection) && (
      <Card.Header
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        borderBottomWidth={withDivider ? "1px" : "0px"}
      >
        <HStack w={'full'}>
          <HStack flex={1}>
            {leftSection}
            {icon && <Icon>{icon}</Icon>}
            <Card.Title>{title}</Card.Title>
            {infoSection}
          </HStack>
          <HStack justifyContent={'flex-end'} alignItems={'center'}>{rightSection}</HStack>
        </HStack>
      </Card.Header>
    )
  )
}
