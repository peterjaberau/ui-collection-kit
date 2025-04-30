'use client';
import { FlowProvider } from '@/components/x-flow';
import { ActorEditorFlow } from './components/actor.editor.flow';
import {
  FlowInstanceRenderer,
  NodeInstanceRenderer,
} from './components/flow-machine/renderers';

export const XFlowView = () => {
  return (
    <>
      <FlowInstanceRenderer actorOptions={undefined}>
        <NodeInstanceRenderer>
          <FlowProvider>
            <div className='w-full min-w-0 flex-col gap-y-3'>
              <ActorEditorFlow />
            </div>
          </FlowProvider>
        </NodeInstanceRenderer>
      </FlowInstanceRenderer>
    </>
  );
};
