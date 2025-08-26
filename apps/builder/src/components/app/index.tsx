import React from "react"
import { Editor } from "./editor"
import { DevLayer } from "./DevLayer"

export const AppBuilder: any = ({ children, ...rest }: any) => {
  return (
    <DevLayer tagName="Editor">
      <Editor {...rest}>{children}</Editor>
    </DevLayer>
  )
}
