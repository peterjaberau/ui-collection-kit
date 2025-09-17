import { useSelector } from "@xstate/react"
import { useFlexLayoutInstance } from "./useFlexLayoutInstance"

//https://rawgit.com/caplin/FlexLayout/demos/demos/v0.8/typedoc/classes/Model.html#getnodebyid
export function useFlexLayoutNode({ node, id }?: any) {
  const { layoutModel } = useFlexLayoutInstance()
  const nodeRef = node ? node : layoutModel.getNodeById(id)
  const nodeParentRef = nodeRef.parent

  const attributes = nodeRef?.attributes
  const type = attributes?.type
  const nodeId = attributes?.id
  const name = attributes?.name
  const componentName = attributes?.component

  const config = attributes?.config
  const configParams = config?.params
  const configProps = config?.props
  const configData = config?.data

  const hasChildren = nodeRef?.children?.length > 0
  const path = nodeRef?.path
  const rendered = nodeRef?.rendered
  const renderedName = nodeRef?.renderedName
  const visible = nodeRef?.visible

  /*custom or extended*/
  const scope = configParams?.scope

  return {
    nodeRef,
    nodeParentRef,
    attributes,
    type,
    nodeId,
    name,
    componentName,
    config,
    configParams,
    configProps,
    configData,
    hasChildren,
    path,
    rendered,
    renderedName,
    visible,

    scope,
  }
}

/*

const node = {
  attributes: {
    altName: null,
    borderHeight: null,
    borderWidth: null,
    className: null,
    closeType: null,
    config: {
      "params": {
        "scope": "result"
      },
      "data": {},
      "props": {}
    },
    contentClassName: null,
    enableClose: null,
    enableDrag: null,
    enablePopout: null,
    enablePopoutIcon: null,
    enablePopoutOverlay: null,
    enableRename: null,
    enableRenderOnDemand: null,
    enableWindowReMount: null,
    helpText: null,
    icon: "article",
    id: "result-json",
    maxHeight: null,
    maxWidth: null,
    minHeight: null,
    minWidth: null,
    name: "Result",
    tabsetClassName: null,
    type: "tab",



  },
  children: [],
  extra: {},
  listeners: {},
  model: {},
  moveableElement: "",
  parent: {
    attributes: {
      "type": "tabset",
      "id": "#b0cf9a72-afe7-408e-aa2c-28f6815f720b",
      "weight": 100,
      "selected": 0,

      autoSelectTab: null,
      classNameTabStrip: null,
      config: {},
      enableActiveIcon: null,

      enableDrop: null,
      enableMaximize: null,
      enableSingleTabStretch: null,
      enableTabScrollbar: null,
      enableTabStrip: null,
      enableTabWrap: null,
      maxHeight: null,
      maxWidth: null,
      minHeight: null,
      minWidth: null,
      name: "Result",
      tabLocation: null,


    },
    calculatedMaxHeight: 10044,
    calculatedMaxWidth: 9999,
    calculatedMinHeight: 145,
    calculatedMinWidth: 130,
    children: []
  },
  path: "",
  rect: {
    "x": 1140.65625,
    "y": 45,
    "width": 562.328125,
    "height": 574
  },
  rendered: true,
  renderedName: "Result",
  tabRect: {
    "x": 1148.65625,
    "y": 4,
    "width": 117.3125,
    "height": 36
  },
  tabStamp: "div.flexlayout__drag_rect",
  visible: true,
}



 */
