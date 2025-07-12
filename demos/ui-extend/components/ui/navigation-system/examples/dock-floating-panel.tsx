'use client';
import './style.css';
import { Portal, FloatingPanel } from '@ui-collection-kit/unstyled-react';
import { ArrowDownLeft, Maximize2, Minus, XIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@chakra-ui/react';

export const DockDemoFloatingPanel = ({ title, children }: any) => {
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [size, setSize] = useState({ width: 400, height: 300 });
  const [open, setOpen] = useState(true);

  return (
    <FloatingPanel.Root open={open}>
      {/*<FloatingPanel.Trigger asChild>*/}
      {/*  <Button>Open</Button>*/}
      {/*</FloatingPanel.Trigger>*/}
      <Portal>
        <FloatingPanel.Positioner>
          <FloatingPanel.Content>
            <FloatingPanel.DragTrigger>
              <FloatingPanel.Header>
                <FloatingPanel.Title>{title}</FloatingPanel.Title>
                <FloatingPanel.Control>
                  <FloatingPanel.StageTrigger stage='minimized'>
                    <Minus />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger stage='maximized'>
                    <Maximize2 />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger stage='default'>
                    <ArrowDownLeft />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.CloseTrigger>
                    <XIcon />
                  </FloatingPanel.CloseTrigger>
                </FloatingPanel.Control>
              </FloatingPanel.Header>
            </FloatingPanel.DragTrigger>
            <FloatingPanel.Body>{children}</FloatingPanel.Body>

            <FloatingPanel.ResizeTrigger axis='n' />
            <FloatingPanel.ResizeTrigger axis='e' />
            <FloatingPanel.ResizeTrigger axis='w' />
            <FloatingPanel.ResizeTrigger axis='s' />
            <FloatingPanel.ResizeTrigger axis='ne' />
            <FloatingPanel.ResizeTrigger axis='se' />
            <FloatingPanel.ResizeTrigger axis='sw' />
            <FloatingPanel.ResizeTrigger axis='nw' />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  );
};

/*

import { Dock } from '#components/ui/dock'

export const DockFloatingPanel = () => {
  return (
    <Dock
      position="bottom"
      size={300}
      isVisible={true}
      fluid={false}
      defaultSize={100}
    >
      <div style={{ height: '100%' }}>
        <h1>Dock Demo</h1>
        <p>This is a demo of the Dock component.</p>
      </div>
    </Dock>
  );
};


 */
