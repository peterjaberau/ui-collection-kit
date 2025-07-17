'use client';

import * as React from 'react';
import { Drawer } from '@mantine/core';
import { Card, Heading } from '@chakra-ui/react';

import { DrawerResizer } from '@/components/ui-plus/DrawerResizer';

export function DrawerBlock({
  opened,
  onClose,
}: any) {
  const [width, setWidth] = React.useState(650);

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      position='right'
      trapFocus={false}
      size={width}
      padding={0}
      zIndex={10000}
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      styles={{
        body: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <DrawerResizer minSize={500} maxSize={1500} onResize={setWidth} />
      <Card.Root size='lg' height='100%'>
        <Card.Header>
          <Heading size='md'> Card - lg</Heading>
        </Card.Header>
        <Card.Body color='fg.muted'>
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Card.Body>
      </Card.Root>
    </Drawer>
  );
}
