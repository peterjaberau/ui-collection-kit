"use client"
import { IDockviewHeaderActionsProps } from "#dockview"
import * as React from "react"
import { nextId } from "./utils"
import { IconButtonRender } from "./common/component.mapping"
import { HStack } from "@chakra-ui/react"
import { useDockPanel } from "./hooks/useDockPanel"
import { useDockApi } from "./hooks/useDockApi"

const DockGroupControlsComponents: Record<string, React.FC> = {
  panel_1: () => {
    return <IconButtonRender variant="plain" name="download" />
  },
}

export const DockRightControls = (props: IDockviewHeaderActionsProps) => {
  const { panel, id, isGroupActive, panelContainerApi, maximize, isMaximized, exitMaximized, isPopout } = useDockPanel({
    panelId: props.activePanel?.id,
  })

  const Component = React.useMemo(() => {
    if (!isGroupActive || !props.activePanel) {
      return null
    }

    return DockGroupControlsComponents[id]
  }, [isGroupActive, props.activePanel])

  const handleMaximization = () => {
    if (isMaximized()) {
      exitMaximized()
    } else {
      maximize()
    }
  }

  const handlePopout = () => {
    if (props.api.location.type !== "popout") {
      props.containerApi.addPopoutGroup(props.group)
    } else {
      props.api.moveTo({ position: "right" })
    }
  }

  return (
    <HStack
      style={{
        color: "var(--dv-activegroup-hiddenpanel-tab-color)",
      }}
    >
      {props.isGroupActive && <IconButtonRender name="star" variant="plain" />}
      {Component && <Component />}

      <IconButtonRender onClick={handlePopout} name={isPopout ? "exit-fullscreen" : "open-new-window"} />
      {!isPopout && <IconButtonRender onClick={handleMaximization} name={isMaximized() ? "collapse" : "expand"} />}
    </HStack>
  )
}

export const DockLeftControls = (props: IDockviewHeaderActionsProps) => {
  const { sendToDockApi } = useDockApi()

  const onClick = () => {
    sendToDockApi({ type: "onAddPanel", payload: { position: { referenceGroup: props.group.id } } })
  }

  return (
    <HStack
      css={{
        color: "var(--dv-activegroup-visiblepanel-tab-color)",
      }}
    >
      <IconButtonRender onClick={onClick} name="add" />
    </HStack>
  )
}

export const DockPrefixHeaderControls = (props: IDockviewHeaderActionsProps) => {
  return (
    <HStack
      css={{
        color: "var(--dv-activegroup-visiblepanel-tab-color)",
      }}
    >
      <IconButtonRender name="menu" variant="plain" />
    </HStack>
  )
}
