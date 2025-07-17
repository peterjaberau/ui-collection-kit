'use client';
import FloatingPanel from '#components/ui-blocks/floating-panel';
import { LuBolt, LuEye, LuEyeClosed } from 'react-icons/lu';
import { useNavigationSystem } from '#actors/hooks/useNavigationSystem';
import { For, Stack, Wrap, IconButton, Button } from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/react';

export const RemoteController = () => {
  const { visibleItems, toggleVisiblity }: any = useNavigationSystem();

  return (
    <FloatingPanel
      title='Remote Controller'
      trigger={
        <IconButton
          size='2xs'
          css={{
            position: 'fixed',
            right: '5px',
            zIndex: 9999,
          }}
        >
          <LuBolt />
        </IconButton>
      }
    >
      <Stack>
        <For each={Object.keys(visibleItems)}>
          {(item: any, index: any) => {
            return (
              <Checkbox.Root
                key={index}
                checked={visibleItems[item]}
                onCheckedChange={(e) => toggleVisiblity(item)}
              >
                <Checkbox.HiddenInput />
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Label>{item}</Checkbox.Label>
              </Checkbox.Root>
            );
          }}
        </For>
      </Stack>
    </FloatingPanel>
  );
};
