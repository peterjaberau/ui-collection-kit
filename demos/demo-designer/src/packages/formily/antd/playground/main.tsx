"use client"
import React, { useEffect, useMemo, useState } from "react"
import { createDesigner, Shortcut, KeyCode } from "#packages/core"
import { saveSchema } from "#packages/formily/antd/playground/service"
import { MultiLayersPanel } from "#components/ui/multi-layers-panel"
import { useDesignerActor } from "#packages/actors/hooks/useDesignerActor"
import { useDesignerEngineActor } from "#packages/actors/hooks/useDesignerEngineActor"
import {
  Designer,
  DesignerToolsWidget,
  ViewToolsWidget,
  Workspace,
  OutlineTreeWidget,
  ResourceWidget,
  HistoryWidget,
  StudioPanel,
  WorkspacePanel,
  ToolbarPanel,
  ViewportPanel,
  ViewDesignablePanel,
  ViewPanel,
  ComponentTreeWidget,
} from "#packages/react"

import {
  SettingsField,
  SettingsComponent,
  SettingsComponentStyle,
  SettingsFormProps,
  SettingsDecorator,
  SettingsDecoratorStyle,
  setNpmCDNRegistry,
} from "#packages/react-settings-form"
import { GlobalRegistry } from "#packages/core"
import { ActionsWidget, PreviewWidget, SchemaEditorWidget, MarkupSchemaWidget, LogoWidget } from "./widgets"

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
import { Simulator } from "#packages/react"
import { SelectedNode } from "./widgets/extended/SelectedNode"
import { CurrentWorkbench } from "./widgets/extended/CurrentWorkbench"

import * as allSchemas from "../components/schemas"
import * as allLocales from "../components/locales"

const mockPanels: any = {
  filters: [
    { label: "React", value: "react" },
    { label: "Solid", value: "solid" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
    { label: "Preact", value: "preact" },
    { label: "Qwik", value: "qwik" },
    { label: "Lit", value: "lit" },
    { label: "Alpine.js", value: "alpinejs" },
    { label: "Ember", value: "ember" },
    { label: "Next.js", value: "nextjs" },
  ],
  items: [
    {
      title: "Presets",
      value: "presets",
      sections: [
        {
          title: "Components",
          value: "components",
          content: (
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
          ),
        },
        {
          title: "Outlines",
          value: "outlines",
          content: <OutlineTreeWidget />,
        },
        {
          title: "History",
          value: "history",
          content: <HistoryWidget />,
        },
      ],
    },
    {
      title: "View Tools",
      value: "view-tools",
      sections: [
        {
          title: "JSONTREE",
          value: "jsonTree",
          content: (
            <ViewPanel scrollable={false}>
              {(tree, onChange) => <SchemaEditorWidget tree={tree} onChange={onChange} />}
            </ViewPanel>
          ),
        },
        {
          title: "Markup",
          value: "markup",
          content: <ViewPanel scrollable={false}>{(tree) => <MarkupSchemaWidget tree={tree} />}</ViewPanel>,
        },
        {
          title: "Preview",
          value: "preview",
          content: <ViewPanel>{(tree) => <PreviewWidget tree={tree} />}</ViewPanel>,
        },
      ],
    },

    // component-group, decorator-group, component-style-group, decorator-style-group, field-group
    {
      title: "Property Settings",
      value: "property-settings",
      sections: [
        {
          title: "Form Properties",
          value: "form-group",
          content: <SettingsFormProps />,
        },
        {
          title: "Fields Properties",
          value: "field-group",
          content: <SettingsField />,
        },

        {
          title: "Component Properties",
          value: "component-group",
          content: <SettingsComponent />,
        },

        {
          title: "Component Style",
          value: "component-style-group",
          content: <SettingsComponentStyle />,
        },

        {
          title: "Decorator Properties",
          value: "decorator-group",
          content: <SettingsDecorator />,
        },

        {
          title: "Decorator Style",
          value: "decorator-style-group",
          content: <SettingsDecoratorStyle />,
        },
      ],
    },

    {
      title: "State",
      value: "state",
      sections: [
        {
          title: "Select Node",
          value: "select-node",
          content: <SelectedNode />,
        },
        {
          title: "Current Workbench",
          value: "current-workbench",
          content: <CurrentWorkbench />,
        },
      ],
    },

  ],
}

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
  // const { designerEngine } = useDesignerEngineActor()

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])



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
        rootComponentName: 'Form',
      }),
    []
  )

  return (
    <Designer engine={engine} prefixCls="dn-" theme="light">
      <HStack h="full" alignItems="flex-start">
        {mounted && (
          <>
            <Stack h="full" w="600px" p={4}>
              <Box h="full" shadow="md" borderRadius="md">
                <MultiLayersPanel items={mockPanels.items} filters={mockPanels.filters} />
              </Box>
            </Stack>
          </>
        )}
        <StudioPanel logo={<LogoWidget />} actions={<ActionsWidget />}>
          <HStack>
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
                </ViewportPanel>
              </WorkspacePanel>
            </Workspace>
          </HStack>
        </StudioPanel>
      </HStack>
    </Designer>
  )
}
