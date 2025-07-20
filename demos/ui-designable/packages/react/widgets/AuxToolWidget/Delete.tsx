import React from 'react';
import { TreeNode } from '#packages/core';
import { IconWidget } from '../IconWidget';
import { usePrefix } from '../../hooks';
import { Button } from '@chakra-ui/react';

export interface IDeleteProps {
  node: TreeNode;
  style?: React.CSSProperties;
}

export const Delete: React.FC<IDeleteProps> = ({ node, style }) => {
  const prefix = usePrefix('aux-copy');
  if (node === node.root) return null;
  return (
    <Button
      data-id='aux-delete'
      size='2xs'
      variant='outline'
      onClick={() => {
        TreeNode.remove([node]);
      }}
    >
      <IconWidget infer='Remove' />
    </Button>
  );
};

Delete.displayName = 'Delete';
