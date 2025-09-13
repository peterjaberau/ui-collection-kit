'use client';
import React from 'react';
import { createActorContext } from '@xstate/react';
import { createMachine, spawnChild } from 'xstate';
import {
  blueprintRootMachine,
} from './blueprint.machines'

export const blueprintMachine = createMachine({
  entry: [
    spawnChild(blueprintRootMachine, { systemId: 'blueprint-root'})
  ]
})

export const BlueprintContext = createActorContext(blueprintMachine);

export const BlueprintProvider = ({ children }: any) => {
  return <BlueprintContext.Provider>{children}</BlueprintContext.Provider>;
};
