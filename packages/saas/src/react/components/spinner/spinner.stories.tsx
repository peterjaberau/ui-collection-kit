import React from 'react'

import { Spinner } from './spinner'

export default {
  title: 'SaasUI/Components/Spinner',
  component: Spinner,
}

export const Default = {
  args: {},
}

export const RenderingChildren = {
  args: {
    loading: false,
    children: 'Hello world',
  },
}
