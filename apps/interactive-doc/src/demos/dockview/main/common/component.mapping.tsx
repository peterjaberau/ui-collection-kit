import { ReactNode } from "react"
import { LuDownload, LuStar, LuPlus, LuMenu } from "react-icons/lu"
import { BiExitFullscreen, BiCollapseAlt, BiExpandAlt } from "react-icons/bi"
import { RxOpenInNewWindow } from "react-icons/rx"
import { MdTune, MdClose } from "react-icons/md"
import { FaLayerGroup } from "react-icons/fa6"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { FiMaximize, FiMinimize } from "react-icons/fi"

import { Button, IconButton } from "@chakra-ui/react"
import * as React from "react"

export const iconMapping: any = {
  add: LuPlus,
  menu: LuMenu,
  "open-new-window": RxOpenInNewWindow,
  expand: BiExpandAlt,
  collapse: BiCollapseAlt,
  "exit-fullscreen": BiExitFullscreen,
  preferences: MdTune,
  maximize: FiMaximize,
  minimize: FiMinimize,
  visible: FaRegEye,
  hidden: FaRegEyeSlash,
  close: MdClose,
  group: FaLayerGroup,
  download: LuDownload,
  star: LuStar,
}

export const IconRender = ({ name }: { name: keyof typeof iconMapping } | any) => {
  const Icon = iconMapping[name]
  return Icon ? <Icon /> : null
}

export type IconButtonRenderProps = {
  name: string
  onClick?: () => void
  variant?: string | any
  size?: string | any
  [key: string]: any
}

export const IconButtonRender = (props: IconButtonRenderProps) => {
  return (
    <IconButton size={props.size || "sm"} variant={props.variant || "ghost"} {...props}>
      <IconRender name={props.name} />
    </IconButton>
  )
}



export type ActionButtonRenderProps = {
  text: string
  onClick?: () => void
  variant?: string | any
  size?: string | any
  [key: string]: any
}

export const ActionButtonRender = (props: ActionButtonRenderProps) => {

  return (
    <Button size={props.size || "sm"} variant={props.variant || "outline"} {...props}>
      {props.text}
    </Button>
  )
}
