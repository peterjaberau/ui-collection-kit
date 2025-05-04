
import type { Meta, StoryObj } from '@storybook/react';
import { BackTop } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoCustomComp from "./custom";
import sourceDemoCustom from "./custom?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

const meta = {
  title: 'Antd/Base/BackTop',
  component: BackTop,
} satisfies Meta<typeof BackTop>;

export default meta;
type Story = StoryObj<any>;


export const Demo_custom: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustom}><DemoCustomComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};
