"use client"
import * as React from "react"
import { Badge, Button, HStack, Stack } from "@chakra-ui/react"
import { IconButtonRender } from "./common/component.mapping"
import { useDockPanel } from "#demos/dockview/main/hooks/useDockPanel"
import { useDockMeta } from "#demos/dockview/main/hooks/useDockMeta"
import { useDockApi } from "#demos/dockview/main/hooks/useDockApi"

const PanelAction = (props: { panelId: string }) => {
  const { panel, isVisible, isActive, close, focus } = useDockPanel({ panelId: props.panelId })
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
      <Button size="sm" variant={"outline"} onClick={() => panel?.focus()}>
        {props.panelId}
      </Button>
      <HStack>
        <IconButtonRender
          name="group"
          onClick={() => {
            if (panel) api.addFloatingGroup(panel)
          }}
        />
        <IconButtonRender name="close" onClick={() => close()} />
        <IconButtonRender disabled name={isVisible ? "visible" : "hidden"} />
      </HStack>
    </Stack>
  )
}

export const PanelActions = () => {
  const { activePanelId, panelsMeta } = useDockMeta()

  return (
    <HStack>
      <Badge>panelActions</Badge>
      {panelsMeta.map((id) => {
        return <PanelAction key={id} panelId={id} />
      })}
    </HStack>
  )
}
