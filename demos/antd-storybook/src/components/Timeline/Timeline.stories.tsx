
import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoCustomComp from "./custom";
import sourceDemoCustom from "./custom?raw";
            

import DemoAlternateComp from "./alternate";
import sourceDemoAlternate from "./alternate?raw";
            

import DemoLabelComp from "./label";
import sourceDemoLabel from "./label?raw";
            

import DemoWireframeComp from "./wireframe";
import sourceDemoWireframe from "./wireframe?raw";
            

import DemoColorComp from "./color";
import sourceDemoColor from "./color?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoPendingComp from "./pending";
import sourceDemoPending from "./pending?raw";
            

import DemoRightComp from "./right";
import sourceDemoRight from "./right?raw";
            

const meta = {
  title: 'Antd/Base/Timeline',
  component: Timeline,
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<any>;


export const Demo_custom: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustom}><DemoCustomComp {...p} /></WrapperPreview>
};

export const Demo_alternate: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAlternate}><DemoAlternateComp {...p} /></WrapperPreview>
};

export const Demo_label: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLabel}><DemoLabelComp {...p} /></WrapperPreview>
};

export const Demo_wireframe: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoWireframe}><DemoWireframeComp {...p} /></WrapperPreview>
};

export const Demo_color: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoColor}><DemoColorComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_pending: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPending}><DemoPendingComp {...p} /></WrapperPreview>
};

export const Demo_right: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRight}><DemoRightComp {...p} /></WrapperPreview>
};
