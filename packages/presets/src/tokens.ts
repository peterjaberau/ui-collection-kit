import {
  defineTokens,
  defineGlobalStyles,
  defineKeyframes,
  defineTextStyles,
} from "@pandacss/dev"

// animations
export const animations = defineTokens.animations({
  "backdrop-in": {
    value: "fade-in 250ms {easings.emphasized-in}",
  },
  "backdrop-out": {
    value: "fade-out 200ms {easings.emphasized-out}",
  },
  "dialog-in": {
    value: "slide-in 400ms {easings.emphasized-in}",
  },
  "dialog-out": {
    value: "slide-out 200ms {easings.emphasized-out}",
  },
  "drawer-in-left": {
    value: "slide-in-left 400ms {easings.emphasized-in}",
  },
  "drawer-out-left": {
    value: "slide-out-left 200ms {easings.emphasized-out}",
  },
  "drawer-in-right": {
    value: "slide-in-right 400ms {easings.emphasized-in}",
  },
  "drawer-out-right": {
    value: "slide-out-right 200ms {easings.emphasized-out}",
  },
  "skeleton-pulse": {
    value: "skeleton-pulse 2s {easings.pulse} infinite",
  },
  "fade-in": {
    value: "fade-in 400ms {easings.emphasized-in}",
  },
  "collapse-in": {
    value: "collapse-in 250ms {easings.emphasized-in}",
  },
  "collapse-out": {
    value: "collapse-out 200ms {easings.emphasized-out}",
  },
  spin: {
    value: "spin 1s linear infinite",
  },
})

// blurs
export const blurs = defineTokens.blurs({
  sm: { value: "4px" },
  base: { value: "8px" },
  md: { value: "12px" },
  lg: { value: "16px" },
  xl: { value: "24px" },
  "2xl": { value: "40px" },
  "3xl": { value: "64px" },
})

// borders
export const borders = {
  none: { value: "none" },
}

// colors
export const colors = defineTokens.colors({
  current: { value: "currentColor" },
  black: {
    DEFAULT: { value: "#000000" },
    a1: { value: "rgba(0, 0, 0, 0.05)" },
    a2: { value: "rgba(0, 0, 0, 0.1)" },
    a3: { value: "rgba(0, 0, 0, 0.15)" },
    a4: { value: "rgba(0, 0, 0, 0.2)" },
    a5: { value: "rgba(0, 0, 0, 0.3)" },
    a6: { value: "rgba(0, 0, 0, 0.4)" },
    a7: { value: "rgba(0, 0, 0, 0.5)" },
    a8: { value: "rgba(0, 0, 0, 0.6)" },
    a9: { value: "rgba(0, 0, 0, 0.7)" },
    a10: { value: "rgba(0, 0, 0, 0.8)" },
    a11: { value: "rgba(0, 0, 0, 0.9)" },
    a12: { value: "rgba(0, 0, 0, 0.95)" },
  },
  white: {
    DEFAULT: { value: "#ffffff" },
    a1: { value: "rgba(255, 255, 255, 0.05)" },
    a2: { value: "rgba(255, 255, 255, 0.1)" },
    a3: { value: "rgba(255, 255, 255, 0.15)" },
    a4: { value: "rgba(255, 255, 255, 0.2)" },
    a5: { value: "rgba(255, 255, 255, 0.3)" },
    a6: { value: "rgba(255, 255, 255, 0.4)" },
    a7: { value: "rgba(255, 255, 255, 0.5)" },
    a8: { value: "rgba(255, 255, 255, 0.6)" },
    a9: { value: "rgba(255, 255, 255, 0.7)" },
    a10: { value: "rgba(255, 255, 255, 0.8)" },
    a11: { value: "rgba(255, 255, 255, 0.9)" },
    a12: { value: "rgba(255, 255, 255, 0.95)" },
  },
  transparent: { value: "rgb(0 0 0 / 0)" },
})

// durations
export const durations = defineTokens.durations({
  fastest: { value: "50ms" },
  faster: { value: "100ms" },
  fast: { value: "150ms" },
  normal: { value: "200ms" },
  slow: { value: "300ms" },
  slower: { value: "400ms" },
  slowest: { value: "500ms" },
})

