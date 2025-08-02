import React, { useRef, useEffect } from 'react';
import { useCursor, usePrefix, useDesigner } from '../../hooks';
import { CursorStatus } from '#packages/core';
import { autorun } from '@formily/reactive';
import { observer } from '@formily/reactive-react';
import { NodeTitleWidget } from '../NodeTitleWidget';
import { chakra } from '@chakra-ui/react';


export const GhostWidget = observer(() => {
  const designer = useDesigner();
  const cursor = useCursor();
  const ref = useRef<HTMLDivElement>(null);
  const prefix = usePrefix('ghost');
  const movingNodes = designer.findMovingNodes();
  const firstNode = movingNodes[0];
  useEffect(
    () =>
      autorun(() => {
        const transform = `perspective(1px) translate3d(${
          cursor.position?.topClientX - 18
        }px,${cursor.position?.topClientY - 12}px,0) scale(0.8)`;
        if (!ref.current) return;
        ref.current.style.transform = transform;
      }),
    [designer, cursor],
  );
  const renderNodes = () => {
    return (
      <chakra.span
        css={{
          whiteSpace: 'nowrap',
        }}
      >
        <NodeTitleWidget node={firstNode} />
        {movingNodes.length > 1 ? '...' : ''}
      </chakra.span>
    );
  };
  if (!firstNode) return null;
  return cursor.status === CursorStatus.Dragging ? (
    <chakra.div ref={ref} className={prefix}>
      {renderNodes()}
    </chakra.div>
  ) : null;
});

GhostWidget.displayName = 'GhostWidget';
