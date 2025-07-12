import { useSelector } from "@xstate/react"
import { useSystem } from "./useSystem"

export function useNavigationSystem() {
  const { systemActorRef } = useSystem()
  const navigationSystemActorRef = systemActorRef.system.get("navigation-system")
  const navigationSystemState: any = useSelector(navigationSystemActorRef, (state) => state)
  const sendToNavigationSystem = navigationSystemActorRef.send
  const toggleVisiblity = (slotName: string) => {
    sendToNavigationSystem({
      type: 'TOGGLE_VISIBILITY_CHANGE',
      value: slotName,
    })
  }

  const isHeaderVisible =  navigationSystemState.context.header.isVisible
  const isFooterVisible =  navigationSystemState.context.footer.isVisible
  const isToolbarVisible =  navigationSystemState.context.toolbar.isVisible

  const isAsideLeftVisible =  navigationSystemState.context.asideLeft.isVisible
  const isAsideRightVisible =  navigationSystemState.context.asideRight.isVisible



  const visibleItems = {
    header: isHeaderVisible,
    footer: isFooterVisible,
    asideLeft: isAsideLeftVisible,
    asideRight: isAsideRightVisible,
    toolbar: isToolbarVisible,
  }

  const header = navigationSystemState.context.header
  const footer = navigationSystemState.context.footer
  const asideLeft = navigationSystemState.context.asideLeft
  const asideRight = navigationSystemState.context.asideRight
  const toolbar = navigationSystemState.context.toolbar
  const body = navigationSystemState.context.body

  const panelLeft = navigationSystemState.context.panelLeft
  const panelRight = navigationSystemState.context.panelRight
  const panelTop = navigationSystemState.context.panelTop
  const panelBottom = navigationSystemState.context.panelBottom


  return {
    navigationSystemActorRef,
    navigationSystemState,
    sendToNavigationSystem,
    toggleVisiblity,

    isHeaderVisible,
    isFooterVisible,
    isAsideLeftVisible,
    isAsideRightVisible,
    isToolbarVisible,

    visibleItems,

    header,
    footer,
    asideLeft,
    asideRight,
    toolbar,
    body,

    panelLeft,
    panelRight,
    panelTop,
    panelBottom,

  }
}
