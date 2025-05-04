
import type { Meta, StoryObj } from '@storybook/react';
import { Transfer } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoTableTransferComp from "./table-transfer";
import sourceDemoTableTransfer from "./table-transfer?raw";
            

import DemoTreeTransferComp from "./tree-transfer";
import sourceDemoTreeTransfer from "./tree-transfer?raw";
            

import DemoCustomSelectAllLabelsComp from "./custom-select-all-labels";
import sourceDemoCustomSelectAllLabels from "./custom-select-all-labels?raw";
            

import DemoOneWayComp from "./oneWay";
import sourceDemoOneWay from "./oneWay?raw";
            

import DemoLargeDataComp from "./large-data";
import sourceDemoLargeData from "./large-data?raw";
            

import DemoSearchComp from "./search";
import sourceDemoSearch from "./search?raw";
            

import DemoStatusComp from "./status";
import sourceDemoStatus from "./status?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoCustomItemComp from "./custom-item";
import sourceDemoCustomItem from "./custom-item?raw";
            

import DemoAdvancedComp from "./advanced";
import sourceDemoAdvanced from "./advanced?raw";
            

const meta = {
  title: 'Base/Transfer',
  component: Transfer,
} satisfies Meta<typeof Transfer>;

export default meta;
type Story = StoryObj<any>;


export const Demo_tableTransfer: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTableTransfer}><DemoTableTransferComp {...p} /></WrapperPreview>
};

export const Demo_treeTransfer: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTreeTransfer}><DemoTreeTransferComp {...p} /></WrapperPreview>
};

export const Demo_customSelectAllLabels: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomSelectAllLabels}><DemoCustomSelectAllLabelsComp {...p} /></WrapperPreview>
};

export const Demo_oneWay: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoOneWay}><DemoOneWayComp {...p} /></WrapperPreview>
};

export const Demo_largeData: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLargeData}><DemoLargeDataComp {...p} /></WrapperPreview>
};

export const Demo_search: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSearch}><DemoSearchComp {...p} /></WrapperPreview>
};

export const Demo_status: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoStatus}><DemoStatusComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_customItem: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomItem}><DemoCustomItemComp {...p} /></WrapperPreview>
};

export const Demo_advanced: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAdvanced}><DemoAdvancedComp {...p} /></WrapperPreview>
};
