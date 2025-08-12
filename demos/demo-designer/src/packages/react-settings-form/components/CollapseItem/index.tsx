'use client'
import React, { useState } from "react"
import { useField, observer } from "@formily/react"
import { Collapsible, Button, Box, HStack, Icon } from "@chakra-ui/react"
import { usePrefix, IconWidget } from "#packages/react"
import { LuChevronDown, LuChevronRight } from 'react-icons/lu'
import cls from "classnames"

export interface ICollapseItemProps {
  className?: string
  style?: React.CSSProperties
  defaultExpand?: boolean
}

export const CollapseItem: React.FC<ICollapseItemProps> = observer((props) => {
  const prefix = usePrefix("collapse-item")
  const field = useField()
  const [expand, setExpand] = useState(props.defaultExpand ?? true)
  return (
    <Collapsible.Root defaultOpen={props.defaultExpand} open={expand} onOpenChange={(e: any) => setExpand(e.open)}>
      <Collapsible.Trigger
        css={{
          shadow: "sm",
          textAlign: "left",
          bg: "bg.panel",
          borderRadius: "md",
          mt: 1,
          mb: 3,
          w: "full",
          _hover: {
            bg: "bg.subtle",
          },
        }}
      >
        <HStack
          css={{
            px: 3,
            py: 3,
            justify: 'space-between',
          }}
        >
          <Box flex={1}>
            {field.title}
          </Box>
          <Icon>
            { expand ? <LuChevronDown /> : <LuChevronRight />}
          </Icon>
        </HStack>
      </Collapsible.Trigger>
      <Collapsible.Content>{props.children}</Collapsible.Content>
    </Collapsible.Root>
  )
})
