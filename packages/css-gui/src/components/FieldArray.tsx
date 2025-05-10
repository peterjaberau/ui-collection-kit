'use client'
import { useState } from 'react'
import { replace, remove, insert } from '../lib/array'
import { EditorPropsWithLabel } from '../types/editor'
import { SchemaInput } from './inputs/SchemaInput'
import { DataTypeSchema } from './schemas/types'
import { chakra, HStack, Box } from "@chakra-ui/react"

export interface FieldArrayProps<T> extends EditorPropsWithLabel<T[]> {
  /**
   * The component to render each of the individual input values.
   * (See `LayerProps` for what props this takes)
   */
  itemSchema: DataTypeSchema<T>
  addItem?(currentValue: T[]): T
}

/**
 * An alternative field array that is collapsible.
 */
export default function FieldArray<T>({
  addItem,
  ...props
}: FieldArrayProps<T>) {
  const { label = '', value = [], onChange, itemSchema } = props
  const [dragIndex, setDragIndex] = useState(-1)
  const isDragging = dragIndex >= 0

  const handleDragDrop = (i1: number, i2: number) => {
    const item = value[i1]
    const removed = remove(value, i1)
    if (i2 > i1) i2--
    const final: any = insert(removed, i2, item)
    onChange(final)
  }

  return (
    <chakra.div css={{ display: 'grid' }}>
      {value.map((item, i) => {
        return (
          <chakra.div>
            {isDragging && (
              <DropZone
                onDrop={() => {
                  handleDragDrop(dragIndex, i)
                  setDragIndex(-1)
                }}
              />
            )}
            <chakra.div
              key={i}
              css={{
                my: 1,
                backgroundColor:
                  i === dragIndex ? 'backgroundOffset' : 'transparent',
              }}
            >
              <SchemaInput
                schema={itemSchema}
                label={'' + i}
                value={item}
                onChange={(newValue) => {
                  onChange(replace(value, i, newValue))
                }}
                onRemove={() => onChange(remove(value, i))}
                onDrag={() => {
                  setDragIndex(i)
                }}
                onDragEnd={() => {
                  setDragIndex(-1)
                }}
              />
            </chakra.div>
          </chakra.div>
        )
      })}
      {isDragging && (
        <DropZone
          onDrop={() => {
            handleDragDrop(dragIndex, value.length)
            setDragIndex(-1)
          }}
        />
      )}
      <chakra.button
        onClick={() => {
          const newLayerValue = addItem?.(value) ?? itemSchema.defaultValue
          onChange(value.concat([newLayerValue]))
        }}
        css={{
          width: '100%',
          appearance: 'none',
          px: 0,
          py: 2,
          m: 0,
          border: '1px solid',
          borderColor: 'border',
          borderRadius: '6px',
          background: 'none',
          cursor: 'pointer',
          color: 'text',
        }}
      >
        + Add {label.toLowerCase()}
      </chakra.button>
    </chakra.div>
  )
}

interface DropZoneProps {
  onDrop(): void
}

function DropZone({ onDrop }: DropZoneProps) {
  const [hovered, setHovered] = useState(false)
  return (
    <chakra.div css={{ position: 'relative', height: '0px' }}>
      <chakra.div
        css={{
          position: 'absolute',
          height: '2rem',
          width: '100%',
          top: '-1rem',
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          '::before': {
            position: 'absolute',
            content: '""',
            display: 'block',
            width: '100%',
            height: '2px',
            backgroundColor: hovered ? 'primary' : 'transparent',
          },
        }}
        onDragEnter={() => setHovered(true)}
        onDragLeave={() => setHovered(false)}
        onDragOver={(e) => {
          e.preventDefault()
        }}
        onDrop={onDrop}
      ></chakra.div>
    </chakra.div>
  )
}
