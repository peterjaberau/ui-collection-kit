'use client'

import {
  createListCollection,
  HStack,
  Portal,
  Select,
  Span,
  useSelectContext,
} from '@chakra-ui/react'
import { LuCheck } from 'react-icons/lu'

interface AccessLevelProps {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
}

export const AccessLevel = (props: AccessLevelProps) => {
  const { defaultValue = 'private', value, onChange } = props
  return (
    <Select.Root
      collection={frameworks}
      size="sm"
      defaultValue={defaultValue ? [defaultValue] : undefined}
      value={value ? [value] : undefined}
      onValueChange={(e) => onChange?.(e.value[0])}
    >
      <Select.Control>
        <Select.Trigger>
          <SelectedAccessLevel />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                <HStack gap="2">
                  <Select.ItemText>{framework.label}</Select.ItemText>
                  <Span color="fg.muted" textStyle="sm">
                    {framework.description}
                  </Span>
                </HStack>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const SelectedAccessLevel = () => {
  const select = useSelectContext()
  const [item] = select.selectedItems
  if (!item) return 'Select'
  return (
    <HStack gap="2">
      <LuCheck />
      <Span>{item?.label}</Span>
      <Span color="fg.muted" textStyle="sm">
        {item?.description}
      </Span>
    </HStack>
  )
}

const frameworks = createListCollection({
  items: [
    {
      label: 'Private',
      value: 'private',
      description: 'Only members have access',
    },
    {
      label: 'Public',
      value: 'public',
      description: 'Everyone has access',
    },
    {
      label: 'Unlisted',
      value: 'unlisted',
      description: 'Everyone with the link can access',
    },
  ],
})
