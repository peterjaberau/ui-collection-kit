import { ArrayField } from '@formily/core'
import {
  observer,
  ReactFC,
  RecursionField,
  useField,
  useFieldSchema,
} from '@formily/react'
import { Tabs, TabsProps } from 'antd'
import { Tabs as ChakraTabs, For, Button } from '@chakra-ui/react'
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


      /*
      *
 <ChakraTabs.Root
        value={activeKey}
        onValueChange={(e) => {
          setActiveKey(e.value)
        }}
      >
        <ChakraTabs.List>
          <For each={dataSource}>
            {(item, index) => {
              const items = Array.isArray(schema.items)
                ? schema.items[index]
                : schema.items
              const key = `tab-${index}`
              return (
                <ChakraTabs.Trigger
                  key={key}
                  value={key}
                  onClick={() => {
                    setActiveKey(key)
                  }}
                >
                  <FeedbackBadge index={index} />
                </ChakraTabs.Trigger>
              )
            }}
          </For>
          <Button onClick={onEdit} size='sm' variant='outline'>
            Add
          </Button>
        </ChakraTabs.List>

        <For each={dataSource}>
          {(item, index) => {
            const items = Array.isArray(schema.items)
              ? schema.items[index]
              : schema.items
            const key = `tab-${index}`
            return (
              <ChakraTabs.Content key={key} value={key}>
                {items ? (
                  <RecursionField schema={items} name={index} />
                ) : null}
              </ChakraTabs.Content>
            )
          }}
        </For>

      </ChakraTabs.Root>
      *
      *
      *
      * */
    )
  }
)

export default ArrayTabs
