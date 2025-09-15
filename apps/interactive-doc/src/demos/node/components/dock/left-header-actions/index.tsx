import { IDockviewHeaderActionsProps } from "#modules/dockview/core"
import { HStack } from "@chakra-ui/react"
import { IconButtonRender } from "#nodedemo/components/ui"
import * as React from "react"
import { useDockApi } from "#nodedemo/hooks/useDockApi"

export const LeftHeaderActions = (props: IDockviewHeaderActionsProps) => {
  const { sendToDockApi } = useDockApi()

  const onClick = () => {
    sendToDockApi({ type: "onAddPanel", payload: { position: { referenceGroup: props.group.id } } })
  }

  return (
    <HStack
      css={{
        color: "var(--dv-activegroup-visiblepanel-tab-color)",
      }}
    >
      <IconButtonRender onClick={onClick} name="add" />
    </HStack>
  )
}
