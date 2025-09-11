"use client"
import { DockviewApi, IDockviewPanel } from "#dockview"
import * as React from "react"
import { Button, HStack, Stack } from "@chakra-ui/react"
import { IconButtonRender } from "./common/component.mapping"

const PanelAction = (props: { panels: string[]; api: DockviewApi; activePanel?: string; panelId: string }) => {
  const onClick = () => {
    props.api.getPanel(props.panelId)?.focus()
  }

  React.useEffect(() => {
    const panel = props.api.getPanel(props.panelId)
    if (panel) {
      const disposable = panel.api.onDidVisibilityChange((event) => {
        setVisible(event.isVisible)
      })
      setVisible(panel.api.isVisible)

      return () => {
        disposable.dispose()
      }
    }
  }, [props.api, props.panelId])

  const [panel, setPanel] = React.useState<IDockviewPanel | undefined>(undefined)

  React.useEffect(() => {
    const list = [
      props.api.onDidLayoutFromJSON(() => {
        setPanel(props.api.getPanel(props.panelId))
      }),
    ]

    if (panel) {
      const disposable = panel.api.onDidVisibilityChange((event) => {
        setVisible(event.isVisible)
      })
      setVisible(panel.api.isVisible)

      list.push(disposable)
    }

    setPanel(props.api.getPanel(props.panelId))

    return () => {
      list.forEach((l) => l.dispose())
    }
  }, [props.api, props.panelId])

  const [visible, setVisible] = React.useState<boolean>(true)

  return (
    <Stack
      css={{
        background: props.activePanel === props.panelId ? "bg.error" : "bg.panel",
        shadow: "sm",
        borderRadius: "sm",
        p: 1,
      }}
    >
      <Button size="sm" variant={"outline"} onClick={onClick}>
        {props.panelId}
      </Button>
      <HStack>
        <IconButtonRender
          name="group"
          onClick={() => {
            const panel = props.api.getPanel(props.panelId)
            if (panel) {
              props.api.addFloatingGroup(panel)
            }
          }}
        />

        <IconButtonRender
          name="open-new-window"
          onClick={() => {
            const panel = props.api.getPanel(props.panelId)
            if (panel) {
              props.api.addPopoutGroup(panel)
            }
          }}
        />

        <IconButtonRender
          name="close"
          onClick={() => {
            const panel = props.api.getPanel(props.panelId)
            panel?.api.close()
          }}
        />
        <IconButtonRender
          name={visible ? "visible" : "hidden"}
          onClick={() => {
            const panel = props.api.getPanel(props.panelId)
            panel?.api.close()
          }}
        />
      </HStack>
    </Stack>
  )
}

export const PanelActions = (props: { panels: string[]; api: DockviewApi; activePanel?: string }) => {
  return (
    <HStack>
      {props.panels.map((id) => {
        return <PanelAction key={id} {...props} panelId={id} />
      })}
    </HStack>
  )
}
