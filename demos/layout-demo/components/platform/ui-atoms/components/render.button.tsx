'use client'
import { Button } from '@ui-collection-kit/saas/react';

import { GenericMiscProps } from '#platform/common/types';

export const RenderButton = (props: GenericMiscProps) => {
  const { text, onClick, ...rest } = props || {}
  return (
    <Button
      {...rest}
      onClick={typeof rest.onClick === 'function' ? rest.onClick : onClick}
    >
      {text}
    </Button>
  );
};
