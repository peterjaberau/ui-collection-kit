import { ArrayField } from '@formily/core'
import { ISchema } from '@formily/json-schema'
import {
  observer,
  ReactFC,
  RecursionField,
  useField,
  useFieldSchema,
} from '@formily/react'
import React from 'react'
import { ArrayBase } from '../array-base'
import {
  SortableContainer,
  SortableElement,
} from '../__builtins__'
import { chakra, HStack } from '@chakra-ui/react'

const SortableItem = SortableElement((props) => {

  return (
    <HStack
      css={{
        justify: 'flex-start',
        alignItems: 'center',
      }}
      {...props}
    >
      {props.children}
    </HStack>
  )
})

const SortableList = SortableContainer((props) => {
  return (
    <chakra.div
      {...props}
    >
      {props.children}
    </chakra.div>
  )
})

const isAdditionComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf('Addition') > -1
}

const useAddition = () => {
  const schema = useFieldSchema()
  return schema.reduceProperties((addition, schema, key) => {
    if (isAdditionComponent(schema)) {
      return <RecursionField schema={schema} name={key} />
    }
    return addition
  }, null)
}

const InternalArrayItems: ReactFC<React.HTMLAttributes<HTMLDivElement>> =
  observer((props) => {
    const field = useField<ArrayField>()
    const schema = useFieldSchema()
    const addition = useAddition()
    const dataSource = Array.isArray(field.value) ? field.value : []
    if (!schema) throw new Error('can not found schema object')
    return (
      <ArrayBase>
        <chakra.div
          {...props}
          onChange={() => {}}
        >
          <SortableList
            list={dataSource.slice()}
            onSortEnd={(event) => {
              const { oldIndex, newIndex } = event
              field.move(oldIndex, newIndex)
            }}
          >

            {dataSource?.map((item, index) => {
              const items = Array.isArray(schema.items)
                ? schema.items[index] || schema.items[0]
                : schema.items
              return (
                <ArrayBase.Item key={index} index={index} record={() => field.value?.[index]}>
                  <SortableItem key={`item-${index}`} lockAxis="y" index={index}>
                    <chakra.div>{items ? <RecursionField schema={items} name={index} /> : null}</chakra.div>
                  </SortableItem>
                </ArrayBase.Item>
              )
            })}
          </SortableList>
          {addition}
        </chakra.div>
      </ArrayBase>
    )
  })

const Item: ReactFC<
  React.HTMLAttributes<HTMLDivElement> & {
    type?: 'card' | 'divide'
  }
> = (props) => {
  return (
    <chakra.div
      {...props}
      onChange={() => {}}
    >
      {props.children}
    </chakra.div>
  )
}

export const ArrayItems = Object.assign(ArrayBase.mixin(InternalArrayItems), {
  Item,
})

ArrayItems.displayName = 'ArrayItems'

export default ArrayItems
