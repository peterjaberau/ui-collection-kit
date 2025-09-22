"use client"

import { Button, Card, Center, Container, Heading, Icon, Stack, Text } from "@chakra-ui/react"

export interface PanelRootProps {
  disabled?: boolean
  [key: string]: any
}

export const PanelRoot = ({ children, disabled }: PanelRootProps) => {
  return (
    <Container fluid opacity={disabled ? 0.5 : 1} css={{ pointerEvents: disabled ? "none" : undefined }}>
      <Card.Root>{children}</Card.Root>
    </Container>
  )
}
