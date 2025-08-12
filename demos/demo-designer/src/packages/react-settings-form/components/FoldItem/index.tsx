'use client'
import React, { Fragment, useRef, useMemo } from "react"
import { FormItem, IFormItemProps } from "@formily/antd-v5"
import { useField, observer } from "@formily/react"
import { observable } from "@formily/reactive"
import { usePrefix } from "#packages/react"

import { Collapsible, chakra, Button, HStack } from "@chakra-ui/react"
import { LuChevronDown, LuChevronRight } from "react-icons/lu"

const ExpandedMap = new Map<string, boolean>()

export const FoldItem:
  | React.FC<IFormItemProps>
  | (any & {
      Base?: React.FC
      Extra?: React.FC
    }) = observer(({ className, style, children, ...props }: any) => {
  const prefix = usePrefix("fold-item")
  const field = useField()
  const expand = useMemo(() => observable.ref(ExpandedMap.get(field.address.toString())), [])
  const slots = useRef({ base: null, extra: null })
  React.Children.forEach(children, (node: any) => {
    if (React.isValidElement(node)) {
      if (node?.["type"]?.["displayName"] === "FoldItem.Base") {
        // @ts-ignore
        slots.current.base = node["props"]?.children
      }
      if (node?.["type"]?.["displayName"] === "FoldItem.Extra") {
        // @ts-ignore
        slots.current.extra = node["props"]?.children
      }
    }
  })
  return (
    <Collapsible.Root
      open={expand.value}
      onOpenChange={(e) => {
        expand.value = e.open
        ExpandedMap.set(field.address.toString(), e.open)
      }}
    >
      <Collapsible.Trigger
        css={{
          width: "100%",
        }}
      >
        <FormItem.BaseItem
          {...props}
          label={
            <HStack
              css={{
                cursor: "pointer",
              }}
            >
              {expand.value ? <LuChevronDown /> : <LuChevronRight />}
              {props.label}
            </HStack>
          }
        >
          <chakra.div
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            {slots.current.base}
          </chakra.div>
        </FormItem.BaseItem>
      </Collapsible.Trigger>
      {expand.value && slots.current.extra && <Collapsible.Content>{slots.current.extra}</Collapsible.Content>}
    </Collapsible.Root>
  )
})

const Base: React.FC = () => {
  return <Fragment />
}

Base.displayName = "FoldItem.Base"

const Extra: React.FC = () => {
  return <Fragment />
}

Extra.displayName = "FoldItem.Extra"

FoldItem.Base = Base
FoldItem.Extra = Extra
