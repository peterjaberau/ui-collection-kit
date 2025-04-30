'use client';
import * as Button from '@/components/ui/button';
import * as Popover from '@/components/ui/popover';
import * as ButtonGroup from '@/components/ui/button-group';
import * as Select from '@/components/ui/select';

import { useState, useCallback } from 'react';
import { useFlowActorRef, useFlowActorSelector } from '../flow-machine/context';
import { metadata } from '../flow/config';

const flowContextSelector = (snapshot: any) => snapshot.context;
const flowStateSelector = (snapshot: any) => snapshot;
const currentFlowNameSelector = (snapshot: any) => snapshot.context.flow.name;
const isIdleSelector = (snapshot: any) => snapshot.matches('idle');

export function FlowPicker() {
  const { send } = useFlowActorRef();
  const flowState = useFlowActorSelector(flowContextSelector);
  const currentFlowName = useFlowActorSelector(currentFlowNameSelector);
  const isIdle = useFlowActorSelector(isIdleSelector);


  const handleItemAction = (value: any) => {
    if (isIdle) {
      send({ type: 'flow.load', payload: { name: value } });
    }
  };

  return (
      <>
        <Select.Root value={currentFlowName} onValueChange={handleItemAction}>
          <Select.Trigger>
            <Select.Value placeholder='Select a flow...' />
          </Select.Trigger>
          <Select.Content>
            {metadata.flows.map((item: any) => (
                <Select.Item key={item} value={item}>
                  {item}
                </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>

      </>
  );
}