// easings
export const easings = defineTokens.easings({
  pulse: { value: "cubic-bezier(0.4, 0.0, 0.6, 1.0)" },
  default: { value: "cubic-bezier(0.2, 0.0, 0, 1.0)" },
  "emphasized-in": { value: "cubic-bezier(0.05, 0.7, 0.1, 1.0)" },
  "emphasized-out": { value: "cubic-bezier(0.3, 0.0, 0.8, 0.15)" },
})

// radii
export const radii = defineTokens.radii({
  none: { value: "0" },
  "2xs": { value: "0.0625rem" },
  xs: { value: "0.125rem" },
  sm: { value: "0.25rem" },
  md: { value: "0.375rem" },
  lg: { value: "0.5rem" },
  xl: { value: "0.75rem" },
  "2xl": { value: "1rem" },
  "3xl": { value: "1.5rem" },
  full: { value: "9999px" },
})

// spacing
export const spacing = defineTokens.spacing({
  0: { value: "0rem" },
  0.5: { value: "0.125rem" },
  1: { value: "0.25rem" },
  1.5: { value: "0.375rem" },
  2: { value: "0.5rem" },
  2.5: { value: "0.625rem" },
  3: { value: "0.75rem" },
  3.5: { value: "0.875rem" },
  4: { value: "1rem" },
  4.5: { value: "1.125rem" },
  5: { value: "1.25rem" },
  6: { value: "1.5rem" },
  7: { value: "1.75rem" },
  8: { value: "2rem" },
  9: { value: "2.25rem" },
  10: { value: "2.5rem" },
  11: { value: "2.75rem" },
  12: { value: "3rem" },
  14: { value: "3.5rem" },
  16: { value: "4rem" },
  20: { value: "5rem" },
  24: { value: "6rem" },
  28: { value: "7rem" },
  32: { value: "8rem" },
  36: { value: "9rem" },
  40: { value: "10rem" },
  44: { value: "11rem" },
  48: { value: "12rem" },
  52: { value: "13rem" },
  56: { value: "14rem" },
  60: { value: "15rem" },
  64: { value: "16rem" },
  72: { value: "18rem" },
  80: { value: "20rem" },
  96: { value: "24rem" },
})

// sizes
const largeSizes = {
  "2xs": { value: "16rem" },
  xs: { value: "20rem" },
  sm: { value: "24rem" },
  md: { value: "28rem" },
  lg: { value: "32rem" },
  xl: { value: "36rem" },
  "2xl": { value: "42rem" },
  "3xl": { value: "48rem" },
  "4xl": { value: "56rem" },
  "5xl": { value: "64rem" },
  "6xl": { value: "72rem" },
  "7xl": { value: "80rem" },
  "8xl": { value: "90rem" },
}

export const sizes = {
  ...spacing,
  ...largeSizes,
  full: { value: "100%" },
  min: { value: "min-content" },
  max: { value: "max-content" },
  fit: { value: "fit-content" },
}

// typography
export const fontSizes = defineTokens.fontSizes({
  "2xs": { value: "0.5rem" },
  xs: { value: "0.75rem" },
  sm: { value: "0.875rem" },
  md: { value: "1rem" },
  lg: { value: "1.125rem" },
  xl: { value: "1.25rem" },
  "2xl": { value: "1.5rem" },
  "3xl": { value: "1.875rem" },
  "4xl": { value: "2.25rem" },
  "5xl": { value: "3rem" },
  "6xl": { value: "3.75rem" },
  "7xl": { value: "4.5rem" },
  "8xl": { value: "6rem" },
  "9xl": { value: "8rem" },
})

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

export const letterSpacings = defineTokens.letterSpacings({
  tighter: { value: "-0.05em" },
  tight: { value: "-0.025em" },
  normal: { value: "0em" },
  wide: { value: "0.025em" },
  wider: { value: "0.05em" },
  widest: { value: "0.1em" },
})

export const lineHeights = defineTokens.lineHeights({
  none: { value: "1" },
  tight: { value: "1.25" },
  normal: { value: "1.5" },
  relaxed: { value: "1.75" },
  loose: { value: "2" },
})

