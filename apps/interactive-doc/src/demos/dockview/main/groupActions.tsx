"use client"
import { DockviewApi, DockviewGroupLocation, DockviewGroupPanel } from "#dockview"
import * as React from "react"
import { Button, HStack, Stack } from "@chakra-ui/react"

import { IconButtonRender } from "./common/component.mapping"

const GroupAction = (props: { groupId: string; groups: string[]; api: DockviewApi; activeGroup?: string }) => {
  const onClick = () => {
    props.api?.getGroup(props.groupId)?.focus()
  }

  const isActive = props.activeGroup === props.groupId

  const [group, setGroup] = React.useState<DockviewGroupPanel | undefined>(undefined)

  React.useEffect(() => {
    const disposable = props.api.onDidLayoutFromJSON(() => {
      // @ts-ignore
      setGroup(props.api.getGroup(props.groupId))
    })
    // @ts-ignore
    setGroup(props.api.getGroup(props.groupId))

    return () => {
      disposable.dispose()
    }
  }, [props.api, props.groupId])

  const [location, setLocation]: any = React.useState<any>(null)
  const [isMaximized, setIsMaximized]: any = React.useState<boolean>(false)
  const [isVisible, setIsVisible]: any = React.useState<boolean>(true)

  React.useEffect(() => {
    if (!group) {
      setLocation(null)
      return
    }

    const disposable = group.api.onDidLocationChange((event) => {
      setLocation(event.location)
    })

    const disposable2 = props.api.onDidMaximizedGroupChange(() => {
      setIsMaximized(group.api.isMaximized())
    })

    const disposable3 = group.api.onDidVisibilityChange(() => {
      setIsVisible(group.api.isVisible)
    })

    setLocation(group.api.location)
    setIsMaximized(group.api.isMaximized())
    setIsVisible(group.api.isVisible)

    return () => {
      disposable.dispose()
      disposable2.dispose()
      disposable3.dispose()
    }
  }, [group])

  return (
    <Stack
      css={{
        background: props?.api.getGroup(props.groupId)?.api.isActive ? "bg.error" : "bg.panel",
        shadow: "sm",
        borderRadius: "sm",
        p: 1,
      }}
    >
      <Button size="sm" variant={"outline"} onClick={onClick}>
        Group {props.groupId}
      </Button>
      <HStack>
        <IconButtonRender
          variant="outline"
          name="group"
          onClick={() => {
            if (group) {
              props.api.addFloatingGroup(group, {
                width: 400,
                height: 300,
                x: 50,
                y: 50,
                position: {
                  bottom: 50,
                  right: 50,
                },
              })
            }
          }}
        />

        <IconButtonRender
          name="open-new-window"
          variant="outline"
          onClick={() => {
            if (group) {
              props.api.addPopoutGroup(group)
            }
          }}
        />

        <IconButtonRender
          name={isMaximized ? "maximize" : "minimize"}
          variant="outline"
          onClick={() => {
            if (group) {
              if (group.api.isMaximized()) {
                group.api.exitMaximized()
              } else {
                group.api.maximize()
              }
            }
          }}
        />

        <IconButtonRender
          name={isVisible ? "visible" : "hidden"}
          variant="outline"
          onClick={() => {
            console.log(group)
            if (group) {
              if (group.api.isVisible) {
                group.api.setVisible(false)
              } else {
                group.api.setVisible(true)
              }
            }
          }}
        />

        <IconButtonRender
          name={"close"}
          variant="outline"
          onClick={() => {
            const panel = props.api?.getGroup(props.groupId)
            panel?.api.close()
          }}
        />
      </HStack>
    </Stack>
  )
}

export const GroupActions = (props: { groups: string[]; api: DockviewApi; activeGroup?: string }) => {
  return (
    <HStack>
      {props.groups.map((groupId) => {
        return <GroupAction key={groupId} {...props} groupId={groupId} />
      })}
    </HStack>
  )
}
