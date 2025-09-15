import { WidgetRenderer } from "#demos/flexlayout/components/widgets"

export const FactoryRenderer = (node: any) => {
  const componentName = node.getComponent()
  return <WidgetRenderer componentName={componentName} node={node} />
}
