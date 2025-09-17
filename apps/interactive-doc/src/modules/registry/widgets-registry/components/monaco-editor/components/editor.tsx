"use client"
import React, { useState } from "react"

import MonacoEditor, { EditorProps, Monaco, OnChange, OnMount, useMonaco } from "@monaco-editor/react"
import { chakra, Stack, HStack, Text, Alert, Table, EmptyState, VStack } from "@chakra-ui/react"
import * as monacoType from "monaco-editor/esm/vs/editor/editor.api"
import theme from "monaco-themes/themes/GitHub Light.json"

import { HiExclamationCircle as ExclamationCircleIcon } from "react-icons/hi2"

interface EditorCustomProps extends EditorProps {
  id: string
  errors: monacoType.editor.IMarkerData[] | []
  readOnly?: boolean
  errorOverLayMessage?: string
  validator?: (
    value: any,
    editor: monacoType.editor.IStandaloneCodeEditor | undefined,
  ) => monacoType.editor.IMarkerData[]
  onInit?: (editor: monacoType.editor.IStandaloneCodeEditor, monaco: Monaco) => void
  onCustomValidate?: (editorValue: string, monaco: any, editor: any) => void
  [key: string]: any
}

export const Editor = (props: EditorCustomProps) => {
  const monaco = useMonaco()
  const [model, setModel] = useState<monacoType.editor.ITextModel | null>()
  const [editor, setEditor] = useState<monacoType.editor.IStandaloneCodeEditor>()
  const [showErrorPanel, setShowErrorPanel] = useState<boolean>(false)

  const { onChange = () => {}, validator = () => {}, readOnly } = props

  const onChangeHandler: OnChange = (value, event) => {
    try {
      onChange(value, event)
      if (model && value) {
        const errors = validator(JSON.parse(value), editor)
        if (errors) {
          monaco?.editor.setModelMarkers(model, "Example", errors)
        }
      }
    } catch (error) {}
  }

  const onMount: OnMount = (editor: monacoType.editor.IStandaloneCodeEditor, monaco: any) => {
    monaco.editor.defineTheme("github-light", theme)
    monaco.editor.setTheme("github-light")

    props.onInit && props.onInit(editor, monaco)

    const model = editor.getModel()

    setModel(model)
    setEditor(editor)
  }

  const { options, errorOverLayMessage, errors = [], ...otherProps } = props
  const hasErrors = errors.length > 0

  return (
    <Stack css={{ height: "100% !important" }} flex={1}>
      <MonacoEditor
        theme="github-light"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          ...options,
          lineNumbers: "on",
          readOnly: readOnly,
        }}
        defaultLanguage="json"
        {...otherProps}
        onMount={onMount}
        onChange={onChangeHandler}
      ></MonacoEditor>
    </Stack>
  )
}
