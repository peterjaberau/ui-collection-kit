'use client';
import React from 'react';
import { createActorContext } from '@xstate/react';
import { createMachine, spawnChild } from 'xstate';
import {
  dockviewApiMachine,
} from './dockview.machines'

export const dockviewMachine = createMachine({
  entry: [
    spawnChild(dockviewApiMachine, { systemId: 'dockview-api'})
  ]
})

export const DockviewContext = createActorContext(dockviewMachine);

export const DockviewProvider = ({ children }: any) => {
  return <DockviewContext.Provider>{children}</DockviewContext.Provider>;
};
