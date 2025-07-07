'use client';
import React from 'react';
import { createActorContext } from '@xstate/react';
import { createMachine, spawnChild } from 'xstate';
import {
  sysGlobalsMachine,
  sysStylesMachine,
  sysRegistryMachine,
  sysComponentsMachine,
  sysIconsRegistryMachine
} from './system.machines'

export const systemMachine = createMachine({
  entry: [
    spawnChild(sysGlobalsMachine, { systemId: 'sys-globals' }),
    spawnChild(sysStylesMachine, { systemId: 'sys-styles' }),
    spawnChild(sysRegistryMachine, { systemId: 'sys-registry' }),
    spawnChild(sysComponentsMachine, { systemId: 'sys-components' }),
    spawnChild(sysIconsRegistryMachine, { systemId: 'sys-icons-registry' }),
  ]
})

export const SystemContext = createActorContext(systemMachine);

export const SystemProvider = ({ children }: any) => {
  return <SystemContext.Provider>{children}</SystemContext.Provider>;
};
