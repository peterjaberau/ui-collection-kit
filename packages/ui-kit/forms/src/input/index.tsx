import { LoadingOutlined } from '@ant-design/icons'
import { connect, mapProps, mapReadPretty, ReactFC } from '@formily/react'
import { Input as AntdInput } from 'antd'
import React from 'react'
import { PreviewText } from '../preview-text'

const InternalInput: ReactFC<any> = connect(
  AntdInput,
  mapProps((props, field: any) => {
    return {
      ...props,
      suffix: (
        <span>
          {field?.['loading'] || field?.['validating'] ? (
            <LoadingOutlined />
          ) : (
            props.suffix
          )}
        </span>
      ),
    }
  }),
  mapReadPretty(PreviewText.Input)
)
const TextArea = connect(AntdInput.TextArea, mapReadPretty(PreviewText.Input))

export const Input = Object.assign(InternalInput, {
  TextArea,
})

export default Input
