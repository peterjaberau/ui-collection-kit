
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoElementComp from "./element";
import sourceDemoElement from "./element?raw";
            

import DemoChildrenComp from "./children";
import sourceDemoChildren from "./children?raw";
            

import DemoListComp from "./list";
import sourceDemoList from "./list?raw";
            

import DemoComplexComp from "./complex";
import sourceDemoComplex from "./complex?raw";
            

import DemoComponentTokenComp from "./componentToken";
import sourceDemoComponentToken from "./componentToken?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoActiveComp from "./active";
import sourceDemoActive from "./active?raw";
            

const meta = {
  title: 'Antd/Base/Skeleton',
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<any>;


export const Demo_element: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoElement}><DemoElementComp {...p} /></WrapperPreview>
};

export const Demo_children: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoChildren}><DemoChildrenComp {...p} /></WrapperPreview>
};

export const Demo_list: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoList}><DemoListComp {...p} /></WrapperPreview>
};

export const Demo_complex: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoComplex}><DemoComplexComp {...p} /></WrapperPreview>
};

export const Demo_componentToken: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoComponentToken}><DemoComponentTokenComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_active: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoActive}><DemoActiveComp {...p} /></WrapperPreview>
};
