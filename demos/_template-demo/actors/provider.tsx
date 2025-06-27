'use client';
import React from 'react';
import { createActorContext } from '@xstate/react';
import { createMachine, spawnChild } from 'xstate';
import { rootMachine, globalSessionMachine, appSessionMachine, pageSessionMachine } from './machines'

export const globalMachine = createMachine({
  entry: [
    spawnChild(rootMachine, { systemId: 'root' }),
    spawnChild(globalSessionMachine, { systemId: 'global-session' }),
    spawnChild(appSessionMachine, { systemId: 'app-session' }),
    spawnChild(pageSessionMachine, { systemId: 'page-session' }),
  ]
})

export const GlobalContext = createActorContext(globalMachine);

export const GlobalProvider = ({ children }: any) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
