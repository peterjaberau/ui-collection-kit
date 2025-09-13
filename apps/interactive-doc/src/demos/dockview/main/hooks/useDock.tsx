import { useSelector } from "@xstate/react"
import { DockviewContext } from "../actors/dockview.provider"

export function useDock() {
  const dockRef = DockviewContext.useActorRef()
  const dockState = useSelector(dockRef, (state) => state)
  const dockContext = dockState.context
  const sendToDock = dockRef.send


  /*
    props for the DockviewReact:
    https://dockview.dev/docs/api/dockview/options

    className: '',
    debug: false,
    defaultRenderer: 'always', // 'always' | 'onlyWhenVisible'
    disableAutoResizing: false,
    disableDnd: false,
    disableFloatingGroups: false,
    disableTabsOverflowList: false,
    dndEdges: 'false',
    floatingGroupBounds: 'boundedWithinViewport',
    hideBorders: false,
    locked: false,
    noPanelsOverlay: 'watermark', //watermark, emptyGroup
    popoutUrl: null,
    scrollbars: 'native', //native, custom
    singleTabMode: 'default', //default, fullwidth

    theme: themeReplit
    components: react
    leftHeaderActionsComponent: react
    onDidDrop: event
    onReady: event
    onWillDrop: event
    prefixHeaderActionsComponent: react
    rightHeaderActionsComponent: react
    tabComponents: react
    watermarkComponent: react

   */


  return {
    dockRef,
    dockState,
    dockContext,
    sendToDock,
  }
}
