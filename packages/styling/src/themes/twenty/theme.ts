import { defineConfig } from "@chakra-ui/react"

import {
  animationStyles,
  breakpoints,
  conditions,
  globalCss,
  layerStyles,
  textStyles,
  animations,
  aspectRatios,
  blurs,
  borders,
  colors,
  cursor,
  durations,
  easings,
  fontSizes,
  fontWeights,
  fonts,
  keyframes,
  letterSpacings,
  lineHeights,
  radii,
  sizes,
  spacing,
  zIndices,
} from "./tokens"

import { recipes, slotRecipes } from "./recipes"
import { semanticColors, semanticRadii, semanticShadows } from "./semantic-tokens"

import { utilities } from "../../utils"

export const defaultThemeConfig = defineConfig({
  preflight: true,
  cssVarsPrefix: "chakra",
  cssVarsRoot: ":where(html, .chakra-theme)",
  globalCss: globalCss,
  utilities: utilities,
  theme: {
    breakpoints: breakpoints,
    keyframes: keyframes,
    tokens: {
      animations,
      aspectRatios,
      blurs,
      borders,
      colors,
      durations,
      easings,
      fonts,
      fontSizes,
      fontWeights,
      letterSpacings,
      lineHeights,
      radii,
      spacing,
      sizes,
      zIndex: zIndices,
      cursor,
    },
    semanticTokens: {
      colors: semanticColors,
      radii: semanticRadii,
      shadows: semanticShadows,
    },
    recipes: recipes,
    slotRecipes: slotRecipes,
    textStyles: textStyles,
    layerStyles: layerStyles,
    animationStyles: animationStyles,
  },
  conditions,
})
