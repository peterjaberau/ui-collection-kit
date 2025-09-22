'use client'
import React from "react";
import { Editor } from "./components/editor"
import { chakra, IconButton } from '@chakra-ui/react'

import { Monaco } from "@monaco-editor/react";
import * as monacoType from "monaco-editor/esm/vs/editor/editor.api";

interface WidgetMonacoEditorProps {
  id: string;
  title: string | any;
  subtitle: string;
  errors?: any[];
  value: string;
  emptyMessage?: string;
  renderEditorWhenEmpty?: boolean;
  errorOverLayMessage?: string;
  readOnly?: boolean;
  onInit?: (editor: monacoType.editor.IStandaloneCodeEditor, monaco: Monaco) => void;
  onChange?: (value: string) => void;
}

const WidgetMonacoEditorApp = (props: WidgetMonacoEditorProps | any) => {

  const {
    title,
    subtitle,
    id,
    errors = [],
    value,
    onChange = () => {},
    onInit,
    errorOverLayMessage,
    renderEditorWhenEmpty,
    emptyMessage,
    readOnly,
  } = props;
  const renderEditor = value || renderEditorWhenEmpty;

  return (
    <chakra.div
      css={{
        height: '100%'
      }}
    >
      {!value && emptyMessage && (
        <chakra.div
          css={{
            color: 'gray.400',
            fontSize: 'xs',
            h: 'full',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 'full',
            textAlign: 'center',
            height: "500px"
          }}
        >
          <chakra.p css={{ w: 'full'}}>{emptyMessage}</chakra.p>
        </chakra.div>
      )}
      {renderEditor && (
        <Editor
          id={id}
          // height={"500px"}
          errors={errors}
          errorOverLayMessage={errorOverLayMessage}
          value={value ? JSON.stringify(value, null, 4) : ""}
          onInit={onInit}
          onChange={(value: any) => onChange(value)}
          readOnly={readOnly}
        />
      )}
    </chakra.div>
  );
};

export default WidgetMonacoEditorApp;
