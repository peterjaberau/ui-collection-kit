'use client'
import { DockviewApi } from "#dockview"
import * as React from "react"
import { defaultConfig, nextId } from "./defaultLayout"
import {
  Button,
  IconButton,
  HStack,
  Popover,
  Portal,
} from "@chakra-ui/react"
import { PanelBuilder } from "./panelBuilder"
import { MdTune } from "react-icons/md"
import { useState } from "react"

export const GridActions = (props: {
  api?: DockviewApi
  hasCustomWatermark: boolean
  toggleCustomWatermark: () => void
}) => {
  const [isPanelBuilderOpen, setIsPanelBuilderOpen] = useState(false)

  const onClear = () => {
    props.api?.clear()
  }

  const onLoad = () => {
    const state = localStorage.getItem("dv-demo-state")
    if (state) {
      try {
        props.api?.fromJSON(JSON.parse(state))
      } catch (err) {
        console.error("failed to load state", err)
        localStorage.removeItem("dv-demo-state")
      }
    }
  }

  const onSave = () => {
    if (props.api) {
      const state = props.api.toJSON()
      console.log(state)

      localStorage.setItem("dv-demo-state", JSON.stringify(state))
    }
  }

  const onReset = () => {
    if (props.api) {
      try {
        props.api.clear()
        defaultConfig(props.api)
      } catch (err) {
        localStorage.removeItem("dv-demo-state")
      }
    }
  }

  const onAddPanel = (options?: { nested?: boolean }) => {
    props.api?.addPanel({
      id: `id_${Date.now().toString()}`,
      component: options?.nested ? "nested" : "default",
      title: `Tab ${nextId()}`,
      renderer: "always",
    })
  }

  const onAddGroup = () => {
    props.api?.addGroup()
  }

  return (
      <HStack>
        <Button onClick={() => onAddPanel()}>Add Panel</Button>
        <Popover.Root
          open={isPanelBuilderOpen}
          onOpenChange={(e) => setIsPanelBuilderOpen(e.open)}
        >
          <Popover.Trigger asChild>
            <IconButton variant="outline" size="sm">
              <MdTune />
            </IconButton>
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner>
              <Popover.Content>
                <Popover.Arrow />
                <Popover.Body>
                  <PanelBuilder
                    api={props.api!}
                    done={() => setIsPanelBuilderOpen(false)}
                  />
                </Popover.Body>
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </Popover.Root>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onAddPanel({ nested: true })}
        >
          Add Nested Panel
        </Button>

        <Button variant="outline" size="sm" onClick={onAddGroup}>
          Add Group
        </Button>

        <Button variant="outline" size="sm" onClick={onClear}>
          Clear
        </Button>
        <Button variant="outline" size="sm" onClick={onLoad}>
          Load
        </Button>
        <Button variant="outline" size="sm" onClick={onSave}>
          Save
        </Button>
        <Button variant="outline" size="sm" onClick={onReset}>
          Reset
        </Button>
      </HStack>

  )
}
