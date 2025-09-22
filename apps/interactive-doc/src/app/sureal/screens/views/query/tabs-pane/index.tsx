"use client"
import { Box, Icon, IconButton, CloseButton, Button, HStack } from "@chakra-ui/react"
import { Pane } from "#app/sureal/components/pane"
import { LuServer as IconServer, LuChevronRight, LuStar } from "react-icons/lu"
export function TabsPane() {
  return (
    <>
      <Pane
        title={"TabsPane"}
        icon={<IconServer />}
        infoSection={"info"}
        rightSection={
          <HStack>
            <IconButton size={"sm"} variant={"ghost"}>
              <LuStar />
            </IconButton>
          </HStack>
        }
      >
        editor or widget here
      </Pane>
    </>
  )
}
