'use client'
import { DockviewApi, DockviewGroupLocation, DockviewGroupPanel } from "#dockview"
import * as React from "react"
import { Button, IconButton, Group, HStack, Stack } from "@chakra-ui/react"
import { FaLayerGroup as IconGroup } from "react-icons/fa6"
import { RxOpenInNewWindow as IconNewWindow } from "react-icons/rx"
import { MdClose as IconClose } from "react-icons/md"
import { FaRegEye as IconVisible, FaRegEyeSlash as IconHidden } from "react-icons/fa"
import { FiMaximize } from "react-icons/fi";
import { FiMinimize } from "react-icons/fi";


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

  const [location, setLocation] = React.useState<DockviewGroupLocation | null>(null)
  const [isMaximized, setIsMaximized] = React.useState<boolean>(false)
  const [isVisible, setIsVisible] = React.useState<boolean>(true)

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
        <IconButton
          size="sm"
          variant={"outline"}
          // className={location?.type === "floating" ? "demo-icon-button selected" : "demo-icon-button"}
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
        >
          <IconGroup />
        </IconButton>
        <IconButton
          size="sm"
          variant={"outline"}
          // className={location?.type === "popout" ? "demo-icon-button selected" : "demo-icon-button"}
          onClick={() => {
            if (group) {
              props.api.addPopoutGroup(group)
            }
          }}
        >
          <IconNewWindow />
        </IconButton>
        <IconButton
          size="sm"
          variant={"outline"}
          onClick={() => {
            if (group) {
              if (group.api.isMaximized()) {
                group.api.exitMaximized()
              } else {
                group.api.maximize()
              }
            }
          }}
        >
          {isMaximized ? <FiMaximize /> : <FiMinimize />}

        </IconButton>
        <IconButton
          size="sm"
          variant={"outline"}
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
        >
          {isVisible ? <IconVisible /> : <IconHidden />}
        </IconButton>
        <IconButton
          size="sm"
          variant={"outline"}
          // className="demo-icon-button"
          onClick={() => {
            const panel = props.api?.getGroup(props.groupId)
            panel?.api.close()
          }}
        >
          <IconClose />
        </IconButton>
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
