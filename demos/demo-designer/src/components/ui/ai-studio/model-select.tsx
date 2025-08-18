'use client'

import { createListCollection, Portal, Select, Span } from '@chakra-ui/react'
import { AnthropicIcon, MistralIcon, OpenAILogo } from './model-icons'

const ModelIcon = ({ model }: { model: string }) => {
  if (model.startsWith('gpt')) return <OpenAILogo />
  if (model.startsWith('claude')) return <AnthropicIcon />
  if (model.startsWith('mistral')) return <MistralIcon />
  return null
}

interface ModelSelectProps extends Omit<Select.RootProps, 'collection'> {}

export const ModelSelect = (props: ModelSelectProps) => {
  return (
    <Select.Root collection={models} size="sm" {...props}>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select model" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {models.items.map((model) => (
              <Select.Item item={model} key={model.value}>
                <ModelIcon model={model.value} />
                <Span flex="1">{model.label}</Span>
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
    { label: 'Claude 3 Opus', value: 'claude-3-opus' },
    { label: 'Claude 3 Sonnet', value: 'claude-3-sonnet' },
    { label: 'Claude 3 Haiku', value: 'claude-3-haiku' },
    { label: 'Claude 2', value: 'claude-2' },
    { label: 'Claude 2.1', value: 'claude-2.1' },
    { label: 'Claude Instant', value: 'claude-instant' },
    { label: 'GPT-4o', value: 'gpt-4o' },
    { label: 'GPT-4o Mini', value: 'gpt-4o-mini' },
    { label: 'Mistral 7B', value: 'mistral-7b' },
    { label: 'Mistral 8x7B', value: 'mistral-8x7b' },
    { label: 'Mistral Medium', value: 'mistral-medium' },
    { label: 'Mistral Small', value: 'mistral-small' },
    { label: 'Mistral Tiny', value: 'mistral-tiny' },
  ],
})
