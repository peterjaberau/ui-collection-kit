
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoAlignComp from "./align";
import sourceDemoAlign from "./align?raw";
            

import DemoCombinationComp from "./combination";
import sourceDemoCombination from "./combination?raw";
            

import DemoWrapComp from "./wrap";
import sourceDemoWrap from "./wrap?raw";
            

import DemoGapComp from "./gap";
import sourceDemoGap from "./gap?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

const meta = {
  title: 'Base/Flex',
  component: Flex,
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<any>;


export const Demo_align: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAlign}><DemoAlignComp {...p} /></WrapperPreview>
};

export const Demo_combination: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCombination}><DemoCombinationComp {...p} /></WrapperPreview>
};

export const Demo_wrap: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoWrap}><DemoWrapComp {...p} /></WrapperPreview>
};

export const Demo_gap: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoGap}><DemoGapComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};
