export type {
  ExpandCollapseDetails as SplitterExpandCollapseDetails,
  PanelData as SplitterPanelData,
  ResizeDetails as SplitterResizeDetails,
  ResizeEndDetails as SplitterResizeEndDetails,
} from '@ui-collection-kit/splitter'
export { SplitterContext, type SplitterContextProps } from './splitter-context'
export { SplitterPanel, type SplitterPanelBaseProps, type SplitterPanelProps } from './splitter-panel'
export {
  SplitterResizeTrigger,
  type SplitterResizeTriggerBaseProps,
  type SplitterResizeTriggerProps,
} from './splitter-resize-trigger'
export { SplitterRoot, type SplitterRootBaseProps, type SplitterRootProps } from './splitter-root'
export {
  SplitterRootProvider,
  type SplitterRootProviderBaseProps,
  type SplitterRootProviderProps,
} from './splitter-root-provider'
export { splitterAnatomy } from './splitter.anatomy'
export { useSplitter, type UseSplitterProps, type UseSplitterReturn } from './use-splitter'
export { useSplitterContext, type UseSplitterContext } from './use-splitter-context'

export * as Splitter from './splitter'
