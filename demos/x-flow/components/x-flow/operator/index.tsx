'use client';
import { type Dispatch, memo, type SetStateAction, useState } from 'react';
import ZoomInOut from './ZoomInOut';
import UndoRedo from './UndoRedo';
import Control from './Control';
import './index.css';
import { useTemporalStore } from '../hooks/useTemporalStore';

export type OperatorProps = {
  addNode: any;
  xflowRef: any;
};

const Operator = ({ addNode, xflowRef }: OperatorProps) => {
  const { undo, redo, pastStates, futureStates } = useTemporalStore();
  return (
    <div className="fai-reactflow-operator">
      <div className="operator-section">
        <ZoomInOut />
        <UndoRedo
          handleUndo={() => undo()}
          handleRedo={() => redo()}
          pastStates={pastStates}
          futureStates={futureStates}
        />
        <Control addNode={addNode} xflowRef={xflowRef} />
      </div>
    </div>
  );
};

export default memo(Operator);
