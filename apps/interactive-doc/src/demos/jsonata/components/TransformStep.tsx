'use client'
import { HiClipboardCopy as ClipboardCopyIcon } from "react-icons/hi";
import React from "react";
import Editor from "./Editor";
import { chakra, IconButton } from '@chakra-ui/react'

import { Monaco } from "@monaco-editor/react";
import * as monacoType from "monaco-editor/esm/vs/editor/editor.api";

interface TransformStepProps {
  id: string;
  title: string | any;
  subtitle: string;
  errors?: any[];
  color: string;
  value: string;
  emptyMessage?: string;
  renderEditorWhenEmpty?: boolean;
  errorOverLayMessage?: string;
  readOnly?: boolean;
  onInit?: (editor: monacoType.editor.IStandaloneCodeEditor, monaco: Monaco) => void;
  onChange?: (value: string) => void;
  onCopy: (value: string) => void;
}

const TransformStep = (props: TransformStepProps) => {
  const {
    title,
    subtitle,
    id,
    errors = [],
    value,
    onChange = () => {},
    onCopy,
    color,
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
        border: '2px solid',
        borderColor: 'border',
        borderOpacity: 0.5,
        boxShadow: 'lg',
        borderRadius: 'md'
      }}
    >
      <chakra.div
        css={{
          fontSize: 'sm',
          color: 'gray.200',
          px: 6,
          py: 1,
          backgroundColor: 'green.200',
          backgroundOpacity: 0.5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 'sm',
        }}
      >
        <chakra.div css={{ fontWeight: 'bold'}}>
          {title}
          <chakra.span css={{ display: 'block', fontWeight: 'light', fontSize: 'xs'}} >{subtitle}</chakra.span>
        </chakra.div>
        <IconButton size='xs' onClick={() => onCopy(value)}>
          <ClipboardCopyIcon className="w-4 h-4" />
        </IconButton>
      </chakra.div>
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
          height={"500px"}
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

export default TransformStep;
