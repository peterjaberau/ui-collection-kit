import { css } from "@emotion/react"
import { defaultHighlightClassName, errorHighlightClassName } from "./extensions/heighLightJSExpression"

export const RenderCodeMirrorTheme = {
  "&.cm-editor": {
    borderRadius: "8px",
    border: `1px solid var(--color-gray-200)`,
    overflow: "hidden",
    fontFamily: "Fira Code",
  },
  "&.cm-editor .cm-scroller": {
    lineHeight: "22px",
    fontSize: "12px",
  },
  "&.cm-editor .cm-content": {
    padding: "4px 0",
  },
  "&.cm-editor .cm-line": {
    padding: "0 16px",
  },
  "&.cm-editor.cm-focused .cm-matchingBracket": {
    color: 'var(--color-green-300)',
  },
  "&.cm-editor .cm-placeholder": {
    color: 'var(--color-gray-400)',
    height: 0,
  },
  "&.cm-editor .cm-gutters .cm-gutter .cm-gutterElement": {
    padding: "0 8px 0 23px",
  },
  "&.cm-editor .cm-gutters": {
    borderRadius: "8px 0 0 8px",
    borderRight: "none",
  },
  [`.${defaultHighlightClassName}`]: {
    color: 'var(--color-green-300)',
    backgroundColor: "rgba(0, 170, 91, 0.08);",
  },
  [`.${errorHighlightClassName}`]: {
    color: 'var(--color-red-300)',
    backgroundColor: "rgba(255, 71, 71, 0.08);",
  },
}

export const renderCodeMirrorTooltipStyle = css`
  .cm-tooltip {
    &.cm-tooltip-autocomplete {
      border: none;
      > ul {
        background-color: var(--color-white-alpha-10);
        border: 1px solid var(--color-gray-800);
        box-shadow: 0 2px 16px rgba(0, 0, 0, 0.16);
        border-radius: 8px;
        font-family: "Fira Code", monospace;
        li {
          height: 24px;
          line-height: 24px;
          position: relative;
          overflow: hidden;
          &[aria-selected] {
            background-color: var(--color-purple-800);
            color: var(--color-purple-300);
          }
          .cm-completionLabel {
            font-size: 12px;
            line-height: 22px;
            position: absolute;
            left: 8px;
            top: 2px;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 100px;
            overflow: hidden;
            .cm-completionMatchedText {
              font-weight: 600;
              text-decoration: none;
            }
          }
          .cm-completionDetail {
            position: absolute;
            right: 8px;
            top: 2px;
            margin: 0;
            color: var(--color-gray-400);
            font-size: 12px;
            line-height: 22px;
            font-style: normal;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 100px;
          }
        }
      }
      .cm-completionInfo {
        padding: 4px 8px;
        background-color: var(--color-white-alpha-10);
        border: 1px solid var(--color-gray-800);
        box-shadow: 0 2px 16px rgba(0, 0, 0, 0.16);
        border-radius: 8px;
        width: 287px;
        &.cm-completionInfo-right {
          left: calc(100% + 8px);
        }
        .completionInfoCardTitle {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .cardTitle {
            width: 100%;
            font-weight: 500;
            font-size: 12px;
            line-height: 20px;
            color: var(--color-purple-300);
          }
          .openInfo {
            width: 12px;
            height: 12px;
            display: flex;
            align-items: center;
          }
        }
        .completionInfoType {
          font-size: 12px;
          color: var(--color-gray-200);
          margin: 0;
          line-height: 20px;
          word-break: break-all;
        }
        .completionInfoEvaluatesTitle {
          font-size: 12px;
          color: var(--color-gray-200);
          margin: 0;
          font-weight: 500;
          line-height: 20px;
        }
        .completionInfoDoc {
          font-size: 12px;
          color: var(--color-gray-400);
          margin: 0;
          line-height: 20px;
        }
        .evaluatesResult {
          display: inline-block;
          margin: 0;
          padding: 0 8px;
          font-size: 12px;
          line-height: 18px;
          color: var(--color-gray-200);
          background-color: var(--color-gray-900);
          position: relative;
          cursor: pointer;
          :hover {
            .evaluatesTooltips {
              visibility: visible;
            }
          }
          .evaluatesTooltips {
            visibility: hidden;
            font-family: "Fira Code", monospace;
            position: absolute;
            left: calc(100% + 4px);
            top: -50%;
            max-height: 162px;
            border-radius: 4px;
            box-shadow: 0 2px 16px rgba(0, 0, 0, 0.16);
            background-color: var(--color-gray-100);
            padding: 12px 16px;
            font-size: 14px;
            line-height: 18px;
            color: var(--color-white-alpha-10);
            white-space: pre;
            overflow-y: auto;
            cursor: auto;
          }
        }
      }
    }
  }
`
