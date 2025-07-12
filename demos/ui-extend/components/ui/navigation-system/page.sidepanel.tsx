'use client';
import {
  DraggablePanel,
  DraggablePanelBody,
  DraggablePanelContainer,
  DraggablePanelFooter,
  DraggablePanelHeader,
} from '@lobehub/ui';
import {
  type HTMLAttributes,
  type CSSProperties,
} from 'react';
import { Box } from '@chakra-ui/react';

interface PageSidePanelProps {
  placement?: 'left' | 'right' | 'top' | 'bottom';
  children?: React.ReactNode;
  [key: string]: any;
}
type PlacementType = 'right' | 'left' | 'top' | 'bottom';
export type DivProps = HTMLAttributes<HTMLDivElement>;
export interface DraggablePanelProps extends DivProps {
  classNames?: {
    content?: string;
    handle?: string;
  };
  defaultExpand?: boolean;
  defaultSize?: any;
  destroyOnClose?: boolean;
  expand?: boolean;
  expandable?: boolean;
  fullscreen?: boolean;
  headerHeight?: number;
  maxHeight?: number;
  maxWidth?: number;
  minHeight?: number;
  minWidth?: number;
  mode?: 'fixed' | 'float';
  onExpandChange?: (expand: boolean) => void;
  onSizeChange?: (delta: any, size?: any) => void;
  onSizeDragging?: (delta: any, size?: any) => void;
  pin?: boolean;
  placement: PlacementType;
  resize?: any;
  showHandleWhenCollapsed?: boolean;
  showHandleWideArea?: boolean;
  size?: Partial<any>;
  styles?: {
    content?: CSSProperties;
    handle?: CSSProperties;
  };
}

import { useSidePanel } from '#actors/hooks/useSidePanel';

export const PageSidePanel = ({ actorId, children }: any) => {
  const {
    sidePanelId,
    sidePanelContent,
    sendToSidePanel,
    onExpandChange,
    onPin,
    onExpand,
    isReady
  } = useSidePanel(actorId);

  //
  // const [expand, setExpand] = useState(true);
  // const [pin, setPin] = useState(true);

  return (
    isReady && (
      <Box
        css={{
          background: 'bg.panel',
          height: 'full',
        }}
        asChild
      >
        <DraggablePanel
          placement={sidePanelContent.placement || 'left'}
          mode={sidePanelContent.mode || 'fixed'}
          defaultExpand={sidePanelContent.defaultExpand || true}
          expand={sidePanelContent.expand}
          pin={sidePanelContent.pin}
          defaultSize={sidePanelContent.defaultSize}
          onExpandChange={(e) => onExpandChange({ expand: e })}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <DraggablePanelContainer style={{ flex: 1 }}>
            <DraggablePanelHeader
              pin={sidePanelContent.pin}
              position={sidePanelContent.placement}
              setExpand={onExpand}
              setPin={onPin}
              title={sidePanelContent.title || 'Untitled'}
            />
            <DraggablePanelBody>
              {children}
              <h1>{sidePanelId}</h1>
              {JSON.stringify(sidePanelContent, null, 2)}
            </DraggablePanelBody>
            <DraggablePanelFooter>Footer</DraggablePanelFooter>
          </DraggablePanelContainer>
        </DraggablePanel>
      </Box>
    )
  );
};
