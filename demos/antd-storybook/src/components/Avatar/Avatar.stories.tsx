
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoGroupComp from "./group";
import sourceDemoGroup from "./group?raw";
            

import DemoTypeComp from "./type";
import sourceDemoType from "./type?raw";
            

import DemoDynamicComp from "./dynamic";
import sourceDemoDynamic from "./dynamic?raw";
            

import DemoBadgeComp from "./badge";
import sourceDemoBadge from "./badge?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoFallbackComp from "./fallback";
import sourceDemoFallback from "./fallback?raw";
            

import DemoResponsiveComp from "./responsive";
import sourceDemoResponsive from "./responsive?raw";
            

const meta = {
  title: 'Base/Avatar',
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<any>;


export const Demo_group: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoGroup}><DemoGroupComp {...p} /></WrapperPreview>
};

export const Demo_type: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoType}><DemoTypeComp {...p} /></WrapperPreview>
};

export const Demo_dynamic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDynamic}><DemoDynamicComp {...p} /></WrapperPreview>
};

export const Demo_badge: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBadge}><DemoBadgeComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_fallback: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFallback}><DemoFallbackComp {...p} /></WrapperPreview>
};

export const Demo_responsive: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoResponsive}><DemoResponsiveComp {...p} /></WrapperPreview>
};
