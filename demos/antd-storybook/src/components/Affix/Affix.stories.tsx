import type { Meta, StoryObj } from '@storybook/react';
import { Affix } from 'antd';
import WrapperPreview from '../WrapperPreview';

import DemoTargetComp from './target';
import sourceDemoTarget from './target?raw';

import DemoBasicComp from './basic';
import sourceDemoBasic from './basic?raw';

import DemoOnChangeComp from './on-change';
import sourceDemoOnChange from './on-change?raw';

const meta = {
  title: 'Base/Affix',
  component: Affix,
} satisfies Meta<typeof Affix>;

export default meta;
type Story = StoryObj<any>;

export const Demo_target: Story = {
  render: (p: any) => (
    <WrapperPreview code={sourceDemoTarget}>
      <DemoTargetComp {...p} />
    </WrapperPreview>
  ),
};

export const Demo_basic: Story = {
  render: (p: any) => (
    <WrapperPreview code={sourceDemoBasic}>
      <DemoBasicComp {...p} />
    </WrapperPreview>
  ),
};

export const Demo_onChange: Story = {
  render: (p: any) => (
    <WrapperPreview code={sourceDemoOnChange}>
      <DemoOnChangeComp {...p} />
    </WrapperPreview>
  ),
};
