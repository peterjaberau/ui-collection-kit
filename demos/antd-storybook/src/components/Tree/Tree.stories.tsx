
import type { Meta, StoryObj } from '@storybook/react';
import { Tree } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoBigDataComp from "./big-data";
import sourceDemoBigData from "./big-data?raw";
            

import DemoBasicControlledComp from "./basic-controlled";
import sourceDemoBasicControlled from "./basic-controlled?raw";
            

import DemoSearchComp from "./search";
import sourceDemoSearch from "./search?raw";
            

import DemoCustomizedIconComp from "./customized-icon";
import sourceDemoCustomizedIcon from "./customized-icon?raw";
            

import DemoDirectoryComp from "./directory";
import sourceDemoDirectory from "./directory?raw";
            

import DemoDynamicComp from "./dynamic";
import sourceDemoDynamic from "./dynamic?raw";
            

import DemoSwitcherIconComp from "./switcher-icon";
import sourceDemoSwitcherIcon from "./switcher-icon?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoBlockNodeComp from "./block-node";
import sourceDemoBlockNode from "./block-node?raw";
            

import DemoLineComp from "./line";
import sourceDemoLine from "./line?raw";
            

import DemoMultipleLineComp from "./multiple-line";
import sourceDemoMultipleLine from "./multiple-line?raw";
            

import DemoVirtualScrollComp from "./virtual-scroll";
import sourceDemoVirtualScroll from "./virtual-scroll?raw";
            

const meta = {
  title: 'Antd/Base/Tree',
  component: Tree,
} satisfies Meta<typeof Tree>;

export default meta;
type Story = StoryObj<any>;


export const Demo_bigData: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBigData}><DemoBigDataComp {...p} /></WrapperPreview>
};

export const Demo_basicControlled: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasicControlled}><DemoBasicControlledComp {...p} /></WrapperPreview>
};

export const Demo_search: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSearch}><DemoSearchComp {...p} /></WrapperPreview>
};

export const Demo_customizedIcon: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomizedIcon}><DemoCustomizedIconComp {...p} /></WrapperPreview>
};

export const Demo_directory: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDirectory}><DemoDirectoryComp {...p} /></WrapperPreview>
};

export const Demo_dynamic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDynamic}><DemoDynamicComp {...p} /></WrapperPreview>
};

export const Demo_switcherIcon: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSwitcherIcon}><DemoSwitcherIconComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_blockNode: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBlockNode}><DemoBlockNodeComp {...p} /></WrapperPreview>
};

export const Demo_line: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLine}><DemoLineComp {...p} /></WrapperPreview>
};

export const Demo_multipleLine: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMultipleLine}><DemoMultipleLineComp {...p} /></WrapperPreview>
};

export const Demo_virtualScroll: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVirtualScroll}><DemoVirtualScrollComp {...p} /></WrapperPreview>
};
