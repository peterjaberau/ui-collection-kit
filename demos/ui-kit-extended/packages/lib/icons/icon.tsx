import { IconButton } from "@chakra-ui/react"
import { getIcon } from "./utils"

export const IconWidget: any = (props: any) => {
  const { iconName } = props

  const Icon = getIcon(iconName)

  return (
    <IconButton size={"sm"} variant={"outline"}>
      {Icon ? <Icon /> : null}
    </IconButton>
  )
}

IconWidget.displayName = "IconWidget"
export default IconWidget
