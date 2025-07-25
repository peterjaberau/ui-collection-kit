import { connect, mapReadPretty } from '@formily/react'
import { InputNumber } from 'antd'
import { PreviewText } from '../preview-text'

export const NumberPicker : any = connect(
  InputNumber,
  mapReadPretty(PreviewText.NumberPicker)
)

export default NumberPicker
