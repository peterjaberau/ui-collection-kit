
import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoEditableComp from "./editable";
import sourceDemoEditable from "./editable?raw";
            

import DemoTipFormatterComp from "./tip-formatter";
import sourceDemoTipFormatter from "./tip-formatter?raw";
            

import DemoShowTooltipComp from "./show-tooltip";
import sourceDemoShowTooltip from "./show-tooltip?raw";
            

import DemoEventComp from "./event";
import sourceDemoEvent from "./event?raw";
            

import DemoVerticalComp from "./vertical";
import sourceDemoVertical from "./vertical?raw";
            

import DemoIconSliderComp from "./icon-slider";
import sourceDemoIconSlider from "./icon-slider?raw";
            

import DemoReverseComp from "./reverse";
import sourceDemoReverse from "./reverse?raw";
            

import DemoMultipleComp from "./multiple";
import sourceDemoMultiple from "./multiple?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoInputNumberComp from "./input-number";
import sourceDemoInputNumber from "./input-number?raw";
            

import DemoMarkComp from "./mark";
import sourceDemoMark from "./mark?raw";
            

const meta = {
  title: 'Antd/Base/Slider',
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<any>;


export const Demo_editable: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoEditable}><DemoEditableComp {...p} /></WrapperPreview>
};

export const Demo_tipFormatter: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTipFormatter}><DemoTipFormatterComp {...p} /></WrapperPreview>
};

export const Demo_showTooltip: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoShowTooltip}><DemoShowTooltipComp {...p} /></WrapperPreview>
};

export const Demo_event: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoEvent}><DemoEventComp {...p} /></WrapperPreview>
};

export const Demo_vertical: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVertical}><DemoVerticalComp {...p} /></WrapperPreview>
};

export const Demo_iconSlider: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoIconSlider}><DemoIconSliderComp {...p} /></WrapperPreview>
};

export const Demo_reverse: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoReverse}><DemoReverseComp {...p} /></WrapperPreview>
};

export const Demo_multiple: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMultiple}><DemoMultipleComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_inputNumber: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoInputNumber}><DemoInputNumberComp {...p} /></WrapperPreview>
};

export const Demo_mark: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMark}><DemoMarkComp {...p} /></WrapperPreview>
};
