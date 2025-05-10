import type { ActorRefFrom } from 'xstate';
import { createActorReferenceContext } from './hooks';
import { appMachine } from './app.machine';

export const {
  ActorRefProvider: AppInstanceProvider,
  useActorRefContext: useAppActorRef,
  useActorRefSelector: useAppActorSelector,
} = createActorReferenceContext<ActorRefFrom<typeof appMachine>>();

