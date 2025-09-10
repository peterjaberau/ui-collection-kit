import { LuDownload, LuStar, LuPlus, LuMenu } from "react-icons/lu"
import { BiExitFullscreen, BiCollapseAlt, BiExpandAlt } from "react-icons/bi"
import { RxOpenInNewWindow } from "react-icons/rx"
import { MdTune, MdClose } from "react-icons/md"
import { FaLayerGroup } from "react-icons/fa6"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { FiMaximize, FiMinimize } from "react-icons/fi"

export const iconMapping = {
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


// export const IconRender = ({name: string}) => {
//   return iconMapping.name
// }


export const IconRender = ({ name }: { name: keyof typeof iconMapping }) => {
  const Icon = iconMapping[name];
  return Icon ? <Icon /> : null;
}
