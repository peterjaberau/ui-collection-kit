"use client"
import "./dock-view-light.css"
import {
  DockviewDefaultTab,
  DockviewReact,
  DockviewReadyEvent,
  IDockviewPanelHeaderProps,
  themeReplit,
} from "#dockview"
import React from "react"
import { GridActions } from "./gridActions"
import { PanelActions } from "./panelActions"
import { GroupActions } from "./groupActions"
import { DockLeftControls, DockPrefixHeaderControls, DockRightControls } from "./dock.controls"
import { Table, usePanelApiMetadata } from "./debugPanel"
import { Button, IconButton, HStack, Icon, Stack, Box, Flex, Center, Container, Badge } from "@chakra-ui/react"
import { LuBug as IconEngineer } from "react-icons/lu"
import { RiTerminalBoxFill as IconConsole } from "react-icons/ri"
import { BiUndo as IconUndo } from "react-icons/bi"
import { DockViewThemeprovider } from "./DockViewThemeprovider"
import { useDockApi } from "#demos/dockview/main/hooks/useDockApi"
const DebugContext = React.createContext<boolean>(false)

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
          <Stack>
            <HStack>
              <Badge>Panel Rendering Mode</Badge>
              <Button
                variant="outline"
                size="xs"
                onClick={() => props.api.setRenderer(props.api.renderer === "always" ? "onlyWhenVisible" : "always")}
              >
                {metadata.renderer.value}
              </Button>
            </HStack>

            <Table data={metadata} id={props.api.id} />
          </Stack>
        )}
      </div>
    )
  },
  nested: (props: any) => {
    return (
      <DockviewReact
        components={components}
        defaultTabComponent={headerComponents.default}
        onReady={(event: DockviewReadyEvent) => {
          event.api.addPanel({ id: "panel_1", component: "default" })
          event.api.addPanel({ id: "panel_2", component: "default" })
          event.api.addPanel({
            id: "panel_3",
            component: "default",
          })
        }}
        theme={themeReplit}
      />
    )
  },

  DomainSelectorPanel: (props: any) => {
    return <>DomainSelectorPanel</>
  },
  DomainStructurePanel: (props: any) => {
    return <>DomainStructurePanel</>
  },
  NodeSelectedPanel: (props: any) => {
    return <>NodeSelectedPanel</>
  },
  NodeSpecificationsPanel: (props: any) => {
    return <>NodeSpecificationsPanel</>
  },
  NodeInputPanel: (props: any) => {
    return <>NodeInputPanel</>
  },
  NodeTransformPanel: (props: any) => {
    return <>NodeTransformPanel</>
  },
  NodeOutputPanel: (props: any) => {
    return <>NodeOutputPanel</>
  },
  NodeActionsPanel: (props: any) => {
    return <>NodeActionsPanel</>
  },
  NodeVisualEditorPanel: (props: any) => {
    return <>NodeVisualEditorPanel</>
  },
  NodeScriptEditorPanel: (props: any) => {
    return <>NodeScriptEditorPanel</>
  },
  NodeFlowEditorPanel: (props: any) => {
    return <>NodeFlowEditorPanel</>
  },
  NodeSimlulatorPanel: (props: any) => {
    return <>NodeSimlulatorPanel</>
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

const DockViewApp = (props: { theme?: string }) => {
  const { sendToDockApi, api, extras } = useDockApi()
  const [showLogs, setShowLogs] = React.useState<boolean>(false)
  const [debug, setDebug] = React.useState<boolean>(false)

  const onReady = (event: DockviewReadyEvent) => {
    sendToDockApi({ type: "onReady", api: event.api })
  }

  return (
    <DockViewThemeprovider>
      <Stack
        css={{
          "--dv-paneview-active-outline-color": "dodgerblue",
          "--dv-tabs-and-actions-container-font-size": "13px",
          "--dv-tabs-and-actions-container-height": "38px",
          "--dv-drag-over-background-color": "#53595d80",
          "--dv-drag-over-border-color": "transparent",
          "--dv-tabs-container-scrollbar-color": "#888",
          "--dv-icon-hover-background-color": "#5a5d5e4f",
          "--dv-floating-box-shadow": "8px 8px 8px 0px #53595d80",
          "--dv-overlay-z-index": 999,
          "--dv-tab-font-size": "inherit",
          // "--dv-border-radius": "0px",
          // "--dv-tab-margin": 0,
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

          "--dv-groupview-tabs-and-actions-container-tab-hover-background-color": "#e4e5e6",
          "--dv-groupview-content-container-background-color": "#fcfcfc",
          "--dv-groupview-active-group-border": "1px solid",
          "--dv-groupview-active-group-border-color": "#80808059",
          "--dv-groupview-inactive-group-border": "1px solid",
          "--dv-groupview-inactive-group-border-color": "#0000",

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
          <GridActions />
          {api && <PanelActions />}
          {api && <GroupActions />}
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
                  // setLogLines([])
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
                rightHeaderActionsComponent={DockRightControls}
                leftHeaderActionsComponent={DockLeftControls}
                prefixHeaderActionsComponent={DockPrefixHeaderControls}
                onReady={onReady}
                theme={themeReplit}
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
                {extras.logLines.map((line: any, i: number) => {
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
                        {extras.logLines.length - i}
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
                <button onClick={() => {}}>Clear</button>
              </div>
            </Box>
          )}
        </Flex>
      </Stack>
    </DockViewThemeprovider>
  )
}

export default DockViewApp
