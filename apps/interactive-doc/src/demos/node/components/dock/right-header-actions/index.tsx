import { IDockviewHeaderActionsProps } from "#modules/dockview/core"
import { useDockPanel } from "#nodedemo/hooks/useDockPanel"
import * as React from "react"
import { HStack } from "@chakra-ui/react"
import { IconButtonRender } from "#nodedemo/components/ui"

const DockGroupControlsComponents: Record<string, React.FC> = {
  panel_1: () => {
    return <IconButtonRender variant="plain" name="download" />
  },
}

export const RightHeaderActions = (props: IDockviewHeaderActionsProps) => {
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
