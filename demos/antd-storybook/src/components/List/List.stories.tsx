
import type { Meta, StoryObj } from '@storybook/react';
import { List } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoPaginationComp from "./pagination";
import sourceDemoPagination from "./pagination?raw";
            

import DemoLoadmoreComp from "./loadmore";
import sourceDemoLoadmore from "./loadmore?raw";
            

import DemoGridComp from "./grid";
import sourceDemoGrid from "./grid?raw";
            

import DemoVerticalComp from "./vertical";
import sourceDemoVertical from "./vertical?raw";
            

import DemoGridTestComp from "./grid-test";
import sourceDemoGridTest from "./grid-test?raw";
            

import DemoSimpleComp from "./simple";
import sourceDemoSimple from "./simple?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoResponsiveComp from "./responsive";
import sourceDemoResponsive from "./responsive?raw";
            

const meta = {
  title: 'Base/List',
  component: List,
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<any>;


export const Demo_pagination: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPagination}><DemoPaginationComp {...p} /></WrapperPreview>
};

export const Demo_loadmore: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLoadmore}><DemoLoadmoreComp {...p} /></WrapperPreview>
};

export const Demo_grid: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoGrid}><DemoGridComp {...p} /></WrapperPreview>
};

export const Demo_vertical: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVertical}><DemoVerticalComp {...p} /></WrapperPreview>
};

export const Demo_gridTest: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoGridTest}><DemoGridTestComp {...p} /></WrapperPreview>
};

export const Demo_simple: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSimple}><DemoSimpleComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_responsive: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoResponsive}><DemoResponsiveComp {...p} /></WrapperPreview>
};
