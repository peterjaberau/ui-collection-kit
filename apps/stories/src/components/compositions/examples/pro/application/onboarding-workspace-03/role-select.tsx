'use client'

import { createListCollection, Portal, Select } from '@chakra-ui/react'

const collection = createListCollection({
  items: ['Member', 'Owner', 'Admin'],
})

export const RoleSelect = (props: Omit<Select.RootProps, 'collection'>) => {
  return (
    <Select.Root collection={collection} size="sm" defaultValue={['Member']} {...props}>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Role" />
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
