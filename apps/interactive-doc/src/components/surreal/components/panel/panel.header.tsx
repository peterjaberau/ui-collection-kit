"use client"

import { Card, Icon, HStack } from "@chakra-ui/react"

export interface PanelHeaderProps {
  title?: string
  icon?: React.ReactNode
  leftSection?: React.ReactNode
  infoSection?: React.ReactNode
  rightSection?: React.ReactNode
  withDivider?: boolean
  [key: string]: any
}

export const PanelHeader = ({ title, icon, leftSection, infoSection, rightSection, withDivider }: PanelHeaderProps) => {
  return (
    (title || icon || leftSection || rightSection || infoSection) && (
      <Card.Header
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        borderBottomWidth={withDivider ? "1px" : "0px"}
      >
        <HStack>
          <HStack>
            {leftSection}
            {icon && <Icon>{icon}</Icon>}
            <Card.Title>{title}</Card.Title>
            {infoSection}
          </HStack>
          <HStack>{rightSection}</HStack>
        </HStack>
      </Card.Header>
    )
  )
}
