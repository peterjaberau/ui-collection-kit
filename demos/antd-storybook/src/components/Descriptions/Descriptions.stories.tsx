
import type { Meta, StoryObj } from '@storybook/react';
import { Descriptions } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";
            

import DemoBorderComp from "./border";
import sourceDemoBorder from "./border?raw";
            

import DemoPaddingComp from "./padding";
import sourceDemoPadding from "./padding?raw";
            

import DemoVerticalComp from "./vertical";
import sourceDemoVertical from "./vertical?raw";
            

import DemoBlockComp from "./block";
import sourceDemoBlock from "./block?raw";
            

import DemoVerticalBorderComp from "./vertical-border";
import sourceDemoVerticalBorder from "./vertical-border?raw";
            

import DemoJsxComp from "./jsx";
import sourceDemoJsx from "./jsx?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoStyleComp from "./style";
import sourceDemoStyle from "./style?raw";
            

import DemoTextComp from "./text";
import sourceDemoText from "./text?raw";
            

import DemoResponsiveComp from "./responsive";
import sourceDemoResponsive from "./responsive?raw";
            

const meta = {
  title: 'Base/Descriptions',
  component: Descriptions,
} satisfies Meta<typeof Descriptions>;

export default meta;
type Story = StoryObj<any>;


export const Demo_size: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_border: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBorder}><DemoBorderComp {...p} /></WrapperPreview>
};

export const Demo_padding: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPadding}><DemoPaddingComp {...p} /></WrapperPreview>
};

export const Demo_vertical: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVertical}><DemoVerticalComp {...p} /></WrapperPreview>
};

export const Demo_block: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBlock}><DemoBlockComp {...p} /></WrapperPreview>
};

export const Demo_verticalBorder: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVerticalBorder}><DemoVerticalBorderComp {...p} /></WrapperPreview>
};

export const Demo_jsx: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoJsx}><DemoJsxComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_style: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoStyle}><DemoStyleComp {...p} /></WrapperPreview>
};

export const Demo_text: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoText}><DemoTextComp {...p} /></WrapperPreview>
};

export const Demo_responsive: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoResponsive}><DemoResponsiveComp {...p} /></WrapperPreview>
};
