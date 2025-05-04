
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";
            

import DemoBigDataComp from "./big-data";
import sourceDemoBigData from "./big-data?raw";
            

import DemoCustomTagRenderComp from "./custom-tag-render";
import sourceDemoCustomTagRender from "./custom-tag-render?raw";
            

import DemoSearchFilterOptionComp from "./search-filter-option";
import sourceDemoSearchFilterOption from "./search-filter-option?raw";
            

import DemoSelectUsersComp from "./select-users";
import sourceDemoSelectUsers from "./select-users?raw";
            

import DemoCustomLabelRenderComp from "./custom-label-render";
import sourceDemoCustomLabelRender from "./custom-label-render?raw";
            

import DemoSearchComp from "./search";
import sourceDemoSearch from "./search?raw";
            

import DemoVariantComp from "./variant";
import sourceDemoVariant from "./variant?raw";
            

import DemoHideSelectedComp from "./hide-selected";
import sourceDemoHideSelected from "./hide-selected?raw";
            

import DemoOptgroupComp from "./optgroup";
import sourceDemoOptgroup from "./optgroup?raw";
            

import DemoSearchSortComp from "./search-sort";
import sourceDemoSearchSort from "./search-sort?raw";
            

import DemoSearchBoxComp from "./search-box";
import sourceDemoSearchBox from "./search-box?raw";
            

import DemoMaxCountComp from "./maxCount";
import sourceDemoMaxCount from "./maxCount?raw";
            

import DemoOptionLabelCenterComp from "./option-label-center";
import sourceDemoOptionLabelCenter from "./option-label-center?raw";
            

import DemoTagsComp from "./tags";
import sourceDemoTags from "./tags?raw";
            

import DemoCoordinateComp from "./coordinate";
import sourceDemoCoordinate from "./coordinate?raw";
            

import DemoRenderPanelComp from "./render-panel";
import sourceDemoRenderPanel from "./render-panel?raw";
            

import DemoPlacementComp from "./placement";
import sourceDemoPlacement from "./placement?raw";
            

import DemoMultipleComp from "./multiple";
import sourceDemoMultiple from "./multiple?raw";
            

import DemoStatusComp from "./status";
import sourceDemoStatus from "./status?raw";
            

import DemoSuffixComp from "./suffix";
import sourceDemoSuffix from "./suffix?raw";
            

import DemoAutomaticTokenizationComp from "./automatic-tokenization";
import sourceDemoAutomaticTokenization from "./automatic-tokenization?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoLabelInValueComp from "./label-in-value";
import sourceDemoLabelInValue from "./label-in-value?raw";
            

import DemoOptionRenderComp from "./option-render";
import sourceDemoOptionRender from "./option-render?raw";
            

import DemoCustomDropdownMenuComp from "./custom-dropdown-menu";
import sourceDemoCustomDropdownMenu from "./custom-dropdown-menu?raw";
            

import DemoResponsiveComp from "./responsive";
import sourceDemoResponsive from "./responsive?raw";
            

const meta = {
  title: 'Base/Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<any>;


export const Demo_size: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_bigData: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBigData}><DemoBigDataComp {...p} /></WrapperPreview>
};

export const Demo_customTagRender: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomTagRender}><DemoCustomTagRenderComp {...p} /></WrapperPreview>
};

export const Demo_searchFilterOption: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSearchFilterOption}><DemoSearchFilterOptionComp {...p} /></WrapperPreview>
};

export const Demo_selectUsers: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSelectUsers}><DemoSelectUsersComp {...p} /></WrapperPreview>
};

export const Demo_customLabelRender: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomLabelRender}><DemoCustomLabelRenderComp {...p} /></WrapperPreview>
};

export const Demo_search: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSearch}><DemoSearchComp {...p} /></WrapperPreview>
};

export const Demo_variant: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVariant}><DemoVariantComp {...p} /></WrapperPreview>
};

export const Demo_hideSelected: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoHideSelected}><DemoHideSelectedComp {...p} /></WrapperPreview>
};

export const Demo_optgroup: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoOptgroup}><DemoOptgroupComp {...p} /></WrapperPreview>
};

export const Demo_searchSort: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSearchSort}><DemoSearchSortComp {...p} /></WrapperPreview>
};

export const Demo_searchBox: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSearchBox}><DemoSearchBoxComp {...p} /></WrapperPreview>
};

export const Demo_maxCount: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMaxCount}><DemoMaxCountComp {...p} /></WrapperPreview>
};

export const Demo_optionLabelCenter: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoOptionLabelCenter}><DemoOptionLabelCenterComp {...p} /></WrapperPreview>
};

export const Demo_tags: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTags}><DemoTagsComp {...p} /></WrapperPreview>
};

export const Demo_coordinate: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCoordinate}><DemoCoordinateComp {...p} /></WrapperPreview>
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRenderPanel}><DemoRenderPanelComp {...p} /></WrapperPreview>
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

export const Demo_automaticTokenization: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAutomaticTokenization}><DemoAutomaticTokenizationComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_labelInValue: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLabelInValue}><DemoLabelInValueComp {...p} /></WrapperPreview>
};

export const Demo_optionRender: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoOptionRender}><DemoOptionRenderComp {...p} /></WrapperPreview>
};

export const Demo_customDropdownMenu: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomDropdownMenu}><DemoCustomDropdownMenuComp {...p} /></WrapperPreview>
};

export const Demo_responsive: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoResponsive}><DemoResponsiveComp {...p} /></WrapperPreview>
};
