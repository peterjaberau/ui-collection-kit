'use client'
import React, { useContext } from "react"
import { usePrefix, IconWidget } from "#packages/react"
import cls from "classnames"
import { Stack, Icon, HStack, chakra } from "@chakra-ui/react"


export interface IInputItemsContext {
  width?: string | number
  vertical?: boolean
}

export interface IInputItemsProps {
  className?: string
  style?: React.CSSProperties
  width?: string | number
  vertical?: boolean
}

export interface IInputItemProps {
  className?: string
  style?: React.CSSProperties
  icon?: React.ReactNode
  width?: string | number
  vertical?: boolean
  title?: React.ReactNode
}

const InputItemsContext = React.createContext<IInputItemsContext>(null)

export const InputItems:
  | React.FC<IInputItemsProps>
  | (any & {
      Item: React.FC<IInputItemProps>
    }) = (props: any) => {
  const prefix = usePrefix("input-items")
  return (
    <InputItemsContext.Provider value={props}>
      <Stack bg="bg.emphasized" p={2} borderRadius="sm">
        {props.children}
      </Stack>
    </InputItemsContext.Provider>
  )
}

InputItems.defaultProps = {
  width: "100%",
}

InputItems.Item = (props: any) => {
  const prefix = usePrefix("input-items-item")
  const ctx = useContext(InputItemsContext)
  return (
    <HStack gap={2} w='full'>
      <HStack>
        {props.icon && (
          <Icon>
            <IconWidget infer={props.icon} size={16} />
          </Icon>
        )}
        {props.title && <div>{props.title}</div>}
      </HStack>
      <HStack flex={1} justify="flex-end" data-id="input-items-item-controller">
        {props.children}
      </HStack>
    </HStack>
  )
}
