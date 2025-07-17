import { PanelResizeHandle, type PanelResizeHandleProps } from "react-resizable-panels";
import "./style.css";


export function PanelDragger(props: PanelResizeHandleProps) {
  return (
    <PanelResizeHandle
      className={'dragger'}
      {...props}
    />
  );
}
