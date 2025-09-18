import { Button, Icon, IconButton } from "@chakra-ui/react"
import { IconsMap } from '../../icons'
import * as React from "react"


export const InternalIconRenderer = ({ name }: { name: keyof typeof IconsMap } | any) => {
  const Icon = IconsMap(name)
  return Icon ? <Icon /> : null
}


export type IconActionRenderProps = {
  name: string
  onClick?: () => void
  variant?: string | any
  size?: string | any
  [key: string]: any
}

export const ActionIconRenderer = (props: IconActionRenderProps) => {
  return (
    <IconButton size={props.size || "xs"} variant={props.variant || "ghost"} {...props}>
      <InternalIconRenderer name={props.name} />
    </IconButton>
  )
}

export type ActionButtonRendererProps = {
  text: string
  onClick?: () => void
  variant?: string | any
  size?: string | any
  icon?: string | any
  suffixIcon?: string | any
  [key: string]: any
}

export const ActionButtonRenderer = (props: ActionButtonRendererProps) => {
  return (
    <Button size={props.size || "xs"} variant={props.variant || "outline"} {...props}>
      {props.icon && <InternalIconRenderer name={props.icon} />}
      {props.text}
      {props.suffixIcon && <InternalIconRenderer name={props.suffixIcon} />}
    </Button>
  )
}
