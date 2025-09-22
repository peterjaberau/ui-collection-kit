"use client"
import React, { forwardRef } from "react"
import WidgetCodeMirrorApp from "./app"

const WidgetCodeMirror = forwardRef<any>((props, _ref) => {
  return <WidgetCodeMirrorApp {...props} />
})

export default WidgetCodeMirror
