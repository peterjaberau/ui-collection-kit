/* eslint-disable no-unused-expressions */
import React, { useContext, useEffect, useRef, useState } from "react" // eslint-disable-line
import DragBar from "../dragbar/dragbar"
// import RemixUIPanelPlugin from '../plugins/panel-plugin'
import { PluginRecord } from "../types"
import { Container, Stack, HStack, Box } from "@chakra-ui/react"
import "./main-panel.css"
import './panel.css'
import { useLayoutActor } from "#actors/hooks/useLayoutActor"
import { useTerminalPanel } from "#actors/hooks/useTerminalPanel"

export type RemixUIMainPanelProps = {
  layout: any
}

const RenderPanelPlugin: any = ({ pluginRecord }: any, panelRef: any) => {
  const localRef = useRef<HTMLDivElement>(null)



  return (
    <div ref={panelRef || localRef} className='terminal-wrap'>
      <>{pluginRecord?.profile.name}</>
    </div>
  )
}

const RemixUIMainPanel = () => {
  // const { layout } = props
  // const { panels: plugins, isReady } = useLayoutActor();
  const { terminalPanelState, fireVisibilityChange, firePinChange, fireSizeChange, isMinimized, profile } =
    useTerminalPanel()

  const [plugins, setPlugins] = useState<any[]>([])
  const editorRef = useRef<HTMLDivElement>(null)
  const mainPanelRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const refs = [tabsRef, editorRef, mainPanelRef, terminalRef]

  const showTerminal = (hide: boolean) => {
    fireVisibilityChange(hide)
    // layout.panels.terminal.minimized = hide
    // layout.event.emit('change', layout.panels)
    // layout.emit('change', layout.panels)
  }

  const resize = (height: number) => {
    fireSizeChange(height)
    // layout.emit('resize', height)
  }

  return (
    <div className="mainview">
      <React.Fragment>
        <Stack h='100vh' w='100vw' overflow='hidden' position='relative'>
          <HStack flex='1' w='full' minH='200px'>xxx</HStack>
            {profile.name === "terminal" ? (
              <DragBar
                key="dragbar-terminal"
                onResize={resize}
                hidden={isMinimized || false}
                setHideStatus={showTerminal}
                refObject={terminalRef}
              ></DragBar>
            ) : null}
            {/*<RemixUIPanelPlugin ref={refs[i]} key={pluginRecord.profile.name} pluginRecord={pluginRecord} />*/}
            <RenderPanelPlugin ref={terminalRef} key={profile.name} pluginRecord={terminalPanelState.context.plugin} />


        </Stack>
      </React.Fragment>

      {/*{Object.values(plugins).map((pluginRecord, i) => {*/}
      {/*  return (*/}
      {/*    <React.Fragment key={`mainView${i}`}>*/}
      {/*      {pluginRecord.profile.name === 'terminal' ? (*/}
      {/*        <DragBar key="dragbar-terminal" onResize={resize} hidden={isMinimized || false} setHideStatus={showTerminal} refObject={terminalRef}></DragBar>*/}
      {/*      ) : null}*/}
      {/*      /!*<RemixUIPanelPlugin ref={refs[i]} key={pluginRecord.profile.name} pluginRecord={pluginRecord} />*!/*/}
      {/*      <RenderPanelPlugin ref={refs[i]} key={profile.name} pluginRecord={terminalPanelState.context} />*/}
      {/*    </React.Fragment>*/}
      {/*  )*/}
      {/*})}*/}
    </div>
  )
}

export default RemixUIMainPanel
