
import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoShiftComp from "./shift";
import sourceDemoShift from "./shift?raw";
            

import DemoArrowComp from "./arrow";
import sourceDemoArrow from "./arrow?raw";
            

import DemoArrowPointAtCenterComp from "./arrow-point-at-center";
import sourceDemoArrowPointAtCenter from "./arrow-point-at-center?raw";
            

import DemoHoverWithClickComp from "./hover-with-click";
import sourceDemoHoverWithClick from "./hover-with-click?raw";
            

import DemoTriggerTypeComp from "./triggerType";
import sourceDemoTriggerType from "./triggerType?raw";
            

import DemoControlComp from "./control";
import sourceDemoControl from "./control?raw";
            

import DemoWireframeComp from "./wireframe";
import sourceDemoWireframe from "./wireframe?raw";
            

import DemoRenderPanelComp from "./render-panel";
import sourceDemoRenderPanel from "./render-panel?raw";
            

import DemoPlacementComp from "./placement";
import sourceDemoPlacement from "./placement?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

const meta = {
  title: 'Base/Popover',
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<any>;


export const Demo_shift: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoShift}><DemoShiftComp {...p} /></WrapperPreview>
};

export const Demo_arrow: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoArrow}><DemoArrowComp {...p} /></WrapperPreview>
};

export const Demo_arrowPointAtCenter: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoArrowPointAtCenter}><DemoArrowPointAtCenterComp {...p} /></WrapperPreview>
};

export const Demo_hoverWithClick: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoHoverWithClick}><DemoHoverWithClickComp {...p} /></WrapperPreview>
};

export const Demo_triggerType: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTriggerType}><DemoTriggerTypeComp {...p} /></WrapperPreview>
};

export const Demo_control: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoControl}><DemoControlComp {...p} /></WrapperPreview>
};

export const Demo_wireframe: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoWireframe}><DemoWireframeComp {...p} /></WrapperPreview>
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
