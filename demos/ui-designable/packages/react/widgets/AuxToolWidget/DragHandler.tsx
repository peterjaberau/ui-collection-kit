import React from 'react';
import { TreeNode } from '#packages/core';
import { observer } from '@formily/reactive-react';
import { IconWidget } from '../IconWidget';
import { useDesigner, usePrefix } from '../../hooks';
import { Button } from '@chakra-ui/react';

export interface IDragHandlerProps {
  node: TreeNode;
  style?: React.CSSProperties;
}

export const DragHandler: React.FC<IDragHandlerProps> = observer(
  ({ node, style }) => {
    const designer = useDesigner();
    const prefix = usePrefix('aux-drag-handler');
    if (node === node.root || !node.allowDrag()) return null;
    const handlerProps = {
      [designer.props.nodeDragHandlerAttrName]: 'true',
    };
    return (
      <Button
        data-id='aux-drag-handler'
        size='2xs'
        variant='outline'
        {...handlerProps} className={prefix}>
        <IconWidget infer='Move' />
      </Button>
    );
  },
);

DragHandler.displayName = 'DragHandler';
