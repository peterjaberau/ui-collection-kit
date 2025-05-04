
import type { Meta, StoryObj } from '@storybook/react';
import { Cascader } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoChangeOnSelectComp from "./change-on-select";
import sourceDemoChangeOnSelect from "./change-on-select?raw";
            

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";
            

import DemoCustomRenderComp from "./custom-render";
import sourceDemoCustomRender from "./custom-render?raw";
            

import DemoCustomDropdownComp from "./custom-dropdown";
import sourceDemoCustomDropdown from "./custom-dropdown?raw";
            

import DemoCustomTriggerComp from "./custom-trigger";
import sourceDemoCustomTrigger from "./custom-trigger?raw";
            

import DemoSearchComp from "./search";
import sourceDemoSearch from "./search?raw";
            

import DemoVariantComp from "./variant";
import sourceDemoVariant from "./variant?raw";
            

import DemoFieldsNameComp from "./fields-name";
import sourceDemoFieldsName from "./fields-name?raw";
            

import DemoShowCheckedStrategyComp from "./showCheckedStrategy";
import sourceDemoShowCheckedStrategy from "./showCheckedStrategy?raw";
            

import DemoRenderPanelComp from "./render-panel";
import sourceDemoRenderPanel from "./render-panel?raw";
            

import DemoPanelComp from "./panel";
import sourceDemoPanel from "./panel?raw";
            

import DemoPlacementComp from "./placement";
import sourceDemoPlacement from "./placement?raw";
            

import DemoMultipleComp from "./multiple";
import sourceDemoMultiple from "./multiple?raw";
            

import DemoStatusComp from "./status";
import sourceDemoStatus from "./status?raw";
            

import DemoSuffixComp from "./suffix";
import sourceDemoSuffix from "./suffix?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoLazyComp from "./lazy";
import sourceDemoLazy from "./lazy?raw";
            

import DemoDisabledOptionComp from "./disabled-option";
import sourceDemoDisabledOption from "./disabled-option?raw";
            

import DemoHoverComp from "./hover";
import sourceDemoHover from "./hover?raw";
            

import DemoDefaultValueComp from "./default-value";
import sourceDemoDefaultValue from "./default-value?raw";
            

const meta = {
  title: 'Base/Cascader',
  component: Cascader,
} satisfies Meta<typeof Cascader>;

export default meta;
type Story = StoryObj<any>;


export const Demo_changeOnSelect: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoChangeOnSelect}><DemoChangeOnSelectComp {...p} /></WrapperPreview>
};

export const Demo_size: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_customRender: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomRender}><DemoCustomRenderComp {...p} /></WrapperPreview>
};

export const Demo_customDropdown: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomDropdown}><DemoCustomDropdownComp {...p} /></WrapperPreview>
};

export const Demo_customTrigger: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomTrigger}><DemoCustomTriggerComp {...p} /></WrapperPreview>
};

export const Demo_search: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSearch}><DemoSearchComp {...p} /></WrapperPreview>
};

export const Demo_variant: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVariant}><DemoVariantComp {...p} /></WrapperPreview>
};

export const Demo_fieldsName: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFieldsName}><DemoFieldsNameComp {...p} /></WrapperPreview>
};

export const Demo_showCheckedStrategy: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoShowCheckedStrategy}><DemoShowCheckedStrategyComp {...p} /></WrapperPreview>
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRenderPanel}><DemoRenderPanelComp {...p} /></WrapperPreview>
};

export const Demo_panel: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPanel}><DemoPanelComp {...p} /></WrapperPreview>
};

export const Demo_placement: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPlacement}><DemoPlacementComp {...p} /></WrapperPreview>
};

export const Demo_multiple: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMultiple}><DemoMultipleComp {...p} /></WrapperPreview>
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

export const Demo_lazy: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLazy}><DemoLazyComp {...p} /></WrapperPreview>
};

export const Demo_disabledOption: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDisabledOption}><DemoDisabledOptionComp {...p} /></WrapperPreview>
};

export const Demo_hover: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoHover}><DemoHoverComp {...p} /></WrapperPreview>
};

export const Demo_defaultValue: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDefaultValue}><DemoDefaultValueComp {...p} /></WrapperPreview>
};
