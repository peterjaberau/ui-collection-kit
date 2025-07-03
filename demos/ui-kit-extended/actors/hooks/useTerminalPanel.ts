import { useSelector } from '@xstate/react'
import { useLayoutActor } from './useLayoutActor'


export function useTerminalPanel() {
  const { getPanelActor } = useLayoutActor()
  const terminalPanelActorRef = getPanelActor({id: 'terminal'});

  const terminalPanelState: any = useSelector(terminalPanelActorRef, state => state)
  const sendToTerminalPanel = terminalPanelActorRef.send

  const fireVisibilityChange = (value: any) => sendToTerminalPanel({ type: 'visibilityChange', value })
  const firePinChange = () => sendToTerminalPanel({ type: 'pinChange' })

  const fireSizeChange = (value: any) => sendToEdgePanel({ type: "sizeChange", value });

  const isMinimized = terminalPanelState.context.props.minimized;
  const profile = terminalPanelState.context.plugin.profile;


  return {
    terminalPanelActorRef,
    terminalPanelState,
    sendToTerminalPanel,

    fireVisibilityChange,
    firePinChange,
    fireSizeChange,

    isMinimized,
    profile

    // pinned,
    // size,
    // position,
    // minSize
  }
}
