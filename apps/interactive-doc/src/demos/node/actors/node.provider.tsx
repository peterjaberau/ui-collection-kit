'use client';
import React from 'react';
import { createActorContext } from '@xstate/react';
import { createMachine, spawnChild } from 'xstate';
import {
  dockMachine,
} from './node.machines'

export const nodeMachine = createMachine({
  entry: [
    spawnChild(dockMachine, { systemId: 'dock'})
  ]
})

export const NodeContext = createActorContext(nodeMachine);

export const NodeProvider = ({ children }: any) => {
  return <NodeContext.Provider>{children}</NodeContext.Provider>;
};
