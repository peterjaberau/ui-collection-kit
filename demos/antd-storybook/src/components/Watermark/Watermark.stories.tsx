
import type { Meta, StoryObj } from '@storybook/react';
import { Watermark } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoCustomComp from "./custom";
import sourceDemoCustom from "./custom?raw";
            

import DemoMultiLineComp from "./multi-line";
import sourceDemoMultiLine from "./multi-line?raw";
            

import DemoPortalComp from "./portal";
import sourceDemoPortal from "./portal?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoImageComp from "./image";
import sourceDemoImage from "./image?raw";
            

const meta = {
  title: 'Base/Watermark',
  component: Watermark,
} satisfies Meta<typeof Watermark>;

export default meta;
type Story = StoryObj<any>;


export const Demo_custom: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustom}><DemoCustomComp {...p} /></WrapperPreview>
};

export const Demo_multiLine: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMultiLine}><DemoMultiLineComp {...p} /></WrapperPreview>
};

export const Demo_portal: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPortal}><DemoPortalComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_image: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoImage}><DemoImageComp {...p} /></WrapperPreview>
};
