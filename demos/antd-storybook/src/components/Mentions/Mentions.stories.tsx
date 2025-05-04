
import type { Meta, StoryObj } from '@storybook/react';
import { Mentions } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoAllowClearComp from "./allowClear";
import sourceDemoAllowClear from "./allowClear?raw";
            

import DemoAutoSizeComp from "./autoSize";
import sourceDemoAutoSize from "./autoSize?raw";
            

import DemoPrefixComp from "./prefix";
import sourceDemoPrefix from "./prefix?raw";
            

import DemoVariantComp from "./variant";
import sourceDemoVariant from "./variant?raw";
            

import DemoAsyncComp from "./async";
import sourceDemoAsync from "./async?raw";
            

import DemoReadonlyComp from "./readonly";
import sourceDemoReadonly from "./readonly?raw";
            

import DemoRenderPanelComp from "./render-panel";
import sourceDemoRenderPanel from "./render-panel?raw";
            

import DemoPlacementComp from "./placement";
import sourceDemoPlacement from "./placement?raw";
            

import DemoStatusComp from "./status";
import sourceDemoStatus from "./status?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoFormComp from "./form";
import sourceDemoForm from "./form?raw";
            

const meta = {
  title: 'Base/Mentions',
  component: Mentions,
} satisfies Meta<typeof Mentions>;

export default meta;
type Story = StoryObj<any>;


export const Demo_allowClear: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAllowClear}><DemoAllowClearComp {...p} /></WrapperPreview>
};

export const Demo_autoSize: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAutoSize}><DemoAutoSizeComp {...p} /></WrapperPreview>
};

export const Demo_prefix: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPrefix}><DemoPrefixComp {...p} /></WrapperPreview>
};

export const Demo_variant: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVariant}><DemoVariantComp {...p} /></WrapperPreview>
};

export const Demo_async: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAsync}><DemoAsyncComp {...p} /></WrapperPreview>
};

export const Demo_readonly: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoReadonly}><DemoReadonlyComp {...p} /></WrapperPreview>
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRenderPanel}><DemoRenderPanelComp {...p} /></WrapperPreview>
};

export const Demo_placement: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPlacement}><DemoPlacementComp {...p} /></WrapperPreview>
};

export const Demo_status: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoStatus}><DemoStatusComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_form: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoForm}><DemoFormComp {...p} /></WrapperPreview>
};
