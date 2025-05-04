
import type { Meta, StoryObj } from '@storybook/react';
import { Statistic } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoCardComp from "./card";
import sourceDemoCard from "./card?raw";
            

import DemoUnitComp from "./unit";
import sourceDemoUnit from "./unit?raw";
            

import DemoCountdownComp from "./countdown";
import sourceDemoCountdown from "./countdown?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

const meta = {
  title: 'Base/Statistic',
  component: Statistic,
} satisfies Meta<typeof Statistic>;

export default meta;
type Story = StoryObj<any>;


export const Demo_card: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCard}><DemoCardComp {...p} /></WrapperPreview>
};

export const Demo_unit: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoUnit}><DemoUnitComp {...p} /></WrapperPreview>
};

export const Demo_countdown: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCountdown}><DemoCountdownComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};
