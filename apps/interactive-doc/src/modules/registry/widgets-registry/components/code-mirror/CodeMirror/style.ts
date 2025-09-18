import { css } from "@emotion/react"

const getEditorWrapperBorderColor = (hasError: boolean, isFocused: boolean, isHovered: boolean): string => {
  if (hasError) {
    return "#D93025" // red-03
  }
  if (isFocused) {
    return "#1E7E34" // green-03
  }
  return isHovered ? "#6D28D9" /* techPurple-07 */ : "#E8F1F7" /* grayBlue-08 */
}

export const applyEditorWrapperStyle = (
  hasError: boolean,
  isFocused: boolean,
  editable: boolean,
  readOnly: boolean,
) => {
  const hoverStyle =
    !editable || readOnly
      ? null
      : css`
          :hover {
            border: 1px solid ${getEditorWrapperBorderColor(hasError, isFocused, true)};
            z-index: 1;
          }
        `

  return css`
    width: 100%;
    height: 100%;
    .cm-editor {
      border: 1px solid ${getEditorWrapperBorderColor(hasError, isFocused, false)};
      border-radius: ${isFocused ? "8px 8px 0px 0px" : "8px"};
      &.cm-focused {
        z-index: 1;
      }
      ${hoverStyle}
    }
  `
}
