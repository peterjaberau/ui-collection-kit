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

export const RoleSelect = createSelect([
  'Product Designer',
  'UX Designer',
  'UI Designer',
  'Full Stack Developer',
  'Founder',
  'Frontend Developer',
  'Backend Developer',
  'DevOps Engineer',
  'Product Manager',
])

export const TeamSizeSelect = createSelect(['1-10', '11-50', '51-100', '101-500', '501-1000'])

export const ReferralSelect = createSelect([
  'LinkedIn',
  'Product Hunt',
  'Hacker News',
  'Friend',
  'Other',
])
