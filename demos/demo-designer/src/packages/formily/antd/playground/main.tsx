"use client"
import React, { useMemo } from "react"
import {
  Designer,
  DesignerToolsWidget,
  ViewToolsWidget,
  Workspace,
  OutlineTreeWidget,
  ResourceWidget,
  HistoryWidget,
  StudioPanel,
  CompositePanel,
  WorkspacePanel,
  ToolbarPanel,
  ViewportPanel,
  ViewDesignablePanel,
  ViewPanel,
  SettingsPanel,
  ComponentTreeWidget,
} from "#packages/react"
import { SettingsForm, setNpmCDNRegistry } from "#packages/react-settings-form"
import { createDesigner, GlobalRegistry, Shortcut, KeyCode } from "#packages/core"
import { ActionsWidget, PreviewWidget, SchemaEditorWidget, MarkupSchemaWidget, LogoWidget } from "./widgets"
import { saveSchema } from "./service"
import {
  Alert,
  Button,
  Form,
  Field,
  Input,
  Select,
  TreeSelect,
  Cascader,
  Radio,
  Checkbox,
  Slider,
  Rate,
  NumberPicker,
  Transfer,
  Password,
  DatePicker,
  TimePicker,
  Upload,
  Switch,
  Text,
  Card,
  ArrayCards,
  ObjectContainer,
  ArrayTable,
  Space,
  FormTab,
  FormCollapse,
  FormLayout,
  FormGrid,
} from "../components"
import { Stack, HStack, Tabs, Box } from "@chakra-ui/react"

import * as allSchemas from "../components/schemas"
import * as allLocales from "../components/locales"

setNpmCDNRegistry("//unpkg.com")

GlobalRegistry.registerDesignerLocales({
  "zh-CN": {
    sources: {
      Inputs: "Inputs",
      Layouts: "Layouts",
      Arrays: "Arrays",
      Displays: "Displays",
    },
  },
  "en-US": {
    sources: {
      Inputs: "Inputs",
      Layouts: "Layouts",
      Arrays: "Arrays",
      Displays: "Displays",
    },
  },
  "ko-KR": {
    sources: {
      Inputs: "Inputs",
      Layouts: "Layouts",
      Arrays: "Arrays",
      Displays: "Displays",
    },
  },
})

