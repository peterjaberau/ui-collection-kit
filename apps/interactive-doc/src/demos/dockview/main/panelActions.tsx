'use client'
import { DockviewApi, IDockviewPanel } from "#dockview"
import * as React from "react"
import { Button, IconButton, Group, HStack, Stack } from "@chakra-ui/react"
import { FaLayerGroup as IconGroup } from "react-icons/fa6"
import { RxOpenInNewWindow as IconNewWindow } from "react-icons/rx"
import { MdClose as IconClose } from "react-icons/md"
import { FaRegEye as IconVisible, FaRegEyeSlash as IconHidden } from "react-icons/fa"

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
      background: props.activePanel === props.panelId ? "bg.error" :  "bg.panel",
      shadow: 'sm',
      borderRadius: 'sm',
      p: 1
    }}
    >
      <Button size="sm" variant={"outline"} onClick={onClick}>
        {props.panelId}
      </Button>
      <HStack>
        <IconButton
          size="xs"
          variant='ghost'
          onClick={() => {
            const panel = props.api.getPanel(props.panelId)
            if (panel) {
              props.api.addFloatingGroup(panel)
            }
          }}
        >
          <IconGroup />
        </IconButton>
        <IconButton
          size="xs"
          variant='ghost'
          onClick={() => {
            const panel = props.api.getPanel(props.panelId)
            if (panel) {
              props.api.addPopoutGroup(panel)
            }
          }}
        >
          <IconNewWindow />
        </IconButton>
        <IconButton
          size="xs"
          variant='ghost'
          onClick={() => {
            const panel = props.api.getPanel(props.panelId)
            panel?.api.close()
          }}
        >
          <IconClose />
        </IconButton>
        <IconButton
          size="xs"
          variant='ghost'
          title="Panel visiblity cannot be edited manually."
          disabled={true}
        >
          {visible ? <IconVisible /> : <IconHidden />}
        </IconButton>
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
