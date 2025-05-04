
import type { Meta, StoryObj } from '@storybook/react';
import { TreeSelect } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoMaxCountNoEffectComp from "./maxCountNoEffect";
import sourceDemoMaxCountNoEffect from "./maxCountNoEffect?raw";
            

import DemoVariantComp from "./variant";
import sourceDemoVariant from "./variant?raw";
            

import DemoAsyncComp from "./async";
import sourceDemoAsync from "./async?raw";
            

import DemoMaxCountComp from "./maxCount";
import sourceDemoMaxCount from "./maxCount?raw";
            

import DemoCheckableComp from "./checkable";
import sourceDemoCheckable from "./checkable?raw";
            

import DemoRenderPanelComp from "./render-panel";
import sourceDemoRenderPanel from "./render-panel?raw";
            

import DemoTreeDataComp from "./treeData";
import sourceDemoTreeData from "./treeData?raw";
            

import DemoPlacementComp from "./placement";
import sourceDemoPlacement from "./placement?raw";
            

import DemoMultipleComp from "./multiple";
import sourceDemoMultiple from "./multiple?raw";
            

import DemoStatusComp from "./status";
import sourceDemoStatus from "./status?raw";
            

import DemoSuffixComp from "./suffix";
import sourceDemoSuffix from "./suffix?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoTreeLineComp from "./treeLine";
import sourceDemoTreeLine from "./treeLine?raw";
            

const meta = {
  title: 'Antd/Base/TreeSelect',
  component: TreeSelect,
} satisfies Meta<typeof TreeSelect>;

export default meta;
type Story = StoryObj<any>;


export const Demo_maxCountNoEffect: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMaxCountNoEffect}><DemoMaxCountNoEffectComp {...p} /></WrapperPreview>
};

export const Demo_variant: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVariant}><DemoVariantComp {...p} /></WrapperPreview>
};

export const Demo_async: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAsync}><DemoAsyncComp {...p} /></WrapperPreview>
};

export const Demo_maxCount: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMaxCount}><DemoMaxCountComp {...p} /></WrapperPreview>
};

export const Demo_checkable: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCheckable}><DemoCheckableComp {...p} /></WrapperPreview>
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRenderPanel}><DemoRenderPanelComp {...p} /></WrapperPreview>
};

export const Demo_treeData: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTreeData}><DemoTreeDataComp {...p} /></WrapperPreview>
};

export const Demo_placement: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPlacement}><DemoPlacementComp {...p} /></WrapperPreview>
};

export const Demo_multiple: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMultiple}><DemoMultipleComp {...p} /></WrapperPreview>
};

export const Demo_status: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoStatus}><DemoStatusComp {...p} /></WrapperPreview>
};

export const Demo_suffix: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSuffix}><DemoSuffixComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_treeLine: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTreeLine}><DemoTreeLineComp {...p} /></WrapperPreview>
};