export const fonts = defineTokens.fonts({
  sans: {
    value: [
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Noto Sans"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ],
  },
  serif: {
    value: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
  },
  mono: {
    value: [
      "ui-monospace",
      "SFMono-Regular",
      "Menlo",
      "Monaco",
      "Consolas",
      '"Liberation Mono"',
      '"Courier New"',
      "monospace",
    ],
  },
})

// zIndex
export const zIndex = defineTokens.zIndex({
  hide: {
    value: -1,
  },
  base: {
    value: 0,
  },
  docked: {
    value: 10,
  },
  dropdown: {
    value: 1000,
  },
  sticky: {
    value: 1100,
  },
  banner: {
    value: 1200,
  },
  overlay: {
    value: 1300,
  },
  modal: {
    value: 1400,
  },
  popover: {
    value: 1500,
  },
  skipLink: {
    value: 1600,
  },
  toast: {
    value: 1700,
  },
  tooltip: {
    value: 1800,
  },
})

// global styles
export const globalCss = defineGlobalStyles({
  body: {
    background: "bg.canvas",
    color: "fg.default",
    _dark: {
      colorScheme: "dark",
    },
  },
  "*, *::before, *::after": {
    borderColor: "border.subtle",
    borderStyle: "solid",
    boxSizing: "border-box",
  },
  "*::placeholder": {
    opacity: 1,
    color: "fg.subtle",
  },
  "*::selection": {
    bg: "colorPalette.a3",
  },
})

// keyframes
export const keyframes = defineKeyframes({
  "fade-in": {
    from: { opacity: "0" },
    to: { opacity: "1" },
  },
  "fade-out": {
    from: { opacity: "1" },
    to: { opacity: "0" },
  },
  "slide-in": {
    "0%": { opacity: "0", transform: "translateY(64px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
  "slide-out": {
    "0%": { opacity: "1", transform: "translateY(0)" },
    "100%": { opacity: "0", transform: "translateY(64px)" },
  },
  "slide-in-left": {
    "0%": { transform: "translateX(-100%)" },
    "100%": { transform: "translateX(0%)" },
  },
  "slide-out-left": {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(-100%)" },
  },
  "slide-in-right": {
    "0%": { transform: "translateX(100%)" },
    "100%": { transform: "translateX(0%)" },
  },
  "slide-out-right": {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(100%)" },
  },
  "collapse-in": {
    "0%": { height: "0" },
    "100%": { height: "var(--height)" },
  },
  "collapse-out": {
    "0%": { height: "var(--height)" },
    "100%": { height: "0" },
  },
  fadeIn: {
    "0%": { opacity: "0", transform: "translateY(-4px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
  fadeOut: {
    "0%": { opacity: "1", transform: "translateY(0)" },
    "100%": { opacity: "0", transform: "translateY(-4px)" },
  },
  "skeleton-pulse": {
    "50%": { opacity: "0.5" },
  },
  spin: {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
})

// text styles
export const textStyles = defineTextStyles({
  xs: { value: { fontSize: "xs", lineHeight: "1.125rem" } },
  sm: { value: { fontSize: "sm", lineHeight: "1.25rem" } },
  md: { value: { fontSize: "md", lineHeight: "1.5rem" } },
  lg: { value: { fontSize: "lg", lineHeight: "1.75rem" } },
  xl: { value: { fontSize: "xl", lineHeight: "1.875rem" } },
  "2xl": { value: { fontSize: "2xl", lineHeight: "2rem" } },
  "3xl": { value: { fontSize: "3xl", lineHeight: "2.375rem" } },
  "4xl": { value: { fontSize: "4xl", lineHeight: "2.75rem", letterSpacing: "-0.02em" } },
  "5xl": { value: { fontSize: "5xl", lineHeight: "3.75rem", letterSpacing: "-0.02em" } },
  "6xl": { value: { fontSize: "6xl", lineHeight: "4.5rem", letterSpacing: "-0.02em" } },
  "7xl": { value: { fontSize: "7xl", lineHeight: "5.75rem", letterSpacing: "-0.02em" } },
})

// breakpoints
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
}


// conditions
export const conditions = {
  extend: {
    collapsed: '&:is([aria-collapsed=true], [data-collapsed], [data-state="collapsed"])',
    current: "&:is([data-current])",
    hidden: "&:is([hidden])",
    hover: ["@media (hover: hover) and (pointer: fine)", "&:is(:hover, [data-hover])"],
    indeterminate: "&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])",
    off: '&:is([data-state="off"])',
    on: '&:is([data-state="on"])',
    today: "&:is([data-today])",
    underValue: '&:is([data-state="under-value"])',
    dark: ".dark &",
    light: ":root &, .light &",
    invalid: "&:is([aria-invalid])",
  },
}

