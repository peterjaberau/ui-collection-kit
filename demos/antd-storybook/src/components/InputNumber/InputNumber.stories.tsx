
import type { Meta, StoryObj } from '@storybook/react';
import { InputNumber } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";
            

import DemoKeyboardComp from "./keyboard";
import sourceDemoKeyboard from "./keyboard?raw";
            

import DemoAddonComp from "./addon";
import sourceDemoAddon from "./addon?raw";
            

import DemoPresuffixComp from "./presuffix";
import sourceDemoPresuffix from "./presuffix?raw";
            

import DemoFormatterComp from "./formatter";
import sourceDemoFormatter from "./formatter?raw";
            

import DemoVariantComp from "./variant";
import sourceDemoVariant from "./variant?raw";
            

import DemoRenderPanelComp from "./render-panel";
import sourceDemoRenderPanel from "./render-panel?raw";
            

import DemoDisabledComp from "./disabled";
import sourceDemoDisabled from "./disabled?raw";
            

import DemoChangeOnWheelComp from "./change-on-wheel";
import sourceDemoChangeOnWheel from "./change-on-wheel?raw";
            

import DemoDigitComp from "./digit";
import sourceDemoDigit from "./digit?raw";
            

import DemoStatusComp from "./status";
import sourceDemoStatus from "./status?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoControlsComp from "./controls";
import sourceDemoControls from "./controls?raw";
            

import DemoOutOfRangeComp from "./out-of-range";
import sourceDemoOutOfRange from "./out-of-range?raw";
            

const meta = {
  title: 'Antd/Base/InputNumber',
  component: InputNumber,
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<any>;


export const Demo_size: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_keyboard: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoKeyboard}><DemoKeyboardComp {...p} /></WrapperPreview>
};

export const Demo_addon: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAddon}><DemoAddonComp {...p} /></WrapperPreview>
};

export const Demo_presuffix: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPresuffix}><DemoPresuffixComp {...p} /></WrapperPreview>
};

export const Demo_formatter: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFormatter}><DemoFormatterComp {...p} /></WrapperPreview>
};

export const Demo_variant: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVariant}><DemoVariantComp {...p} /></WrapperPreview>
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRenderPanel}><DemoRenderPanelComp {...p} /></WrapperPreview>
};

export const Demo_disabled: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDisabled}><DemoDisabledComp {...p} /></WrapperPreview>
};

export const Demo_changeOnWheel: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoChangeOnWheel}><DemoChangeOnWheelComp {...p} /></WrapperPreview>
};

export const Demo_digit: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDigit}><DemoDigitComp {...p} /></WrapperPreview>
};

export const Demo_status: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoStatus}><DemoStatusComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_controls: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoControls}><DemoControlsComp {...p} /></WrapperPreview>
};

export const Demo_outOfRange: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoOutOfRange}><DemoOutOfRangeComp {...p} /></WrapperPreview>
};
