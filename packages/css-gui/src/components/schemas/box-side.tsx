'use client'
import { compact, isNil, mapValues } from 'lodash-es'
import { getInputProps } from '../../lib/util'
import { DataTypeSchema, RegenOptions } from './types'
import * as Toggle from '@radix-ui/react-toggle'
import { Maximize, Minimize } from 'react-feather'
import { SchemaInput } from '../inputs/SchemaInput'
import { chakra } from '@chakra-ui/react'

interface CreateBoxSideSchema<T> {
  itemSchema: DataTypeSchema<T>
}

export interface BoxSide<T> {
  top: T
  right?: T
  bottom?: T
  left?: T
}

/**
 * Schema describing positional top-right-bottom-left properties
 * (aka, the sides of a box).
 */
export function boxSideSchema<T>({
  itemSchema,
}: CreateBoxSideSchema<T>): DataTypeSchema<BoxSide<T>> {
  function stringify(value: BoxSide<T>, ...args: any) {
    const { stringify, defaultValue } = itemSchema
    if (isLinked(value)) {
      return stringify(value.top, ...args)
    }
    const {
      top,
      right = defaultValue,
      bottom = defaultValue,
      left = defaultValue,
    } = value
    return [top, right, bottom, left]
      .map((side) => stringify(side, ...args))
      .join(' ')
  }
  const defaultValue = {
    top: itemSchema.defaultValue,
  }

  function regenerate({ theme, previousValue }: RegenOptions<BoxSide<T>>) {
    return mapValues(previousValue, (value) => {
      if (value) {
        return (
          itemSchema.regenerate?.({ theme, previousValue: value }) ??
          previousValue
        )
      }
    }) as BoxSide<T>
  }
  return {
    type: `${itemSchema.type} {1,4}`,
    stringify,
    defaultValue,
    regenerate,
    validate: ((value: any) => {
      if (typeof value !== 'object') {
        return false
      }
      const { top, left, right, bottom } = value
      // If *nothing* is defined, it is not a box side
      if (!top) return false
      return compact([top, left, right, bottom]).every((item) =>
        itemSchema.validate(item)
      )
    }) as any,
    input(props) {
      const ItemInput = itemSchema.input
      const linked = isLinked(props.value)
      const linkToggle = (
        <Toggle.Root
          title="Show all directions (longhand)"
          style={{
            padding: 0,
            background: 'none',
            border: 'none',
            color: 'muted',

            // '&[data-state=on]': {
            //   color: 'text',
            // },
          }}
          pressed={linked}
          onPressedChange={(pressed) => {
            if (pressed) {
              props.onChange({ top: props.value.top })
            } else {
              props.onChange({
                top: props.value.top,
                right: props.value.top,
                bottom: props.value.top,
                left: props.value.top,
              })
            }
          }}
        >
          {linked ? (
            <Maximize size={16} />
          ) : (
            <Minimize size={16} />
          )}
        </Toggle.Root>
      )
      return (
        <chakra.div>
          {linked ? (
            <chakra.div css={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1, }}>
              {linkToggle}
              <SchemaInput
                schema={itemSchema}
                {...getInputProps(props, 'top')}
                label=""
              />
            </chakra.div>
          ) : (
            <chakra.div
              css={{
                display: 'grid',
                justifyItems: 'center',
                alignItems: 'center',
                gridTemplateRows: '1fr max-content 1fr',
                gridTemplateAreas: `
                "top top top"
                "left link right"
                "bottom bottom bottom"
            `,
              }}
            >
              <chakra.div css={{ gridArea: 'link' }}>{linkToggle}</chakra.div>
              {['top', 'left', 'right', 'bottom'].map((side) => {
                return (
                  <chakra.div css={{ gridArea: side }}>
                    <SchemaInput
                      schema={itemSchema}
                      {...getInputProps(props, side as any)}
                      label=""
                    />
                  </chakra.div>
                )
              })}
            </chakra.div>
          )}
        </chakra.div>
      )
    },
  }
}

function isLinked(value: BoxSide<any>) {
  return isNil(value?.bottom) && isNil(value?.left) && isNil(value?.right)
}
