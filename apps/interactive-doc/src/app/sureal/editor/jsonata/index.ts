import { parser } from "./syntax.grammar"
import {
  LRLanguage,
  LanguageSupport,
  indentNodeProp,
  foldNodeProp,
  foldInside,
  delimitedIndent,
} from "@codemirror/language"
import { styleTags, tags as t } from "@lezer/highlight"
import { autoCompletionList } from "./complete"
import { highlight } from "./highlight"

export const JSONataLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        Application: delimitedIndent({ closing: ")", align: false }),
      }),
      foldNodeProp.add({
        Application: foldInside,
      }),
      styleTags({
        "True False": t.bool,
        Null: t.null,
        Number: t.number,
        String: t.string,
        ArithmeticOperator: t.arithmeticOperator,
        Operator: t.operator,
        Variable: t.variableName,
        Identifier: t.name,
        Function: t.function(t.name),
        "( )": t.paren,
        "[ ]": t.squareBracket,
        "{ }": t.brace,
      }),
    ],
  }),
  languageData: {
    commentTokens: { line: ";" },
  },
})

export function jsonata(customFunctions?: Record<string, { func: Function; signature: string }>) {
  return new LanguageSupport(JSONataLanguage, [
    highlight(),
    JSONataLanguage.data.of({
      autocomplete: autoCompletionList(customFunctions),
    }),
  ])
}

export { jsonataParseLinter } from "./lint"
export { CUSTOM_FUNCTIONS_MAP } from "./lint"
