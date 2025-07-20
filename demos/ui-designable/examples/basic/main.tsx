'use client'
import React, { useEffect } from 'react'
import {
  Designer,
  IconWidget,
  Workbench,
  Workspace,
  ViewPanel,
  DesignerToolsWidget,
  ViewToolsWidget,
  OutlineTreeWidget,
  ResourceWidget,
  StudioPanel,
  CompositePanel,
  WorkspacePanel,
  ToolbarPanel,
  ViewportPanel,
  SettingsPanel,
  HistoryWidget,
} from '#packages/react'
import { SettingsForm, MonacoInput } from '#packages/react-settings-form'
import { observer } from '@formily/react'
import {
  createDesigner,
  createResource,
  createBehavior,
  GlobalRegistry,
} from '#packages/core'
import { Content } from './content'
import { Space, Button, Radio } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
//import { Sandbox } from '@designable/react-sandbox'
import 'antd/dist/reset.css'

const RootBehavior = createBehavior({
  name: 'Root',
  selector: 'Root',
  designerProps: {
    droppable: true,
  },
  designerLocales: {
    'zh-CN': {
      title: 'Root',
    },
    'en-US': {
      title: 'Root',
    },
    'ko-KR': {
      title: 'Root',
    },
  },
})

const InputBehavior = createBehavior({
  name: 'Input',
  selector: (node) =>
    node.componentName === 'Field' && node.props['x-component'] === 'Input',
  designerProps: {
    propsSchema: {
      type: 'object',
      $namespace: 'Field',
      properties: {
        'field-properties': {
          type: 'void',
          'x-component': 'CollapseItem',
          title: 'Field properties',
          properties: {
            title: {
              type: 'string',
              'x-decorator': 'FormItem',
              'x-component': 'Input',
            },

            hidden: {
              type: 'string',
              'x-decorator': 'FormItem',
              'x-component': 'Switch',
            },
            default: {
              'x-decorator': 'FormItem',
              'x-component': 'ValueInput',
            },
          },
        },

        'component-styles': {
          type: 'void',
          title: 'Style',
          'x-component': 'CollapseItem',
          properties: {
            'style.width': {
              type: 'string',
              'x-decorator': 'FormItem',
              'x-component': 'SizeInput',
            },
            'style.height': {
              type: 'string',
              'x-decorator': 'FormItem',
              'x-component': 'SizeInput',
            },
            'style.display': {
              'x-component': 'DisplayStyleSetter',
            },
            'style.background': {
              'x-component': 'BackgroundStyleSetter',
            },
            'style.boxShadow': {
              'x-component': 'BoxShadowStyleSetter',
            },
            'style.font': {
              'x-component': 'FontStyleSetter',
            },
            'style.margin': {
              'x-component': 'BoxStyleSetter',
            },
            'style.padding': {
              'x-component': 'BoxStyleSetter',
            },
            'style.borderRadius': {
              'x-component': 'BorderRadiusStyleSetter',
            },
            'style.border': {
              'x-component': 'BorderStyleSetter',
            },
          },
        },
      },
    },
  },
  designerLocales: {
    'zh-CN': {
      title: 'Input',
      settings: {
        title: 'Title',
        hidden: 'Hidden',
        default: 'Default Value',
        style: {
          width: 'Width',
          height: 'Height',
          display: 'Display',
          background: 'Background',
          boxShadow: 'Box Shadow',
          font: 'Font',
          margin: 'Margin',
          padding: 'Padding',
          borderRadius: 'Border Radius',
          border: 'Border',
        },
      },
    },
    'en-US': {
      title: 'Input',
      settings: {
        title: 'Title',
        hidden: 'Hidden',
        default: 'Default Value',
        style: {
          width: 'Width',
          height: 'Height',
          display: 'Display',
          background: 'Background',
          boxShadow: 'Box Shadow',
          font: 'Font',
          margin: 'Margin',
          padding: 'Padding',
          borderRadius: 'Border Radius',
          border: 'Border',
        },
      },
    },
    'ko-KR': {
      title: 'Input',
      settings: {
        title: 'Title',
        hidden: 'Hidden',
        default: 'Default Value',
        style: {
          width: 'Width',
          height: 'Height',
          display: 'Display',
          background: 'Background',
          boxShadow: 'Box Shadow',
          font: 'Font',
          margin: 'Margin',
          padding: 'Padding',
          borderRadius: 'Border Radius',
          border: 'Border',
        },
      },
    },
  },
})

