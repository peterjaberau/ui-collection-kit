import { useSelector } from "@xstate/react"
import { useSidePanels } from "./useSidePanels"
import { SystemContext } from "../system.provider"


export function useSidePanel(actorId: any) {
  const { getSidePanelActorRef, sidePanelsState } = useSidePanels();

  const sidePanelActorRef = getSidePanelActorRef(actorId);

  const sidePanelState: any = useSelector(sidePanelActorRef, (state) => state);

  const isInstance = !!sidePanelActorRef;
  const isReady = isInstance && sidePanelState.matches('idle');

  const sidePanelId: any = sidePanelState?.context.id;
  const sidePanelContent: any =  sidePanelState?.context.content;

  const sendToSidePanel = sidePanelActorRef?.send;

  const onExpandChange = ({ expand }) => {
    sendToSidePanel({
      type: 'onExpandChange',
      value: expand,
    });
  };

  const onPin = () => {
    sendToSidePanel({
      type: 'onPin',
    });
  };

  const onExpand = () => {
    sendToSidePanel({
      type: 'onExpand',
    });
  };

  console.log('sidePanelState', {
    isInstance: isInstance,
    sidePanelState: sidePanelState,
    sidePanelsState: sidePanelsState,
    sidePanelActorRef: sidePanelActorRef
  });


  return {
    sidePanelActorRef,
    sidePanelState,
    sendToSidePanel,

    sidePanelId,
    sidePanelContent,

    onExpandChange,
    onPin,
    onExpand,

    isInstance,
    isReady
  };
}
