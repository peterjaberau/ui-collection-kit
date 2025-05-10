'use client'

import { assertEvent, assign, setup } from 'xstate';
import { create } from 'mutative';

export const appMachine = setup({
  types: {
    events: {} as any,
    context: {} as any,
  } as any,
  actions: {
    initTheme: assign(({ context }) => {

    }),
    setTheme: assign(({ context, event }) => {
      assertEvent(event, 'set.theme');
    }),
    setThemeOverrides: assign(({ context, event }) => {
      assertEvent(event, 'set.theme.overrides');
    }),
  },
  actors: {},
}).createMachine({
  id: 'app-machine',
  initial: 'idle',
  context: {
    configOptions: {},
    theme: {
      activeThemeName: null,
      activeTheme: null,
      activeThemeOverrides: {
        accentColor: null,
        fontFamily: null,
        radius: null,
      },
    },
  },
  states: {
    idle: {
      always: {
        target: 'ready',
        actions: ['initTheme'],
      },
      target: 'ready',
    },
    ready: {
      on: {
        'set.theme': {
          actions: ['setTheme'],
        },
        'set.theme.overrides': {
          actions: ['setThemeOverrides'],
        },
      },
    },
  },
});
