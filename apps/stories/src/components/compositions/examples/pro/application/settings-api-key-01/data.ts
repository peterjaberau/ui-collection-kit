import type { Tokens } from '@chakra-ui/react'

export interface ApiKeyItem {
  id: string
  name: string
  secret: string
  createdAt: string
  lastUsed: string
  createdBy: string
  permissions: string
}

export interface ColumnDef<T> {
  key: keyof T | string
  name: string
  hidden?: boolean
  align?: 'start' | 'center' | 'end'
  hideBelow?: Tokens['breakpoints']
  render: (item: T) => React.ReactNode
}

export const apiKeyData: ApiKeyItem[] = [
  {
    id: '1',
    name: 'Ark MCP',
    secret: 'sk-live-abcVeuA',
    createdAt: 'Aug 4, 2025',
    lastUsed: 'Never',
    createdBy: 'Ava Carter',
    permissions: 'All',
  },
  {
    id: '2',
    name: 'SQL Vision',
    secret: 'sk-live-xyzJ60A',
    createdAt: 'Apr 7, 2025',
    lastUsed: 'Apr 8, 2025',
    createdBy: 'Noah Lee',
    permissions: 'All',
  },
  {
    id: '3',
    name: 'AI Chatbot Starter',
    secret: 'sk-live-qweLPgA',
    createdAt: 'Nov 12, 2024',
    lastUsed: 'Nov 15, 2024',
    createdBy: 'Maya Patel',
    permissions: 'All',
  },
]

export const maskSecret = (value: string) => {
  if (!value) return ''
  const prefix = 'sk-'
  const last = value.slice(-4)
  return `${prefix}...${last}`
}
