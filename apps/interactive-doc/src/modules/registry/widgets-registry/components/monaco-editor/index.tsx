"use client"
import React, { forwardRef } from "react"
import WidgetMonacoEditorApp from "./app"

const WidgetMonacoEditor = forwardRef<any>((props, _ref) => {
  return <WidgetMonacoEditorApp {...props} />
})

export default WidgetMonacoEditor
