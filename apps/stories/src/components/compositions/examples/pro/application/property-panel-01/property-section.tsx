'use client'

import { Collapsible, HStack, Icon, Stack, useCollapsibleContext } from '@chakra-ui/react'
import { HiInformationCircle } from 'react-icons/hi'
import { LuChevronRight } from 'react-icons/lu'
import { Tooltip } from '@/components/ui/tooltip'

interface PropertySectionProps {
  info?: string
  title: string
  children: React.ReactNode
}

export function PropertySection(props: PropertySectionProps) {
  const { title, children, info } = props
  return (
    <Collapsible.Root defaultOpen unstyled>
      <Stack _notLast={{ borderBottomWidth: '1px', pb: '6' }} borderColor="border.muted">
        <Collapsible.Trigger as="div" userSelect="none" cursor="pointer">
          <HStack py="3">
            <CollapsibleIcon />
            <HStack fontWeight="medium" flex="1" textStyle="sm" colorPalette="gray">
              {title}
              {info && <HoverTip content={info} />}
            </HStack>
          </HStack>
        </Collapsible.Trigger>
        <Collapsible.Content animationDuration="0s">
          <Stack gap="4" css={{ '--max-width': '160px', '--field-label-width': '50%' }}>
            {children}
          </Stack>
        </Collapsible.Content>
      </Stack>
    </Collapsible.Root>
  )
}

function CollapsibleIcon() {
  const api = useCollapsibleContext()
  return <Icon size="xs" as={LuChevronRight} transform={api.open ? 'rotate(90deg)' : ''} />
}

function HoverTip({ content }: { content: string }) {
  return (
    <Tooltip
      content={content}
      openDelay={100}
      closeDelay={100}
      positioning={{ placement: 'right' }}
    >
      <Icon as={HiInformationCircle} color="fg.subtle" />
    </Tooltip>
  )
}
