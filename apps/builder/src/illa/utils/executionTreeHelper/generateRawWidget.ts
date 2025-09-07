import { generateAllTypePathsFromWidgetConfig } from "../generators/generateAllTypePathsFromWidgetConfig"
import { widgetBuilder } from "#illa/widgetLibrary/widgetBuilder"

export const generateRawWidget = (widget: any) => {
  const { $widgetType } = widget
  const widgetConfig = widgetBuilder($widgetType)
  if (!widgetConfig) return widget
  const panelConfig = widgetConfig.panelConfig
  const { validationPaths } = generateAllTypePathsFromWidgetConfig(
    panelConfig,
    widget,
  )

  return {
    ...widget,
    $validationPaths: validationPaths,
  }
}