const CardBehavior = createBehavior({
  name: 'Card',
  selector: 'Card',
  designerProps: {
    droppable: true,
    resizable: {
      width(node, element) {
        const width = Number(
          node.props?.style?.width ?? element.getBoundingClientRect().width
        )
        return {
          plus: () => {
            node.props = node.props || {}
            node.props.style = node.props.style || {}
            node.props.style.width = width + 10
          },
          minus: () => {
            node.props = node.props || {}
            node.props.style = node.props.style || {}
            node.props.style.width = width - 10
          },
        }
      },
      height(node, element) {
        const height = Number(
          node.props?.style?.height ?? element.getBoundingClientRect().height
        )
        return {
          plus: () => {
            node.props = node.props || {}
            node.props.style = node.props.style || {}
            node.props.style.height = height + 10
          },
          minus: () => {
            node.props = node.props || {}
            node.props.style = node.props.style || {}
            node.props.style.height = height - 10
          },
        }
      },
    },
    translatable: {
      x(node, element, diffX) {
        const left =
          parseInt(node.props?.style?.left ?? element?.style.left) || 0
        const rect = element.getBoundingClientRect()
        return {
          translate: () => {
            node.props = node.props || {}
            node.props.style = node.props.style || {}
            node.props.style.position = 'absolute'
            node.props.style.width = rect.width
            node.props.style.height = rect.height
            node.props.style.left = left + parseInt(String(diffX)) + 'px'
          },
        }
      },
      y(node, element, diffY) {
        const top = parseInt(node.props?.style?.top ?? element?.style.top) || 0
        const rect = element.getBoundingClientRect()
        return {
          translate: () => {
            node.props = node.props || {}
            node.props.style = node.props.style || {}
            node.props.style.position = 'absolute'
            node.props.style.width = rect.width
            node.props.style.height = rect.height
            node.props.style.top = top + parseInt(String(diffY)) + 'px'
          },
        }
      },
    },
  },
  designerLocales: {
    'zh-CN': {
      title: 'Card',
    },
    'en-US': {
      title: 'Card',
    },
    'ko-KR': {
      title: 'Card',
    },
  },
})

GlobalRegistry.setDesignerBehaviors([RootBehavior, InputBehavior, CardBehavior])

const Input = createResource({
  title: {
    'zh-CN': 'Input',
    'en-US': 'Input',
    'ko-KR': 'Input',
  },
  icon: 'InputSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        title: 'Input',
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
      },
    },
  ],
})

const Card = createResource({
  title: {
    'zh-CN': 'Card',
    'en-US': 'Card',
    'ko-KR': 'Card',
  },
  icon: 'CardSource',
  elements: [
    {
      componentName: 'Card',
      props: {
        title: 'Card',
      },
    },
  ],
})

GlobalRegistry.registerDesignerLocales({
  'zh-CN': {
    sources: {
      Inputs: 'Inputs',
      Displays: 'Displays',
      Feedbacks: 'Feedbacks',
    },
  },
  'en-US': {
    sources: {
      Inputs: 'Inputs',
      Displays: 'Displays',
      Feedbacks: 'Feedbacks',
    },
  },
  'ko-KR': {
    sources: {
      Inputs: 'Inputs',
      Displays: 'Displays',
      Feedbacks: 'Feedbacks',
    },
  },
})

const Logo: React.FC = () => (
  <div style={{ display: 'flex', alignItems: 'center', fontSize: 14 }}>
    <IconWidget
      infer="Logo"
      style={{ margin: 10, height: 24, width: 'auto' }}
    />
  </div>
)

