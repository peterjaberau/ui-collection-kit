import { Bleed, Stack, type StackProps, Text } from '@chakra-ui/react'
import {
  LuBookmark,
  LuChartPie,
  LuClock,
  LuFileText,
  LuImage,
  LuLayoutDashboard,
  LuSettings,
  LuUsers,
} from 'react-icons/lu'
import { Logo } from './logo'
import { SearchField } from './search-field'
import { SidebarLink } from './sidebar-link'
import { UserProfile } from './user-profile'

const groups = [
  {
    title: 'Dashboard',
    links: [
      { icon: LuLayoutDashboard, label: 'Dashboard' },
      { icon: LuChartPie, label: 'Analysis' },
      { icon: LuClock, label: 'History' },
      { icon: LuBookmark, label: 'Favorites' },
    ],
  },
  {
    title: 'Content',
    links: [
      { icon: LuFileText, label: 'Documents' },
      { icon: LuImage, label: 'Media' },
      { icon: LuUsers, label: 'Users' },
      { icon: LuSettings, label: 'Settings' },
    ],
  },
]

export const Sidebar = (props: StackProps) => {
  return (
    <Stack
      flex="1"
      p={{ base: '4', md: '6' }}
      bg="bg.panel"
      borderRightWidth="1px"
      justifyContent="space-between"
      maxW="xs"
      {...props}
    >
      <Stack gap="6">
        <Logo style={{ alignSelf: 'start' }} />
        <SearchField />
        <Stack gap="6">
          {groups.map((group, index) => (
            <Stack key={index} gap="2">
              <Text fontWeight="medium" textStyle="sm">
                {group.title}
              </Text>
              <Stack gap="1">
                {group.links.map((link, index) => (
                  <Bleed key={index} inline="4">
                    <SidebarLink aria-current={link.label === 'Analysis' ? 'page' : undefined}>
                      <link.icon /> {link.label}
                    </SidebarLink>
                  </Bleed>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <UserProfile />
    </Stack>
  )
}
