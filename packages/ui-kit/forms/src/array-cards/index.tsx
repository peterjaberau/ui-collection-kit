import { ArrayField } from '@formily/core'
import { ISchema } from '@formily/json-schema'
import {
  observer,
  ReactFC,
  RecursionField,
  useField,
  useFieldSchema,
} from '@formily/react'
import { Empty } from 'antd'
import { Card as ChakraCard, HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { ArrayBase } from '../array-base'
import { chakra } from '@chakra-ui/react'

const isAdditionComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf('Addition') > -1
}

const isIndexComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf?.('Index') > -1
}

const isRemoveComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf?.('Remove') > -1
}

const isCopyComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf?.('Copy') > -1
}

const isMoveUpComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf?.('MoveUp') > -1
}

const isMoveDownComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf?.('MoveDown') > -1
}

const isOperationComponent = (schema: ISchema) => {
  return (
    isAdditionComponent(schema) ||
    isRemoveComponent(schema) ||
    isCopyComponent(schema) ||
    isMoveDownComponent(schema) ||
    isMoveUpComponent(schema)
  )
}

export const InternalArrayCards: ReactFC<any> = observer((props) => {
  const field = useField<ArrayField>()
  const schema = useFieldSchema()
  const dataSource = Array.isArray(field.value) ? field.value : []

  if (!schema) throw new Error('can not found schema object')

  const renderItems = () => {
    return dataSource?.map((item, index) => {
      const items = Array.isArray(schema.items)
        ? schema.items[index] || schema.items[0]
        : schema.items
      const title = (
        <chakra.span>
          {items ? (
            <RecursionField
              schema={items}
              name={index}
              filterProperties={(schema) => {
                if (!isIndexComponent(schema)) return false
                return true
              }}
              onlyRenderProperties
            />
          ) : null}
          {props.title || field.title}
        </chakra.span>
      )
      const extra = (
        <chakra.span>
          {items ? (
            <RecursionField
              schema={items}
              name={index}
              filterProperties={(schema) => {
                if (!isOperationComponent(schema)) return false
                return true
              }}
              onlyRenderProperties
            />
          ) : null}
          {props.extra}
        </chakra.span>
      )

      const content = items ? (
        <RecursionField
          schema={items}
          name={index}
          filterProperties={(schema) => {
            if (isIndexComponent(schema)) return false
            if (isOperationComponent(schema)) return false
            return true
          }}
        />
      ) : null
      return (
        <ArrayBase.Item
          key={index}
          index={index}
          record={() => field.value?.[index]}
        >
          <>
            <ChakraCard.Root
              {...props}
            >
              <ChakraCard.Header>
                <HStack w='full'>
                  <HStack flex='1'>
                    <ChakraCard.Title>{title}</ChakraCard.Title>
                  </HStack>
                  <HStack>
                    {extra}
                  </HStack>
                </HStack>
              </ChakraCard.Header>
              <ChakraCard.Body>{content}</ChakraCard.Body>
            </ChakraCard.Root>
          </>
        </ArrayBase.Item>
      )
    })
  }

  const renderAddition = () => {
    return schema.reduceProperties((addition, schema, key) => {
      if (isAdditionComponent(schema)) {
        return <RecursionField schema={schema} name={key} />
      }
      return addition
    }, null)
  }

  const renderEmpty = () => {
    if (dataSource?.length) return
    return (
      <ChakraCard.Root
        {...props}
      >
        <ChakraCard.Header>
          <ChakraCard.Title>{props.title || field.title}</ChakraCard.Title>
        </ChakraCard.Header>
        <ChakraCard.Body>
          <Empty />
        </ChakraCard.Body>
      </ChakraCard.Root>
    )
  }

  return (
    <ArrayBase>
      <Stack w='full'>

      {renderEmpty()}
      {renderItems()}
      {renderAddition()}
      </Stack>
    </ArrayBase>
  )
})

export const ArrayCards = ArrayBase.mixin(InternalArrayCards)

ArrayCards.displayName = 'ArrayCards'

export default ArrayCards
