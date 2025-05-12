import {
  defineAnimationStyles,
  defineConditions,
  defineGlobalStyles,
  defineKeyframes,
  defineLayerStyles,
  defineTextStyles,
  defineTokens,
} from "@chakra-ui/react"
import { scaleToken } from "./utils"

export const animations = defineTokens.animations({
  spin: { value: "spin 1s linear infinite" },
  ping: { value: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite" },
  pulse: { value: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" },
  bounce: { value: "bounce 1s infinite" },
})

export const aspectRatios = defineTokens.aspectRatios({
  square: { value: "1 / 1" },
  landscape: { value: "4 / 3" },
  portrait: { value: "3 / 4" },
  wide: { value: "16 / 9" },
  ultrawide: { value: "18 / 5" },
  golden: { value: "1.618 / 1" },
})

/*
  Blurs
*/
export const blurs = defineTokens.blurs({
  none: { value: " " },
  sm: { value: "4px" },
  md: { value: "8px" },
  lg: { value: "12px" },
  xl: { value: "16px" },
  "2xl": { value: "24px" },
  "3xl": { value: "40px" },
  "4xl": { value: "64px" },
})

/*
  Borders
*/
export const borders = defineTokens.borders({
  xs: { value: "0.5px solid" },
  sm: { value: "1px solid" },
  md: { value: "2px solid" },
  lg: { value: "4px solid" },
  xl: { value: "8px solid" },
})

/*
  Colors
*/
export const colors = defineTokens.colors({
  transparent: { value: "transparent" },
  current: { value: "currentColor" },
  black: { value: "oklch(0.05 0.030 261.692)" },
  white: { value: "oklch(1 0 0)" },
  whiteAlpha: {
    50: { value: "oklch(1 0 0 / 0.04)" },
    100: { value: "oklch(1 0 0 / 0.06)" },
    200: { value: "oklch(1 0 0 / 0.08)" },
    300: { value: "oklch(1 0 0 / 0.16)" },
    400: { value: "oklch(1 0 0 / 0.24)" },
    500: { value: "oklch(1 0 0 / 0.36)" },
    600: { value: "oklch(1 0 0 / 0.48)" },
    700: { value: "oklch(1 0 0 / 0.64)" },
    800: { value: "oklch(1 0 0 / 0.80)" },
    900: { value: "oklch(1 0 0 / 0.92)" },
    950: { value: "oklch(1 0 0 / 0.95)" },
  },
  blackAlpha: {
    50: { value: "oklch(0 0 0 / 0.04)" },
    100: { value: "oklch(0 0 0 / 0.06)" },
    200: { value: "oklch(0 0 0 / 0.08)" },
    300: { value: "oklch(0 0 0 / 0.16)" },
    400: { value: "oklch(0 0 0 / 0.24)" },
    500: { value: "oklch(0 0 0 / 0.36)" },
    600: { value: "oklch(0 0 0 / 0.48)" },
    700: { value: "oklch(0 0 0 / 0.64)" },
    800: { value: "oklch(0 0 0 / 0.80)" },
    900: { value: "oklch(0 0 0 / 0.92)" },
    950: { value: "oklch(0 0 0 / 0.95)" },
  },
  gray: {
    50: { value: "oklch(0.985 0.002 247.839)" },
    100: { value: "oklch(0.967 0.003 264.542)" },
    200: { value: "oklch(0.928 0.006 264.531)" },
    300: { value: "oklch(0.872 0.01 258.338)" },
    400: { value: "oklch(0.707 0.012 261.325)" },
    500: { value: "oklch(0.551 0.015 264.364)" },
    600: { value: "oklch(0.446 0.016 256.802)" },
    700: { value: "oklch(0.373 0.017 259.733)" },
    800: { value: "oklch(0.278 0.018 256.848)" },
    900: { value: "oklch(0.21 0.020 264.665)" },
    950: { value: "oklch(0.145 0.022 261.692)" },
  },
  zinc: {
    50: { value: "oklch(0.985 0 0)" },
    100: { value: "oklch(0.967 0.001 286.375)" },
    200: { value: "oklch(0.92 0.004 286.32)" },
    300: { value: "oklch(0.871 0.006 286.286)" },
    400: { value: "oklch(0.705 0.015 286.067)" },
    500: { value: "oklch(0.552 0.016 285.938)" },
    600: { value: "oklch(0.442 0.017 285.786)" },
    700: { value: "oklch(0.37 0.013 285.805)" },
    800: { value: "oklch(0.274 0.006 286.033)" },
    900: { value: "oklch(0.21 0.006 285.885)" },
    950: { value: "oklch(0.141 0.005 285.823)" },
  },
  neutral: {
    50: { value: "oklch(0.985 0 0)" },
    100: { value: "oklch(0.97 0 0)" },
    200: { value: "oklch(0.922 0 0)" },
    300: { value: "oklch(0.87 0 0)" },
    400: { value: "oklch(0.708 0 0)" },
    500: { value: "oklch(0.556 0 0)" },
    600: { value: "oklch(0.439 0 0)" },
    700: { value: "oklch(0.371 0 0)" },
    800: { value: "oklch(0.269 0 0)" },
    900: { value: "oklch(0.205 0 0)" },
    950: { value: "oklch(0.145 0 0)" },
  },
  stone: {
    50: { value: "oklch(0.985 0.001 106.423)" },
    100: { value: "oklch(0.97 0.001 106.424)" },
    200: { value: "oklch(0.923 0.003 48.717)" },
    300: { value: "oklch(0.869 0.005 56.366)" },
    400: { value: "oklch(0.709 0.01 56.259)" },
    500: { value: "oklch(0.553 0.013 58.071)" },
    600: { value: "oklch(0.444 0.011 73.639)" },
    700: { value: "oklch(0.374 0.01 67.558)" },
    800: { value: "oklch(0.268 0.007 34.298)" },
    900: { value: "oklch(0.216 0.006 56.043)" },
    950: { value: "oklch(0.147 0.004 49.25)" },
  },
  red: {
    50: { value: "oklch(0.971 0.013 17.38)" },
    100: { value: "oklch(0.936 0.032 17.717)" },
    200: { value: "oklch(0.885 0.062 18.334)" },
    300: { value: "oklch(0.808 0.114 19.571)" },
    400: { value: "oklch(0.704 0.191 22.216)" },
    500: { value: "oklch(0.637 0.237 25.331)" },
    600: { value: "oklch(0.577 0.245 27.325)" },
    700: { value: "oklch(0.505 0.213 27.518)" },
    800: { value: "oklch(0.444 0.177 26.899)" },
    900: { value: "oklch(0.396 0.141 25.723)" },
    950: { value: "oklch(0.258 0.092 26.042)" },
  },
  orange: {
    50: { value: "oklch(0.98 0.016 73.684)" },
    100: { value: "oklch(0.954 0.038 75.164)" },
    200: { value: "oklch(0.901 0.076 70.697)" },
    300: { value: "oklch(0.837 0.128 66.29)" },
    400: { value: "oklch(0.75 0.183 55.934)" },
    500: { value: "oklch(0.705 0.213 47.604)" },
    600: { value: "oklch(0.646 0.222 41.116)" },
    700: { value: "oklch(0.553 0.195 38.402)" },
    800: { value: "oklch(0.47 0.157 37.304)" },
    900: { value: "oklch(0.408 0.123 38.172)" },
    950: { value: "oklch(0.266 0.079 36.259)" },
  },
  amber: {
    50: { value: "oklch(0.987 0.022 95.277)" },
    100: { value: "oklch(0.962 0.059 95.617)" },
    200: { value: "oklch(0.924 0.12 95.746)" },
    300: { value: "oklch(0.879 0.169 91.605)" },
    400: { value: "oklch(0.828 0.189 84.429)" },
    500: { value: "oklch(0.769 0.188 70.08)" },
    600: { value: "oklch(0.666 0.179 58.318)" },
    700: { value: "oklch(0.555 0.163 48.998)" },
    800: { value: "oklch(0.473 0.137 46.201)" },
    900: { value: "oklch(0.414 0.112 45.904)" },
    950: { value: "oklch(0.279 0.077 45.635)" },
  },
  yellow: {
    50: { value: "oklch(0.987 0.026 102.212)" },
    100: { value: "oklch(0.973 0.071 103.193)" },
    200: { value: "oklch(0.945 0.129 101.54)" },
    300: { value: "oklch(0.897 0.182 98.111)" },
    400: { value: "oklch(0.854 0.184 96.404)" },
    500: { value: "oklch(0.795 0.180 86.047)" },
    600: { value: "oklch(0.681 0.162 75.834)" },
    700: { value: "oklch(0.554 0.135 66.442)" },
    800: { value: "oklch(0.476 0.114 61.907)" },
    900: { value: "oklch(0.421 0.095 57.708)" },
    950: { value: "oklch(0.286 0.066 53.813)" },
  },
  lime: {
    50: { value: "oklch(0.986 0.031 120.757)" },
    100: { value: "oklch(0.967 0.067 122.328)" },
    200: { value: "oklch(0.938 0.127 124.321)" },
    300: { value: "oklch(0.897 0.196 126.665)" },
    400: { value: "oklch(0.841 0.238 128.85)" },
    500: { value: "oklch(0.768 0.233 130.85)" },
    600: { value: "oklch(0.648 0.2 131.684)" },
    700: { value: "oklch(0.532 0.157 131.589)" },
    800: { value: "oklch(0.453 0.124 130.933)" },
    900: { value: "oklch(0.405 0.101 131.063)" },
    950: { value: "oklch(0.274 0.072 132.109)" },
  },
  green: {
    50: { value: "oklch(0.982 0.018 155.826)" },
    100: { value: "oklch(0.962 0.044 156.743)" },
    200: { value: "oklch(0.925 0.084 155.995)" },
    300: { value: "oklch(0.871 0.15 154.449)" },
    400: { value: "oklch(0.792 0.209 151.711)" },
    500: { value: "oklch(0.723 0.219 149.579)" },
    600: { value: "oklch(0.627 0.194 149.214)" },
    700: { value: "oklch(0.527 0.154 150.069)" },
    800: { value: "oklch(0.448 0.119 151.328)" },
    900: { value: "oklch(0.393 0.095 152.535)" },
    950: { value: "oklch(0.266 0.065 152.934)" },
  },
  emerald: {
    50: { value: "oklch(0.979 0.021 166.113)" },
    100: { value: "oklch(0.95 0.052 163.051)" },
    200: { value: "oklch(0.905 0.093 164.15)" },
    300: { value: "oklch(0.845 0.143 164.978)" },
    400: { value: "oklch(0.765 0.177 163.223)" },
    500: { value: "oklch(0.696 0.17 162.48)" },
    600: { value: "oklch(0.596 0.145 163.225)" },
    700: { value: "oklch(0.508 0.118 165.612)" },
    800: { value: "oklch(0.432 0.095 166.913)" },
    900: { value: "oklch(0.378 0.077 168.94)" },
    950: { value: "oklch(0.262 0.051 172.552)" },
  },
  teal: {
    50: { value: "oklch(0.984 0.014 180.72)" },
    100: { value: "oklch(0.953 0.051 180.801)" },
    200: { value: "oklch(0.91 0.096 180.426)" },
    300: { value: "oklch(0.855 0.138 181.071)" },
    400: { value: "oklch(0.777 0.152 181.912)" },
    500: { value: "oklch(0.704 0.14 182.503)" },
    600: { value: "oklch(0.6 0.118 184.704)" },
    700: { value: "oklch(0.511 0.096 186.391)" },
    800: { value: "oklch(0.437 0.078 188.216)" },
    900: { value: "oklch(0.386 0.063 188.416)" },
    950: { value: "oklch(0.277 0.046 192.524)" },
  },
  cyan: {
    50: { value: "oklch(0.984 0.019 200.873)" },
    100: { value: "oklch(0.956 0.045 203.388)" },
    200: { value: "oklch(0.917 0.08 205.041)" },
    300: { value: "oklch(0.865 0.127 207.078)" },
    400: { value: "oklch(0.789 0.154 211.53)" },
    500: { value: "oklch(0.715 0.143 215.221)" },
    600: { value: "oklch(0.609 0.126 221.723)" },
    700: { value: "oklch(0.52 0.105 223.128)" },
    800: { value: "oklch(0.45 0.085 224.283)" },
    900: { value: "oklch(0.398 0.07 227.392)" },
    950: { value: "oklch(0.302 0.056 229.695)" },
  },
  sky: {
    50: { value: "oklch(0.977 0.013 236.62)" },
    100: { value: "oklch(0.951 0.026 236.824)" },
    200: { value: "oklch(0.901 0.058 230.902)" },
    300: { value: "oklch(0.828 0.111 230.318)" },
    400: { value: "oklch(0.746 0.16 232.661)" },
    500: { value: "oklch(0.685 0.169 237.323)" },
    600: { value: "oklch(0.588 0.158 241.966)" },
    700: { value: "oklch(0.5 0.134 242.749)" },
    800: { value: "oklch(0.443 0.11 240.79)" },
    900: { value: "oklch(0.391 0.09 240.876)" },
    950: { value: "oklch(0.293 0.066 243.157)" },
  },
  blue: {
    50: { value: "oklch(0.97 0.014 254.604)" },
    100: { value: "oklch(0.932 0.032 255.585)" },
    200: { value: "oklch(0.882 0.059 254.128)" },
    300: { value: "oklch(0.809 0.105 251.813)" },
    400: { value: "oklch(0.707 0.165 254.624)" },
    500: { value: "oklch(0.623 0.214 259.815)" },
    600: { value: "oklch(0.546 0.245 262.881)" },
    700: { value: "oklch(0.488 0.243 264.376)" },
    800: { value: "oklch(0.424 0.199 265.638)" },
    900: { value: "oklch(0.379 0.146 265.522)" },
    950: { value: "oklch(0.282 0.091 267.935)" },
  },
  indigo: {
    50: { value: "oklch(0.962 0.018 272.314)" },
    100: { value: "oklch(0.93 0.034 272.788)" },
    200: { value: "oklch(0.87 0.065 274.039)" },
    300: { value: "oklch(0.785 0.115 274.713)" },
    400: { value: "oklch(0.673 0.182 276.935)" },
    500: { value: "oklch(0.585 0.233 277.117)" },
    600: { value: "oklch(0.511 0.262 276.966)" },
    700: { value: "oklch(0.457 0.24 277.023)" },
    800: { value: "oklch(0.398 0.195 277.366)" },
    900: { value: "oklch(0.359 0.144 278.697)" },
    950: { value: "oklch(0.257 0.09 281.288)" },
  },
  violet: {
    50: { value: "oklch(0.969 0.016 293.756)" },
    100: { value: "oklch(0.943 0.029 294.588)" },
    200: { value: "oklch(0.894 0.057 293.283)" },
    300: { value: "oklch(0.811 0.111 293.571)" },
    400: { value: "oklch(0.702 0.183 293.541)" },
    500: { value: "oklch(0.606 0.25 292.717)" },
    600: { value: "oklch(0.541 0.281 293.009)" },
    700: { value: "oklch(0.491 0.27 292.581)" },
    800: { value: "oklch(0.432 0.232 292.759)" },
    900: { value: "oklch(0.38 0.189 293.745)" },
    950: { value: "oklch(0.283 0.141 291.089)" },
  },
  purple: {
    50: { value: "oklch(0.977 0.014 308.299)" },
    100: { value: "oklch(0.946 0.033 307.174)" },
    200: { value: "oklch(0.902 0.063 306.703)" },
    300: { value: "oklch(0.827 0.119 306.383)" },
    400: { value: "oklch(0.714 0.203 305.504)" },
    500: { value: "oklch(0.627 0.265 303.9)" },
    600: { value: "oklch(0.558 0.288 302.321)" },
    700: { value: "oklch(0.496 0.265 301.924)" },
    800: { value: "oklch(0.438 0.218 303.724)" },
    900: { value: "oklch(0.381 0.176 304.987)" },
    950: { value: "oklch(0.291 0.149 302.717)" },
  },
  fuchsia: {
    50: { value: "oklch(0.977 0.017 320.058)" },
    100: { value: "oklch(0.952 0.037 318.852)" },
    200: { value: "oklch(0.903 0.076 319.62)" },
    300: { value: "oklch(0.833 0.145 321.434)" },
    400: { value: "oklch(0.74 0.238 322.16)" },
    500: { value: "oklch(0.667 0.295 322.15)" },
    600: { value: "oklch(0.591 0.293 322.896)" },
    700: { value: "oklch(0.518 0.253 323.949)" },
    800: { value: "oklch(0.452 0.211 324.591)" },
    900: { value: "oklch(0.401 0.17 325.612)" },
    950: { value: "oklch(0.293 0.136 325.661)" },
  },
  pink: {
    50: { value: "oklch(0.971 0.014 343.198)" },
    100: { value: "oklch(0.948 0.028 342.258)" },
    200: { value: "oklch(0.899 0.061 343.231)" },
    300: { value: "oklch(0.823 0.12 346.018)" },
    400: { value: "oklch(0.718 0.202 349.761)" },
    500: { value: "oklch(0.656 0.241 354.308)" },
    600: { value: "oklch(0.592 0.249 0.584)" },
    700: { value: "oklch(0.525 0.223 3.958)" },
    800: { value: "oklch(0.459 0.187 3.815)" },
    900: { value: "oklch(0.408 0.153 2.432)" },
    950: { value: "oklch(0.284 0.109 3.907)" },
  },
  rose: {
    50: { value: "oklch(0.969 0.015 12.422)" },
    100: { value: "oklch(0.941 0.03 12.58)" },
    200: { value: "oklch(0.892 0.058 10.001)" },
    300: { value: "oklch(0.81 0.117 11.638)" },
    400: { value: "oklch(0.712 0.194 13.428)" },
    500: { value: "oklch(0.645 0.246 16.439)" },
    600: { value: "oklch(0.586 0.253 17.585)" },
    700: { value: "oklch(0.514 0.222 16.935)" },
    800: { value: "oklch(0.455 0.188 13.697)" },
    900: { value: "oklch(0.41 0.159 10.272)" },
    950: { value: "oklch(0.271 0.105 12.094)" },
  },
})

/*
  Cursor
*/
export const cursor = defineTokens.cursor({
  button: { value: "pointer" },
  checkbox: { value: "default" },
  disabled: { value: "not-allowed" },
  menuitem: { value: "default" },
  option: { value: "default" },
  radio: { value: "default" },
  slider: { value: "default" },
  switch: { value: "pointer" },
})

/*
  Duration
*/
export const durations = defineTokens.durations({
  fastest: { value: "50ms" },
  faster: { value: "100ms" },
  fast: { value: "150ms" },
  moderate: { value: "200ms" },
  slow: { value: "300ms" },
  slower: { value: "400ms" },
  slowest: { value: "500ms" },
})

/*
  Easing
*/
export const easings = defineTokens.easings({
  "ease-in": { value: "cubic-bezier(0.42, 0, 1, 1)" },
  "ease-out": { value: "cubic-bezier(0, 0, 0.58, 1)" },
  "ease-in-out": { value: "cubic-bezier(0.42, 0, 0.58, 1)" },
  "ease-in-smooth": { value: "cubic-bezier(0.32, 0.72, 0, 1)" },
  "bounce-in": { value: "cubic-bezier(0.34, 1.24, 0.64, 1)" },
  "bounce-out": { value: "cubic-bezier(0.34, 1.16, 0.64, 1)" },
})

/*
  Font Size
*/
export const fontSizes = defineTokens.fontSizes({
  "2xs": { value: scaleToken("0.675rem") },
  xs: { value: scaleToken("0.75rem") },
  sm: { value: scaleToken("0.8125rem") },
  md: { value: scaleToken("0.875rem") },
  lg: { value: scaleToken("1rem") },
  xl: { value: scaleToken("1.125rem") },
  "2xl": { value: scaleToken("1.25rem") },
  "3xl": { value: scaleToken("1.5rem") },
  "4xl": { value: scaleToken("1.875rem") },
  "5xl": { value: scaleToken("2.25rem") },
  "6xl": { value: scaleToken("3rem") },
  "7xl": { value: scaleToken("3.75rem") },
  "8xl": { value: scaleToken("4.5rem") },
  "9xl": { value: scaleToken("6rem") },
})

/*
  Font Weights
*/
export const fontWeights = defineTokens.fontWeights({
  thin: { value: "100" },
  extralight: { value: "200" },
  light: { value: "300" },
  normal: { value: "400" },
  medium: { value: "500" },
  semibold: { value: "600" },
  bold: { value: "700" },
  extrabold: { value: "800" },
  black: { value: "900" },
})

/*
  Fonts
*/
const fallback = `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
export const fonts = defineTokens.fonts({
  heading: {
    value: `Inter Variable, Inter, ${fallback}`,
  },
  body: {
    value: `Inter Variable, Inter, ${fallback}`,
  },
  mono: {
    value: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },
})

/*
  Text Styles
 */
export const textStyles: any = defineTextStyles({
  '2xs': { value: { fontSize: '2xs', lineHeight: '0.75rem' } },
  xs: { value: { fontSize: 'xs', lineHeight: '1rem' } },
  sm: { value: { fontSize: 'sm', lineHeight: '1.25rem' } },
  md: { value: { fontSize: 'md', lineHeight: '1.5rem' } },
  lg: { value: { fontSize: 'lg', lineHeight: '1.75rem' } },
  xl: { value: { fontSize: 'xl', lineHeight: '1.875rem' } },
  '2xl': { value: { fontSize: '2xl', lineHeight: '2rem' } },
  '3xl': { value: { fontSize: '3xl', lineHeight: '2.375rem' } },
  '4xl': {
    value: {
      fontSize: '4xl',
      lineHeight: '2.75rem',
      letterSpacing: '-0.025em',
    },
  },
  '5xl': {
    value: {
      fontSize: '5xl',
      lineHeight: '3.75rem',
      letterSpacing: '-0.025em',
    },
  },
  '6xl': {
    value: { fontSize: '6xl', lineHeight: '4.5rem', letterSpacing: '-0.025em' },
  },
  '7xl': {
    value: {
      fontSize: '7xl',
      lineHeight: '5.75rem',
      letterSpacing: '-0.025em',
    },
  },
  none: {
    value: {},
  },
})

/*
  Key Frames
*/
export const keyframes = defineKeyframes({
  spin: {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },

  pulse: {
    "50%": { opacity: "0.5" },
  },

  ping: {
    "75%, 100%": {
      transform: "scale(2)",
      opacity: "0",
    },
  },

  bounce: {
    "0%, 100%": {
      transform: "translateY(-25%)",
      animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
    },
    "50%": {
      transform: "none",
      animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
    },
  },

  "bg-position": {
    from: { backgroundPosition: "var(--animate-from, 1rem) 0" },
    to: { backgroundPosition: "var(--animate-to, 0) 0" },
  },

  position: {
    from: {
      insetInlineStart: "var(--animate-from-x)",
      insetBlockStart: "var(--animate-from-y)",
    },
    to: {
      insetInlineStart: "var(--animate-to-x)",
      insetBlockStart: "var(--animate-to-y)",
    },
  },

  "circular-progress": {
    "0%": {
      strokeDasharray: "1, 400",
      strokeDashoffset: "0",
    },
    "50%": {
      strokeDasharray: "400, 400",
      strokeDashoffset: "-100%",
    },
    "100%": {
      strokeDasharray: "400, 400",
      strokeDashoffset: "-260%",
    },
  },

  // collapse
  "expand-height": {
    from: { height: "0" },
    to: { height: "var(--height)" },
  },
  "collapse-height": {
    from: { height: "var(--height)" },
    to: { height: "0" },
  },
  "expand-width": {
    from: { width: "0" },
    to: { width: "var(--width)" },
  },
  "collapse-width": {
    from: { height: "var(--width)" },
    to: { height: "0" },
  },

  // fade
  "fade-in": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  "fade-out": {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },

  // slide from (full)
  "slide-from-left-full": {
    from: { translate: "-100% 0" },
    to: { translate: "0 0" },
  },
  "slide-from-right-full": {
    from: { translate: "100% 0" },
    to: { translate: "0 0" },
  },
  "slide-from-top-full": {
    from: { translate: "0 -100%" },
    to: { translate: "0 0" },
  },
  "slide-from-bottom-full": {
    from: { translate: "0 100%" },
    to: { translate: "0 0" },
  },

  // slide to (full)
  "slide-to-left-full": {
    from: { translate: "0 0" },
    to: { translate: "-100% 0" },
  },
  "slide-to-right-full": {
    from: { translate: "0 0" },
    to: { translate: "100% 0" },
  },
  "slide-to-top-full": {
    from: { translate: "0 0" },
    to: { translate: "0 -100%" },
  },
  "slide-to-bottom-full": {
    from: { translate: "0 0" },
    to: { translate: "0 100%" },
  },

  // slide from
  "slide-from-top": {
    "0%": { translate: "0 -0.5rem" },
    to: { translate: "0" },
  },
  "slide-from-bottom": {
    "0%": { translate: "0 0.5rem" },
    to: { translate: "0" },
  },
  "slide-from-left": {
    "0%": { translate: "-0.5rem 0" },
    to: { translate: "0" },
  },
  "slide-from-right": {
    "0%": { translate: "0.5rem 0" },
    to: { translate: "0" },
  },

  // slide to
  "slide-to-top": {
    "0%": { translate: "0" },
    to: { translate: "0 -0.5rem" },
  },
  "slide-to-bottom": {
    "0%": { translate: "0" },
    to: { translate: "0 0.5rem" },
  },
  "slide-to-left": {
    "0%": { translate: "0" },
    to: { translate: "-0.5rem 0" },
  },
  "slide-to-right": {
    "0%": { translate: "0" },
    to: { translate: "0.5rem 0" },
  },

  // scale
  "scale-in": {
    from: { scale: "0.95" },
    to: { scale: "1" },
  },
  "scale-out": {
    from: { scale: "1" },
    to: { scale: "0.95" },
  },
})

/*
  Letter Spacing
*/
export const letterSpacings = defineTokens.letterSpacings({
  tighter: { value: "-0.05em" },
  tight: { value: "-0.025em" },
  wide: { value: "0.025em" },
  wider: { value: "0.05em" },
  widest: { value: "0.1em" },
})

/*
  Line Height
*/
export const lineHeights = defineTokens.lineHeights({
  shorter: { value: scaleToken("1.25") },
  short: { value: scaleToken("1.375") },
  moderate: { value: scaleToken("1.5") },
  tall: { value: scaleToken("1.625") },
  taller: { value: scaleToken("2") },
  "3": { value: scaleToken("0.75rem") },
  "4": { value: scaleToken("1rem") },
  "5": { value: scaleToken("1.25rem") },
  "6": { value: scaleToken("1.5rem") },
  "7": { value: scaleToken("1.75rem") },
  "8": { value: scaleToken("2rem") },
  "9": { value: scaleToken("2.25rem") },
  "10": { value: scaleToken("2.5rem") },
})

/*
  Radii
 */
export const radii = defineTokens.radii({
  '2xs': {
    value: '0.15rem',
  },
  xs: { value: '0.2rem' },
  sm: { value: '0.25rem' },
  md: { value: '0.375rem' },
  lg: { value: '0.5rem' },
  xl: { value: '0.75rem' },
  '2xl': { value: '1rem' },
  '3xl': { value: '1.5rem' },
  '4xl': { value: '2rem' },
  full: { value: '9999px' },
})

/*
  Spacing
 */
export const spacing = defineTokens.spacing({
  0.5: { value: scaleToken('0.125rem') },
  1: { value: scaleToken('0.25rem') },
  1.5: { value: scaleToken('0.375rem') },
  2: { value: scaleToken('0.5rem') },
  2.5: { value: scaleToken('0.625rem') },
  3: { value: scaleToken('0.75rem') },
  3.5: { value: scaleToken('0.875rem') },
  4: { value: scaleToken('1rem') },
  4.5: { value: scaleToken('1.125rem') },
  5: { value: scaleToken('1.25rem') },
  6: { value: scaleToken('1.5rem') },
  7: { value: scaleToken('1.75rem') },
  8: { value: scaleToken('2rem') },
  9: { value: scaleToken('2.25rem') },
  10: { value: scaleToken('2.5rem') },
  12: { value: scaleToken('3rem') },
  14: { value: scaleToken('3.5rem') },
  16: { value: scaleToken('4rem') },
  20: { value: scaleToken('5rem') },
  24: { value: scaleToken('6rem') },
  28: { value: scaleToken('7rem') },
  32: { value: scaleToken('8rem') },
  36: { value: scaleToken('9rem') },
  40: { value: scaleToken('10rem') },
  44: { value: scaleToken('11rem') },
  48: { value: scaleToken('12rem') },
  52: { value: scaleToken('13rem') },
  56: { value: scaleToken('14rem') },
  60: { value: scaleToken('15rem') },
  64: { value: scaleToken('16rem') },
  72: { value: scaleToken('18rem') },
  80: { value: scaleToken('20rem') },
  96: { value: scaleToken('24rem') },
})

/*
  Sizes
 */
const largeSizes = defineTokens.sizes({
  '3xs': { value: '14rem' },
  '2xs': { value: '16rem' },
  xs: { value: '20rem' },
  sm: { value: '24rem' },
  md: { value: '28rem' },
  lg: { value: '32rem' },
  xl: { value: '36rem' },
  '2xl': { value: '42rem' },
  '3xl': { value: '48rem' },
  '4xl': { value: '56rem' },
  '5xl': { value: '64rem' },
  '6xl': { value: '72rem' },
  '7xl': { value: '80rem' },
  '8xl': { value: '90rem' },
})

const namedSizes = defineTokens.sizes({
  max: { value: 'max-content' },
  min: { value: 'min-content' },
  fit: { value: 'fit-content' },
  prose: { value: '60ch' },
  full: { value: '100%' },
  dvh: { value: '100dvh' },
  svh: { value: '100svh' },
  lvh: { value: '100lvh' },
  dvw: { value: '100dvw' },
  svw: { value: '100svw' },
  lvw: { value: '100lvw' },
  vw: { value: '100vw' },
  vh: { value: '100vh' },
})

const fractionalSizes = defineTokens.sizes({
  '1/2': { value: '50%' },
  '1/3': { value: '33.333333%' },
  '2/3': { value: '66.666667%' },
  '1/4': { value: '25%' },
  '3/4': { value: '75%' },
  '1/5': { value: '20%' },
  '2/5': { value: '40%' },
  '3/5': { value: '60%' },
  '4/5': { value: '80%' },
  '1/6': { value: '16.666667%' },
  '2/6': { value: '33.333333%' },
  '3/6': { value: '50%' },
  '4/6': { value: '66.666667%' },
  '5/6': { value: '83.333333%' },
  '1/12': { value: '8.333333%' },
  '2/12': { value: '16.666667%' },
  '3/12': { value: '25%' },
  '4/12': { value: '33.333333%' },
  '5/12': { value: '41.666667%' },
  '6/12': { value: '50%' },
  '7/12': { value: '58.333333%' },
  '8/12': { value: '66.666667%' },
  '9/12': { value: '75%' },
  '10/12': { value: '83.333333%' },
  '11/12': { value: '91.666667%' },
})

export const sizes = defineTokens.sizes({
  ...largeSizes,
  ...spacing,
  ...fractionalSizes,
  ...namedSizes,
})

/*
 Z-index
 */
export const zIndices = defineTokens.zIndex({
  // Local elements, eg a badge of an avatar.
  'layer-1': {
    value: 1,
  },
  // Overlay elements, popovers, tooltips, menus, etc.
  'layer-2': {
    value: 10,
  },
  // Elements that should render above main content, eg a sticky header.
  'layer-3': {
    value: 100,
  },
  // Elements not part of main content, eg dialogs.
  'layer-4': {
    value: 1000,
  },

  hide: { value: -1 },
  base: { value: 0 },
  docked: { value: 10 },
  dropdown: { value: 1000 },
  sticky: { value: 1100 },
  banner: { value: 1200 },
  overlay: { value: 1300 },
  modal: { value: 1400 },
  popover: { value: 1500 },
  skipNav: { value: 1600 },
  toast: { value: 1700 },
  tooltip: { value: 1800 },
  max: { value: 2147483647 },
})

/*
  Layer Styles
 */
export const layerStyles: any = defineLayerStyles({
  // fill: some background color + color combination
  'fill.muted': {
    value: {
      background: 'colorPalette.muted',
      color: 'colorPalette.fg',
    },
  },
  'fill.subtle': {
    value: {
      background: 'colorPalette.subtle',
      color: 'colorPalette.fg',
    },
  },
  'fill.surface': {
    value: {
      background: 'colorPalette.muted',
      color: 'colorPalette.fg',
      boxShadow: 'inset 0 0 0px 1px var(--shadow-color)',
      boxShadowColor: 'colorPalette.subtle',
    },
  },
  'fill.solid': {
    value: {
      background: 'colorPalette.solid',
      color: 'colorPalette.contrast',
    },
  },

  // outline: some border color + color combination
  'outline.subtle': {
    value: {
      color: 'colorPalette.fg',
      boxShadow: 'inset 0 0 0px 1px var(--shadow-color)',
      boxShadowColor: 'colorPalette.subtle',
    },
  },
  'outline.solid': {
    value: {
      borderWidth: '1px',
      borderColor: 'colorPalette.solid',
      color: 'colorPalette.fg',
    },
  },

  // indicator: floating border color or left/bottom border
  'indicator.bottom': {
    value: {
      position: 'relative',
      '--indicator-color-fallback': 'colors.colorPalette.solid',
      _before: {
        content: `""`,
        position: 'absolute',
        bottom: 'var(--indicator-offset-y, 0)',
        insetInline: 'var(--indicator-offset-x, 0)',
        height: 'var(--indicator-thickness, 3px)',
        borderTopLeftRadius: 'var(--indicator-thickness, 3px)',
        borderTopRightRadius: 'var(--indicator-thickness, 3px)',
        background: 'var(--indicator-color, var(--indicator-color-fallback))',
      },
    },
  },
  'indicator.top': {
    value: {
      position: 'relative',
      '--indicator-color-fallback': 'colors.colorPalette.solid',
      _before: {
        content: `""`,
        position: 'absolute',
        top: 'var(--indicator-offset-y, 0)',
        insetInline: 'var(--indicator-offset-x, 0)',
        height: 'var(--indicator-thickness, 3px)',
        borderBottomLeftRadius: 'var(--indicator-thickness, 3px)',
        borderBottomRightRadius: 'var(--indicator-thickness, 3px)',
        background: 'var(--indicator-color, var(--indicator-color-fallback))',
      },
    },
  },
  'indicator.start': {
    value: {
      position: 'relative',
      '--indicator-color-fallback': 'colors.colorPalette.solid',
      _before: {
        content: `""`,
        position: 'absolute',
        insetInlineStart: 'var(--indicator-offset-x, 0)',
        insetBlock: 'var(--indicator-offset-y, 0)',
        width: 'var(--indicator-thickness, 3px)',
        borderTopLeftRadius: 'var(--indicator-thickness, 3px)',
        borderBottomLeftRadius: 'var(--indicator-thickness, 3px)',
        background: 'var(--indicator-color, var(--indicator-color-fallback))',
      },
    },
  },
  'indicator.end': {
    value: {
      position: 'relative',
      '--indicator-color-fallback': 'colors.colorPalette.solid',
      _before: {
        content: `""`,
        position: 'absolute',
        insetInlineEnd: 'var(--indicator-offset-x, 0)',
        insetBlock: 'var(--indicator-offset-y, 0)',
        width: 'var(--indicator-thickness, 3px)',
        borderTopRightRadius: 'var(--indicator-thickness, 3px)',
        borderBottomRightRadius: 'var(--indicator-thickness, 3px)',
        background: 'var(--indicator-color, var(--indicator-color-fallback))',
      },
    },
  },

  disabled: {
    value: {
      opacity: '0.5',
      cursor: 'not-allowed',
    },
  },

  none: {
    value: {},
  },

  overlay: {
    value: {
      bg: 'bg.overlay',
      backdropFilter: 'var(--overlay-effect)',
      borderRadius: 'panel.lg',
      boxShadow: 'lg',
    },
  },

  backdrop: {
    value: {
      bg: 'bg.backdrop',
      backdropFilter: 'var(--backdrop-effect)',
    },
  },
})


/*
  Global Styles
 */
const empty = 'var(--chakra-empty,/*!*/ /*!*/)'
export const globalCss = defineGlobalStyles({
  '*': {
    '--ring-inset': empty,
    '--ring-offset-width': '0px',
    '--ring-offset-color': '#fff',
    '--ring-color': 'rgba(66, 153, 225, 0.6)',
    '--ring-offset-shadow': '0 0 #0000',
    '--ring-shadow': '0 0 #0000',
    ...Object.fromEntries(
      [
        'brightness',
        'contrast',
        'grayscale',
        'hue-rotate',
        'invert',
        'saturate',
        'sepia',
        'drop-shadow',
      ].map((prop) => [`--${prop}`, empty]),
    ),
    ...Object.fromEntries(
      [
        'blur',
        'brightness',
        'contrast',
        'grayscale',
        'hue-rotate',
        'invert',
        'opacity',
        'saturate',
        'sepia',
      ].map((prop) => [`--backdrop-${prop}`, empty]),
    ),
    '--global-font-mono': 'fonts.mono',
    '--global-font-body': 'fonts.body',
    '--global-color-border': 'colors.border',
    '--cursor-button': 'default',
    '--radius-full': '9999px',
    '--scale-factor': '1',
    '--overlay-translucency': '95%',
    '--overlay-effect': 'blur({blurs.lg})',
    '--backdrop-effect': 'none',
    '--scrollbar-color': 'colors.border.emphasized',
    scrollbarWidth: 'thin',
    scrollbarColor: 'var(--scrollbar-color) transparent',
  },
  '.dark *': {
    '--overlay-translucency': '85%',
  },
  body: {
    color: 'fg',
    bg: 'bg',
    lineHeight: '1.5',
    colorPalette: 'accent',
  },
  '*::placeholder, *[data-placeholder]': {
    color: 'fg.muted/90',
  },
  '*::selection': {
    bg: 'colorPalette.solid/20',
  },
})

/*
  Conditions
 */
export const conditions = defineConditions({
  collapsible: '&:is([data-scope=collapsible])',
  groupCollapsible:
    '.group:is([data-scope=collapsible]) &, [role=group]:is([data-scope=collapsible]) &',
  groupOpen:
    '.group:is([data-state=open]) &, [role=group]:is([data-state=open]) &',
  groupFocus:
    '.group:is(:focus, [data-focus]) &, [role=group]:is(:focus, [data-focus]) &',
  groupHover:
    '.group:is(:hover, [data-hover]):not(:disabled, [data-disabled]) &, [role=group]:is(:hover, [data-hover]):not(:disabled, [data-disabled]) &',
  groupActive:
    '.group:is(:active, [data-active]):not(:disabled, [data-disabled]) &, [role=group]:is(:active, [data-active]):not(:disabled, [data-disabled]) &',
  groupFocusWithin: '.group:focus-within &, [role=group]:focus-within &',
  groupFocusVisible:
    '.group:is(:focus-visible, [data-focus-visible]) &, [role=group]:is(:focus-visible, [data-focus-visible]) &',
  groupDisabled:
    '.group:is(:disabled, [disabled], [data-disabled]) &, [role=group]:is(:disabled, [disabled], [data-disabled]) &',
  groupChecked:
    '.group:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]) &, [role=group]:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]) &',
  groupExpanded:
    '.group:is([aria-expanded=true], [data-expanded], [data-state=expanded]) &, [role=group]:is([aria-expanded=true], [data-expanded], [data-state=expanded]) &',
  groupInvalid: '.group:invalid &, [role=group]:invalid &',
  parentHover: 'button:hover &, a:hover &, [role=button]:hover &',
  pressable: '&:is(a, button, [role=button])',
  popupExpanded:
    '&:is([aria-haspopup][aria-expanded=true], [aria-haspopup][data-expanded], [aria-haspopup][data-state=expanded])',
  rowHover: 'tr:hover &, [role=row]:hover &',
})

/*
  Breakpoints
 */
export const breakpointValues = {
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}
export const breakpoints = Object.fromEntries(
  Object.entries(breakpointValues).map(([key, value]) => [key, `${value}px`]),
)

/*
  Animation Styles
 */
export const animationStyles: any = defineAnimationStyles({
  'slide-fade-in': {
    value: {
      transformOrigin: 'var(--transform-origin)',
      '&[data-placement^=top]': {
        animationName: 'slide-from-bottom, fade-in',
      },
      '&[data-placement^=bottom]': {
        animationName: 'slide-from-top, fade-in',
      },
      '&[data-placement^=left]': {
        animationName: 'slide-from-right, fade-in',
      },
      '&[data-placement^=right]': {
        animationName: 'slide-from-left, fade-in',
      },
    },
  },

  'slide-fade-out': {
    value: {
      transformOrigin: 'var(--transform-origin)',
      '&[data-placement^=top]': {
        animationName: 'slide-to-bottom, fade-out',
      },
      '&[data-placement^=bottom]': {
        animationName: 'slide-to-top, fade-out',
      },
      '&[data-placement^=left]': {
        animationName: 'slide-to-right, fade-out',
      },
      '&[data-placement^=right]': {
        animationName: 'slide-to-left, fade-out',
      },
    },
  },

  'scale-fade-in': {
    value: {
      transformOrigin: 'var(--transform-origin)',
      animationName: 'scale-in, fade-in',
    },
  },

  'scale-fade-out': {
    value: {
      transformOrigin: 'var(--transform-origin)',
      animationName: 'scale-out, fade-out',
    },
  },
})
