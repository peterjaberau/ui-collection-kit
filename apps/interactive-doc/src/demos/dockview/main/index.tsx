"use client"
import "./dock-view-light.css"
import {
  DockviewDefaultTab,
  DockviewReact,
  DockviewReadyEvent,
  IDockviewPanelHeaderProps,
  IDockviewPanelProps,
  DockviewApi,
  DockviewTheme,
  themeAbyssSpaced,
  themeLightSpaced,
  themeLight,
  themeReplit,
  themeDark,
} from "#dockview"
import React, { useMemo } from "react"
import "./app.css"
import { defaultConfig } from "./defaultLayout"
import { GridActions } from "./gridActions"
import { PanelActions } from "./panelActions"
import { GroupActions } from "./groupActions"
import { LeftControls, PrefixHeaderControls, RightControls } from "./controls"
import { Table, usePanelApiMetadata } from "./debugPanel"
import { LogLine, LogLines } from "./logLines"
import { useTheme } from "next-themes"
import { Button, IconButton, Group, HStack, Icon, Stack, Box, Flex } from "@chakra-ui/react"
import { LuBug as IconEngineer } from "react-icons/lu"
import { RiTerminalBoxFill as IconConsole } from "react-icons/ri"
import { BiUndo as IconUndo } from "react-icons/bi"
import { DockViewThemeprovider } from "./DockViewThemeprovider"

const DebugContext = React.createContext<boolean>(false)
const Option = (props: { title: string; onClick: () => void; value: string }) => {
  return (
    <div>
      <span>{`${props.title}: `}</span>
      <button onClick={props.onClick}>{props.value}</button>
    </div>
  )
}

const components = {
  default: (props: any) => {
    const isDebug = React.useContext(DebugContext)
    const metadata = usePanelApiMetadata(props.api)

    return (
      <div
        style={{
          height: "100%",
          overflow: "auto",
          position: "relative",
          padding: 5,
          border: isDebug ? "2px dashed orange" : "",
        }}
      >
        {/* <Table data={metadata} /> */}
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            pointerEvents: "none",
            fontSize: "42px",
            opacity: 0.5,
          }}
        >
          {props.api.title}
        </span>

        {isDebug && (
          <div style={{ fontSize: "0.8em" }}>
            <Option
              title="Panel Rendering Mode"
              value={metadata.renderer.value}
              onClick={() => props.api.setRenderer(props.api.renderer === "always" ? "onlyWhenVisible" : "always")}
            />

            <Table data={metadata} />
          </div>
        )}
      </div>
    )
  },

  nested: (props: IDockviewPanelProps) => {
    const { resolvedTheme } = useTheme()
    const theme = useMemo(() => (resolvedTheme === "dark" ? themeDark : themeLight), [resolvedTheme])
    return (
      <DockviewReact
        components={components}
        onReady={(event: DockviewReadyEvent) => {
          event.api.addPanel({ id: "panel_1", component: "default" })
          event.api.addPanel({ id: "panel_2", component: "default" })
          event.api.addPanel({
            id: "panel_3",
            component: "default",
          })

          event.api.onDidRemovePanel((e) => {
            console.log("remove", e)
          })
        }}
        theme={theme}
      />
    )
  },

  iframe: (props: IDockviewPanelProps) => {
    return (
      <iframe
        onMouseDown={() => {
          if (!props.api.isActive) {
            props.api.setActive()
          }
        }}
        style={{
          border: "none",
          width: "100%",
          height: "100%",
        }}
        src="https://dockview.dev"
      />
    )
  },
}

const headerComponents = {
  default: (props: IDockviewPanelHeaderProps) => {
    const onContextMenu = (event: React.MouseEvent) => {
      event.preventDefault()
      alert("context menu")
    }
    return <DockviewDefaultTab onContextMenu={onContextMenu} {...props} />
  },
}

