
import type { Meta, StoryObj } from '@storybook/react';
import { Spin } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";
            

import DemoCustomIndicatorComp from "./custom-indicator";
import sourceDemoCustomIndicator from "./custom-indicator?raw";
            

import DemoNestedComp from "./nested";
import sourceDemoNested from "./nested?raw";
            

import DemoDelayAndDebounceComp from "./delayAndDebounce";
import sourceDemoDelayAndDebounce from "./delayAndDebounce?raw";
            

import DemoFullscreenComp from "./fullscreen";
import sourceDemoFullscreen from "./fullscreen?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoPercentComp from "./percent";
import sourceDemoPercent from "./percent?raw";
            

import DemoTipComp from "./tip";
import sourceDemoTip from "./tip?raw";
            

const meta = {
  title: 'Antd/Base/Spin',
  component: Spin,
} satisfies Meta<typeof Spin>;

export default meta;
type Story = StoryObj<any>;


export const Demo_size: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_customIndicator: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomIndicator}><DemoCustomIndicatorComp {...p} /></WrapperPreview>
};

export const Demo_nested: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoNested}><DemoNestedComp {...p} /></WrapperPreview>
};

export const Demo_delayAndDebounce: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDelayAndDebounce}><DemoDelayAndDebounceComp {...p} /></WrapperPreview>
};

export const Demo_fullscreen: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFullscreen}><DemoFullscreenComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_percent: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPercent}><DemoPercentComp {...p} /></WrapperPreview>
};

export const Demo_tip: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTip}><DemoTipComp {...p} /></WrapperPreview>
};
