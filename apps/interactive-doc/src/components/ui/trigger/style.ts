import { css, SerializedStyles } from "@emotion/react"
import { TriggerColorScheme, TriggerPosition } from "./interface"
import { Variants } from "framer-motion"

// static color palette (replacement for getSpecialThemeColor)
const colorSchemeMap: Record<string, string> = {
  white: "#ffffff",
  black: "#000000",
  red: "#ef4444",
  green: "#22c55e",
  blue: "#3b82f6",
  gray: "#64748b",
}

// static animation generator (replacement for getAnimation)
function buildAnimation(
  x: string,
  y: string,
  showArrow: boolean,
  isHorizontal: boolean,
): Variants {
  const offset = showArrow ? 8 : 0
  return {
    hidden: {
      opacity: 0,
      x: isHorizontal ? offset : 0,
      y: !isHorizontal ? offset : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.2 },
    },
  }
}

export function applyMotionDiv(autoAlignPopupWidth?: boolean) {
  return css`
    display: inline-flex;
    pointer-events: auto;
    width: ${autoAlignPopupWidth ? "100%" : "auto"};
  `
}

export function applyTipsText(
  colorScheme: TriggerColorScheme,
  maxWidth: string,
  withoutPadding?: boolean,
  withoutShadow?: boolean,
  autoAlignPopupWidth?: boolean,
): SerializedStyles {
  // textColor
  const textColor =
    colorScheme === "white" ? "#94a3b8" /* grayBlue-02 */ : "#ffffff" /* white-01 */

  // padding
  let padding = css`
    padding: 8px 12px;
  `
  if (withoutPadding) {
    padding = css``
  }

  // shadow
  let shadow = css`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24); /* replacement for getColorShadow(...) */
  `
  if (withoutShadow) {
    shadow = css``
  }

  // auto-align
  let align = css``
  if (autoAlignPopupWidth) {
    align = css`
      max-width: unset;
    `
  }

  // background color fallback per scheme
  const backgroundColorMap: Record<string, string> = {
    white: "#ffffff",
    black: "#000000",
    red: "#ef4444",
    green: "#22c55e",
    blue: "#3b82f6",
  }
  const backgroundColor = backgroundColorMap[colorScheme] ?? "#ffffff"

  return css`
    background-color: ${backgroundColor};
    color: ${textColor};
    box-sizing: border-box;
    text-align: left;
    max-width: ${maxWidth};
    border-radius: 8px;
    font-size: 14px;
    ${padding};
    ${shadow};
    ${align};
  `
}

export function applyTriangleStyle(
  colorScheme: TriggerColorScheme,
  position: TriggerPosition,
): SerializedStyles {
  const bgColor = colorSchemeMap[colorScheme] ?? "#ffffff"

  const mainStyle = css`
    color: ${bgColor};
  `

  let positionStyle: SerializedStyles
  switch (position) {
    case "top":
    case "bottom":
    case "left":
    case "right":
      positionStyle = css`
        align-self: center;
      `
      break
    case "top-start":
    case "bottom-start":
      positionStyle = css`
        align-self: start;
        margin-left: 12px;
      `
      break
    case "top-end":
    case "bottom-end":
      positionStyle = css`
        align-self: end;
        margin-right: 12px;
      `
      break
    case "left-start":
    case "right-start":
      positionStyle = css`
        align-self: start;
        margin-top: 12px;
      `
      break
    case "left-end":
    case "right-end":
      positionStyle = css`
        align-self: end;
        margin-bottom: 12px;
      `
      break
  }

  return css`
    ${mainStyle};
    ${positionStyle};
  `
}

export function applyAnimation(
  position: TriggerPosition,
  showArrow: boolean,
): Variants {
  const isHorizontal =
    position == "left" ||
    position == "left-start" ||
    position == "left-end" ||
    position == "right" ||
    position == "right-start" ||
    position == "right-end"
  switch (position) {
    case "top":
      return buildAnimation(`calc(50%)`, `calc(100%)`, showArrow, isHorizontal)
    case "top-start":
      return buildAnimation(`calc(12px)`, `calc(100%)`, showArrow, isHorizontal)
    case "top-end":
      return buildAnimation(
        `calc(100% - 12px)`,
        `calc(100%)`,
        showArrow,
        isHorizontal,
      )
    case "bottom":
      return buildAnimation(`calc(50%)`, `0px`, showArrow, isHorizontal)
    case "bottom-start":
      return buildAnimation(`calc(12px)`, `0px`, showArrow, isHorizontal)
    case "bottom-end":
      return buildAnimation(`calc(100% - 12px)`, `0px`, showArrow, isHorizontal)
    case "left":
      return buildAnimation(`calc(100%)`, `calc(50%)`, showArrow, isHorizontal)
    case "left-start":
      return buildAnimation(`calc(100%)`, `calc(12px)`, showArrow, isHorizontal)
    case "left-end":
      return buildAnimation(
        `calc(100%)`,
        `calc(100% - 12px)`,
        showArrow,
        isHorizontal,
      )
    case "right":
      return buildAnimation(`0px`, `calc(50%)`, showArrow, isHorizontal)
    case "right-start":
      return buildAnimation(`0px`, `calc(12px)`, showArrow, isHorizontal)
    case "right-end":
      return buildAnimation(`0px`, `calc(100% - 12px)`, showArrow, isHorizontal)
  }
}

export const applyDefaultContentSize = css`
  font-size: 14px;
`

export function applyVerticalContainer(
  autoAlignPopupWidth?: boolean,
): SerializedStyles {
  return css`
    display: inline-flex;
    flex-direction: column;
    width: ${autoAlignPopupWidth ? "100%" : "auto"};
  `
}

export function applyHorizontalContainer(
  autoAlignPopupWidth?: boolean,
): SerializedStyles {
  return css`
    display: inline-flex;
    flex-direction: row;
    width: ${autoAlignPopupWidth ? "100%" : "auto"};
  `
}
