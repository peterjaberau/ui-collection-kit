import { type SemanticTokens, definePreset } from '@pandacss/dev'
import red from '../colors/red'
import type { PresetOptions } from './options'
import { recipes, slotRecipes } from '../recipes'
import { semanticTokens } from '../semantic-tokens'
import * as tokens from '../tokens'
import { createRadii } from './create-radii'

export const createPreset = (options: PresetOptions) => {
  const { accentColor, grayColor, radius } = options

  const standardizeGrayTokens = (tokens: SemanticTokens['colors']) =>
    JSON.parse(JSON.stringify(tokens).replace(new RegExp(grayColor.name, 'g'), 'gray'))

  return definePreset({
    name: '@ui-collection-kit/presets',
    presets: ['@pandacss/preset-base'],
    ...tokens.conditions,
    globalCss: {
      ...tokens.globalCss,
      html: {
        colorPalette: accentColor.name,
      },
    },
    theme: {
      extend: {
        ...tokens.breakpoints,
        ...tokens.keyframes,
        recipes,
        slotRecipes,
        ...tokens.textStyles,
        tokens: {
          ...tokens,
          colors: {
            ...tokens.colors,
            red: red.tokens,
            gray: grayColor.tokens ?? {},
            [accentColor.name]: accentColor.tokens,
          },
        },
        semanticTokens: {
          ...semanticTokens,
          colors: {
            ...semanticTokens.colors,
            red: red.semanticTokens,
            gray: standardizeGrayTokens(grayColor.semanticTokens),
            [accentColor.name]: accentColor.semanticTokens,
          },
          radii: createRadii(radius),
        },
      },
    },
  })
}
