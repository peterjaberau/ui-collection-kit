import { defineSemanticTokens } from '@pandacss/dev'

export const colors = defineSemanticTokens.colors({
  bg: {
    canvas: { value: { _light: '{colors.gray.1}', _dark: '{colors.gray.1}' } },
    default: { value: { _light: 'white', _dark: '{colors.gray.2}' } },
    subtle: { value: { _light: '{colors.gray.2}', _dark: '{colors.gray.3}' } },
    muted: { value: { _light: '{colors.gray.3}', _dark: '{colors.gray.4}' } },
    emphasized: { value: { _light: '{colors.gray.4}', _dark: '{colors.gray.5}' } },
    disabled: { value: { _light: '{colors.gray.5}', _dark: '{colors.gray.6}' } },
  },
  fg: {
    default: { value: { _light: '{colors.gray.12}', _dark: '{colors.gray.12}' } },
    muted: { value: { _light: '{colors.gray.11}', _dark: '{colors.gray.11}' } },
    subtle: { value: { _light: '{colors.gray.10}', _dark: '{colors.gray.10}' } },
    disabled: { value: { _light: '{colors.gray.9}', _dark: '{colors.gray.9}' } },
    error: { value: { _light: '{colors.red.9}', _dark: '{colors.red.9}' } },
  },
  border: {
    default: { value: { _light: '{colors.gray.7}', _dark: '{colors.gray.7}' } },
    muted: { value: { _light: '{colors.gray.6}', _dark: '{colors.gray.6}' } },
    subtle: { value: { _light: '{colors.gray.4}', _dark: '{colors.gray.4}' } },
    disabled: { value: { _light: '{colors.gray.5}', _dark: '{colors.gray.5}' } },
    outline: { value: { _light: '{colors.gray.a9}', _dark: '{colors.gray.a9}' } },
    error: { value: { _light: '{colors.red.9}', _dark: '{colors.red.9}' } },
  },
})

export const radii = defineSemanticTokens.radii({
  l1: { value: '{radii.xs}' },
  l2: { value: '{radii.sm}' },
  l3: { value: '{radii.md}' },
})

export const shadows = defineSemanticTokens.shadows({
  xs: {
    value: {
      _light: '0px 1px 2px {colors.gray.a5}, 0px 0px 1px {colors.gray.a7}',
      _dark: '0px 1px 1px {colors.black.a12}, 0px 0px 1px inset {colors.gray.a7}',
    },
  },
  sm: {
    value: {
      _light: '0px 2px 4px {colors.gray.a3}, 0px 0px 1px {colors.gray.a7}',
      _dark: '0px 2px 4px {colors.black.a10}, 0px 0px 1px inset {colors.gray.a7}',
    },
  },
  md: {
    value: {
      _light: '0px 4px 8px {colors.gray.a3}, 0px 0px 1px {colors.gray.a7}',
      _dark: '0px 4px 8px {colors.black.a10}, 0px 0px 1px inset {colors.gray.a7}',
    },
  },
  lg: {
    value: {
      _light: '0px 8px 16px {colors.gray.a3}, 0px 0px 1px {colors.gray.a7}',
      _dark: '0px 8px 16px {colors.black.a10}, 0px 0px 1px inset {colors.gray.a7}',
    },
  },
  xl: {
    value: {
      _light: '0px 16px 24px {colors.gray.a3}, 0px 0px 1px {colors.gray.a7}',
      _dark: '0px 16px 24px {colors.black.a10}, 0px 0px 1px inset {colors.gray.a7}',
    },
  },
  '2xl': {
    value: {
      _light: '0px 24px 40px {colors.gray.a3}, 0px 0px 1px {colors.gray.a7}',
      _dark: '0px 24px 40px {colors.black.a10}, 0px 0px 1px inset {colors.gray.a7}',
    },
  },
})

export const semanticTokens = defineSemanticTokens({
  colors,
  shadows,
})
