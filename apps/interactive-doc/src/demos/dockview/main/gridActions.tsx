"use client"
import * as React from "react"
import { HStack, Popover, Portal } from "@chakra-ui/react"
import { PanelBuilder } from "./panelBuilder"
import { IconButtonRender, ActionButtonRender } from "./common/component.mapping"
import { useState } from "react"
import { useDockviewApi } from "./hooks/useDockviewApi"

export const GridActions = () => {
  const [isPanelBuilderOpen, setIsPanelBuilderOpen] = useState(false)
  const { dockviewApiContext, sendToDockviewApi } = useDockviewApi()
  const { api } = dockviewApiContext

  return (
    <HStack>
      <ActionButtonRender text="Add Panel" onClick={() => sendToDockviewApi({ type: "onAddPanel" })} />
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

      <ActionButtonRender
        text="Add Nested Panel"
        onClick={() => sendToDockviewApi({ type: "onAddPanel", payload: { nested: true } })}
      />

      <ActionButtonRender text="Add Group" onClick={() => sendToDockviewApi({ type: "onAddGroup" })} />

      <ActionButtonRender text="Clear" onClick={() => sendToDockviewApi({ type: "onClearLayout" })} />

      <ActionButtonRender text="Load" onClick={() => sendToDockviewApi({ type: "onLoadLayout" })} />

      <ActionButtonRender text="Save" onClick={() => sendToDockviewApi({ type: "onSaveLayout" })} />

      <ActionButtonRender text="Reset" onClick={() => sendToDockviewApi({ type: "onResetLayout" })} />
    </HStack>
  )
}
