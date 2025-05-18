import { Button, Menu, Portal, For } from "@chakra-ui/react"
import { GenericMiscProps } from "#platform/common/types"

export const RenderMenu = (props: GenericMiscProps) => {
  const { items, text, triggerSize, variant, ...rest }: any = props || {}
  return (
    <Menu.Root {...rest}>
      <Menu.Trigger asChild>
        <Button variant={variant} size={triggerSize}>
          {text}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <For each={items}>
              {
                (item: any, index: any) => {
                  return (
                    <Menu.Item
                      key={item.value} value={item.value} {...item}>{item.label}
                    </Menu.Item>
                  )
                }
              }

            </For>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