export const DesignablePlayground = () => {
  const engine = useMemo(
    () =>
      createDesigner({
        shortcuts: [
          new Shortcut({
            codes: [
              [KeyCode.Meta, KeyCode.S],
              [KeyCode.Control, KeyCode.S],
            ],
            handler(ctx) {
              saveSchema(ctx.engine)
            },
          }),
        ],
        rootComponentName: "Form",
      }),
    [],
  )

  console.log("GlobalRegistry", {
    DesignerToolsWidget: DesignerToolsWidget,
    ComponentTreeWidget: ComponentTreeWidget,
  })
  // @ts-ignore
  return (
    <Designer engine={engine} prefixCls="dn-" theme="light" position="fixed">
      <StudioPanel logo={<LogoWidget />} actions={<ActionsWidget />}>
        <Tabs.Root defaultValue="components" variant="plain" width='500px' height='full'>
          <Tabs.List bg="bg.muted" rounded="l3" p="1">
            <Tabs.Trigger value="components">
              Components
            </Tabs.Trigger>
            <Tabs.Trigger value="debug">
              Debug
            </Tabs.Trigger>
            <Tabs.Indicator rounded="l2" />
          </Tabs.List>
          <Tabs.Content value="components">
            <Box maxH='calc(100vh - 50px)' width='full'>
              <ResourceWidget
                sources={[
                  Alert,
                  Button,
                  Card,
                  Text,
                  Input,
                  Password,
                  NumberPicker,
                  Rate,
                  Slider,
                  Select,
                  TreeSelect,
                  Cascader,
                  Transfer,
                  Checkbox,
                  Radio,
                  DatePicker,
                  TimePicker,
                  Upload,
                  Switch,
                  ObjectContainer,
                  FormGrid,
                  FormTab,
                  FormLayout,
                  FormCollapse,
                  Space,

                  ArrayCards,
                  ArrayTable,
                ]}
              />
            </Box>
          </Tabs.Content>
          <Tabs.Content value="debug">
            <Stack h='full' width='full'>
              <OutlineTreeWidget />
              <HistoryWidget />
            </Stack>
          </Tabs.Content>
        </Tabs.Root>


        <Workspace id="form">
          <WorkspacePanel>
            <ToolbarPanel>
              <DesignerToolsWidget />
              <ViewToolsWidget use={["DESIGNABLE", "JSONTREE", "MARKUP", "PREVIEW"]} />
            </ToolbarPanel>
            <ViewportPanel style={{ height: "100%", background: "bg.panel" }}>
              <ViewDesignablePanel type="DESIGNABLE">
                {() => (
                  <ComponentTreeWidget
                    components={{
                      Alert,
                      Button,
                      Text,
                      Card,
                      Form,
                      Field,
                      Input,
                      Select,
                      TreeSelect,
                      Cascader,
                      Radio,
                      Checkbox,
                      Slider,
                      Rate,
                      NumberPicker,
                      Transfer,
                      Password,
                      DatePicker,
                      TimePicker,
                      Upload,
                      Switch,
                      ArrayCards,
                      ArrayTable,
                      Space,
                      FormTab,
                      FormCollapse,
                      FormGrid,
                      FormLayout,
                      ObjectContainer,
                    }}
                  />
                )}
              </ViewDesignablePanel>
              {/*<ViewPanel type="JSONTREE" scrollable={false}>*/}
              {/*  {(tree, onChange) => <SchemaEditorWidget tree={tree} onChange={onChange} />}*/}
              {/*</ViewPanel>*/}
              {/*<ViewPanel type="MARKUP" scrollable={false}>*/}
              {/*  {(tree) => <MarkupSchemaWidget tree={tree} />}*/}
              {/*</ViewPanel>*/}
              {/*<ViewPanel type="PREVIEW">{(tree) => <PreviewWidget tree={tree} />}</ViewPanel>*/}
            </ViewportPanel>
          </WorkspacePanel>
        </Workspace>
        <Tabs.Root defaultValue="jsonTree" variant="plain" width='500px' height='full'>
          <Tabs.List bg="bg.muted" rounded="l3" p="1">
            <Tabs.Trigger value="jsonTree">
              JSONTREE
            </Tabs.Trigger>
            <Tabs.Trigger value="markup">
              Markup
            </Tabs.Trigger>
            <Tabs.Trigger value="preview">
              Preview
            </Tabs.Trigger>
            <Tabs.Indicator rounded="l2" />
          </Tabs.List>
          <Tabs.Content value="jsonTree">
            <ViewportPanel style={{ height: "100%", background: "bg.panel" }}>
            <ViewPanel type="JSONTREE" scrollable={false}>
              {(tree, onChange) => <SchemaEditorWidget tree={tree} onChange={onChange} />}
            </ViewPanel>
            </ViewportPanel>
          </Tabs.Content>
          <Tabs.Content value="markup">
            {/* @ts-ignore */}
            <ViewportPanel style={{ height: "100%", background: "bg.panel" }}>
              <ViewPanel type="MARKUP" scrollable={false}>
                {(tree) => <MarkupSchemaWidget tree={tree} />}
              </ViewPanel>
            </ViewportPanel>
          </Tabs.Content>
          <Tabs.Content value="preview">
            {/* @ts-ignore */}
            <ViewportPanel style={{ height: "100%", background: "bg.panel" }}>
              <ViewPanel type="PREVIEW">{(tree) => <PreviewWidget tree={tree} />}</ViewPanel>
            </ViewportPanel>
          </Tabs.Content>
        </Tabs.Root>

        <SettingsPanel title="panels.PropertySettings">
          <SettingsForm uploadAction="https://www.mocky.io/v2/5cc8019d300000980a055e76" />
        </SettingsPanel>
      </StudioPanel>
    </Designer>
  )
}
