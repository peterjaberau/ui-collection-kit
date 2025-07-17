import React from 'react';
import { Stack } from '@chakra-ui/react';
import { PageContentComponent } from './page.content.comp';
import { PageContentSplitter } from './page.content.splitter';

export const PageContentLayout = ({
  type,
  direction,
  defaultSize,
  children,
  items = [],
}: {
  type?: 'split' | 'component';
  direction?: 'column' | 'row';
  defaultSize?: number[];
  children?: any;
  items?: any[];
}) => {
  const RenderPageContentSplitter = () => {
    return (
      <PageContentSplitter direction={direction} defaultSize={defaultSize}>
        {children}
      </PageContentSplitter>
    );
  };

  const RenderPageContentComponent = () => {
    return (
      <PageContentComponent direction={direction}>
        {children}
      </PageContentComponent>
    );
  };
  return (
    <Stack
      // flex={1}
      css={{
        width: 'full',
        height: 'full',
      }}
      data-name='page-content-layout'
    >
      {type === 'split' ? (
        <RenderPageContentSplitter />
      ) : (
        <RenderPageContentComponent />
      )}
    </Stack>
  );
};
