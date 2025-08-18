'use client'

import { createListCollection, Portal, Select, type SelectRootProps, Span } from '@chakra-ui/react'

interface ModelSelectProps extends Omit<SelectRootProps, 'collection'> {}

export const ModelPresetSelect = (props: ModelSelectProps) => {
  return (
    <Select.Root collection={models} size="sm" {...props}>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger bg="bg">
          <Select.ValueText placeholder="Select model" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {models.items.map((movie) => (
              <Select.Item item={movie} key={movie.value}>
                <Span flex="1">{movie.label}</Span>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const models = createListCollection({
  items: [
    { label: 'Summarize Text', value: 'summarize' },
    { label: 'Translate Text', value: 'translate' },
    { label: 'Extract Information', value: 'extract' },
    { label: 'Brainstorm Ideas', value: 'brainstorm' },
    { label: 'Natural Language to Code', value: 'code' },
  ],
})