const Actions = observer(() => {
  const supportLocales = ['zh-cn', 'en-us', 'ko-kr']
  useEffect(() => {
    if (!supportLocales.includes(GlobalRegistry.getDesignerLanguage())) {
      GlobalRegistry.setDesignerLanguage('zh-cn')
    }
  }, [])

  return (
    <Space style={{ marginRight: 10 }}>
      <Radio.Group
        value={GlobalRegistry.getDesignerLanguage()}
        optionType="button"
        options={[
          { label: 'English', value: 'en-us' },
          { label: 'CN', value: 'zh-cn' },
          { label: 'KO', value: 'ko-kr' },
        ]}
        onChange={(e) => {
          GlobalRegistry.setDesignerLanguage(e.target.value)
        }}
      />
      <Button href="https://github.com/alibaba/designable" target="_blank">
        <GithubOutlined />
        Github
      </Button>
      <Button>Save</Button>
      <Button type="primary">Publish</Button>
    </Space>
  )
})

const engine = createDesigner()
export const BasicDesignableExample = () => {
  return (
    <Designer engine={engine}>
      <Workbench>
        <StudioPanel logo={<Logo />} actions={<Actions />}>
          <CompositePanel>
            <CompositePanel.Item title="panels.Component" icon="Component">
              <ResourceWidget title="sources.Inputs" sources={[Input, Card]} />
              <ResourceWidget
                title="sources.Displays"
                sources={[Input, Card]}
              />
              <ResourceWidget
                title="sources.Feedbacks"
                sources={[Input, Card]}
              />
            </CompositePanel.Item>
            <CompositePanel.Item title="panels.OutlinedTree" icon="Outline">
              <OutlineTreeWidget />
            </CompositePanel.Item>
            <CompositePanel.Item title="panels.History" icon="History">
              <HistoryWidget />
            </CompositePanel.Item>
          </CompositePanel>
          <Workspace id="form-1">
            <WorkspacePanel>
            <ToolbarPanel>
              <DesignerToolsWidget />
              <ViewToolsWidget />
            </ToolbarPanel>
            <ViewportPanel>
              <ViewPanel type="DESIGNABLE">{() => <Content />}</ViewPanel>
              <ViewPanel type="JSONTREE">
                {() => {
                  return (
                    <div style={{ overflow: 'hidden', height: '100%' }}>
                      <MonacoInput
                        language="javascript"
                        helpCode="//hello world"
                        defaultValue={`<div><div>123123<div>123123<div>123123<div>123123</div></div></div></div></div>`}
                      />
                    </div>
                  )
                }}
              </ViewPanel>
            </ViewportPanel>
          </WorkspacePanel>
          </Workspace>
          {/*<Workspace id="form-2">*/}
          {/*  <WorkspacePanel>*/}
          {/*    <ToolbarPanel>*/}
          {/*      <DesignerToolsWidget />*/}
          {/*      <ViewToolsWidget />*/}
          {/*    </ToolbarPanel>*/}
          {/*    <ViewportPanel>*/}
          {/*      <ViewPanel type="DESIGNABLE">{() => <Content />}</ViewPanel>*/}
          {/*      <ViewPanel type="JSONTREE">*/}
          {/*        {() => {*/}
          {/*          return (*/}
          {/*            <div style={{ overflow: 'hidden', height: '100%' }}>*/}
          {/*              <MonacoInput*/}
          {/*                language="javascript"*/}
          {/*                helpCode="//hello world"*/}
          {/*                defaultValue={`<div><div>123123<div>123123<div>123123<div>123123</div></div></div></div></div>`}*/}
          {/*              />*/}
          {/*            </div>*/}
          {/*          )*/}
          {/*        }}*/}
          {/*      </ViewPanel>*/}
          {/*    </ViewportPanel>*/}
          {/*  </WorkspacePanel>*/}
          {/*</Workspace>*/}
          <SettingsPanel title="panels.PropertySettings">
            <SettingsForm uploadAction="https://www.mocky.io/v2/5cc8019d300000980a055e76" />
          </SettingsPanel>
        </StudioPanel>
      </Workbench>
    </Designer>
  )
}



