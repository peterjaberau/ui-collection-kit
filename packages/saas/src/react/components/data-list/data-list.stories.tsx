import React from 'react'

import { Status } from '../status/status'

import { DataList } from './index'

export default {
  title: 'SaasUI/Components/DataList',
}

export const Default = () => {
  return (
    <DataList.Root>
      <DataList.Item>
        <DataList.ItemLabel>Status</DataList.ItemLabel>
        <DataList.ItemValue>
          <Status value="new">New</Status>
        </DataList.ItemValue>
      </DataList.Item>
    </DataList.Root>
  )
}
