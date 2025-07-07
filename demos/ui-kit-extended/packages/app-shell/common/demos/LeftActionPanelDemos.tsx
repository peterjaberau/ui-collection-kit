import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Box, Stack } from "@chakra-ui/react"
import { HiOutlineHome as IconHome } from "react-icons/hi2";
import { IoSearch as IconSearch } from "react-icons/io5";
import { HiOutlineLightningBolt as IconBolt } from "react-icons/hi";
import { FiHardDrive as IconStorage } from "react-icons/fi";
import { TbGauge as IconGauge } from "react-icons/tb";
import { LuCalendarDays as IconCalendar } from "react-icons/lu";
import { GrAppsRounded as IconApps } from "react-icons/gr";
import { RiChatSmileAiLine as IconAI } from "react-icons/ri";
import { LuMail as IconMail } from "react-icons/lu";
import { LuSettings as IconSettings } from "react-icons/lu";
import { LuFilePlus as IconFileNew } from "react-icons/lu";
import { LuFolderPlus as IconFolderNew } from "react-icons/lu";
import { CgDebug as IconDebug } from "react-icons/cg";
import { TbPlugConnected as IconConnect } from "react-icons/tb";
import { TbDatabaseSearch as IconDatabase } from "react-icons/tb";
import { MdDesignServices as IconDesign } from "react-icons/md";
import { IoCodeSlash as IconCode } from "react-icons/io5";
import { LuSquareTerminal as IconTerminal } from "react-icons/lu";
import { FaProjectDiagram as IconDiagram } from "react-icons/fa";
import { TbApi as IconApi } from "react-icons/tb";
import { IconButton } from "@chakra-ui/react";


export const LeftActionPanelDemosTop = ({children}: any) => {

  return (
    <>
      <IconButton variant="ghost">
        <IconHome />
      </IconButton>
      <IconButton variant="ghost">
        <IconSearch />
      </IconButton>
      <IconButton variant="ghost">
        <IconBolt />
      </IconButton>
      <IconButton variant="ghost">
        <IconFileNew />
      </IconButton>

    </>
  )
}

export const LeftActionPanelDemosCenter = ({children}: any) => {

  return (
    <>
      <IconButton variant="ghost">
        <IconStorage />
      </IconButton>

      <IconButton variant="ghost">
        <IconGauge />
      </IconButton>

      <IconButton variant="ghost">
        <IconCalendar />
      </IconButton>

      <IconButton variant="ghost">
        <IconApps />
      </IconButton>


    </>
  )
}


export const LeftActionPanelDemosBottom = ({children}: any) => {

  return (
    <>
      <IconButton variant="ghost">
        <IconAI />
      </IconButton>

      <IconButton variant="ghost">
        <IconMail />
      </IconButton>

      <IconButton variant="ghost">
        <IconSettings />
      </IconButton>


    </>
  )
}
