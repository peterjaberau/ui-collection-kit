'use client'

import { useActorRef } from '@xstate/react';
import { ActorOptions, AnyActorLogic } from 'xstate';
import { appMachine } from './app.machine';
import { AppInstanceProvider } from './context';

interface AppInstanceRendererProps {
  children: React.ReactNode;
  actorOptions: ActorOptions<AnyActorLogic> | undefined | any;
}

export const AppInstanceRenderer = ({
  children,
  actorOptions,
}: AppInstanceRendererProps) => {
  const appActorRef = useActorRef(appMachine, actorOptions);
  return (
    <AppInstanceProvider value={appActorRef}>{children}</AppInstanceProvider>
  );
};
