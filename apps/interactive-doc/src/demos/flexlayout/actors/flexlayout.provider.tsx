'use client';
import React from 'react';
import { createActorContext } from '@xstate/react';
import { createMachine, spawnChild } from 'xstate';
import { flexLayoutInstanceMachine } from './flexlayout.machines'


export const flexLayoutMachine = createMachine({
  entry: [
    spawnChild(flexLayoutInstanceMachine, { systemId: 'flex-layout-instance'})
  ]
})

export const FlexLayoutContext = createActorContext(flexLayoutMachine)

export const FlexLayoutProvider = ({ children }: any) => {
  return <FlexLayoutContext.Provider>{children}</FlexLayoutContext.Provider>
}
