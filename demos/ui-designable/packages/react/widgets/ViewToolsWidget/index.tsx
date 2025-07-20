import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { observer } from '@formily/reactive-react';
import { WorkbenchTypes } from '#packages/core';
import { IconWidget } from '../IconWidget';
import { usePrefix, useWorkbench } from '../../hooks';

export interface IViewToolsWidget {
  use?: WorkbenchTypes[];
  style?: React.CSSProperties;
  className?: string;
}

export const ViewToolsWidget: React.FC<IViewToolsWidget> | any = observer(
  ({ use, style, className }: any) => {
    const workbench = useWorkbench();
    const prefix = usePrefix('view-tools');
    return (
      <ButtonGroup
        data-id='view-tools'
      >
        {use?.includes('DESIGNABLE') && (
          <Button
            variant='ghost'
            size='2xs'
            disabled={workbench.type === 'DESIGNABLE'}
            onClick={() => {
              workbench.type = 'DESIGNABLE';
            }}
          >
            <IconWidget infer='Design' />
          </Button>
        )}
        {use?.includes('JSONTREE') && (
          <Button
            disabled={workbench.type === 'JSONTREE'}
            onClick={() => {
              workbench.type = 'JSONTREE';
            }}
            variant='ghost'
            size='2xs'
          >
            <IconWidget infer='JSON' />
          </Button>
        )}
        {use?.includes('MARKUP') && (
          <Button
            disabled={workbench.type === 'MARKUP'}
            onClick={() => {
              workbench.type = 'MARKUP';
            }}
            variant='ghost'
            size='2xs'
          >
            <IconWidget infer='Code' />
          </Button>
        )}
        {use?.includes('PREVIEW') && (
          <Button
            disabled={workbench.type === 'PREVIEW'}
            onClick={() => {
              workbench.type = 'PREVIEW';
            }}
            variant='outline'
            size='2xs'
          >
            <IconWidget infer='Play' />
          </Button>
        )}
      </ButtonGroup>
    );
  },
);

ViewToolsWidget.defaultProps = {
  use: ['DESIGNABLE', 'JSONTREE', 'PREVIEW'],
};
