'use client';
import React from 'react';
import { createActorContext } from '@xstate/react';
import { createMachine, spawnChild } from 'xstate';
import { stylingMachine } from './machines'

export const globalMachine = createMachine({
  entry: [
    spawnChild(stylingMachine, { systemId: 'styling' }),
  ]
})

export const GlobalContext = createActorContext(globalMachine);

export const GlobalProvider = ({ children }: any) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
