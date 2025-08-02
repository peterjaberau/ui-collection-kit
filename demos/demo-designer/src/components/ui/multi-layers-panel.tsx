"use client"
import React from "react"
import { LuArrowLeft, LuArrowRight, LuChevronDown, LuSearch } from "react-icons/lu"
import {
  Stack,
  Icon,
  HStack,
  Tabs,
  Box,
  Collapsible,
  Button,
  IconButton,
  Separator,
  For,
  Accordion,
  Text,
} from "@chakra-ui/react"
import {
  Combobox,
  Portal,
  useFilter,
  useListCollection,
} from "@chakra-ui/react"


import { ScrollArea, ScrollBar } from "./scroll-area"

export const MultiLayersPanel: any = ({ items, filters }: any) => {
  return (
    <MultiLayersPanelRoot>
      {filters && (
        <MultiLayersPanelScope filters={ filters } />
      )}
      <MultiLayersPanelView items={items} />
    </MultiLayersPanelRoot>
  )
}

export const MultiLayersPanelRoot = ({ children }: any) => {
  return (
    <Stack h={"full"} overflow={"hidden"} gap={0}>
      {children}
    </Stack>
  )
}

export const MultiLayersPanelScope = ({ filters }) => {
  const { contains } = useFilter({ sensitivity: "base" })
  const { collection, filter } = useListCollection({
    initialItems: filters,
    filter: contains,
  })



  return (
    <HStack
      css={{
        width: "100%",
        justify: "space-between",
        alignItems: "center",
        borderBottom: "1px solid",
        borderBottomColor: "border.emphasized",
        minH: '52px'

      }}
    >

      <Combobox.Root
        flex={1}

        collection={collection}
        onInputValueChange={(e) => filter(e.inputValue)}

        openOnClick
      >
        <Combobox.Control pl={1}>
          <Combobox.Input placeholder="Type to search"
            css={{
              border: "none",
              _focus: {
                border: "none",
                outline: "none",
              }
            }}
          />
          <Combobox.IndicatorGroup>
            <Combobox.ClearTrigger />
            <Combobox.Trigger />
          </Combobox.IndicatorGroup>
        </Combobox.Control>
        <Portal>
          <Combobox.Positioner>
            <Combobox.Content>
              <Combobox.Empty>No items found</Combobox.Empty>
              {collection.items.map((item: any) => (
                <Combobox.Item item={item} key={item.value}>
                  {item.label}
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              ))}
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>


      <Separator orientation="vertical" height="6" />
      <HStack alignItems="center" justify="flex-end" pr={2}>
        <IconButton variant="ghost">
          <LuArrowLeft />
        </IconButton>
        <Separator orientation="vertical" height="6" />
        <IconButton variant="ghost">
          <LuArrowRight />
        </IconButton>
      </HStack>
    </HStack>
  )
}

export const MultiLayersPanelView = ({ items }: any) => {
  return (
    <Tabs.Root variant="subtle" size='sm' defaultValue={items.length > 0 ? items[0].value : ""} asChild>
      <Stack minH="0" w="full" flex={1} gap={0}>
        <MultiLayersPanelViewTriggers items={items} />
        <MultiLayersPanelViewContent items={items} />
      </Stack>
    </Tabs.Root>
  )
}

export const MultiLayersPanelViewTriggers = ({ items }: any) => {
  return (
    <Tabs.List px={4} py={3} minH={'56px'}>
      <For each={items}>
        {(item: any) => (
          <Tabs.Trigger key={item.value} value={item.value} >
            {item.title}
          </Tabs.Trigger>
        )}
      </For>
    </Tabs.List>
  )
}

export const MultiLayersPanelViewContent = ({ items }: any) => {
  return (
    <For each={items}>
      {(item: any) => (
        <Tabs.Content key={item.value} value={item.value} w="full" h="full" overflow="hidden" py={1}>
          <ScrollArea h="full" px={4}>
            <MultiLayersPanelSections sections={item.sections} />
          </ScrollArea>
        </Tabs.Content>
      )}
    </For>
  )
}

export const MultiLayersPanelSections = ({ sections }) => {
  return (
    <Accordion.Root multiple defaultValue={sections.length > 0 ? [sections[0].value] : []} p={0}>
      <Stack gap={0}>
        <For each={sections}>{(section: any) => <MultiLayersPanelSection key={section.value} section={section} />}</For>
      </Stack>
    </Accordion.Root>
  )
}

export const MultiLayersPanelSection = ({ section }) => {
  return (
    <Accordion.Item

      key={section.value}
      value={section.value}
      asChild
    >
      <Accordion.ItemContext>
        {(context) => (
          <Box
            css={{
              borderBottom: "none",
              border: "1px solid",
              borderColor: "border",
              bg: "bg.panel",
              borderRadius: "md",
              shadow: "none",
              mb: 4
            }}
          >
            <Accordion.ItemTrigger
              css={{
                px: 3,
                py: 3,
                ...(context.expanded && {
                  borderBottomRadius: 'none',
                  borderBottom: "1px solid",
                  borderBottomColor: "border",
                }),
                _hover: {
                  bg: "bg.subtle",
                },
              }}
            >
              <Text
                css={{
                  p: 0,
                  m: 0,
                  flex: 1,
                  fontWeight: 600,
                }}
              >
                {`${section.title} - ${ context.expanded }`}

              </Text>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody
                css={{
                  minH: "100px",
                  p: 4,
                }}
              >
                {section.content}
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Box>



        )}
      </Accordion.ItemContext>
    </Accordion.Item>
  )
}
