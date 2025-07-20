'use client';
import React from 'react';
import { createActorContext } from '@xstate/react';
import { createMachine, spawnChild } from 'xstate';
import {
  sysGlobalsMachine,
  sysStylesMachine,
  sysRegistryMachine,
} from './system.machines'

export const systemMachine = createMachine({
  entry: [
    spawnChild(sysGlobalsMachine, { systemId: 'sys-globals' }),
    spawnChild(sysStylesMachine, { systemId: 'sys-styles' }),
    spawnChild(sysRegistryMachine, { systemId: 'sys-registry' }),
  ]
})

export const SystemContext = createActorContext(systemMachine);

export const SystemProvider = ({ children }: any) => {
  return <SystemContext.Provider>{children}</SystemContext.Provider>;
};
