import React, { memo, Ref, useMemo } from "react"
import { useUiActor } from "#actors/hooks/useUiActor"
import { useEntitiesActor } from "#actors/hooks/useEntitiesActor"

export const defaultFixedCanvasProps = {
  parentRowSpace: 1,
  parentColumnSpace: 1,
  topRow: 0,
  leftColumn: 0,
  containerStyle: "none",
  detachFromLayout: true,
  shouldScrollContents: false,
}
export const CANVAS_DEFAULT_MIN_HEIGHT_PX = 380
export const DEFAULT_GRID_ROW_HEIGHT = 380

export const FixedLayoutEditorWrapper = (props?: any) => {
  return <div>FixedLayoutEditorWrapper</div>
}
export const FixedLayoutViewerWrapper = (props?: any) => {
  return <div>FixedLayoutViewerWrapper</div>
}
export const FixedLayoutEditorCanvas = (props?: any) => {
  return <div>FixedLayoutEditorCanvas</div>
}
export const FixedLayoutViewerCanvas = (props?: any) => {
  return <div>FixedLayoutViewerCanvas</div>
}

const getFixedLayoutSystemCanvasWrapper = () => {
  const { rendererMode } = useEntitiesActor()

  if (rendererMode === "CANVAS") {
    return FixedLayoutEditorCanvas
  } else {
    return FixedLayoutViewerCanvas
  }
}
const getFixedLayoutSystemWrapper = () => {
  const { rendererMode } = useEntitiesActor()

  if (rendererMode === "CANVAS") {
    return FixedLayoutEditorWrapper
  } else {
    return FixedLayoutViewerWrapper
  }
}

// property enhancer
export const getLabelWidth = (props?: any) => {
  return (Number(props.labelWidth) || 0) * props.parentColumnSpace
}
export const getFixedLayoutComponentDimensions: any = (props?: any) => {
  const { bottomRow, leftColumn, parentColumnSpace, parentRowSpace, rightColumn, topRow }: any = props

  return {
    componentWidth: (rightColumn - leftColumn) * parentColumnSpace,
    componentHeight: (bottomRow - topRow) * (parentRowSpace || DEFAULT_GRID_ROW_HEIGHT),
  } as any
}
export const getFixedLayoutSystemWidgetPropsEnhancer = (props?: any) => {
  const { componentHeight, componentWidth } = getFixedLayoutComponentDimensions(props)
  const labelComponentWidth = getLabelWidth(props)
  return {
    ...props,
    componentHeight,
    componentWidth,
    labelComponentWidth,
  }
}
export const getFixedLayoutSystemCanvasPropsEnhancer = (props?: any) => {
  const enhancedProps = {
    minHeight: CANVAS_DEFAULT_MIN_HEIGHT_PX,
    ...props,
    ...defaultFixedCanvasProps,
  }
  const { componentHeight, componentWidth }: any = getFixedLayoutComponentDimensions(enhancedProps)

  return {
    ...enhancedProps,
    componentHeight,
    componentWidth,
  }
}

export const getFixedLayoutSystem: any = () => {
  return {
    widgetSystem: {
      WidgetWrapper: getFixedLayoutSystemWrapper(),
      propertyEnhancer: getFixedLayoutSystemWidgetPropsEnhancer,
    },
    canvasSystem: {
      Canvas: getFixedLayoutSystemCanvasWrapper(),
      propertyEnhancer: getFixedLayoutSystemCanvasPropsEnhancer,
    },
  }
}

export const getLayoutSystem = () => {
  // TODO: multi-use cases. getAutoLayoutSystem, getAnvilLayoutSystem based on LayoutSystemTypes
  return getFixedLayoutSystem()
}

const LayoutCanvas = memo(() => {
  const { currentApplication } = useUiActor()
  const layoutType = currentApplication?.applicationDetail?.appPositioning?.type || "FIXED"

  const { canvasSystem } = useMemo(() => {
    return getLayoutSystem()
  }, [layoutType])

  // inside getFixedLayoutSystem
  const { Canvas, propertyEnhancer }: any = canvasSystem

  return <Canvas {...propertyEnhancer()} />
})

export const PositionedContainer = (props?: any, ref: Ref<HTMLDivElement> | any) => {
  const { componentHeight, componentWidth } = props;

}

export const PositionedComponentLayer = (props: any) => {
  return <>{props.children}</>
}
export const FixedLayoutViewerWidgetOnion: any = (props: any) => {
  return <>{props.children}</>
}


export const renderCanvas = (props: any) => {

  return (
    <FixedLayoutViewerWidgetOnion>
      <PositionedComponentLayer>
        {props.children}
      </PositionedComponentLayer>
    </FixedLayoutViewerWidgetOnion>
  )
}
