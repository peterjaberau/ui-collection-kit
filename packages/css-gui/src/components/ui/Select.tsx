"use client"
import * as Select from "@radix-ui/react-select"
import { Portal, chakra, Box } from '@chakra-ui/react'
import { ComponentType } from "react"
import { ChevronDown } from "react-feather"

/* compai-styled versions of the radix select input */

export const Root = Select.Root
export const Value = Select.Value

type PropsType<X> = X extends ComponentType<infer P> ? P : never

export const Trigger = (props: PropsType<typeof Select.Trigger>) => {
  return <Select.Trigger {...props} />
}

export const Icon = (props: PropsType<typeof Select.Icon>) => {
  return (
    <Select.Icon {...props}>
      <ChevronDown size={14} style={{ transform: "translateY(3px)" }} />
    </Select.Icon>
  )
}

export const Content = ({ children, ...props }: PropsType<typeof Select.Content>) => {
  return (
    <Select.Content>
      {/* Combine with the viewpoint (and the scroll arrows?) for convenience */}
      <Select.Viewport>
        <Box backgroundColor={"white"} borderRadius={"0.5rem"} padding={2} shadow={'md'}>
          {children}
        </Box>
      </Select.Viewport>
    </Select.Content>
  )
}

export const Item = (props: PropsType<typeof Select.Item>) => {
  return <Select.SelectItem {...props} />
}

export const ItemIndicator = (props: PropsType<typeof Select.ItemIndicator>) => {
  return <Select.ItemIndicator {...props}>✓</Select.ItemIndicator>
}

export const ItemText = Select.ItemText
export const Separator = Select.Separator
export const Label = (props: PropsType<typeof Select.Label>) => {
  return <Select.Label {...props} />
}
// export const Label = Select.Label
export const Group = Select.Group
