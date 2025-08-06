import { LoadingOutlined } from "@ant-design/icons"
import { connect, mapProps, mapReadPretty, ReactFC } from "@formily/react"
import { Input as AntdInput } from "antd"
import { InputGroup, Input as _Input, Textarea as _Textarea } from "@chakra-ui/react"
import React from "react"
import { PreviewText } from "../preview-text"

const _InternalInput: ReactFC<any> = connect(
  _Input,
  mapProps((props: any, field: any) => ({
    ...props,
  })),
  mapReadPretty(PreviewText.Input),
)

const _InternalTextarea = connect(
  _Textarea,
  mapProps((props: any, field: any) => ({
    ...props,
    disabled: field?.["loading"] || field?.["validating"] || props.disabled,
    readOnly: props.readOnly,
  })),
  mapReadPretty(PreviewText.Input),
)

export const Input = Object.assign(_InternalInput, {
  TextArea: _InternalTextarea,
})
