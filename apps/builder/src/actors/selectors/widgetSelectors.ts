

export const getCanvasWidgets =(state: any) => {
  return state.entities.canvasWidgets
}

export const getUsedWidgetTypes = (state: any) => {
  const { canvasWidgets } = getCanvasWidgets(state)
  const widgetTypes = new Set<string>();
  Object.values(canvasWidgets).forEach((widget: any) => {
    if (widget.type && !widget.type.startsWith("MODULE_WIDGET_")) {
      widgetTypes.add(widget.type);
    }
  });
  return Array.from(widgetTypes);
}
