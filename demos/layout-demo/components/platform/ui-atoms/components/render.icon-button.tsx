'use client';
import { DynamicIcon } from 'lucide-react/dynamic';
import { IconButton } from '@ui-collection-kit/saas/react';
import { GenericMiscProps } from '#platform/common/types';

export const RenderIconButton = (props: GenericMiscProps) => {
  const { iconName, onClick, ...rest } = props || {};
  return (
    <IconButton
      {...rest}
      onClick={typeof rest.onClick === 'function' ? rest.onClick : onClick}
    >
      <DynamicIcon name={iconName} />
    </IconButton>
  );
};
