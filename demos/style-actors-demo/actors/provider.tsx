'use client';
import React from 'react';
import { createActorContext } from '@xstate/react';
import { createMachine, spawnChild } from 'xstate';
import { rootMachine, globalSessionMachine, appSessionMachine, pageSessionMachine, stylingMachine } from './machines'
import { appRootMachine } from '#components/ui-app/app-root/actors/machines'

export const globalMachine = createMachine({
  entry: [
    spawnChild(rootMachine, { systemId: 'root' }),
    spawnChild(stylingMachine, { systemId: 'styling' }),
    spawnChild(globalSessionMachine, { systemId: 'global-session' }),
    spawnChild(appSessionMachine, { systemId: 'app-session' }),
    spawnChild(pageSessionMachine, { systemId: 'page-session' }),

    spawnChild(appRootMachine, { systemId: 'app-root' }),
  ]
})

export const GlobalContext = createActorContext(globalMachine);

export const GlobalProvider = ({ children }: any) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
