'use client';
import React from 'react';
import { createActorContext } from '@xstate/react';
import { createMachine, spawnChild } from 'xstate';
import { designerEngineMachine } from './designer.machines';

export const designerMachine = createMachine({
  entry: [spawnChild(designerEngineMachine, { systemId: 'designer-engine' })],
});

export const DesignerActorContext = createActorContext(designerMachine);

export const DesignerActorProvider = ({ children }: any) => {
  return (
    <DesignerActorContext.Provider>{children}</DesignerActorContext.Provider>
  );
};
