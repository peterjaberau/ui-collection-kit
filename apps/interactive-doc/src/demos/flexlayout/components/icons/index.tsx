import { Icon } from '@chakra-ui/react'
import { MdAdd, MdOutlineArticle, MdOutlineBarChart, MdFolderOpen, MdOutlineMenu, MdSettings } from "react-icons/md"
import { HiTerminal } from "react-icons/hi"



export const IconsMap: any = (iconName: string) => {
  const map: any = {
    add: MdAdd,
    article: MdOutlineArticle,
    bar_chart: MdOutlineBarChart,
    folder: MdFolderOpen,
    menu: MdOutlineMenu,
    settings: MdSettings,
    terminal: HiTerminal,
  }
  return map[iconName] || null
}


export const IconRenderer = (props: any) => {
  const InternalIconRenderer = IconsMap(props.iconName)

  return (
    <Icon {...props}>
      <InternalIconRenderer />
    </Icon>
  )
}
