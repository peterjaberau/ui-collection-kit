import { Box, Stack, type StackProps, StackSeparator } from '@chakra-ui/react'
import {
  LuBookmark,
  LuChartPie,
  LuCircleHelp,
  LuClock,
  LuLayoutDashboard,
  LuSettings,
} from 'react-icons/lu'
import { Logo } from './logo'
import { SearchField } from './search-field'
import { SidebarLink } from './sidebar-link'
import { UserProfile } from './user-profile'
import { DocumentsLinks } from './document-links'

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
        <Stack gap="1">
          <SidebarLink>
            <LuLayoutDashboard /> Dashboard
          </SidebarLink>
          <SidebarLink aria-current="page">
            <LuChartPie /> Analysis
          </SidebarLink>
          <DocumentsLinks />
          <SidebarLink>
            <LuClock /> History
          </SidebarLink>
          <SidebarLink>
            <LuBookmark /> Favorites
          </SidebarLink>
        </Stack>
      </Stack>
      <Stack gap="4" separator={<StackSeparator />}>
        <Box />
        <Stack gap="1">
          <SidebarLink>
            <LuCircleHelp /> Help Center
          </SidebarLink>
          <SidebarLink>
            <LuSettings /> Settings
          </SidebarLink>
        </Stack>
        <UserProfile />
      </Stack>
    </Stack>
  )
}
