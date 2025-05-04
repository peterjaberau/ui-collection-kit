
import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoCustomTriggerComp from "./custom-trigger";
import sourceDemoCustomTrigger from "./custom-trigger?raw";
            

import DemoTopSide2Comp from "./top-side-2";
import sourceDemoTopSide2 from "./top-side-2?raw";
            

import DemoSideComp from "./side";
import sourceDemoSide from "./side?raw";
            

import DemoTopSideComp from "./top-side";
import sourceDemoTopSide from "./top-side?raw";
            

import DemoTopComp from "./top";
import sourceDemoTop from "./top?raw";
            

import DemoFixedSiderComp from "./fixed-sider";
import sourceDemoFixedSider from "./fixed-sider?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoFixedComp from "./fixed";
import sourceDemoFixed from "./fixed?raw";
            

import DemoResponsiveComp from "./responsive";
import sourceDemoResponsive from "./responsive?raw";
            

const meta = {
  title: 'Antd/Base/Layout',
  component: Layout,
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<any>;


export const Demo_customTrigger: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomTrigger}><DemoCustomTriggerComp {...p} /></WrapperPreview>
};

export const Demo_topSide2: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTopSide2}><DemoTopSide2Comp {...p} /></WrapperPreview>
};

export const Demo_side: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSide}><DemoSideComp {...p} /></WrapperPreview>
};

export const Demo_topSide: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTopSide}><DemoTopSideComp {...p} /></WrapperPreview>
};

export const Demo_top: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTop}><DemoTopComp {...p} /></WrapperPreview>
};

export const Demo_fixedSider: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFixedSider}><DemoFixedSiderComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_fixed: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFixed}><DemoFixedComp {...p} /></WrapperPreview>
};

export const Demo_responsive: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoResponsive}><DemoResponsiveComp {...p} /></WrapperPreview>
};
