'use client'
import { useState } from 'react'
import { Select, createListCollection, Portal } from "@chakra-ui/react"

// import * as Select from '../ui/Select'
import { InputHeader } from '../ui/InputHeader'

interface Props<T extends string> {
  label: string
  onChange: (newValue: T) => void
  onRemove?: () => void
  value: T
  options: readonly T[]
  ruleset?: any
  property?: string
  decorateText?(text: T): string
}
// A select input with a label
export function SelectInput<T extends string>({
  decorateText,
  ...props
}: Props<T>) {
  const { value, onChange, options = [] }: any = props

  const collection = createListCollection({
    items: options.map((item: any) => ({
      value: item,
      label: item,
    })),
  })


  return (
    <InputHeader {...props}>
      <Select.Root multiple={false} value={[value]} onValueChange={onChange} collection={collection} size="xs">
        <Select.Trigger />
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {options.map((item: any) => {
                return (
                  <Select.Item item={item} key={item.value}>
                    {decorateText ? decorateText(item.value) : item.value}
                    <Select.ItemIndicator />
                  </Select.Item>
                )
              })}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </InputHeader>
  )
}
