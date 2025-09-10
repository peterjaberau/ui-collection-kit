'use client';
import React from 'react';
import { createActorContext } from '@xstate/react';
import { createMachine, spawnChild } from 'xstate';
import {
  dockviewRootMachine,
} from './dockview.machines'

export const dockviewMachine = createMachine({
  entry: [
    spawnChild(dockviewRootMachine, { systemId: 'dockview-root' }),
  ]
})

export const DockviewContext = createActorContext(dockviewMachine);

export const DockviewProvider = ({ children }: any) => {
  return <DockviewContext.Provider>{children}</DockviewContext.Provider>;
};
