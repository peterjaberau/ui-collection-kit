'use client';
import React from 'react';
import { createActorContext } from '@xstate/react';
import { createMachine, spawnChild } from 'xstate';
import {
  rootMachine, globalSessionMachine, appSessionMachine, pageSessionMachine, stylingMachine,
  layoutMachine, flyoutManagerMachine
} from './machines'

export const globalMachine = createMachine({
  entry: [
    spawnChild(rootMachine, { systemId: 'root' }),
    spawnChild(stylingMachine, { systemId: 'styling' }),
    spawnChild(globalSessionMachine, { systemId: 'global-session' }),
    spawnChild(appSessionMachine, { systemId: 'app-session' }),
    spawnChild(pageSessionMachine, { systemId: 'page-session' }),

    spawnChild(layoutMachine, { systemId: 'layout' }),

    spawnChild(flyoutManagerMachine, { systemId: 'flyout-manager' }),

  ]
})

export const GlobalContext = createActorContext(globalMachine);

export const GlobalProvider = ({ children }: any) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
