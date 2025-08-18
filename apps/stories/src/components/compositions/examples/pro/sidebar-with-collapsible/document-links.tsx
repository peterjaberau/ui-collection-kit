'use client'
import { Button, Collapsible, HStack, Icon, Stack } from '@chakra-ui/react'
import { LuChevronDown, LuFile } from 'react-icons/lu'
import { SidebarLink } from './sidebar-link'

export const DocumentsLinks = () => {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger asChild>
        <Button
          variant="ghost"
          width="full"
          justifyContent="start"
          color="fg.muted"
          _hover={{
            bg: 'colorPalette.subtle',
            color: 'colorPalette.fg',
          }}
          _expanded={{
            bg: 'colorPalette.subtle',
            color: 'colorPalette.fg',
          }}
        >
          <HStack justifyContent="space-between" width="full">
            <HStack gap="3">
              <LuFile />
              Documents
            </HStack>
            <Collapsible.Context>
              {(context) => (
                <Icon
                  aria-hidden
                  transition="transform 0.2s"
                  transformOrigin="center"
                  transform={context.open ? 'rotate(180deg)' : undefined}
                >
                  <LuChevronDown />
                </Icon>
              )}
            </Collapsible.Context>
          </HStack>
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Stack gap="1" py="1">
          {['Resumes', 'Cover Letter', 'Personal', 'Education'].map((item) => (
            <SidebarLink key={item} ps="12">
              {item}
            </SidebarLink>
          ))}
        </Stack>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
