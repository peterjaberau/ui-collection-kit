import { useActorRef } from '@xstate/react';
import { ActorOptions, AnyActorLogic } from 'xstate';
import { flowMachine } from './flow.machine';
import { FlowInstanceProvider } from './context';

interface FlowInstanceRendererProps {
  children: React.ReactNode;
  actorOptions: ActorOptions<AnyActorLogic> | undefined | any;
}

export const FlowInstanceRenderer = ({ children, actorOptions }: FlowInstanceRendererProps) => {
  const flowActorRef = useActorRef(flowMachine, actorOptions);
  return <FlowInstanceProvider value={flowActorRef}>{children}</FlowInstanceProvider>;
};

// used for node configs and not the node itself
export const NodeInstanceRenderer = ({ children }: any) => {
  return <>{children}</>;
};
