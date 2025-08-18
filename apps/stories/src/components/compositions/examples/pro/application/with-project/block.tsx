'use client'

import { HStack, Span } from '@chakra-ui/react'
import { useState } from 'react'
import type { Organization, Project } from './data'
import { organizations } from './data'
import { OrgSwitcherMenu, ProjectSwitcherMenu } from './menus'

export const Block = () => {
  const [selectedOrg, setSelectedOrg] = useState<Organization>(organizations[0])
  const [selectedProject, setSelectedProject] = useState<Project>(organizations[0].projects[0])

  const handleOrgChange = (id: string) => {
    const org = organizations.find((org) => org.id === id)
    if (!org) return
    setSelectedOrg(org)
    setSelectedProject(org.projects[0])
  }

  const handleProjectChange = (id: string) => {
    const project = selectedOrg.projects.find((project) => project.id === id)
    if (!project) return
    setSelectedProject(project)
  }

  return (
    <HStack gap="3">
      <OrgSwitcherMenu
        selectedId={selectedOrg.id}
        items={organizations}
        onSelect={handleOrgChange}
      />
      <Span color="fg.subtle">/</Span>
      <ProjectSwitcherMenu
        selectedId={selectedProject.id}
        items={selectedOrg.projects}
        onSelect={handleProjectChange}
      />
    </HStack>
  )
}
