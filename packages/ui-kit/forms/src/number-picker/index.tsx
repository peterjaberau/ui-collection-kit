import { connect, mapReadPretty } from '@formily/react'
import { InputNumber } from 'antd'
import { NumberInput } from "@chakra-ui/react"
import { PreviewText } from '../preview-text'

export const NumberPicker : any = connect(
  InputNumber,
  mapReadPretty(PreviewText.NumberPicker)
)

export default NumberPicker
