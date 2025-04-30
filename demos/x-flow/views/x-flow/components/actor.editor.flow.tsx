'use client';
import * as Button from '@/components/ui/button';
import Link from 'next/link';
import XFlow, { FlowProvider } from '@/components/x-flow';
import React, { useState } from 'react';
import { getFlowConfig, getDomainSchema } from './flow/config';
import './flow/index.css';
import { FlowPicker } from './common/flow-picker';
import { useFlowActorRef, useFlowActorSelector } from './flow-machine/context';
import { omit } from 'lodash';

const selectFlowActorState = (snapshot: any) => snapshot.context;
const flowPropsSelector = (snapshot: any) => snapshot.context.flow.props;
const flowContextSelector = (snapshot: any) => snapshot.context;
const flowStateSelector = (snapshot: any) => snapshot;
const isIdleSelector = (snapshot: any) => snapshot.matches('idle');
const isBusySelector = (snapshot: any) => snapshot.matches('busy');
const flowKeySelector = (snapshot: any) => snapshot.context.flow.key;
const currentFlowNameSelector = (snapshot: any) => snapshot.context.flow.name;

export const ActorEditorFlow = () => {
  const flowActorRef: any = useFlowActorRef();

  const flowState = useFlowActorSelector(flowContextSelector);
  const flowContext = useFlowActorSelector(selectFlowActorState);
  const isIdle = useFlowActorSelector(isIdleSelector);
  const isBusy = useFlowActorSelector(isBusySelector);
  const flowProps = useFlowActorSelector(flowPropsSelector);
  const flowKey = useFlowActorSelector(flowKeySelector);
  const currentFlowName = useFlowActorSelector(currentFlowNameSelector);

  console.log('flow.....', {
    flowState,
    flowContext,
    isIdle,
    isBusy,
    flowProps,
    flowKey,
    currentFlowName,
  });

  const [flowConfig, setFlowConfig] = React.useState(
    getFlowConfig({ name: 'basic' }),
  ); //primitive
  const [loading, setLoading] = useState(false);
  const [logList, setLogList] = useState<any[]>(flowConfig.logs || []);

  return (
    <>
      <div className='shadow-md divide-y rounded-md p-0'>
        <div className='flex flex-row items-center justify-between px-6 py-4'>
          <div className={'text-label-lg'}>Flow Editor</div>
          <div>
            <FlowPicker />
          </div>
        </div>

        <div className='flex p-4'>
          <div style={{ height: '800px', width: '100%', position: 'relative' }}>
            {/* ...flowConfig.props */}

            {isIdle && (
              <XFlow
                key={flowKey}
                {...omit(flowProps, ['layout'])}
                layout={
                  flowProps.layout === 'manual' ? undefined : flowProps.layout
                }
                initialValues={flowContext?.flow?.initialValues}
                settings={flowContext?.flow?.settings || []}
                onTesting={(node: any, nodes: any) => {}}
                logPanel={{
                  logList,
                  loading,
                }}
                widgets={{ ...flowContext.flow.widgets }} //{...flowWidgets}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
