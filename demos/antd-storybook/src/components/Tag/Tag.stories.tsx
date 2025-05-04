
import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoIconComp from "./icon";
import sourceDemoIcon from "./icon?raw";
            

import DemoControlComp from "./control";
import sourceDemoControl from "./control?raw";
            

import DemoBorderlessComp from "./borderless";
import sourceDemoBorderless from "./borderless?raw";
            

import DemoCheckableComp from "./checkable";
import sourceDemoCheckable from "./checkable?raw";
            

import DemoCustomizeComp from "./customize";
import sourceDemoCustomize from "./customize?raw";
            

import DemoColorfulComp from "./colorful";
import sourceDemoColorful from "./colorful?raw";
            

import DemoBorderlessLayoutComp from "./borderlessLayout";
import sourceDemoBorderlessLayout from "./borderlessLayout?raw";
            

import DemoStatusComp from "./status";
import sourceDemoStatus from "./status?raw";
            

import DemoColorfulInverseComp from "./colorful-inverse";
import sourceDemoColorfulInverse from "./colorful-inverse?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

const meta = {
  title: 'Base/Tag',
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<any>;


export const Demo_icon: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoIcon}><DemoIconComp {...p} /></WrapperPreview>
};

export const Demo_control: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoControl}><DemoControlComp {...p} /></WrapperPreview>
};

export const Demo_borderless: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBorderless}><DemoBorderlessComp {...p} /></WrapperPreview>
};

export const Demo_checkable: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCheckable}><DemoCheckableComp {...p} /></WrapperPreview>
};

export const Demo_customize: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomize}><DemoCustomizeComp {...p} /></WrapperPreview>
};

export const Demo_colorful: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoColorful}><DemoColorfulComp {...p} /></WrapperPreview>
};

export const Demo_borderlessLayout: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBorderlessLayout}><DemoBorderlessLayoutComp {...p} /></WrapperPreview>
};

export const Demo_status: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoStatus}><DemoStatusComp {...p} /></WrapperPreview>
};

export const Demo_colorfulInverse: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoColorfulInverse}><DemoColorfulInverseComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};
