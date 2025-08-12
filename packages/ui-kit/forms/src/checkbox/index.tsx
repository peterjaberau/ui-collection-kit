import { connect, mapProps, mapReadPretty } from "@formily/react"
// import { Checkbox as AntdCheckbox } from "antd"
import { Checkbox as ChakraCheckbox, CheckboxGroup, Fieldset, For } from "@chakra-ui/react"
import { PreviewText } from "../preview-text"

const ChakraCheckboxRenderer = (props: any) => {
  return (
    <>
      <ChakraCheckbox.Label>{props.label}</ChakraCheckbox.Label>
      <ChakraCheckbox.HiddenInput />
      <ChakraCheckbox.Control />
    </>
  )
}

const CheckboxGroupRenderer = (props: any) => {
  return (
    <CheckboxGroup defaultValue={[]} name={props.name}>
      <Fieldset.Legend>
        {props.title}
      </Fieldset.Legend>
      <Fieldset.Content>
        <For each={props.items}>
          {(item: any) => (
            <ChakraCheckbox.Root key={item.value} value={item.value}>
              <ChakraCheckbox.HiddenInput />
              <ChakraCheckbox.Control />
              <ChakraCheckbox.Label>{item.label || item.value}</ChakraCheckbox.Label>
            </ChakraCheckbox.Root>
          )}
        </For>
      </Fieldset.Content>
    </CheckboxGroup>
  )
}

const InternalCheckbox = connect(
  ChakraCheckbox.Root,
  mapProps(
    {
      value: "checked",
      onInput: "onCheckedChange",
    },
    (props: any, field: any) => {
      const onCheckedChange = field.onInput

      return {
        ...props,
        onCheckedChange: (e: any) => {
          if (onCheckedChange) {
            onCheckedChange(e?.checked)
          }
        },
        children: <ChakraCheckboxRenderer label={field.title} />,
      }
    },
  ),
)

const Group = connect(
  Fieldset.Root,
  mapProps(
    {
      dataSource: 'items',
    } as any,
    (props: any, field: any) => {

      // console.log("Checkbox Group props", { props, field})

      return {
        // ...props,
        children: (
          <CheckboxGroupRenderer
            title={field.title}
            items={props.items}
            name={field.props?.name}
            {...props}
          />
        )
      }

    },
  ),
  mapReadPretty(PreviewText.Select, {
    mode: "tags",
  }),
)

export const Checkbox = Object.assign(InternalCheckbox, {
  // __ANT_CHECKBOX: true,
  Group,
})

export default Checkbox
