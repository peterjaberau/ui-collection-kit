"use client"

import { Button, Card, Center, Container, Heading, Icon, Stack, Text , Box} from "@chakra-ui/react"

export interface PaneRootProps {
  disabled?: boolean
  [key: string]: any
}

export const PaneRoot = ({ children, disabled }: PaneRootProps) => {
  return (
    <Box
      borderRadius={'md'}
      boxShadow={'md'}

      width={'full'}
      opacity={disabled ? 0.5 : 1}
      css={{ pointerEvents: disabled ? "none" : undefined, height: "full" }}
    >
      <Card.Root css={{ height: "full" }}>{children}</Card.Root>
    </Box>
  )
}
