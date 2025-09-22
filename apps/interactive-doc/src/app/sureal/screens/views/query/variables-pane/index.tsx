"use client"
import { Prec } from "@codemirror/state"
import { type EditorView, keymap } from "@codemirror/view"
import { Box, Icon, IconButton, CloseButton, Button, HStack, Badge } from "@chakra-ui/react"
import { Pane } from "#app/sureal/components/pane"
import { type HtmlPortalNode, OutPortal } from "react-reverse-portal"
import { CodeEditor } from "#app/sureal/components/code-editor"
import { runQueryKeymap, surqlLinting } from "#components/ui/code-mirror/editor"
import { queryEditorField, setQueryEditor } from "#components/ui/code-mirror/editor/query"
import { useDebouncedFunction } from "#app/sureal/hooks/debounce"
import { useStable } from "#app/sureal/hooks/stable"
import { RiResetLeftFill as IconReset } from "react-icons/ri"
import { LuX as IconClose, LuDollarSign as IconDollar } from "react-icons/lu"

import { useCodeEditorStore } from "#app/sureal/store/code-editor"
import { useEffect, useMemo, useState } from "react"

export interface VariablesPaneProps {
  editor: EditorView
}

export function VariablesPane({ editor }: VariablesPaneProps) {
  const [snapshot, store] = useCodeEditorStore()

  const [variableEditor, setVariableEditor] = useState<EditorView | null>(null)

  const setVariables = useDebouncedFunction((content: string | undefined) => {
    const json = content || ""
    try {
      const parsed = JSON.parse(json)
      if (typeof parsed !== "object" || Array.isArray(parsed)) {
        throw new TypeError("Must be object")
      }
      store.trigger.setVariablesValid(true)
    } catch {
      store.trigger.setVariablesValid(false)
    }
  }, 50)

  // const clearVariables = useStable(() => {
  //   setVariables("{}");
  // });

  useEffect(() => {
    if (variableEditor && editor) {
      // setQueryEditor(variableEditor, editor);
    }
  }, [variableEditor, editor])

  // const extensions = useMemo(
  //   () => [surrealql(), surqlLinting(), queryEditorField, Prec.high(keymap.of(runQueryKeymap))],
  //   [],
  // );

  const extensions = useMemo(() => [queryEditorField, Prec.high(keymap.of(runQueryKeymap))], [])

  return (
    <Pane
      title={"Variables"}
      icon={<IconDollar />}
      infoSection={"info"}
      rightSection={
        <HStack>
          {!snapshot.context.isVariablesValid && <Badge colorPalette="red">Invalid syntax</Badge>}
          <IconButton size={"sm"} variant={"ghost"}>
            <IconReset />
          </IconButton>
          <IconButton size={"sm"} variant={"ghost"}>
            <IconClose />
          </IconButton>
        </HStack>
      }
    >
      <CodeEditor
        value={snapshot.context?.variables || ""}
        onChange={setVariables}
        onMount={setVariableEditor}
        lineNumbers={snapshot.context.lineNumbers}
        extensions={extensions}
      />
    </Pane>
  )
}
