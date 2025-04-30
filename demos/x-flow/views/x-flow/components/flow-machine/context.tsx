import type { ActorRefFrom } from 'xstate';
import { createActorReferenceContext } from './hooks';
import { flowMachine } from './flow.machine';
import { nodeMachine } from './node.machine';

export const {
  ActorRefProvider: FlowInstanceProvider,
  useActorRefContext: useFlowActorRef,
  useActorRefSelector: useFlowActorSelector,
} = createActorReferenceContext<ActorRefFrom<typeof flowMachine>>();

export const {
  ActorRefProvider: NodeRefProvider,
  useActorRefContext: useNodeRefContext,
  useActorRefSelector: useNodeRefSelector,
} = createActorReferenceContext<ActorRefFrom<typeof nodeMachine>>();
