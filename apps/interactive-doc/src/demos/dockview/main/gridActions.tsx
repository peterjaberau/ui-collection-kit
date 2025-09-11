"use client"
import * as React from "react"
import { Button, HStack, Popover, Portal } from "@chakra-ui/react"
import { PanelBuilder } from "./panelBuilder"
import { IconButtonRender } from "./common/component.mapping"
import { useState } from "react"
import { useDockviewApi } from "./hooks/useDockviewApi"

export const GridActions = (props: { hasCustomWatermark: boolean; toggleCustomWatermark: () => void }) => {
  const [isPanelBuilderOpen, setIsPanelBuilderOpen] = useState(false)
  const { dockviewApiContext, sendToDockviewApi } = useDockviewApi()
  const { api } = dockviewApiContext

  return (
    <HStack>
      <Button onClick={() => sendToDockviewApi({ type: "ADD_PANEL" })}>Add Panel</Button>
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
      <Button
        variant="outline"
        size="sm"
        onClick={() => sendToDockviewApi({ type: "ADD_PANEL", payload: { nested: true } })}
      >
        Add Nested Panel
      </Button>

      <Button variant="outline" size="sm" onClick={() => sendToDockviewApi({ type: "ADD_GROUP" })}>
        Add Group
      </Button>

      <Button variant="outline" size="sm" onClick={() => sendToDockviewApi({ type: "CLEAR_LAYOUT" })}>
        Clear
      </Button>
      <Button variant="outline" size="sm" onClick={() => sendToDockviewApi({ type: "LOAD_LAYOUT" })}>
        Load
      </Button>
      <Button variant="outline" size="sm" onClick={() => sendToDockviewApi({ type: "SAVE_LAYOUT" })}>
        Save
      </Button>
      <Button variant="outline" size="sm" onClick={() => sendToDockviewApi({ type: "RESET" })}>
        Reset
      </Button>
    </HStack>
  )
}
