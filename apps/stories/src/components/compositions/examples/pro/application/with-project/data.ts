export interface Organization {
  id: string
  name: string
  avatar?: string
  type: 'personal' | 'team' | 'enterprise'
  projects: Project[]
}

export interface Project {
  id: string
  name: string
  description?: string
  status: 'active' | 'archived' | 'draft'
}

export const organizations: Organization[] = [
  {
    id: 'sage',
    name: 'Sage',
    type: 'personal',
    avatar: 'https://i.pravatar.cc/40?u=sage',
    projects: [
      {
        id: 'default',
        name: 'Default project',
        description: 'Main development project',
        status: 'active',
      },
      {
        id: 'mobile-app',
        name: 'Mobile App',
        description: 'iOS and Android application',
        status: 'active',
      },
      { id: 'api-v2', name: 'API v2', description: 'Next generation API', status: 'draft' },
    ],
  },
  {
    id: 'acme-corp',
    name: 'Acme Corp',
    type: 'team',
    avatar: 'https://i.pravatar.cc/40?u=acme',
    projects: [
      { id: 'website', name: 'Website', description: 'Corporate website', status: 'active' },
      {
        id: 'ecommerce',
        name: 'E-commerce',
        description: 'Online store platform',
        status: 'active',
      },
    ],
  },
  {
    id: 'startup-inc',
    name: 'Startup Inc',
    type: 'enterprise',
    avatar: 'https://i.pravatar.cc/40?u=startup',
    projects: [
      { id: 'mvp', name: 'MVP', description: 'Minimum viable product', status: 'active' },
      {
        id: 'landing-page',
        name: 'Landing Page',
        description: 'Marketing website',
        status: 'archived',
      },
      {
        id: 'analytics',
        name: 'Analytics Dashboard',
        description: 'Data visualization tool',
        status: 'active',
      },
    ],
  },
]

export const getOrgTypeBadge = (type: Organization['type']) => {
  const variants = {
    personal: { label: 'Personal', colorPalette: 'blue' },
    team: { label: 'Team', colorPalette: 'green' },
    enterprise: { label: 'Enterprise', colorPalette: 'purple' },
  }
  return variants[type]
}

export const getProjectStatusBadge = (status: Project['status']) => {
  const variants = {
    active: { label: 'Active', colorPalette: 'green' },
    draft: { label: 'Draft', colorPalette: 'orange' },
    archived: { label: 'Archived', colorPalette: 'gray' },
  }
  return variants[status]
}

export const getSelectedItem = <T extends { id: string }>(items: T[], selectedId: string) => {
  return items.find((item) => item.id === selectedId) || items[0]
}
