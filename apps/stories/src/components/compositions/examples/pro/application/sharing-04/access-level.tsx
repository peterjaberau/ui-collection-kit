'use client'

import { createListCollection, Portal, Select, Span, Stack } from '@chakra-ui/react'

interface AccessLevelProps {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
}

export const AccessLevel = (props: AccessLevelProps) => {
  const { defaultValue = 'viewer', value, onChange } = props
  return (
    <Select.Root
      display="contents"
      collection={frameworks}
      size="sm"
      positioning={{ sameWidth: false, placement: 'bottom-end' }}
      defaultValue={defaultValue ? [defaultValue] : undefined}
      value={value ? [value] : undefined}
      onValueChange={(e) => onChange?.(e.value[0])}
    >
      <Select.Control w="24">
        <Select.Trigger>
          <Select.ValueText placeholder="Select" />
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
                <Stack gap="0">
                  <Select.ItemText>{framework.label}</Select.ItemText>
                  <Span color="fg.muted" textStyle="xs">
                    {framework.description}
                  </Span>
                </Stack>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const frameworks = createListCollection({
  items: [
    {
      label: 'Editor',
      value: 'editor',
      description: 'Can edit the document',
    },
    {
      label: 'Viewer',
      value: 'viewer',
      description: 'Can view the document',
    },
  ],
})
