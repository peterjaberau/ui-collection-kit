import React from 'react'
import { Content } from './content'
import { renderSandboxContent } from '#packages/react-sandbox'
import './theme.less'

renderSandboxContent(() => {
  return <Content />
})
