
import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";
            

import DemoColoredPopupComp from "./colored-popup";
import sourceDemoColoredPopup from "./colored-popup?raw";
            

import DemoChangeOnScrollComp from "./change-on-scroll";
import sourceDemoChangeOnScroll from "./change-on-scroll?raw";
            

import DemoHideColumnComp from "./hide-column";
import sourceDemoHideColumn from "./hide-column?raw";
            

import Demo12HoursComp from "./12hours";
import sourceDemo12Hours from "./12hours?raw";
            

import DemoAddonComp from "./addon";
import sourceDemoAddon from "./addon?raw";
            

import DemoNeedConfirmComp from "./need-confirm";
import sourceDemoNeedConfirm from "./need-confirm?raw";
            

import DemoValueComp from "./value";
import sourceDemoValue from "./value?raw";
            

import DemoVariantComp from "./variant";
import sourceDemoVariant from "./variant?raw";
            

import DemoIntervalOptionsComp from "./interval-options";
import sourceDemoIntervalOptions from "./interval-options?raw";
            

import DemoRenderPanelComp from "./render-panel";
import sourceDemoRenderPanel from "./render-panel?raw";
            

import DemoDisabledComp from "./disabled";
import sourceDemoDisabled from "./disabled?raw";
            

import DemoStatusComp from "./status";
import sourceDemoStatus from "./status?raw";
            

import DemoSuffixComp from "./suffix";
import sourceDemoSuffix from "./suffix?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoRangePickerComp from "./range-picker";
import sourceDemoRangePicker from "./range-picker?raw";
            

const meta = {
  title: 'Antd/Base/TimePicker',
  component: TimePicker,
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<any>;


export const Demo_size: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_coloredPopup: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoColoredPopup}><DemoColoredPopupComp {...p} /></WrapperPreview>
};

export const Demo_changeOnScroll: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoChangeOnScroll}><DemoChangeOnScrollComp {...p} /></WrapperPreview>
};

export const Demo_hideColumn: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoHideColumn}><DemoHideColumnComp {...p} /></WrapperPreview>
};

export const Demo_12Hours: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemo12Hours}><Demo12HoursComp {...p} /></WrapperPreview>
};

export const Demo_addon: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAddon}><DemoAddonComp {...p} /></WrapperPreview>
};

export const Demo_needConfirm: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoNeedConfirm}><DemoNeedConfirmComp {...p} /></WrapperPreview>
};

export const Demo_value: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoValue}><DemoValueComp {...p} /></WrapperPreview>
};

export const Demo_variant: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVariant}><DemoVariantComp {...p} /></WrapperPreview>
};

export const Demo_intervalOptions: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoIntervalOptions}><DemoIntervalOptionsComp {...p} /></WrapperPreview>
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRenderPanel}><DemoRenderPanelComp {...p} /></WrapperPreview>
};

export const Demo_disabled: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDisabled}><DemoDisabledComp {...p} /></WrapperPreview>
};

export const Demo_status: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoStatus}><DemoStatusComp {...p} /></WrapperPreview>
};

export const Demo_suffix: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSuffix}><DemoSuffixComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_rangePicker: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRangePicker}><DemoRangePickerComp {...p} /></WrapperPreview>
};
