export interface ResizablePanelsProps {
  className?: string;
  orientation?: 'vertical' | 'horizontal';
  firstPanel: PanelProps;
  secondPanel: PanelProps;
  pageTitle?: string;
  hideSecondPanel?: boolean;
}

export interface ResizablePanelsLeftProps extends ResizablePanelsProps {
  hideFirstPanel?: boolean;
}

export interface PanelProps {
  children: React.ReactNode;
  minWidth: number;
  className?: string;
  cardClassName?: string;
  flex?: number;
  overlay?: Overlay;
  onStopResize?: (newFlex: number | undefined) => void;
  title?: string;
  wrapInCard?: boolean;
  allowScroll?: boolean;
}

export interface Overlay {
  displayThreshold: number;
  header: string;
  rotation?: 'clockwise' | 'counter-clockwise';
}

export interface PanelContainerProps {
  className?: string;
  dimensions?: {
    width: number;
    height: number;
  };
  overlay?: Overlay;
}
