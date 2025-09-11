"use client"
import { IDockviewHeaderActionsProps } from "#dockview"
import * as React from "react"
import { nextId } from "./utils"
import { IconButtonRender } from "./common/component.mapping"



const groupControlsComponents: Record<string, React.FC> = {
  panel_1: () => {
    return <IconButtonRender variant='plain' name='download' />
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
      {props.isGroupActive && <IconButtonRender name='star' variant='plain' />}
      {Component && <Component />}

      <IconButtonRender onClick={onClick2} name={isPopout ? 'exit-fullscreen': 'open-new-window'} />
      {!isPopout && <IconButtonRender onClick={onClick} name={isMaximized ? 'collapse': 'expand'} />}
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
      <IconButtonRender onClick={onClick} name='add' />
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
      <IconButtonRender name='menu' variant='plain' />
    </div>
  )
}
