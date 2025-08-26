import dynamic from "next/dynamic"

// Create widget loader map using next/dynamic
const WidgetLoaders = new Map<string, any>([
  ["BUTTON_WIDGET", dynamic(() => import("./ButtonWidget"))],
  ["TEXT_WIDGET", dynamic(() => import("./TextWidget"))],
  ["DIVIDER_WIDGET", dynamic(() => import("./DividerWidget"))],
])

// Function to get a specific widget by type
export const loadWidget = (type: string): any => {
  const widget = WidgetLoaders.get(type)
  if (!widget) {
    throw new Error(`Widget type ${type} not found`)
  }
  return widget
}

// Function to get all widgets
export const loadAllWidgets = (): Map<string, any> => {
  return new Map(WidgetLoaders)
}
