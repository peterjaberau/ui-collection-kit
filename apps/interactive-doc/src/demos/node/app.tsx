"use client"
import "./styles/dock-light.css"
import {
  DockviewDefaultTab,
  DockviewReact,
  DockviewReadyEvent,
  IDockviewPanelHeaderProps,
  themeReplit,
} from "#dockview"
import React, { useEffect } from "react"

import { LeftHeaderActions, RightHeaderActions, PrefixHeaderActions } from "#nodedemo/components/dock"

import { Button,  Stack, Box, Flex } from "@chakra-ui/react"
import {
  WidgetActions,
  WidgetDomainStructure,
  WidgetMonacoEditor,
  WidgetCodeMirror
} from "#nodedemo/components/widgets"
import { useJsonataRoot } from "#demos/jsonata/actors/hooks/useJsonataRoot"

import { useDockApi, useDockPanel } from "#nodedemo/hooks"


const components = {
  default: (props: any) => {
    return (
      <div
        style={{
          height: "100%",
          overflow: "auto",
          position: "relative",
          padding: 5,
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
      </div>
    )
  },

  DomainStructurePanel: (props: any) => {
    return <WidgetDomainStructure />
  },

  ActionsPanel: (props: any) => {
    const { sendToJsonataRoot } = useJsonataRoot()

    return (
      <>
        <Button onClick={() => sendToJsonataRoot({ type: "execute" })}>Execute</Button>
        <WidgetActions />
      </>
    )
  },
  MonacoEditorPanel: (props: any) => {
    //{ test: 'example'}
    const { jsonataContext } = useJsonataRoot()
    const { params } = useDockPanel({ panelId: props.api.id })
    const [inputJson, setInputJson]: any = React.useState(jsonataContext[params?.scope])

    useEffect(() => {
      setInputJson(jsonataContext[params?.scope])
    }, [jsonataContext])

    return (
      <WidgetMonacoEditor
        id="input"
        color="blue"
        title={<>Input JSON &rarr;</>}
        subtitle="Your source JSON you want to transform."
        value={inputJson}
        onChange={(value: any) => {
          try {
            const input = value ? JSON.parse(value) : null
            setInputJson(input)
            // if (input) {
            //   validateTransformersEditor({ input }).catch(() => {})
            // }
          } catch (error) {}
        }}
        renderEditorWhenEmpty
      />
    )
  },
  CodeMirrorPanel: (props: any) => {
    //{ test: 'example'}
    const { jsonataContext, sendToJsonataRoot } = useJsonataRoot()
    const { params } = useDockPanel({ panelId: props.api.id })
    const [inputJson, setInputJson]: any = React.useState(jsonataContext[params?.scope])

    useEffect(() => {
      setInputJson(jsonataContext[params?.scope])
    }, [jsonataContext])

    return (
      <WidgetCodeMirror
        id="input-mirror"
        code={inputJson}
        setCode={(code: any) => {
          try {
            const input = code ? JSON.parse(code) : null
            setInputJson(input)
            console.log('WidgetCodeMirror-----', { scope: params?.scope, input})
            // sendToJsonataRoot({ scope: params?.scope, value: input})
            // if (input) {
            //   validateTransformersEditor({ input }).catch(() => {})
            // }
          } catch (error) {}
        }}
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

const NodeApp = (props: { theme?: string }) => {
  const { sendToDockApi, api, extras } = useDockApi()
  const [showLogs, setShowLogs] = React.useState<boolean>(false)
  const [debug, setDebug] = React.useState<boolean>(false)

  const onReady = (event: DockviewReadyEvent) => {
    sendToDockApi({ type: "onReady", api: event.api })
  }

  return (
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
            <DockviewReact
              components={components}
              defaultTabComponent={headerComponents.default}
              rightHeaderActionsComponent={RightHeaderActions}
              leftHeaderActionsComponent={LeftHeaderActions}
              prefixHeaderActionsComponent={PrefixHeaderActions}
              onReady={onReady}
              theme={themeReplit}
            />
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
  )
}

export default NodeApp
