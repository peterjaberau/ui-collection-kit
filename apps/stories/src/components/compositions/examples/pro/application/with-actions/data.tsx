import { LuLogOut, LuPlus, LuSettings, LuUser } from 'react-icons/lu'
import { LogoIcon1, LogoIcon2, LogoIcon3 } from './logoicon-ipsum'

export interface Organization {
  id: string
  name: string
  avatar?: string
  icon?: React.ReactNode
  type: 'team' | 'personal'
  member_count?: number
}

export const organizations: Organization[] = [
  {
    id: 'amazon',
    name: 'Amazon',
    type: 'team',
    member_count: 5,
    icon: <LogoIcon1 />,
  },
  {
    id: 'spotify',
    name: 'Spotify',
    type: 'team',
    member_count: 8,
    icon: <LogoIcon2 />,
  },
  {
    id: 'github',
    name: 'Github',
    type: 'team',
    member_count: 10,
    icon: <LogoIcon3 />,
  },
]

export const getOrgById = (id: string) => {
  return organizations.find((org) => org.id === id) || organizations[0]
}

export interface MenuAction {
  id: string
  label: string
  icon: React.ReactNode
  shortcut?: string
  group: 'management' | 'account'
}

export const menuActions: MenuAction[] = [
  {
    id: 'invite',
    label: 'Invite members',
    icon: <LuPlus />,
    group: 'management',
  },
  {
    id: 'manage',
    label: 'Manage members',
    icon: <LuSettings />,
    group: 'management',
  },
  {
    id: 'settings',
    label: 'Account settings',
    icon: <LuUser />,
    group: 'account',
  },
  {
    id: 'signout',
    label: 'Sign out',
    icon: <LuLogOut />,
    shortcut: '⌘Q',
    group: 'account',
  },
]

export const getGroupedActions = (actions: MenuAction[]) => {
  return actions.reduce(
    (acc, action) => {
      acc[action.group] = [...(acc[action.group] || []), action]
      return acc
    },
    {} as Record<MenuAction['group'], MenuAction[]>,
  )
}
