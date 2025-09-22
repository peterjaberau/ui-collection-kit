import { PanelResizeHandle, type PanelResizeHandleProps } from "react-resizable-panels";
import "./style.css";

/**
 * Specialized version of PanelResizeHandle with styling applied
 */
export function PanelDragger(props: PanelResizeHandleProps) {
	return (
		<PanelResizeHandle
			className={'dragger'}
			{...props}
		/>
	);
}
