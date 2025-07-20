'use client';
import './style.css';
import { Box, Stack } from '@chakra-ui/react';
import { Portal, FloatingPanel } from '@ui-collection-kit/unstyled-react';
import { ArrowDownLeft, Maximize2, Minus, XIcon } from 'lucide-react';
import { useState } from 'react';

const dockStyle = {
  flex: '1 1 auto',
  display: 'flex !important'
}

const getRelativePosition = (position: any) => {
  switch (position) {
    case 'left':
      return {
        position: 'relative !important',
        top: '0px !important',
        left: '0px !important'
      }
    case 'right':
      return {
        position: 'relative !important',
        top: '0px !important',
        right: '0px !important'
      }
    case 'bottom':
      return {
        position: 'relative !important',
        bottom: '0px !important',
        left: '0px !important',
        right: '0px !important'
      }
    case 'top':
      return {
        position: 'relative !important',
        top: '0px !important',
        left: '0px !important',
        right: '0px !important'
      }
    default:
      return {}
  }

}

const getAbsolutePosition = (position: any) => {
  switch (position) {
    case 'left':
      return {
        position: 'absolute !important',
        top: '44px !important',
        left: '44px !important',
        bottom: '44px !important'
      }
    case 'right':
      return {
        position: 'absolute !important',
        top: '44px !important',
        right: '44px !important',
        bottom: '44px !important',
      }
    case 'bottom':
      return {
        position: 'absolute !important',
        left: '44px !important',
        right: '44px !important',
        bottom: '44px !important'
      }
    case 'top':
      return {
        position: 'absolute !important',
        left: '44px !important',
        right: '44px !important',
        top: '44px !important'
      }
    default:
      return {}
  }

}


const Index = ({
  position,
  float = false,
  children,
}: {
  position?: 'left' | 'right' | 'top' | 'bottom';
  float?: boolean;
  children?: any;
}) => {
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [size, setSize] = useState({ width: 400, height: 300 });
  const [open, setOpen] = useState(true);

  return (
    <FloatingPanel.Root
      draggable={false}
      open={open}
      defaultPosition={{ x: 0, y: 0 }}
      position={{ x: 0, y: 0 }}
      strategy={'fixed'}
    >
      <Stack
        background={'red'}
        height='full'
      >
        {/*<Portal>*/}
        <FloatingPanel.Positioner asChild>
          <Stack css={{
            flex: '1 1 auto',
            display: 'flex !important',
            ...(float ? getAbsolutePosition(position) : getRelativePosition(position))


            // position: (float ? 'absolute': 'relative') + " !important",
            // top: (float ? '44px': '0px') + " !important",
            // left: (float ? '44px': '0px') + " !important",
            // bottom: (float ? '44px !important': undefined) + " !important",
          }}>
          <FloatingPanel.Content>
            <Stack height={'full'} minHeight={0} flex={1}>
              <FloatingPanel.DragTrigger>
                <FloatingPanel.Header>
                  <FloatingPanel.Title>draggable panel</FloatingPanel.Title>
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

              {position === 'left' && <FloatingPanel.ResizeTrigger axis='e' />}
              {position === 'right' && <FloatingPanel.ResizeTrigger axis='w' />}
              {position === 'bottom' && <FloatingPanel.ResizeTrigger axis='n' />}
              {position === 'top' && <FloatingPanel.ResizeTrigger axis='s' />}
              {/*<FloatingPanel.ResizeTrigger axis='n' />*/}
              {/*<FloatingPanel.ResizeTrigger axis='w' />*/}
              {/*<FloatingPanel.ResizeTrigger axis='s' />*/}
              {/*<FloatingPanel.ResizeTrigger axis='ne' />*/}
              {/*<FloatingPanel.ResizeTrigger axis='se' />*/}
              {/*<FloatingPanel.ResizeTrigger axis='sw' />*/}
              {/*<FloatingPanel.ResizeTrigger axis='nw' />*/}
            </Stack>
          </FloatingPanel.Content>
          </Stack>
        </FloatingPanel.Positioner>
        {/*</Portal>*/}
      </Stack>
    </FloatingPanel.Root>
  );
};

export default Index;

/*

Left, Pinned, Fixed
    flex-shrink: 0;
    border: 0 solid #f0f0f0;
    border-inline-end-width: 1px;
    position: relative;


Bottom, Pinned, Fixed
    flex-shrink: 0;
    border: 0 solid #f0f0f0;
    border-block-start-width: 1px;
    position: relative;


Left, Pinned, Floating
    flex-shrink: 0;
    border: 0 solid #f0f0f0;
    border-inline-end-width: 1px;
    position: absolute;
    z-index: 200;
    inset-block: 0px 0;
    inset-inline-start: 0;
    height: calc(100% - 0px);
 */
