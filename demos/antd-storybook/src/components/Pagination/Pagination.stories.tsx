
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoJumpComp from "./jump";
import sourceDemoJump from "./jump?raw";
            

import DemoControlledComp from "./controlled";
import sourceDemoControlled from "./controlled?raw";
            

import DemoAllComp from "./all";
import sourceDemoAll from "./all?raw";
            

import DemoWireframeComp from "./wireframe";
import sourceDemoWireframe from "./wireframe?raw";
            

import DemoAlignComp from "./align";
import sourceDemoAlign from "./align?raw";
            

import DemoMiniComp from "./mini";
import sourceDemoMini from "./mini?raw";
            

import DemoSimpleComp from "./simple";
import sourceDemoSimple from "./simple?raw";
            

import DemoTotalComp from "./total";
import sourceDemoTotal from "./total?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoChangerComp from "./changer";
import sourceDemoChanger from "./changer?raw";
            

import DemoItemRenderComp from "./itemRender";
import sourceDemoItemRender from "./itemRender?raw";
            

import DemoMoreComp from "./more";
import sourceDemoMore from "./more?raw";
            

const meta = {
  title: 'Antd/Base/Pagination',
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<any>;


export const Demo_jump: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoJump}><DemoJumpComp {...p} /></WrapperPreview>
};

export const Demo_controlled: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoControlled}><DemoControlledComp {...p} /></WrapperPreview>
};

export const Demo_all: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAll}><DemoAllComp {...p} /></WrapperPreview>
};

export const Demo_wireframe: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoWireframe}><DemoWireframeComp {...p} /></WrapperPreview>
};

export const Demo_align: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAlign}><DemoAlignComp {...p} /></WrapperPreview>
};

export const Demo_mini: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMini}><DemoMiniComp {...p} /></WrapperPreview>
};

export const Demo_simple: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSimple}><DemoSimpleComp {...p} /></WrapperPreview>
};

export const Demo_total: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTotal}><DemoTotalComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_changer: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoChanger}><DemoChangerComp {...p} /></WrapperPreview>
};

export const Demo_itemRender: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoItemRender}><DemoItemRenderComp {...p} /></WrapperPreview>
};

export const Demo_more: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMore}><DemoMoreComp {...p} /></WrapperPreview>
};
