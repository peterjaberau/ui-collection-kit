// ----Update internal extension state----

/*
  Extensions Schema ---> eg. surqlTableCompletion(), surqlCustomFunctionCompletion()
 */

const extensionSchema = {
  surqlCustomFunctionCompletion: {
    dependencies: [],
    facet: {
      combine: (values: any) => values.concat(/*baseData*/),
      compare: (a: any, b: any) => a === b,
      compareInput: (a: any, b: any) => a === b,
      default: [
        {
          closeBrackets: {
            brackets: ["[", "{", '"', "'", "("],
            commentTokens: {
              line: "--",
              block: {
                open: "/\*",
                close: "*\/",
              },
            },
          },
        },
      ],
      indentOnInput: {},
      extensions: null,
      id: 158,
      type: 0,
      value: {
        autocomplete: (context: any) => ({
          "name":"CUSTOM_FUNCTION_SOURCE"
        })
      }
    },
  },
  surqlTableCompletion: {
    dependencies: [],
    facet: {
      combine: (values: any) => values.concat(/*baseData*/),
      compare: (a: any, b: any) => a === b,
      compareInput: (a: any, b: any) => a === b,
      default: [
        {
          closeBrackets: {
            brackets: ["[", "{", '"', "'", "("],
            commentTokens: {
              line: "--",
              block: {
                open: "/\*",
                close: "*\/",
              },
            },
          },
        },
      ],
      indentOnInput: {},
      extensions: null,
      id: 158,
      type: 0,
      value: {
        autocomplete: (context: any) => ({
          "name":"TABLE_SOURCE"
        })
      }
    },
  },


}

const surqlCustomFunctionCompletion = {
  CUSTOM_FUNCTION_SOURCE: ["fn::number_of_unfulfilled_orders", "fn::pound_to_usd"],
}

const editorExtensionInternal = {
  bidiCache: [],
  contentAttrs: {
    spellcheck: "false",
    autocorrect: "off",
    autocapitalize: "off",
    writingsuggestions: "false",
    translate: "no",
    contenteditable: "true",
    class: "cm-content cm-lineWrapping",
    style: "tab-size: 4;padding-bottom: 1000px",
    role: "textbox",
    "aria-multiline": "true",
    "data-language": "surrealql",
    "aria-autocomplete": "list",
  },
  destroyed: false,
}
