'use client';
import './style.css';
import { Portal, FloatingPanel } from '@ui-collection-kit/unstyled-react';
import { ArrowDownLeft, Maximize2, Minus, XIcon } from 'lucide-react';
import { useState } from 'react';

const Index = ({ title, trigger, children }: any) => {
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [size, setSize] = useState({ width: 400, height: 300 });
  const [open, setOpen] = useState(true);

  return (
    <FloatingPanel.Root>
      <FloatingPanel.Trigger asChild>
        {trigger}
      </FloatingPanel.Trigger>
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
            <FloatingPanel.Body>
              {children}
            </FloatingPanel.Body>

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

export default Index;
