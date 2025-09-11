"use client"
import { DockviewApi, DockviewGroupLocation, DockviewGroupPanel } from "#dockview"
import * as React from "react"
import { Button, HStack, Stack } from "@chakra-ui/react"
import { useDockviewApi } from "./hooks/useDockviewApi"
import { IconButtonRender } from "./common/component.mapping"

const GroupAction = (props: { groupId: string }) => {
  const { sendToDockviewApi, dockviewApiContext } = useDockviewApi()
  const { api, activeGroup } = dockviewApiContext

  const onClick = () => {
    api?.getGroup(props.groupId)?.focus()
  }

  const isActive = activeGroup === props.groupId

  const [group, setGroup] = React.useState<DockviewGroupPanel | undefined>(undefined)

  React.useEffect(() => {
    const disposable = api.onDidLayoutFromJSON(() => {
      // @ts-ignore
      setGroup(api.getGroup(props.groupId))
    })
    // @ts-ignore
    setGroup(api.getGroup(props.groupId))

    return () => {
      disposable.dispose()
    }
  }, [api, props.groupId])

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

    const disposable2 = api.onDidMaximizedGroupChange(() => {
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
        background: api.getGroup(props.groupId)?.api.isActive ? "bg.error" : "bg.panel",
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
              api.addFloatingGroup(group, {
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
              api.addPopoutGroup(group)
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
            const panel = api?.getGroup(props.groupId)
            panel?.api.close()
          }}
        />
      </HStack>
    </Stack>
  )
}

export const GroupActions = () => {
  const { sendToDockviewApi, dockviewApiContext } = useDockviewApi()
  const { groups } = dockviewApiContext

  return (
    <HStack>
      {groups.map((groupId: any) => {
        return <GroupAction key={groupId} groupId={groupId} />
      })}
    </HStack>
  )
}
