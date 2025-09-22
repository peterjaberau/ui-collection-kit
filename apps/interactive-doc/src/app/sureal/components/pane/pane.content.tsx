"use client"

import { Card } from "@chakra-ui/react"

export interface PaneContentProps {
  [key: string]: any
}

export const PaneContent = ({ children, ...rest }: PaneContentProps) => {
  return <Card.Body {...rest}>{children}</Card.Body>
}
