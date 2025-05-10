"use client"
import { Select, createListCollection, Portal } from "@chakra-ui/react"
import { useMemo } from "react"

interface ValueInputProps {
  onChange: (e: any) => void
  value: string
  values: string[]
}

export const ValueSelect = ({ onChange, value, values }: ValueInputProps): any => {
  const collection = createListCollection({
    items: values.map((item) => ({
      value: item,
      label: item,
    })),
  })

  return (
    <Select.Root multiple={false} defaultValue={[value]} onValueChange={onChange} collection={collection} size="xs">
      <Select.Trigger />
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {values.map((item: any) => {
              return (
                <Select.Item item={item} key={item.value}>
                  {item.label}
                  <Select.ItemIndicator />
                </Select.Item>
              )
            })}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}
