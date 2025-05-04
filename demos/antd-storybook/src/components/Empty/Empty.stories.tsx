
import type { Meta, StoryObj } from '@storybook/react';
import { Empty } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoConfigProviderComp from "./config-provider";
import sourceDemoConfigProvider from "./config-provider?raw";
            

import DemoCustomizeComp from "./customize";
import sourceDemoCustomize from "./customize?raw";
            

import DemoDescriptionComp from "./description";
import sourceDemoDescription from "./description?raw";
            

import DemoSimpleComp from "./simple";
import sourceDemoSimple from "./simple?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

const meta = {
  title: 'Antd/Base/Empty',
  component: Empty,
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<any>;


export const Demo_configProvider: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoConfigProvider}><DemoConfigProviderComp {...p} /></WrapperPreview>
};

export const Demo_customize: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomize}><DemoCustomizeComp {...p} /></WrapperPreview>
};

export const Demo_description: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDescription}><DemoDescriptionComp {...p} /></WrapperPreview>
};

export const Demo_simple: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSimple}><DemoSimpleComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};
