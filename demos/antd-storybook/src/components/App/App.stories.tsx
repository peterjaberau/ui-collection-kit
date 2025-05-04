
import type { Meta, StoryObj } from '@storybook/react';
import { App } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoConfigComp from "./config";
import sourceDemoConfig from "./config?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

const meta = {
  title: 'Antd/Base/App',
  component: App,
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<any>;


export const Demo_config: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoConfig}><DemoConfigComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};
