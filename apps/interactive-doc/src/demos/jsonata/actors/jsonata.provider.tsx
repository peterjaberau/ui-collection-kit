'use client';
import React from 'react';
import { createActorContext } from '@xstate/react';
import { createMachine, spawnChild } from 'xstate';
import {
  jsonataRootMachine,
} from './jsonata.machines'

export const jsonataMachine = createMachine({
  entry: [
    spawnChild(jsonataRootMachine, { systemId: 'jsonata-root'})
  ]
})

export const JsonataContext = createActorContext(jsonataMachine);

export const JsonataProvider = ({ children }: any) => {
  return <JsonataContext.Provider>{children}</JsonataContext.Provider>;
};
