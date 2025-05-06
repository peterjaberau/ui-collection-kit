'use client'

import { assertEvent, assign, setup } from 'xstate';
import { create } from 'mutative';
import { configOptions, getThemeConfigFromOptions } from "./configOptions"

export const appMachine = setup({
  types: {
    events: {} as any,
    context: {} as any,
  } as any,
  actions: {
    initTheme: assign(({ context }) => {
      const defaultName = 'system'
      const defaultTheme = getThemeConfigFromOptions({
        scope: 'theme',
        name: defaultName,
      });

      return create(context, (draft) => {
        draft.theme.activeThemeName = defaultName;
        draft.theme.activeTheme = {
          ...context.theme.activeTheme,
          ...defaultTheme,
        };
      });
    }),
    setTheme: assign(({ context, event }) => {
      assertEvent(event, 'set.theme');

      console.log(event);

      const scope = event.payload.scope || 'theme';
      const name = event.payload.name || 'system';

      const scopedTheme = getThemeConfigFromOptions({
        scope: scope,
        name: name,
      });

      console.log({
        scopedTheme: scopedTheme
      })


      return create(context, (draft) => {
        draft.theme.activeThemeName = name;
        draft.theme.activeTheme = scopedTheme;
      });
    }),
    setThemeOverrides: assign(({ context, event }) => {
      assertEvent(event, 'set.theme.overrides');

      const accentColor = event.payload.accentColor;
      const fontFamily = event.payload.fontFamily || '--font-inter';
      const radius = event.payload.radius || 'sm';

      return create(context, (draft) => {
        draft.theme.activeThemeOverrides = {
          accentColor: accentColor,
          fontFamily: fontFamily,
          radius: radius,
        };
      });
    }),
  },
  actors: {},
}).createMachine({
  id: 'app-machine',
  initial: 'idle',
  context: {
    configOptions: configOptions,
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
