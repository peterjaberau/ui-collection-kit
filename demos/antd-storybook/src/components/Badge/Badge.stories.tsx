
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";
            

import DemoTitleComp from "./title";
import sourceDemoTitle from "./title?raw";
            

import DemoDotComp from "./dot";
import sourceDemoDot from "./dot?raw";
            

import DemoLinkComp from "./link";
import sourceDemoLink from "./link?raw";
            

import DemoMixComp from "./mix";
import sourceDemoMix from "./mix?raw";
            

import DemoOverflowComp from "./overflow";
import sourceDemoOverflow from "./overflow?raw";
            

import DemoChangeComp from "./change";
import sourceDemoChange from "./change?raw";
            

import DemoColorfulComp from "./colorful";
import sourceDemoColorful from "./colorful?raw";
            

import DemoOffsetComp from "./offset";
import sourceDemoOffset from "./offset?raw";
            

import DemoRibbonComp from "./ribbon";
import sourceDemoRibbon from "./ribbon?raw";
            

import DemoStatusComp from "./status";
import sourceDemoStatus from "./status?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoNoWrapperComp from "./no-wrapper";
import sourceDemoNoWrapper from "./no-wrapper?raw";
            

const meta = {
  title: 'Base/Badge',
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<any>;


export const Demo_size: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_title: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTitle}><DemoTitleComp {...p} /></WrapperPreview>
};

export const Demo_dot: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDot}><DemoDotComp {...p} /></WrapperPreview>
};

export const Demo_link: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLink}><DemoLinkComp {...p} /></WrapperPreview>
};

export const Demo_mix: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMix}><DemoMixComp {...p} /></WrapperPreview>
};

export const Demo_overflow: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoOverflow}><DemoOverflowComp {...p} /></WrapperPreview>
};

export const Demo_change: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoChange}><DemoChangeComp {...p} /></WrapperPreview>
};

export const Demo_colorful: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoColorful}><DemoColorfulComp {...p} /></WrapperPreview>
};

export const Demo_offset: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoOffset}><DemoOffsetComp {...p} /></WrapperPreview>
};

export const Demo_ribbon: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRibbon}><DemoRibbonComp {...p} /></WrapperPreview>
};

export const Demo_status: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoStatus}><DemoStatusComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_noWrapper: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoNoWrapper}><DemoNoWrapperComp {...p} /></WrapperPreview>
};
