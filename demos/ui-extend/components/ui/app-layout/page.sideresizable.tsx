'use client';
import './style.css'
import { defineSlotRecipe, useSlotRecipe } from '@chakra-ui/react';
import { Portal, FloatingPanel } from '@ui-collection-kit/unstyled-react';
import { ArrowDownLeft, Maximize2, Minus, XIcon } from 'lucide-react';

import { Box } from '@chakra-ui/react';

const floatingPanelRecipe = defineSlotRecipe({
  slots: [
    "trigger",
    "positioner",
    "content",
    "header",
    "body",
    "title",
    "resizeTrigger",
    "dragTrigger",
    "stageTrigger",
    "closeTrigger",
    "control"
  ],
  base: {
    "content": {

    }

  }
})


import { useSidePanel } from '#actors/hooks/useSidePanel';

export const PageSideResizable = ({ actorId, children }: any) => {
  const {
    sidePanelId,
    sidePanelContent,
    sendToSidePanel,
    onExpandChange,
    onPin,
    onExpand,
    isReady,
    isVertical
  } = useSidePanel(actorId);

  //
  // const [expand, setExpand] = useState(true);
  // const [pin, setPin] = useState(true);

  return (
    isReady && (
      <Box
        css={{
          position: 'relative',
          background: 'bg.panel',
          height: (!isVertical && 'full')
        }}
        asChild
      >
        <FloatingPanel.Root
          open={true}

        >
          {/*<FloatingPanel.Trigger asChild>*/}
          {/*  {trigger}*/}
          {/*</FloatingPanel.Trigger>*/}
          {/*<Portal>*/}
            <FloatingPanel.Positioner style={{ position: 'relative', top: 0, left: 0, height: 'full', flex: 1 }}

            >
              <FloatingPanel.Content


              >
                <FloatingPanel.DragTrigger>
                  <FloatingPanel.Header>
                    <FloatingPanel.Title>floating title</FloatingPanel.Title>
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
          {/*</Portal>*/}
        </FloatingPanel.Root>
      </Box>
    )
  );
};
