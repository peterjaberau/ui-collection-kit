'use client'

import { createListCollection, Portal, Select } from '@chakra-ui/react'

function createSelect(items: string[]) {
  const collection = createListCollection({ items })
  return (props: Omit<Select.RootProps, 'collection'>) => (
    <Select.Root collection={collection} size="sm" {...props}>
      <Select.HiddenSelect />
      <Select.Control>
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
            {collection.items.map((item) => (
              <Select.Item item={item} key={item}>
                {item}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

export const WorkHourSelect = createSelect([
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
])

export const BestTimeSelect = createSelect(['Morning', 'Afternoon', 'Evening'])