const colors = [
  "rgba(255,0,0,0.2)",
  "rgba(0,255,0,0.2)",
  "rgba(0,0,255,0.2)",
  "rgba(255,255,0,0.2)",
  "rgba(0,255,255,0.2)",
  "rgba(255,0,255,0.2)",
]
let count = 0

const ThemeContext = React.createContext<DockviewTheme | undefined>(undefined)

const DockViewMain = (props: { theme?: string }) => {
  const { resolvedTheme } = useTheme()
  const theme = useMemo(() => (resolvedTheme === "dark" ? themeDark : themeReplit), [resolvedTheme])

  const [logLines, setLogLines] = React.useState<{ text: string; timestamp?: Date; backgroundColor?: string }[]>([])

  const [panels, setPanels] = React.useState<string[]>([])
  const [groups, setGroups] = React.useState<string[]>([])
  const [api, setApi] = React.useState<DockviewApi | any>()

  const [activePanel, setActivePanel] = React.useState<string>()
  const [activeGroup, setActiveGroup] = React.useState<string>()

  const [pending, setPending] = React.useState<{ text: string; timestamp?: Date }[]>([])

  const addLogLine = (message: string) => {
    setPending((line) => [{ text: message, timestamp: new Date() }, ...line])
  }

  React.useLayoutEffect(() => {
    if (pending.length === 0) {
      return
    }
    const color = colors[count++ % colors.length]
    setLogLines((lines) => [...pending.map((_) => ({ ..._, backgroundColor: color })), ...lines])
    setPending([])
  }, [pending])

  React.useEffect(() => {
    if (!api) {
      return
    }

    const disposables = [
      api.onDidAddPanel((event: any) => {
        setPanels((_) => [..._, event.id])
        addLogLine(`Panel Added ${event.id}`)
      }),
      api.onDidActivePanelChange((event: any) => {
        setActivePanel(event?.id)
        addLogLine(`Panel Activated ${event?.id}`)
      }),
      api.onDidRemovePanel((event: any) => {
        setPanels((_) => {
          const next = [..._]
          next.splice(
            next.findIndex((x) => x === event.id),
            1,
          )

          return next
        })
        addLogLine(`Panel Removed ${event.id}`)
      }),

      api.onDidAddGroup((event: any) => {
        setGroups((_) => [..._, event.id])
        addLogLine(`Group Added ${event.id}`)
      }),

      api.onDidMovePanel((event: any) => {
        addLogLine(`Panel Moved ${event.panel.id}`)
      }),

      api.onDidMaximizedGroupChange((event: any) => {
        addLogLine(`Group Maximized Changed ${event.group.api.id} [${event.isMaximized}]`)
      }),

      api.onDidRemoveGroup((event: any) => {
        setGroups((_) => {
          const next = [..._]
          next.splice(
            next.findIndex((x) => x === event.id),
            1,
          )

          return next
        })
        addLogLine(`Group Removed ${event.id}`)
      }),

      api.onDidActiveGroupChange((event: any) => {
        setActiveGroup(event?.id)
        addLogLine(`Group Activated ${event?.id}`)
      }),
    ]

    const loadLayout = () => {
      const state = localStorage.getItem("dv-demo-state")

      if (state) {
        try {
          api.fromJSON(JSON.parse(state))
          return
        } catch {
          localStorage.removeItem("dv-demo-state")
        }
        return
      }

      defaultConfig(api)
    }

    loadLayout()

    return () => {
      disposables.forEach((disposable) => disposable.dispose())
    }
  }, [api])

  const onReady = (event: DockviewReadyEvent) => {
    setApi(event.api)
  }

  const [watermark, setWatermark] = React.useState<boolean>(false)

  const [gapCheck, setGapCheck] = React.useState<boolean>(false)

  const css = React.useMemo(() => {
    if (!gapCheck) {
      return {}
    }

    return {
      "--dv-group-gap-size": "0.5rem",
      "--demo-border": "5px dashed purple",
    } as React.CSSProperties
  }, [gapCheck])

  const [showLogs, setShowLogs] = React.useState<boolean>(false)
  const [debug, setDebug] = React.useState<boolean>(false)

  return (
    <DockViewThemeprovider>
      <Stack
        css={{
          "--dv-paneview-active-outline-color": "dodgerblue",
          "--dv-tabs-and-actions-container-font-size": "13px",
          "--dv-tabs-and-actions-container-height": "35px",
          "--dv-drag-over-background-color": "#53595d80",
          "--dv-drag-over-border-color": "transparent",
          "--dv-tabs-container-scrollbar-color": "#888",
          "--dv-icon-hover-background-color": "#5a5d5e4f",
          "--dv-floating-box-shadow": "8px 8px 8px 0px #53595d80",
          "--dv-overlay-z-index": 999,
          "--dv-tab-font-size": "inherit",
          "--dv-border-radius": "0px",
          "--dv-tab-margin": 0,
          "--dv-sash-color": "#cfd1d3",
          "--dv-active-sash-color": "#babbbb",
          "--dv-active-sash-transition-duration": ".1s",
          "--dv-active-sash-transition-delay": "0.5s",

          "--dv-scrollbar-background-color": "#00000040",
          "--dv-tabs-and-actions-container-background-color": "#fcfcfc",
          "--dv-tab-divider-color": "transparent",
          "--dv-separator-border": "#transparent",
          "--dv-paneview-header-border-color": "#333",

          "--dv-group-view-background-color": "#ebeced",

          "--dv-activegroup-visiblepanel-tab-background-color": "#f0f1f2",
          "--dv-activegroup-hiddenpanel-tab-background-color": "#fcfcfc",
          "--dv-activegroup-visiblepanel-tab-color": "#333",
          "--dv-activegroup-hiddenpanel-tab-color": "#333",

          "--dv-inactivegroup-visiblepanel-tab-background-color": "#f0f1f2",
          "--dv-inactivegroup-hiddenpanel-tab-background-color": "#fcfcfc",
          "--dv-inactivegroup-visiblepanel-tab-color": "#333",
          "--dv-inactivegroup-hiddenpanel-tab-color": "#333",

          "--dv-resize-container-groupview-border-radius": "8px",
          "--dv-resize-container-border-radius": "10px",
          "--dv-groupview-border-radius": "10px",
          "--dv-groupview-tabs-and-actions-container-border-bottom": "1px solid",
          "--dv-groupview-tabs-and-actions-container-border-bottom-color": "#80808059",
          "--dv-groupview-tabs-and-actions-container-tab-margin": "4px",
          "--dv-groupview-tabs-and-actions-container-tab-border-radius": "8px",
          "--dv-groupview-tabs-and-actions-container-tab-svg-height": "8px",
          "--dv-groupview-tabs-and-actions-container-tab-svg-width": "8px",
          "--dv-groupview-tabs-and-actions-container-tab-hover-background-color": "#e4e5e6",
          "--dv-groupview-content-container-background-color": "#fcfcfc",
          "--dv-groupview-active-group-border": "1px solid",
          "--dv-groupview-active-group-border-color": "#80808059",
          "--dv-groupview-inactive-group-border": "1px solid",
          "--dv-groupview-inactive-group-border-color": "#0000",

          "--dv-vertical-sash-container-sash-background-color": "#0000",
          "--dv-vertical-sash-container-sash-nd-after-height": "4px",
          "--dv-vertical-sash-container-sash-nd-after-width": "40px",
          "--dv-vertical-sash-container-sash-nd-after-border-radius": "2px",
          "--dv-vertical-sash-container-sash-nd-after-top": "50%",
          "--dv-vertical-sash-container-sash-nd-after-left": "50%",
          "--dv-vertical-sash-container-sash-nd-after-transform": "translate(-50%, -50%)",
          "--dv-vertical-sash-container-sash-nd-hover-after-background-color": "#0000",
          "--dv-vertical-sash-container-sash-nd-active-background-color": "#0000",

          "--dv-horizontal-sash-container-sash-background-color": "#0000",
          "--dv-horizontal-sash-container-sash-nd-after-height": "40px",
          "--dv-horizontal-sash-container-sash-nd-after-width": "4px",
          "--dv-horizontal-sash-container-sash-nd-after-border-radius": "2px",
          "--dv-horizontal-sash-container-sash-nd-after-top": "50%",
          "--dv-horizontal-sash-container-sash-nd-after-left": "50%",
          "--dv-horizontal-sash-container-sash-nd-after-transform": "translate(-50%, -50%)",
          "--dv-horizontal-sash-container-sash-nd-hover-after-background-color": "#0000",
          "--dv-horizontal-sash-container-sash-nd-active-background-color": "#0000",

          height: "100vh",
          position: "relative",
          background: "bg.emphasized",
          flex: 1,
          p: 2,
        }}
      >
        <Stack
          css={{
            background: "bg.panel",
            p: 2,
            borderRadius: "sm",
          }}
        >
          <GridActions
            api={api}
            toggleCustomWatermark={() => setWatermark(!watermark)}
            hasCustomWatermark={watermark}
          />
          {api && <PanelActions api={api} panels={panels} activePanel={activePanel} />}
          {api && <GroupActions api={api} groups={groups} activeGroup={activeGroup} />}
          <HStack w="full" justifyContent="flex-end">
            <IconButton
              size="sm"
              onClick={() => {
                setDebug(!debug)
              }}
            >
              <IconEngineer />
            </IconButton>
            {showLogs && (
              <IconButton
                onClick={() => {
                  setLogLines([])
                }}
              >
                <IconUndo />
              </IconButton>
            )}
            <Button
              onClick={() => {
                setShowLogs(!showLogs)
              }}
            >
              {`${showLogs ? "Hide" : "Show"} Events Log`}
              <Icon>
                <IconConsole />
              </Icon>
            </Button>
          </HStack>
        </Stack>

        <Flex
          css={{
            flexGrow: 1,
            height: 0,
          }}
        >
          <Flex
            css={{
              flexGrow: 1,
              overflow: "hidden",
            }}
          >
            <DebugContext.Provider value={debug}>
              <DockviewReact
                components={components}
                defaultTabComponent={headerComponents.default}
                rightHeaderActionsComponent={RightControls}
                leftHeaderActionsComponent={LeftControls}
                prefixHeaderActionsComponent={PrefixHeaderControls}
                // watermarkComponent={
                //   watermark ? WatermarkComponent : undefined
                // }
                onReady={onReady}
                theme={theme}
              />
            </DebugContext.Provider>
          </Flex>

          {showLogs && (
            <Box
              css={{
                width: "400px",
                backgroundColor: "black",
                color: "white",
                overflow: "hidden",
                fontFamily: "monospace",
                marginLeft: "10px",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box style={{ flexGrow: 1, overflow: "auto" }}>
                {logLines.map((line, i) => {
                  return (
                    <Box
                      style={{
                        height: "30px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        fontSize: "13px",
                        display: "flex",
                        alignItems: "center",

                        backgroundColor: line.backgroundColor,
                      }}
                      key={i}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          minWidth: "20px",
                          maxWidth: "20px",
                          color: "gray",
                          borderRight: "1px solid gray",
                          marginRight: "4px",
                          paddingLeft: "4px",
                          height: "100%",
                        }}
                      >
                        {logLines.length - i}
                      </span>
                      <span>
                        {line.timestamp && (
                          <span
                            style={{
                              fontSize: "0.7em",
                              padding: "0px 2px",
                            }}
                          >
                            {line.timestamp.toISOString().substring(11, 23)}
                          </span>
                        )}
                        <span>{line.text}</span>
                      </span>
                    </Box>
                  )
                })}
              </Box>
              <div
                style={{
                  padding: "4px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button onClick={() => setLogLines([])}>Clear</button>
              </div>
            </Box>
          )}
        </Flex>
      </Stack>
    </DockViewThemeprovider>
  )
}

export default DockViewMain
