
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";
            

import DemoModeComp from "./mode";
import sourceDemoMode from "./mode?raw";
            

import DemoTimeComp from "./time";
import sourceDemoTime from "./time?raw";
            

import DemoAllowEmptyComp from "./allow-empty";
import sourceDemoAllowEmpty from "./allow-empty?raw";
            

import DemoDisabledDateComp from "./disabled-date";
import sourceDemoDisabledDate from "./disabled-date?raw";
            

import DemoBuddhistEraComp from "./buddhist-era";
import sourceDemoBuddhistEra from "./buddhist-era?raw";
            

import DemoVariantComp from "./variant";
import sourceDemoVariant from "./variant?raw";
            

import DemoStartEndComp from "./start-end";
import sourceDemoStartEnd from "./start-end?raw";
            

import DemoRenderPanelComp from "./render-panel";
import sourceDemoRenderPanel from "./render-panel?raw";
            

import DemoPlacementComp from "./placement";
import sourceDemoPlacement from "./placement?raw";
            

import DemoDateRangeComp from "./date-range";
import sourceDemoDateRange from "./date-range?raw";
            

import DemoSwitchableComp from "./switchable";
import sourceDemoSwitchable from "./switchable?raw";
            

import DemoMultipleComp from "./multiple";
import sourceDemoMultiple from "./multiple?raw";
            

import DemoDisabledComp from "./disabled";
import sourceDemoDisabled from "./disabled?raw";
            

import DemoComponentsComp from "./components";
import sourceDemoComponents from "./components?raw";
            

import DemoStatusComp from "./status";
import sourceDemoStatus from "./status?raw";
            

import DemoSuffixComp from "./suffix";
import sourceDemoSuffix from "./suffix?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoMaskComp from "./mask";
import sourceDemoMask from "./mask?raw";
            

import DemoCellRenderComp from "./cell-render";
import sourceDemoCellRender from "./cell-render?raw";
            

import DemoSelectInRangeComp from "./select-in-range";
import sourceDemoSelectInRange from "./select-in-range?raw";
            

import DemoFormatComp from "./format";
import sourceDemoFormat from "./format?raw";
            

import DemoExtraFooterComp from "./extra-footer";
import sourceDemoExtraFooter from "./extra-footer?raw";
            

import DemoRangePickerComp from "./range-picker";
import sourceDemoRangePicker from "./range-picker?raw";
            

import DemoNeedConfirmComp from "./needConfirm";
import sourceDemoNeedConfirm from "./needConfirm?raw";
            

import DemoPresetRangesComp from "./preset-ranges";
import sourceDemoPresetRanges from "./preset-ranges?raw";
            

const meta = {
  title: 'Base/DatePicker',
  component: DatePicker,
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<any>;


export const Demo_size: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_mode: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMode}><DemoModeComp {...p} /></WrapperPreview>
};

export const Demo_time: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTime}><DemoTimeComp {...p} /></WrapperPreview>
};

export const Demo_allowEmpty: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAllowEmpty}><DemoAllowEmptyComp {...p} /></WrapperPreview>
};

export const Demo_disabledDate: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDisabledDate}><DemoDisabledDateComp {...p} /></WrapperPreview>
};

export const Demo_buddhistEra: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBuddhistEra}><DemoBuddhistEraComp {...p} /></WrapperPreview>
};

export const Demo_variant: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVariant}><DemoVariantComp {...p} /></WrapperPreview>
};

export const Demo_startEnd: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoStartEnd}><DemoStartEndComp {...p} /></WrapperPreview>
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRenderPanel}><DemoRenderPanelComp {...p} /></WrapperPreview>
};

export const Demo_placement: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPlacement}><DemoPlacementComp {...p} /></WrapperPreview>
};

export const Demo_dateRange: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDateRange}><DemoDateRangeComp {...p} /></WrapperPreview>
};

export const Demo_switchable: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSwitchable}><DemoSwitchableComp {...p} /></WrapperPreview>
};

export const Demo_multiple: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMultiple}><DemoMultipleComp {...p} /></WrapperPreview>
};

export const Demo_disabled: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDisabled}><DemoDisabledComp {...p} /></WrapperPreview>
};

export const Demo_components: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoComponents}><DemoComponentsComp {...p} /></WrapperPreview>
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

export const Demo_mask: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMask}><DemoMaskComp {...p} /></WrapperPreview>
};

export const Demo_cellRender: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCellRender}><DemoCellRenderComp {...p} /></WrapperPreview>
};

export const Demo_selectInRange: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSelectInRange}><DemoSelectInRangeComp {...p} /></WrapperPreview>
};

export const Demo_format: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFormat}><DemoFormatComp {...p} /></WrapperPreview>
};

export const Demo_extraFooter: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoExtraFooter}><DemoExtraFooterComp {...p} /></WrapperPreview>
};

export const Demo_rangePicker: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRangePicker}><DemoRangePickerComp {...p} /></WrapperPreview>
};

export const Demo_needConfirm: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoNeedConfirm}><DemoNeedConfirmComp {...p} /></WrapperPreview>
};

export const Demo_presetRanges: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPresetRanges}><DemoPresetRangesComp {...p} /></WrapperPreview>
};
