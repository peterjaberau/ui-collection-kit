"use client"
import * as React from "react"
import { Badge, Button, HStack, Stack } from "@chakra-ui/react"
import { IconButtonRender } from "./common/component.mapping"
import { useDockMeta } from "#demos/dockview/main/hooks/useDockMeta"
import { useDockGroup } from "#demos/dockview/main/hooks/useDockGroup"
import { useDockApi } from "#demos/dockview/main/hooks/useDockApi"

const GroupAction = (props: { groupId: string }) => {
  const {
    group,
    isActive,
    close,
    isVisible,
    setVisible,
    isMaximized,
    exitMaximized,
    focus,
    maximize,
  } = useDockGroup({ groupId: props.groupId })
  const { api } = useDockApi()





  return (
    <Stack
      css={{
        background: isActive ? "bg.error" : "bg.panel",
        shadow: "sm",
        borderRadius: "sm",
        p: 1,
      }}
    >
      <Button size="sm" variant={"outline"} onClick={() => focus()}>
        Group {props.groupId}
      </Button>
      <HStack>
        <IconButtonRender
          variant="outline"
          name="group"
          onClick={() => {
            if (group)
              api.addFloatingGroup(group, {
                width: 400,
                height: 300,
                x: 50,
                y: 50,
                position: {
                  bottom: 50,
                  right: 50,
                },
              })
          }}
        />

        <IconButtonRender
          name="open-new-window"
          variant="outline"
          onClick={() => {
            if (group) api.addPopoutGroup(group)
          }}
        />

        <IconButtonRender
          name={isMaximized() ? "maximize" : "minimize"}
          variant="outline"
          onClick={() => {
            if (group) {
              if (isMaximized()) {
                exitMaximized()
              } else {
                maximize()
              }
            }
          }}
        />

        <IconButtonRender
          name={isVisible ? "visible" : "hidden"}
          variant="outline"
          onClick={() => {
            console.log(group)
            if (group) {
              if (isVisible) {
                setVisible(false)
              } else {
                setVisible(true)
              }
            }
          }}
        />

        <IconButtonRender name={"close"} variant="outline" onClick={() => close()} />
      </HStack>
    </Stack>
  )
}

export const GroupActions = () => {
  const { groupsMeta } = useDockMeta()

  return (
    <HStack>
      <Badge>groupActions</Badge>
      {groupsMeta.map((id: any) => {
        return <GroupAction key={id} groupId={id} />
      })}
    </HStack>
  )
}
