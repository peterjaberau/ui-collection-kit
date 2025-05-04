
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoInnerComp from "./inner";
import sourceDemoInner from "./inner?raw";
            

import DemoFlexibleContentComp from "./flexible-content";
import sourceDemoFlexibleContent from "./flexible-content?raw";
            

import DemoTabsComp from "./tabs";
import sourceDemoTabs from "./tabs?raw";
            

import DemoInColumnComp from "./in-column";
import sourceDemoInColumn from "./in-column?raw";
            

import DemoMetaComp from "./meta";
import sourceDemoMeta from "./meta?raw";
            

import DemoSimpleComp from "./simple";
import sourceDemoSimple from "./simple?raw";
            

import DemoLoadingComp from "./loading";
import sourceDemoLoading from "./loading?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoBorderLessComp from "./border-less";
import sourceDemoBorderLess from "./border-less?raw";
            

import DemoGridCardComp from "./grid-card";
import sourceDemoGridCard from "./grid-card?raw";
            

const meta = {
  title: 'Base/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<any>;


export const Demo_inner: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoInner}><DemoInnerComp {...p} /></WrapperPreview>
};

export const Demo_flexibleContent: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFlexibleContent}><DemoFlexibleContentComp {...p} /></WrapperPreview>
};

export const Demo_tabs: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTabs}><DemoTabsComp {...p} /></WrapperPreview>
};

export const Demo_inColumn: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoInColumn}><DemoInColumnComp {...p} /></WrapperPreview>
};

export const Demo_meta: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMeta}><DemoMetaComp {...p} /></WrapperPreview>
};

export const Demo_simple: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSimple}><DemoSimpleComp {...p} /></WrapperPreview>
};

export const Demo_loading: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLoading}><DemoLoadingComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_borderLess: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBorderLess}><DemoBorderLessComp {...p} /></WrapperPreview>
};

export const Demo_gridCard: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoGridCard}><DemoGridCardComp {...p} /></WrapperPreview>
};
