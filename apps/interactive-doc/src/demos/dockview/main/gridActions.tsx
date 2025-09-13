"use client"
import * as React from "react"
import { Badge, HStack, Popover, Portal } from "@chakra-ui/react"
import { PanelBuilder } from "./panelBuilder"
import { IconButtonRender, ActionButtonRender } from "./common/component.mapping"
import { useState } from "react"
import { useDockApi } from './hooks/useDockApi'

export const GridActions = () => {
  const [isPanelBuilderOpen, setIsPanelBuilderOpen] = useState(false)
  const { sendToDockApi, api } = useDockApi()

  return (
    <HStack>
      <Badge>gridActions</Badge>
      <ActionButtonRender text="Add Panel" onClick={() => sendToDockApi({ type: "onAddPanel" })} />
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
        onClick={() => sendToDockApi({ type: "onAddPanel", payload: { nested: true } })}
      />

      <ActionButtonRender text="Add Group" onClick={() => sendToDockApi({ type: "onAddGroup" })} />

      <ActionButtonRender text="Clear" onClick={() => sendToDockApi({ type: "onClearLayout" })} />

      <ActionButtonRender text="Load" onClick={() => sendToDockApi({ type: "onLoadLayout" })} />

      <ActionButtonRender text="Save" onClick={() => sendToDockApi({ type: "onSaveLayout" })} />

      <ActionButtonRender text="Reset" onClick={() => sendToDockApi({ type: "onResetLayout" })} />
    </HStack>
  )
}
