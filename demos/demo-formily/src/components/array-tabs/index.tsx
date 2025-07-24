import { ArrayField } from '@formily/core'
import {
  observer,
  ReactFC,
  RecursionField,
  useField,
  useFieldSchema,
} from '@formily/react'
import { Tabs, TabsProps } from 'antd'
import { Badge } from '@chakra-ui/react'
import React, { Fragment, useState } from 'react'

interface IFeedbackBadgeProps {
  index: number
}

const FeedbackBadge: ReactFC<IFeedbackBadgeProps> = observer((props) => {
  const field = useField<ArrayField>()
  const tab = `${field.title || 'Untitled'} ${props.index + 1}`
  const errors = field.errors.filter((error) =>
    error.address?.includes(`${field.address}.${props.index}`)
  )
  if (errors.length) {
    return (
      <Badge size="sm" bg='bg.error' borderColor='border.error' color='fg.error'>
        {tab} {errors.length}
      </Badge>
    )
  }
  return <Fragment>{tab}</Fragment>
})

export const ArrayTabs: React.FC<React.PropsWithChildren<TabsProps>> = observer(
  (props) => {
    const field = useField<ArrayField>()
    const schema = useFieldSchema()
    const [activeKey, setActiveKey] = useState('tab-0')
    const value = Array.isArray(field.value) ? field.value : []
    const dataSource = value?.length ? value : [{}]
    const onEdit = (targetKey: any, type: 'add' | 'remove') => {
      if (type == 'add') {
        const id = dataSource.length
        if (field?.value?.length) {
          field.push(null)
        } else {
          field.push(null, null)
        }
        setActiveKey(`tab-${id}`)
      } else if (type == 'remove') {
        const index = Number(targetKey.match(/-(\d+)/)?.[1])
        if (index - 1 > -1) {
          setActiveKey(`tab-${index - 1}`)
        }
        field.remove(index)
      }
    }

    return (
      <Tabs
        {...props}
        activeKey={activeKey}
        onChange={(key) => {
          setActiveKey(key)
        }}
        type="editable-card"
        onEdit={onEdit}
        items={dataSource?.map((item, index) => {
          const items = Array.isArray(schema.items)
            ? schema.items[index]
            : schema.items
          const key = `tab-${index}`
          return {
            key,
            label: <FeedbackBadge index={index} />,
            forceRender: true,
            closable: index !== 0,
            children: items ? (
              <RecursionField schema={items} name={index} />
            ) : null,
          }
        })}
      ></Tabs>
    )
  }
)

export default ArrayTabs
