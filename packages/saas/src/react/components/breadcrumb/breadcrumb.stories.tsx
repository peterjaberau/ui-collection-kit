import React from 'react'

import { Breadcrumb } from './index'

export default {
  title: 'SaasUI/Components/Breadcrumbs',
  component: Breadcrumb.Root,
}

export const Default = {
  args: {
    children: [
      <Breadcrumb.Link href="/">Home</Breadcrumb.Link>,
      <Breadcrumb.CurrentLink>Contact</Breadcrumb.CurrentLink>,
    ],
  },
}
