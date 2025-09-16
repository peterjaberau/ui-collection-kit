import { WidgetRenderer } from "#modules/registry/widgets-registry"
// import { WidgetRenderer } from "../../widgets"

export const FactoryRenderer = (node: any) => {
  const componentName = node.getComponent()
  return <WidgetRenderer name={componentName}  />
}
