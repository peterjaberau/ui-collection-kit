
import type { Meta, StoryObj } from '@storybook/react';
import { Splitter } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoGroupComp from "./group";
import sourceDemoGroup from "./group?raw";
            

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";
            

import DemoVerticalComp from "./vertical";
import sourceDemoVertical from "./vertical?raw";
            

import DemoControlComp from "./control";
import sourceDemoControl from "./control?raw";
            

import DemoMultipleComp from "./multiple";
import sourceDemoMultiple from "./multiple?raw";
            

import DemoNestedInTabsComp from "./nested-in-tabs";
import sourceDemoNestedInTabs from "./nested-in-tabs?raw";
            

import DemoLazyComp from "./lazy";
import sourceDemoLazy from "./lazy?raw";
            

import DemoCollapsibleComp from "./collapsible";
import sourceDemoCollapsible from "./collapsible?raw";
            

const meta = {
  title: 'Base/Splitter',
  component: Splitter,
} satisfies Meta<typeof Splitter>;

export default meta;
type Story = StoryObj<any>;


export const Demo_group: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoGroup}><DemoGroupComp {...p} /></WrapperPreview>
};

export const Demo_size: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_vertical: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVertical}><DemoVerticalComp {...p} /></WrapperPreview>
};

export const Demo_control: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoControl}><DemoControlComp {...p} /></WrapperPreview>
};

export const Demo_multiple: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMultiple}><DemoMultipleComp {...p} /></WrapperPreview>
};

export const Demo_nestedInTabs: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoNestedInTabs}><DemoNestedInTabsComp {...p} /></WrapperPreview>
};

export const Demo_lazy: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLazy}><DemoLazyComp {...p} /></WrapperPreview>
};

export const Demo_collapsible: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCollapsible}><DemoCollapsibleComp {...p} /></WrapperPreview>
};
