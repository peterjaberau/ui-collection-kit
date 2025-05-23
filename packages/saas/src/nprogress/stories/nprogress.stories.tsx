import * as React from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { NProgress } from '..'

export default {
  title: 'SaasUI/NProgress/NProgress',
  component: NProgress,
} as Meta

type Story = StoryObj<typeof NProgress>

export const Default: Story = {
  args: {
    isAnimating: true,
  },
}
