import { Prec } from "@codemirror/state"
import { type EditorView, keymap } from "@codemirror/view"
import { Badge, Group } from "@mantine/core"
import { surrealql } from "@surrealdb/codemirror"
import { Value } from "@surrealdb/ql-wasm"
import { useEffect, useMemo, useState } from "react"
import { type HtmlPortalNode, OutPortal } from "react-reverse-portal"
import { decodeCbor } from "surrealdb"
import { ActionButton } from "~/components/ActionButton"
import { CodeEditor } from "~/components/CodeEditor"
import { Icon } from "~/components/Icon"
import { ContentPane } from "~/components/Pane"
import { runQueryKeymap, surqlLinting } from "~/editor"
import { queryEditorField, setQueryEditor } from "~/editor/query"
import { useActiveQuery } from "~/hooks/connection"
import { useDebouncedFunction } from "~/hooks/debounce"
import { useConnectionAndView } from "~/hooks/routing"
import { useStable } from "~/hooks/stable"
import { useConfigStore } from "~/stores/config"
import { iconClose, iconDollar, iconReset } from "~/util/icons"

export interface VariablesPaneProps {
  isValid: boolean
  switchPortal?: HtmlPortalNode<any>
  corners?: string
  lineNumbers: boolean
  editor: EditorView
  setIsValid: (isValid: boolean) => void
  closeVariables: () => void
}

export function VariablesWidget({
  isValid,
  switchPortal,
  corners,
  lineNumbers,
  editor,
  setIsValid,
  closeVariables  const [variableEditor, setVariableEditor] = useState<EditorView | null>(null)

                                  const setVariables = useDebouncedFunction((content: string | undefined) => {
                                    const json = content || ""

                                    try {
                                      const parsed = decodeCbor(Value.from_string(json).to_cbor().buffer)

                                      if (typeof parsed !== "object" || Array.isArray(parsed)) {
                                        throw new TypeError("Must be object")
                                      }

                                      setIsValid(true)
                                    } catch {
                                      setIsValid(false)
                                    }
                                  }, 50)

                                  const clearVariables = useStable(() => {
                                    setVariables("{}")
                                  })

                                  useEffect(() => {
  if (variableEditor && editor) {
    // setQueryEditor(variableEditor, editor);
  }
}, [variableEditor, editor])

const extensions = useMemo(
  () => [surrealql(), surqlLinting(), queryEditorField, Prec.high(keymap.of(runQueryKeymap))],
  [],
)

return (
  <CodeEditor
    value={activeTab?.variables || ""}
    onChange={setVariables}
    onMount={setVariableEditor}
    lineNumbers={lineNumbers}
    extensions={extensions}
  />
)
  ,
}: VariablesPaneProps) {
  const [variableEditor, setVariableEditor] = useState<EditorView | null>(null)

  const setVariables = useDebouncedFunction((content: string | undefined) => {
    const json = content || ""

    try {
      const parsed = decodeCbor(Value.from_string(json).to_cbor().buffer)

      if (typeof parsed !== "object" || Array.isArray(parsed)) {
        throw new TypeError("Must be object")
      }

      setIsValid(true)
    } catch {
      setIsValid(false)
    }
  }, 50)

  const clearVariables = useStable(() => {
    setVariables("{}")
  })

  useEffect(() => {
    if (variableEditor && editor) {
      // setQueryEditor(variableEditor, editor);
    }
  }, [variableEditor, editor])

  const extensions = useMemo(
    () => [surrealql(), surqlLinting(), queryEditorField, Prec.high(keymap.of(runQueryKeymap))],
    [],
  )

  return (
    <CodeEditor
      value={activeTab?.variables || ""}
      onChange={setVariables}
      onMount={setVariableEditor}
      lineNumbers={lineNumbers}
      extensions={extensions}
    />
  )
}
