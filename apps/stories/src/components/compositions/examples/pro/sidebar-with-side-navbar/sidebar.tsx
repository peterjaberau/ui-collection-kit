import { Bleed, Flex, type FlexProps, Heading, Stack } from '@chakra-ui/react'
import { LuBookmark, LuChartPie, LuClock, LuLayoutDashboard } from 'react-icons/lu'
import { SidebarLink } from './sidebar-link'
import { SideNavbar } from './side-navbar'

const sidebarLinks = [
  { icon: LuLayoutDashboard, label: 'Dashboard' },
  { icon: LuChartPie, label: 'Analysis' },
  { icon: LuClock, label: 'History' },
  { icon: LuBookmark, label: 'Favorites' },
]

export const Sidebar = (props: FlexProps) => {
  return (
    <Flex h="full" {...props}>
      <SideNavbar />
      <Stack
        flex="1"
        maxW="xs"
        bg="bg.panel"
        borderRightWidth="1px"
        p={{ base: '4', md: '6' }}
        justifyContent="space-between"
      >
        <Stack gap="6">
          <Heading textStyle="sm">Home</Heading>
          <Stack gap="6">
            <Stack gap="1">
              {sidebarLinks.map((link, index) => (
                <Bleed key={index} inline="4">
                  <SidebarLink aria-current={link.label === 'Dashboard' ? 'page' : undefined}>
                    <link.icon /> {link.label}
                  </SidebarLink>
                </Bleed>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  )
}
