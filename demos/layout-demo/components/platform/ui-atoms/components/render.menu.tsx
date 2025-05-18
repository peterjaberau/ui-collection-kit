'use client'
import { For } from '@chakra-ui/react';
import { Menu } from '@ui-collection-kit/saas/react';

import { GenericMiscProps } from '#platform/common/types';

export const RenderMenu = (props: GenericMiscProps) => {
  const { items, text, ...rest }: any = props || {};
  return (
    <Menu.Root {...rest}>
      <Menu.Button>{text}</Menu.Button>
      <Menu.Content>
        <For each={items}>
          {(item: any, index: any) => {
            return (
              <Menu.Item key={item.value} value={item.value} {...item}>
                {item.label}
              </Menu.Item>
            );
          }}
        </For>
      </Menu.Content>
    </Menu.Root>
  );
};
