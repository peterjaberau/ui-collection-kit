import React, { Fragment, useState } from "react"
import { observer } from "@formily/react"
import { Accordion, Center, Span } from "@chakra-ui/react"
import { TreeNode, createBehavior, createResource } from "#packages/core"
import { useTreeNode, useNodeIdProps, DroppableWidget, TreeNodeWidget, DnFC } from "#packages/react"
import { toArr } from "@formily/shared"
import { LoadTemplate } from "../../common/LoadTemplate"
import { useDropTemplate } from "../../hooks"
import { createVoidFieldSchema } from "../Field"
import { AllSchemas } from "../../schemas"
import { AllLocales } from "../../locales"
import { matchComponent } from "../../shared"

const parseCollapse = (parent: TreeNode) => {
  const tabs: TreeNode[] = []
  parent.children.forEach((node) => {
    if (matchComponent(node, "FormCollapse.CollapsePanel")) {
      tabs.push(node)
    }
  })
  return tabs
}

export const FormCollapse: DnFC<any> | any = observer((props) => {
  const [activeKey, setActiveKey] = useState<string | string[]>([])
  const node = useTreeNode()
  const nodeId = useNodeIdProps()
  const designer = useDropTemplate("FormCollapse", (source) => {
    const panelNode = new TreeNode({
      componentName: "Field",
      props: {
        type: "void",
        "x-component": "FormCollapse.CollapsePanel",
        "x-component-props": {
          header: `Unnamed Title`,
        },
      },
      children: source,
    })

    setActiveKey(toArr(activeKey).concat(panelNode.id))
    return [panelNode]
  })
  const panels = parseCollapse(node)
  const renderCollapse = () => {
    if (!node.children?.length) return <DroppableWidget />
    return (
      <Accordion.Root
        multiple={true}
        // @ts-ignore
        collapsible={true}
        variant="enclosed"
        orientation="vertical"
        value={activeKey.map(String)}
        {...props}
        // onValueChange={(e) => {
        //   setActiveKey(toArr(e.value).map(String))
        // }}
        // activeKey={panels.map((tab) => tab.id)
      >
        {panels.map((panel) => {
          const props = panel.props["x-component-props"] || {}
          return (
            <Accordion.Item
              {...props}
              // style={{ ...props.style }}
              key={panel.id}
              value={String(panel.id)}
            >
              <Accordion.ItemTrigger key={`${panel.id}-trigger`}>
                <Span data-content-editable="x-component-props.header" data-content-editable-node-id={panel.id}>
                  {props.header}
                </Span>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent key={`${panel.id}-content`}>
                <Accordion.ItemBody>
                  {React.createElement(
                    "div",
                    {
                      [designer.props.nodeIdAttrName]: panel.id,
                      style: {
                        padding: "20px 0",
                      },
                    },
                    panel.children.length ? (
                      <TreeNodeWidget node={panel} />
                    ) : (
                      <DroppableWidget placeholder>
                        <Center
                          css={{
                            height: "60px",
                            borderRadius: "md",
                            background: "bg.muted",
                            color: "fg.muted",
                            fontSize: "xs",
                            fontWeight: "light",
                          }}
                        >
                          Drag and drop components here
                        </Center>
                      </DroppableWidget>
                    ),
                  )}
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          )
        })}
      </Accordion.Root>
    )
  }
  return (
    <div {...nodeId}>
      {renderCollapse()}
      <LoadTemplate
        actions={[
          {
            title: node.getMessage("addCollapsePanel"),
            icon: "AddPanel",
            onClick: () => {
              const tabPane = new TreeNode({
                componentName: "Field",
                props: {
                  type: "void",
                  "x-component": "FormCollapse.CollapsePanel",
                  "x-component-props": {
                    header: `Unnamed Title`,
                  },
                },
              })
              node.append(tabPane)
              const keys = toArr(activeKey)
              setActiveKey(keys.concat(tabPane.id))
            },
          },
        ]}
      />
    </div>
  )
})

FormCollapse.CollapsePanel = (props) => {
  return <Fragment>{props.children}</Fragment>
}

FormCollapse.Behavior = createBehavior(
  {
    name: "FormCollapse",
    extends: ["Field"],
    selector: (node) => node.props["x-component"] === "FormCollapse",
    designerProps: {
      droppable: true,
      allowAppend: (target, source) =>
        target.children.length === 0 ||
        source.every((node) => node.props["x-component"] === "FormCollapse.CollapsePanel"),
      propsSchema: createVoidFieldSchema(AllSchemas.FormCollapse),
    },
    designerLocales: AllLocales.FormCollapse,
  },
  {
    name: "FormCollapse.CollapsePanel",
    extends: ["Field"],
    selector: (node) => node.props["x-component"] === "FormCollapse.CollapsePanel",
    designerProps: {
      droppable: true,
      allowDrop: (node) => node.props["x-component"] === "FormCollapse",
      propsSchema: createVoidFieldSchema(AllSchemas.FormCollapse.CollapsePanel),
    },
    designerLocales: AllLocales.FormCollapsePanel,
  },
)

FormCollapse.Resource = createResource({
  icon: "CollapseSource",
  elements: [
    {
      componentName: "Field",
      props: {
        type: "void",
        "x-component": "FormCollapse",
      },
    },
  ],
})
