
import type { Meta, StoryObj } from '@storybook/react';
import { Collapse } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoCustomComp from "./custom";
import sourceDemoCustom from "./custom?raw";
            

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";
            

import DemoMixComp from "./mix";
import sourceDemoMix from "./mix?raw";
            

import DemoGhostComp from "./ghost";
import sourceDemoGhost from "./ghost?raw";
            

import DemoNoarrowComp from "./noarrow";
import sourceDemoNoarrow from "./noarrow?raw";
            

import DemoBorderlessComp from "./borderless";
import sourceDemoBorderless from "./borderless?raw";
            

import DemoAccordionComp from "./accordion";
import sourceDemoAccordion from "./accordion?raw";
            

import DemoExtraComp from "./extra";
import sourceDemoExtra from "./extra?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoCollapsibleComp from "./collapsible";
import sourceDemoCollapsible from "./collapsible?raw";
            

const meta = {
  title: 'Base/Collapse',
  component: Collapse,
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<any>;


export const Demo_custom: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustom}><DemoCustomComp {...p} /></WrapperPreview>
};

export const Demo_size: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_mix: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMix}><DemoMixComp {...p} /></WrapperPreview>
};

export const Demo_ghost: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoGhost}><DemoGhostComp {...p} /></WrapperPreview>
};

export const Demo_noarrow: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoNoarrow}><DemoNoarrowComp {...p} /></WrapperPreview>
};

export const Demo_borderless: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBorderless}><DemoBorderlessComp {...p} /></WrapperPreview>
};

export const Demo_accordion: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAccordion}><DemoAccordionComp {...p} /></WrapperPreview>
};

export const Demo_extra: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoExtra}><DemoExtraComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_collapsible: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCollapsible}><DemoCollapsibleComp {...p} /></WrapperPreview>
};
