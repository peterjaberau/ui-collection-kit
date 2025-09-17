"use client"
import React, { forwardRef } from "react"
import WidgetActionApp from "./app"

const WidgetAction = forwardRef<any>((props, _ref) => {
  return <WidgetActionApp {...props} />
})

export default WidgetAction
