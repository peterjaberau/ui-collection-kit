import React from 'react';
import { TreeNode } from '#packages/core';
import { usePrefix } from '../../hooks';
import { IconWidget } from '../IconWidget';
import { Button } from '@chakra-ui/react';
export interface ICopyProps {
  node: TreeNode;
  style?: React.CSSProperties;
}

export const Copy: React.FC<ICopyProps> = ({ node, style }) => {
  const prefix = usePrefix('aux-copy');
  if (node === node.root) return null;
  return (
    <Button
      data-id='aux-copy'
      size='2xs'
      variant='outline'
      onClick={() => {
        TreeNode.clone([node]);
      }}
    >
      <IconWidget infer='Clone' />
    </Button>
  );
};

Copy.displayName = 'Copy';
