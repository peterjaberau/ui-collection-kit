import { HighlightStyle } from "@codemirror/language"
import { syntaxHighlighting } from "@codemirror/language"
import { tags } from "@lezer/highlight"

export const highlight = () => syntaxHighlighting(highlightStyle)

const highlightStyle = HighlightStyle.define([
  { tag: tags.function(tags.name), color: "#00f" },
  { tag: tags.variableName, color: "#f00" },
  { tag: tags.string, color: "#a11" },
  { tag: tags.number, color: "#164" },
  { tag: tags.null, color: "#708" },
  { tag: tags.bool, color: "#219" },
])
