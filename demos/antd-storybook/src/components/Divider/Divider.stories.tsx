
import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoHorizontalComp from "./horizontal";
import sourceDemoHorizontal from "./horizontal?raw";
            

import DemoVariantComp from "./variant";
import sourceDemoVariant from "./variant?raw";
            

import DemoVerticalComp from "./vertical";
import sourceDemoVertical from "./vertical?raw";
            

import DemoPlainComp from "./plain";
import sourceDemoPlain from "./plain?raw";
            

import DemoCustomizeStyleComp from "./customize-style";
import sourceDemoCustomizeStyle from "./customize-style?raw";
            

import DemoWithTextComp from "./with-text";
import sourceDemoWithText from "./with-text?raw";
            

const meta = {
  title: 'Base/Divider',
  component: Divider,
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<any>;


export const Demo_horizontal: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoHorizontal}><DemoHorizontalComp {...p} /></WrapperPreview>
};

export const Demo_variant: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVariant}><DemoVariantComp {...p} /></WrapperPreview>
};

export const Demo_vertical: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVertical}><DemoVerticalComp {...p} /></WrapperPreview>
};

export const Demo_plain: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPlain}><DemoPlainComp {...p} /></WrapperPreview>
};

export const Demo_customizeStyle: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomizeStyle}><DemoCustomizeStyleComp {...p} /></WrapperPreview>
};

export const Demo_withText: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoWithText}><DemoWithTextComp {...p} /></WrapperPreview>
};
