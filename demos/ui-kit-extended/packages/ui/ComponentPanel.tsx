"use client"
import { HStack, Card, InputGroup, Input, SimpleGrid, Button, For, CloseButton, Spinner } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
import { useSystemRegistry } from "#packages/actors/hooks/useSystemRegistry"
import { useState, useRef } from "react"
import debounce from "lodash/debounce"
import { useDebounce } from "react-use"

export const ComponentPanel = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { registryNames, searchComponents }: any = useSystemRegistry()

  const [value, setValue]: any = useState("")
  const [debouncedValue, setDebouncedValue] = useState("")
  useDebounce(
    () => {
      setDebouncedValue(value)
    },
    300,
    [value],
  )

  const { data: results = [], isLoading }: any = searchComponents(debouncedValue)

  const startElement = <LuSearch onClick={() => inputRef.current?.focus()} />

  const endElement = value ? (
    <CloseButton
      size="xs"
      onClick={() => {
        setValue("")
        inputRef.current?.focus()
      }}
      me="-2"
    />
  ) : undefined

  return (
    <Card.Root w="full" border="none">
      <Card.Header>
        <Card.Title>Component List</Card.Title>
        <InputGroup startElement={startElement} endElement={endElement}>
          <Input ref={inputRef} value={value} placeholder="Search" onChange={(e) => setValue(e.target.value)} />
        </InputGroup>
      </Card.Header>
      <Card.Body>
        {isLoading ? (
          <HStack justify="center" py={4}>
            <Spinner size="sm" />
          </HStack>
        ) : (
          <SimpleGrid columns={{ base: 3, lg: 3, sm: 1 }} gap={2}>
            <For each={results}>
              {(name: any) => (
                <Button key={name} size="sm" variant="outline">
                  {name}
                </Button>
              )}
            </For>
          </SimpleGrid>
        )}
      </Card.Body>
    </Card.Root>
  )
}
