import { css } from "@emotion/react"

export const applyEditorWrapperStyle = (editable: boolean) => css`
  width: 100%;
  height: 100%;
  .cm-editor {
    border: ${editable ? `1px solid var(--color-gray-800)` : "none"};
    border-radius: 8px;
    transition: 0.2s ease-in-out;
    transition-property: border;
    &.cm-focused {
      z-index: 1;
      border: 1px solid var(--color-gray-300)} !important;
    }
    .cm-line {
      padding: 0 ${editable ? "16px" : "0"};
    }
    :hover {
      border: ${editable
        ? `1px solid var(--color-purple-700)`
        : "none"};
    }
  }
`
