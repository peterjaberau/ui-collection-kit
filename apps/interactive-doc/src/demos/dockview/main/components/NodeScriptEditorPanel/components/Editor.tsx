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

  const heights = showErrorPanel
    ? { editor: "calc(100% - 150px) !important", errors: "150px" }
    : { editor: "100% !important", errors: "0px" }

  if (errorOverLayMessage) {
    return (
      <>
        <EmptyState.Root>
          <EmptyState.Content>
            <EmptyState.Indicator>
              <ExclamationCircleIcon />
            </EmptyState.Indicator>
            <VStack textAlign="center">
              <EmptyState.Description color="fg.error">{errorOverLayMessage}</EmptyState.Description>
            </VStack>
          </EmptyState.Content>
        </EmptyState.Root>
      </>
    )
  }

  return (
    <Stack css={{ height: heights.editor }} flex={1}>
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
        // height={heights.editor}
        onMount={onMount}
        onChange={onChangeHandler}
      ></MonacoEditor>
      <Alert.Root
        borderRadius="none"
        onClick={() => setShowErrorPanel(!showErrorPanel)}
        status={hasErrors ? "error" : "success"}
      >
        <Alert.Indicator />
        <Alert.Title>{`Problems ${errors.length}`}</Alert.Title>
      </Alert.Root>

      {showErrorPanel && errors.length > 0 && (
        <chakra.div
          css={{
            px: 4,
            overflow: "auto",
            height: heights.errors,
          }}
        >
          <Table.Root size="sm">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Line</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end">Details</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {errors.map((error) => (
                <Table.Row key={error.message}>
                  <Table.Cell>
                    {error.startLineNumber}:{error.endColumn}
                  </Table.Cell>
                  <Table.Cell textAlign="end">{error.message}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </chakra.div>
      )}
    </Stack>
  )
}
