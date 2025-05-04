
import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoAllowClearComp from "./allowClear";
import sourceDemoAllowClear from "./allowClear?raw";
            

import DemoTextRenderComp from "./text-render";
import sourceDemoTextRender from "./text-render?raw";
            

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";
            

import DemoControlledComp from "./controlled";
import sourceDemoControlled from "./controlled?raw";
            

import DemoTriggerEventComp from "./trigger-event";
import sourceDemoTriggerEvent from "./trigger-event?raw";
            

import DemoTriggerComp from "./trigger";
import sourceDemoTrigger from "./trigger?raw";
            

import DemoBaseComp from "./base";
import sourceDemoBase from "./base?raw";
            

import DemoDisabledAlphaComp from "./disabled-alpha";
import sourceDemoDisabledAlpha from "./disabled-alpha?raw";
            

import DemoPresetsComp from "./presets";
import sourceDemoPresets from "./presets?raw";
            

import DemoPanelRenderComp from "./panel-render";
import sourceDemoPanelRender from "./panel-render?raw";
            

import DemoDisabledComp from "./disabled";
import sourceDemoDisabled from "./disabled?raw";
            

import DemoPurePanelComp from "./pure-panel";
import sourceDemoPurePanel from "./pure-panel?raw";
            

import DemoLineGradientComp from "./line-gradient";
import sourceDemoLineGradient from "./line-gradient?raw";
            

import DemoFormatComp from "./format";
import sourceDemoFormat from "./format?raw";
            

const meta = {
  title: 'Antd/Base/ColorPicker',
  component: ColorPicker,
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<any>;


export const Demo_allowClear: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAllowClear}><DemoAllowClearComp {...p} /></WrapperPreview>
};

export const Demo_textRender: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTextRender}><DemoTextRenderComp {...p} /></WrapperPreview>
};

export const Demo_size: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_controlled: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoControlled}><DemoControlledComp {...p} /></WrapperPreview>
};

export const Demo_triggerEvent: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTriggerEvent}><DemoTriggerEventComp {...p} /></WrapperPreview>
};

export const Demo_trigger: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTrigger}><DemoTriggerComp {...p} /></WrapperPreview>
};

export const Demo_base: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBase}><DemoBaseComp {...p} /></WrapperPreview>
};

export const Demo_disabledAlpha: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDisabledAlpha}><DemoDisabledAlphaComp {...p} /></WrapperPreview>
};

export const Demo_presets: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPresets}><DemoPresetsComp {...p} /></WrapperPreview>
};

export const Demo_panelRender: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPanelRender}><DemoPanelRenderComp {...p} /></WrapperPreview>
};

export const Demo_disabled: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDisabled}><DemoDisabledComp {...p} /></WrapperPreview>
};

export const Demo_purePanel: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPurePanel}><DemoPurePanelComp {...p} /></WrapperPreview>
};

export const Demo_lineGradient: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLineGradient}><DemoLineGradientComp {...p} /></WrapperPreview>
};

export const Demo_format: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFormat}><DemoFormatComp {...p} /></WrapperPreview>
};
