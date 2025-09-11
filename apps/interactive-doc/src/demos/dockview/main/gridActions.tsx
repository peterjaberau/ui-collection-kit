"use client"
import * as React from "react"
import { nextId } from "./utils"
import { Button, HStack, Popover, Portal } from "@chakra-ui/react"
import { PanelBuilder } from "./panelBuilder"
import { IconButtonRender } from "./common/component.mapping"
import { useState } from "react"
import { useDockviewApi } from "./hooks/useDockviewApi"

export const GridActions = (props: {
  hasCustomWatermark: boolean
  toggleCustomWatermark: () => void
}) => {
  const [isPanelBuilderOpen, setIsPanelBuilderOpen] = useState(false)
  const { dockviewApiContext, sendToDockviewApi } = useDockviewApi()
  const { api } = dockviewApiContext

  const onClear = () => {
    api?.clear()
  }

  const onLoad = () => {
    const state = localStorage.getItem("dv-demo-state")
    if (state) {
      try {
        api?.fromJSON(JSON.parse(state))
      } catch (err) {
        console.error("failed to load state", err)
        localStorage.removeItem("dv-demo-state")
      }
    }
  }

  const onSave = () => {
    if (api) {
      const state = api.toJSON()
      console.log(state)
      localStorage.setItem("dv-demo-state", JSON.stringify(state))
    }
  }

  const onReset = () => {
    sendToDockviewApi({ type: "RESET" })
  }

  const onAddPanel = (options?: { nested?: boolean }) => {
    api?.addPanel({
      id: `id_${Date.now().toString()}`,
      component: options?.nested ? "nested" : "default",
      title: `Tab ${nextId()}`,
      renderer: "always",
    })
  }

  const onAddGroup = () => {
    api?.addGroup()
  }

  return (
    <HStack>
      <Button onClick={() => onAddPanel()}>Add Panel</Button>
      <Popover.Root open={isPanelBuilderOpen} onOpenChange={(e) => setIsPanelBuilderOpen(e.open)}>
        <Popover.Trigger asChild>
          <IconButtonRender variant="outline" name="preferences" />
        </Popover.Trigger>
        <Portal>
          <Popover.Positioner>
            <Popover.Content>
              <Popover.Arrow />
              <Popover.Body>
                <PanelBuilder api={api!} done={() => setIsPanelBuilderOpen(false)} />
              </Popover.Body>
            </Popover.Content>
          </Popover.Positioner>
        </Portal>
      </Popover.Root>
      <Button variant="outline" size="sm" onClick={() => onAddPanel({ nested: true })}>
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
