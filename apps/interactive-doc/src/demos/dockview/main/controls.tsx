"use client"
import { IDockviewHeaderActionsProps } from "#dockview"
import * as React from "react"
import { nextId } from "./defaultLayout"
import { IconButton } from "@chakra-ui/react"
import { LuDownload, LuStar } from "react-icons/lu"
import { LuPlus, LuMenu } from "react-icons/lu"
import { IconRender } from "./common/component.mapping"

const Icon = (props: { icon: string; title?: string; onClick?: (event: React.MouseEvent) => void }) => {
  return (
    <IconButton variant="ghost" size="sm" onClick={props.onClick}>
      {props.icon}
    </IconButton>
  )
}

const groupControlsComponents: Record<string, React.FC> = {
  panel_1: () => {
    return (
      <IconButton variant="plain" size="sm">
        <LuDownload />
      </IconButton>
    )
  },
}

export const RightControls = (props: IDockviewHeaderActionsProps) => {
  const Component = React.useMemo(() => {
    if (!props.isGroupActive || !props.activePanel) {
      return null
    }

    return groupControlsComponents[props.activePanel.id]
  }, [props.isGroupActive, props.activePanel])

  const [isMaximized, setIsMaximized] = React.useState<boolean>(props.containerApi.hasMaximizedGroup())

  const [isPopout, setIsPopout] = React.useState<boolean>(props.api.location.type === "popout")

  React.useEffect(() => {
    const disposable = props.containerApi.onDidMaximizedGroupChange(() => {
      setIsMaximized(props.containerApi.hasMaximizedGroup())
    })

    const disposable2 = props.api.onDidLocationChange(() => {
      setIsPopout(props.api.location.type === "popout")
    })

    return () => {
      disposable.dispose()
      disposable2.dispose()
    }
  }, [props.containerApi])

  const onClick = () => {
    if (props.containerApi.hasMaximizedGroup()) {
      props.containerApi.exitMaximizedGroup()
    } else {
      props.activePanel?.api.maximize()
    }
  }

  const onClick2 = () => {
    if (props.api.location.type !== "popout") {
      props.containerApi.addPopoutGroup(props.group)
    } else {
      props.api.moveTo({ position: "right" })
    }
  }

  return (
    <div
      className="group-control"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0px 8px",
        height: "100%",
        color: "var(--dv-activegroup-hiddenpanel-tab-color)",
      }}
    >
      {props.isGroupActive && (
        <IconButton variant="plain" size="sm">
          <IconRender name="star" />
        </IconButton>
      )}
      {Component && <Component />}

      <IconButton variant="ghost" size="sm" onClick={onClick2}>
        {isPopout ? <IconRender name="exit-fullscreen" /> : <IconRender name="open-new-window" />}
      </IconButton>

      {!isPopout && (
        <IconButton variant="ghost" size="sm" onClick={onClick}>
          {isMaximized ? <IconRender name="collapse" /> : <IconRender name="expand" />}
        </IconButton>
      )}
    </div>
  )
}

export const LeftControls = (props: IDockviewHeaderActionsProps) => {
  const onClick = () => {
    props.containerApi.addPanel({
      id: `id_${Date.now().toString()}`,
      component: "default",
      title: `Tab ${nextId()}`,
      position: {
        referenceGroup: props.group,
      },
    })
  }

  return (
    <div
      className="group-control"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0px 8px",
        height: "100%",
        color: "var(--dv-activegroup-visiblepanel-tab-color)",
      }}
    >
      <IconButton variant="ghost" size="sm" onClick={onClick}>
        <IconRender name="add" />'
      </IconButton>
    </div>
  )
}

export const PrefixHeaderControls = (props: IDockviewHeaderActionsProps) => {
  return (
    <div
      className="group-control"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0px 8px",
        height: "100%",
        color: "var(--dv-activegroup-visiblepanel-tab-color)",
      }}
    >
      <IconButton variant="plain" size="sm">
        <IconRender name="menu" />
      </IconButton>
    </div>
  )
}
