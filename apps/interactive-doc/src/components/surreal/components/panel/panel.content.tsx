"use client"

import { Card } from "@chakra-ui/react"

export interface PanelContentProps {
  [key: string]: any
}

export const PanelContent = ({ children, ...rest }: PanelContentProps) => {
  return <Card.Body {...rest}>{children}</Card.Body>
}
