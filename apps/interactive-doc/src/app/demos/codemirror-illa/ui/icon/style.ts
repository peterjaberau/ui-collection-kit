
export const rotateKeyframe: any = {
  from: { transform: "rotateZ(0deg)" },
  to: { transform: "rotateZ(360deg)" },
}

export const rotateAnimation: any = {
  animation: "rotate 1s linear infinite",
  "@keyframes rotate": {
    from: { transform: "rotateZ(0deg)" },
    to: { transform: "rotateZ(360deg)" },
  },
}

export const iconContainerStyle: any = {
  display: "inline-flex",
  alignItems: "center",
  fontStyle: "normal",
  lineHeight: 0,
  color: "inherit",
  textAlign: "center",
  textRendering: "optimizeLegibility",
  textTransform: "none",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  verticalAlign: "-0.125em",
}
