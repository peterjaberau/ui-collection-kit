import { defineSlotRecipe } from '@chakra-ui/react/styled-system'

export const splitterSlotRecipe = defineSlotRecipe({
  className: 'splitter',
  slots: ["root", "panel", "resizeTrigger"],
  base: {
    root: {
      flex: '1',
    },
    panel: {
      display: 'flex',
      alignItems: 'stretch',
    },
    resizeTrigger: {
      '&:not([data-disabled])': {
        background: 'border.default',
        position: 'relative',
        outline: '0',

        opacity: { _before: 0, _hover: { _before: 1 } },

        _before: {
          content: "''",
          transition: ' opacity .4s',
          bg: '#7d7d7d1a',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 4,
        },

        _vertical: {
          minHeight: '1px',
          _before: { top: '-6px', bottom: '-6px', w: 'full' },
        },

        _horizontal: {
          minWidth: '1px',
          _before: { left: '-10px', h: 'full' },
        },

        '&[hidden]': {
          display: 'none',
        },
      },
    },
  },
})

/*
https://github.com/astahmer/lightningcss-ast-viewer/blob/6b506c09bf0360924b6f1309990d4fcc5ccdf102/theme/splitter.recipe.ts
export const splitterRecipe = defineSlotRecipe({
  className: 'splitter',
  description: 'A splitter style',
  slots: splitterAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      gap: '2',
    },
    panel: {
      borderWidth: '1px',
      background: 'bg.subtle',
      borderRadius: 'l2',
      color: 'fg.muted',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    resizeTrigger: {
      borderRadius: 'full',
      transitionDuration: 'normal',
      transitionProperty: 'background',
      transitionTimingFunction: 'default',
      outline: '0',
      background: 'bg.muted',
      _hover: {
        background: 'bg.emphasized',
      },
      _active: {
        background: 'bg.emphasized',
      },
      _horizontal: {
        minWidth: '6px',
        margin: 'min(1rem, 20%) 0',
      },
      _vertical: {
        minHeight: '6px',
        margin: '0 min(1rem, 20%)',
      },
    },
  },
})


 */


/*

import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { Splitter } from '@ark-ui/react'

export default Pluco(Splitter, {
  Root: cva({
    base: {
      display: 'flex',
      gap: '2',
    },
  }),
  Panel: cva({
    base: {
      borderWidth: '1px',
      borderColor: 'border',
      bg: 'bg.surface',
      rounded: 'md',
      color: 'fg',
      display: 'flex',
      align: 'center',
      justify: 'center',
    },
  }),
  ResizeTrigger: cva({
    base: {
      rounded: 'full',
      outline: '0',
      background: 'border',

      transitionDuration: 'normal',
      transitionProperty: 'background',
      transitionTimingFunction: 'default',

      _horizontal: {
        minWidth: '1.5',
        margin: 'min(1rem, 20%) 0',
      },
      _vertical: {
        minHeight: '1.5',
        margin: '0 min(1rem, 20%)',
      },
    },
  }),
})
 */
