
export const WidgetJsonView = (props: any) => {
  return (
    <>
      WidgetJsonView - {props.node.getName()}
    </>
  )
}


export const WidgetSimpleForm = (props: any) => {
  return (
    <>
      WidgetSimpleForm- {props.node.getName()}
    </>
  )
}

export const WidgetMUIComponent = (props: any) => {
  return (
    <>
      WidgetMUIComponent- {props.node.getName()}
    </>
  )
}

export const WidgetMUIDataGrid = (props: any) => {
  return (
    <>
      WidgetMUIDataGrid - {props.node.getName()}
    </>
  )
}

export const WidgetAGGridExample = (props: any) => {
  return (
    <>
      WidgetAGGridExample - {props.node.getName()}
    </>
  )
}

export const WidgetChart = (props: any) => {
  return (
    <>
      WidgetChart - {props.node.getName()}
    </>
  )
}

// chart

export const WidgetMapComponent = (props: any) => {
  return (
    <>
      WidgetMapComponent - {props.node.getName()}
    </>
  )
}

export const WidgetSimpleTable = (props: any) => {
  return (
    <>
      WidgetSimpleTable - {props.node.getName()}
    </>
  )
}

export const WidgetSub = (props: any) => {
  return (
    <>
      WidgetSub - {props.node.getName()}
    </>
  )
}

export const WidgetText = (props: any) => {
  return (
    <>
      WidgetText - {props.node.getName()}
    </>
  )
}

export const WidgetNewFeatures = (props: any) => {
  return (
    <>
      WidgetNewFeatures - {props.node.getName()}
    </>
  )
}

export const WidgetMultitype = (props: any) => {
  return (
    <>
      WidgetMultitype - {props.node.getName()}
    </>
  )
}

export const WidgetTesting = (props: any) => {
  return (
    <>
      WidgetTesting - {props.node.getName()}
    </>
  )
}

export const WidgetPlaceholder = (props: any) => {
  return (
    <>
      WidgetPlaceholder {props.node.getName()}
    </>
  )
}

export const WidgetsMap = (componentName: string) => {
  const map: any = {
    json: WidgetJsonView,
    simpleform: WidgetSimpleForm,
    mui: WidgetMUIComponent,
    muigrid: WidgetMUIDataGrid,
    aggrid: WidgetAGGridExample,
    map: WidgetMapComponent,
    grid: WidgetSimpleTable,
    chart: WidgetChart,
    sub: WidgetSub,
    text: WidgetText,
    newfeatures: WidgetNewFeatures,
    multitype: WidgetMultitype,
    testing: WidgetTesting,
    placeholder: WidgetPlaceholder
  }
  return map[componentName]
}

export const WidgetRenderer = (props: any) => {
  const InternalWidgetRenderer = WidgetsMap(props.componentName)

  return (
    <InternalWidgetRenderer node={props.node} {...props} />
  )
}
