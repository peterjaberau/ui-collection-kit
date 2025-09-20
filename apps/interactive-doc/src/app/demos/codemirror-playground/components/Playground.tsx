"use client"

import { useState } from "react"
import { SimpleGrid, GridItem, Card, Button, Container, HStack, Text, Box } from "@chakra-ui/react" // Assuming you use Chakra
import { CodeEditor } from "./CodeEditor"
import { Configurator } from "./Configurator"
import { Previewer } from "./Previewer"
import { JsonataProvider, useJsonata } from "./JsonataProvider"

// This type definition remains the same
export interface PlaygroundConfig {
  theme: "light" | "dark"
  lineNumbers: boolean
  lineWrapping: boolean
}

function PlaygroundUI() {
  const { dataCode, expressionCode, resultCode, isLoading, error, send } = useJsonata()

  return (
    <Container fluid h={"full"}>
      <HStack justifyContent="center" alignItems={"end"} p={4}>
        <Configurator />

        <Button colorScheme="teal" onClick={() => send({ type: "EXECUTE" })} loading={isLoading}>
          Execute JSONata
        </Button>
      </HStack>
      <SimpleGrid columns={6} gap={4} h={"500px"}>
        <GridItemCard title="JSON Data Payload" colSpan={2}>
          <CodeEditor code={dataCode} setCode={(code) => send({ type: "UPDATE_DATA_CODE", code })} />
        </GridItemCard>

        <GridItemCard title="JSONata Expression" colSpan={2}>
          {error && (
            <Box p={4} bg="red.100" color="red.800" borderRadius="md" whiteSpace="pre-wrap">
              <Text fontWeight="bold">Error:</Text>
              {error}
            </Box>
          )}
          <CodeEditor code={expressionCode} setCode={(code) => send({ type: "UPDATE_EXPRESSION_CODE", code })} />
        </GridItemCard>

        <GridItemCard title="Result (Read-only)" colSpan={2}>
          <Previewer code={resultCode} />
        </GridItemCard>
      </SimpleGrid>
    </Container>
  )
}

// GridItemCard helper component remains the same
export const GridItemCard = ({
  children,
  title,
  colSpan = 1,
}: {
  children: React.ReactNode
  title: string
  colSpan?: number
}) => (
  <GridItem colSpan={colSpan}>
    <Card.Root h="100%">
      <Card.Header>
        <Card.Title>{title}</Card.Title>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card.Root>
  </GridItem>
)

export function Playground() {
  return (
    <JsonataProvider>
      <PlaygroundUI />
    </JsonataProvider>
  )
}
