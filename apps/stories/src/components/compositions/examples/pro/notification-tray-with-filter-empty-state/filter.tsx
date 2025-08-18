import { Button, Menu } from '@chakra-ui/react'
import { useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'

const statuses = [
  { label: 'All', value: 'all' },
  { label: 'Unread', value: 'unread' },
  { label: 'Read', value: 'read' },
]

export const NotificationTrayFilter = () => {
  const [value, setValue] = useState('all')

  const selectedStatus = statuses.find((item) => item.value === value)

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="ghost" colorPalette="gray" size="2xs">
          {selectedStatus?.label}
          <LuChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content minW="16">
          <Menu.RadioItemGroup value={value} onValueChange={(e) => setValue(e.value)}>
            {statuses.map((item) => (
              <Menu.RadioItem key={item.value} value={item.value}>
                {item.label}
                <Menu.ItemIndicator />
              </Menu.RadioItem>
            ))}
          </Menu.RadioItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}
