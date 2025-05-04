
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";
            

import DemoDisabledComp from "./disabled";
import sourceDemoDisabled from "./disabled?raw";
            

import DemoLoadingComp from "./loading";
import sourceDemoLoading from "./loading?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoTextComp from "./text";
import sourceDemoText from "./text?raw";
            

const meta = {
  title: 'Base/Switch',
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<any>;


export const Demo_size: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_disabled: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDisabled}><DemoDisabledComp {...p} /></WrapperPreview>
};

export const Demo_loading: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLoading}><DemoLoadingComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_text: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoText}><DemoTextComp {...p} /></WrapperPreview>
};
