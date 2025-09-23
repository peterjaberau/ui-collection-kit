"use client"
import { useMemo, useState, Fragment } from "react"
import { ScrollArea, Stack, Button, chakra, HStack, Box } from "@chakra-ui/react"

import { VIEW_NAVIGATION, VIEW_PAGES } from "./constants"
import { useSessionStore } from "#app/sureal/store/session"
export interface SidebarProps {
  [key: string]: any
}

export function Sidebar({ ...rest }: SidebarProps) {
  const [ sessionContext, sessionRef ]: any = useSessionStore()

  const views: any = useMemo(() => {
    return { ...VIEW_PAGES } as const
  }, [])
  const navigation: any[][] = useMemo(() => {
    return VIEW_NAVIGATION.flatMap((row) => {
      const items = row.flatMap((id) => {
        const info = views[id]

        return {
          id: info.id,
          name: info.name,
          navigate: () => sessionRef.trigger.setCurrentView({ view: info.id }),
        }
      })

      return items.length > 0 ? [items] : []
    })
  }, [])

  return (
    <>
      <Box position={"fixed"} top={0} left={0} bottom={0} width={"215px"}>
        <ScrollArea.Root variant={"hover"}  width={"215px"}>
          <ScrollArea.Viewport>
            <ScrollArea.Content>
              <Stack gap="4" mt={22} pb={18} flex={1}>
                {navigation.map((items, i) => (
                  <Fragment key={i}>
                    {items.map((info) => (
                      <Button
                        variant={sessionContext.current?.view === info.id ? "solid" : "ghost"}
                        key={info.name}
                        onClick={() => info.navigate()}
                      >
                        <HStack w={"full"}>{info.name}</HStack>
                      </Button>
                    ))}
                  </Fragment>
                ))}
              </Stack>
            </ScrollArea.Content>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="vertical" />
          <ScrollArea.Corner />
        </ScrollArea.Root>
      </Box>
    </>
  )
}
