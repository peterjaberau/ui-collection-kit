import { LoadingOutlined } from '@ant-design/icons'
import { connect, mapProps, mapReadPretty, ReactFC } from '@formily/react'
import { Select as AntdSelect } from 'antd'
import { SelectProps } from 'antd/lib/select'
import React from 'react'
import { Select as _Select } from "radix-ui";
import {
  Select as ChakraSelect,
  createListCollection,
  Portal
} from "@chakra-ui/react"
import { PreviewText } from '../preview-text'


const ChakraSelectRenderer = (props: any) => {


  return (
    <>
      <ChakraSelect.HiddenSelect />
      <ChakraSelect.Control>
        <ChakraSelect.Trigger>
          <ChakraSelect.ValueText placeholder={props.placeholder} />
        </ChakraSelect.Trigger>
        <ChakraSelect.IndicatorGroup>
          <ChakraSelect.Indicator />
        </ChakraSelect.IndicatorGroup>
      </ChakraSelect.Control>
      <Portal>
        <ChakraSelect.Positioner>
          <ChakraSelect.Content>
            {props.options.map((option: any) => (
              <ChakraSelect.Item item={option} key={option.value}>
                {option.label}
                <ChakraSelect.ItemIndicator />
              </ChakraSelect.Item>
            ))}
          </ChakraSelect.Content>
        </ChakraSelect.Positioner>
      </Portal>
    </>
  )
}

export const Select: ReactFC<any> = connect(
  ChakraSelect.Root,
  mapProps(
    {
      dataSource: 'options',
      // loading: true,
    } as any,
    (props: any, field: any) => {

      console.log('Select props:', {
        props, field
      })

      const collection = createListCollection({
        items: props.options || [],
        itemToValue: (item: any) => item.value,
        itemToString: (item: any) => item.label,
      })
      // console.log({
      //   collection: collection,
      //   props: props,
      //   field: field
      // })

      const onValueChange = field.onInput


      return {
        collection: collection,
        // value: props.value,
        disabled: field?.['loading'] || field?.['validating'] || props.disabled,
        css: {
          flex: 1,
        },
        size: props.size,
        ...props,
        onValueChange: (e: any) => {
          if (onValueChange) {
            console.log('onValueChange', e?.value)
            onValueChange(e?.value)
          }
        },
        children: (
          <ChakraSelectRenderer
            options={collection.items}
            placeholder={props.placeholder}
          />
        )
      }
    }
  ),
  mapReadPretty(PreviewText.Select)
)

export default Select
