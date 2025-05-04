
import type { Meta, StoryObj } from '@storybook/react';
import { Popconfirm } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoPromiseComp from "./promise";
import sourceDemoPromise from "./promise?raw";
            

import DemoIconComp from "./icon";
import sourceDemoIcon from "./icon?raw";
            

import DemoShiftComp from "./shift";
import sourceDemoShift from "./shift?raw";
            

import DemoAsyncComp from "./async";
import sourceDemoAsync from "./async?raw";
            

import DemoWireframeComp from "./wireframe";
import sourceDemoWireframe from "./wireframe?raw";
            

import DemoDynamicTriggerComp from "./dynamic-trigger";
import sourceDemoDynamicTrigger from "./dynamic-trigger?raw";
            

import DemoRenderPanelComp from "./render-panel";
import sourceDemoRenderPanel from "./render-panel?raw";
            

import DemoPlacementComp from "./placement";
import sourceDemoPlacement from "./placement?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoLocaleComp from "./locale";
import sourceDemoLocale from "./locale?raw";
            

const meta = {
  title: 'Base/Popconfirm',
  component: Popconfirm,
} satisfies Meta<typeof Popconfirm>;

export default meta;
type Story = StoryObj<any>;


export const Demo_promise: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPromise}><DemoPromiseComp {...p} /></WrapperPreview>
};

export const Demo_icon: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoIcon}><DemoIconComp {...p} /></WrapperPreview>
};

export const Demo_shift: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoShift}><DemoShiftComp {...p} /></WrapperPreview>
};

export const Demo_async: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAsync}><DemoAsyncComp {...p} /></WrapperPreview>
};

export const Demo_wireframe: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoWireframe}><DemoWireframeComp {...p} /></WrapperPreview>
};

export const Demo_dynamicTrigger: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDynamicTrigger}><DemoDynamicTriggerComp {...p} /></WrapperPreview>
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRenderPanel}><DemoRenderPanelComp {...p} /></WrapperPreview>
};

export const Demo_placement: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPlacement}><DemoPlacementComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_locale: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLocale}><DemoLocaleComp {...p} /></WrapperPreview>
};
