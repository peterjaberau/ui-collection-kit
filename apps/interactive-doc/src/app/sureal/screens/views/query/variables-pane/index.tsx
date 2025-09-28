"use client"
import { Prec } from "@codemirror/state"
import { surrealql } from "@surrealdb/codemirror"
import { type EditorView, keymap } from "@codemirror/view"
import { Box, Icon, IconButton, CloseButton, Button, HStack, Badge } from "@chakra-ui/react"
import { Pane } from "#app/sureal/components/pane"
import { type HtmlPortalNode, OutPortal } from "react-reverse-portal"
import { CodeEditor } from "#app/sureal/components/code-editor"
import { runQueryKeymap, surqlLinting } from "#app/sureal/editor"
import { queryEditorField, setQueryEditor } from "#app/sureal/editor/query"
import { useDebouncedFunction } from "#app/sureal/hooks/debounce"
import { useStable } from "#app/sureal/hooks/stable"
import { RiResetLeftFill as IconReset } from "react-icons/ri"
import { LuX as IconClose, LuDollarSign as IconDollar } from "react-icons/lu"
import { useDatabaseVersionLinter } from "#app/sureal/hooks/editor"
import { surqlTableCompletion } from "#app/sureal/editor/tables"
import { useCodeEditorStore } from "#app/sureal/store/code-editor"
import { useEffect, useMemo, useState } from "react"
import { useConfigStore } from "#app/sureal/store/config"
import { useDatabaseStore } from "#app/sureal/store/database"
import { autoCompleteExtension } from "#app/sureal/editor/autoCompletionExtension"
import { jsonata }  from "#app/sureal/editor/jsonata"
import { useBuilderStore } from "#app/sureal/store/builder"


export interface VariablesPaneProps {
  editor: EditorView
  isValid: boolean
  switchPortal?: HtmlPortalNode<any>
  lineNumbers: boolean
  setIsValid: (isValid: boolean) => void
  closeVariables: () => void
}

export function VariablesPane({
  isValid,
  switchPortal,
  lineNumbers,
  editor,
  setIsValid,
  closeVariables,
}: VariablesPaneProps) {
  const [snapshot, store] = useCodeEditorStore()
  const configStoreRef: any = useConfigStore()

  const [databaseContext, databaseRef]: any = useDatabaseStore((s: any) => s)
  const [builderContext, builderRef]: any = useBuilderStore((s: any) => s)

  const [variableEditor, setVariableEditor] = useState<EditorView | null>(null)
  const surqlVersion = useDatabaseVersionLinter(variableEditor)

  const setVariables = useDebouncedFunction((content: string | undefined) => {
    const json = content || ""

    store.trigger.setVariables({ value: json })

    try {
      const parsed = JSON.parse(json)
      if (typeof parsed !== "object" || Array.isArray(parsed)) {
        throw new TypeError("Must be object")
      }

      setIsValid(true)

      // store.trigger.setVariablesValid(true)
    } catch {
      setIsValid(false)
      // store.trigger.setVariablesValid(false)
    }
  }, 50)

  const clearVariables = useStable(() => {
    store.trigger.setVariables("{}")
  })

  // useEffect(() => {
  //   if (variableEditor && editor) {
  //     setQueryEditor(variableEditor, editor);
  //   }
  // }, [variableEditor, editor])
  //
  // const extensions = useMemo(
  //   () => [surrealql(), surqlLinting(), queryEditorField, Prec.high(keymap.of(runQueryKeymap))],
  //   [],
  // );

  const extensions = useMemo(
    () => [
      surrealql(),
      // surqlVersion,
      surqlLinting(null as any, configStoreRef?.snapshot as any),
      surqlTableCompletion({...databaseContext} as any),
      autoCompleteExtension({...databaseContext} as any),
      // jsonata(),

      queryEditorField,
      Prec.high(keymap.of(runQueryKeymap)),
    ],
    [],
  )

  return (
    <Pane
      title={"Variables"}
      icon={<IconDollar />}
      infoSection={"info"}
      rightSection={
        <>
          {!isValid && <Badge colorPalette="red">Invalid syntax</Badge>}
          <IconButton size={"sm"} variant={"ghost"} onClick={clearVariables}>
            <IconReset />
          </IconButton>
          <IconButton size={"sm"} variant={"ghost"} onClick={closeVariables}>
            <IconClose />
          </IconButton>
        </>
      }
    >
      <CodeEditor
        inset={0}
        autoFocus
        value={snapshot.context?.variables || ""}
        onChange={setVariables}
        onMount={setVariableEditor}
        lineNumbers={lineNumbers}
        extensions={extensions}
      />
    </Pane>
  )
}
