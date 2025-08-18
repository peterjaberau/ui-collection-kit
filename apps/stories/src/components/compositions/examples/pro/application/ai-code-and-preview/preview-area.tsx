'use client'

import { Center, type CenterProps, HStack, Input, Tabs } from '@chakra-ui/react'
import {
  LuCode,
  LuExternalLink,
  LuEye,
  LuMousePointerClick,
  LuRefreshCcw,
  LuScan,
} from 'react-icons/lu'
import { Action } from './action'

interface PreviewAreaProps extends Tabs.RootProps {
  url: string
}

export const PreviewArea = (props: PreviewAreaProps) => {
  const { url, ...rest } = props
  return (
    <Tabs.Root
      size="sm"
      lazyMount
      defaultValue="code"
      display="flex"
      flexDirection="column"
      flex="1"
      {...rest}
    >
      <Tabs.List gap="1">
        <Tabs.Trigger value="code">
          <LuCode />
          Code
        </Tabs.Trigger>
        <Tabs.Trigger value="preview">
          <LuEye />
          Preview
        </Tabs.Trigger>
      </Tabs.List>
      <HStack justify="space-between" align="center" px="2" py="2">
        <HStack flex="1" mr="3" align="center" gap="2">
          <Action icon={<LuRefreshCcw />} title="Refresh" />
          <Input readOnly defaultValue={url} size="xs" variant="subtle" textStyle="sm" />
        </HStack>

        <HStack gap="1">
          <Action icon={<LuMousePointerClick />} title="Select Element" />
          <Action icon={<LuExternalLink />} title="Open in new tab" />
          <Action icon={<LuScan />} title="Fullscreen" />
        </HStack>
      </HStack>

      <Tabs.Content value="code" pt="0" flex="1">
        <Demo>Code</Demo>
      </Tabs.Content>
      <Tabs.Content value="preview" pt="0" flex="1">
        <Demo>Preview</Demo>
      </Tabs.Content>
    </Tabs.Root>
  )
}

const Demo = (props: CenterProps) => {
  return <Center boxSize="full" bg="bg.muted" {...props} />
}
