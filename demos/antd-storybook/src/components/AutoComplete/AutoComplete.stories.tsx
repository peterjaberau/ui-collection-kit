
import type { Meta, StoryObj } from '@storybook/react';
import { AutoComplete } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoAllowClearComp from "./allowClear";
import sourceDemoAllowClear from "./allowClear?raw";
            

import DemoCustomComp from "./custom";
import sourceDemoCustom from "./custom?raw";
            

import DemoNonCaseSensitiveComp from "./non-case-sensitive";
import sourceDemoNonCaseSensitive from "./non-case-sensitive?raw";
            

import DemoCertainCategoryComp from "./certain-category";
import sourceDemoCertainCategory from "./certain-category?raw";
            

import DemoVariantComp from "./variant";
import sourceDemoVariant from "./variant?raw";
            

import DemoAutoCompleteAndSelectComp from "./AutoComplete-and-Select";
import sourceDemoAutoCompleteAndSelect from "./AutoComplete-and-Select?raw";
            

import DemoRenderPanelComp from "./render-panel";
import sourceDemoRenderPanel from "./render-panel?raw";
            

import DemoOptionsComp from "./options";
import sourceDemoOptions from "./options?raw";
            

import DemoStatusComp from "./status";
import sourceDemoStatus from "./status?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoUncertainCategoryComp from "./uncertain-category";
import sourceDemoUncertainCategory from "./uncertain-category?raw";
            

const meta = {
  title: 'Antd/Base/AutoComplete',
  component: AutoComplete,
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<any>;


export const Demo_allowClear: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAllowClear}><DemoAllowClearComp {...p} /></WrapperPreview>
};

export const Demo_custom: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustom}><DemoCustomComp {...p} /></WrapperPreview>
};

export const Demo_nonCaseSensitive: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoNonCaseSensitive}><DemoNonCaseSensitiveComp {...p} /></WrapperPreview>
};

export const Demo_certainCategory: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCertainCategory}><DemoCertainCategoryComp {...p} /></WrapperPreview>
};

export const Demo_variant: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVariant}><DemoVariantComp {...p} /></WrapperPreview>
};

export const Demo_autoCompleteAndSelect: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAutoCompleteAndSelect}><DemoAutoCompleteAndSelectComp {...p} /></WrapperPreview>
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRenderPanel}><DemoRenderPanelComp {...p} /></WrapperPreview>
};

export const Demo_options: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoOptions}><DemoOptionsComp {...p} /></WrapperPreview>
};

export const Demo_status: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoStatus}><DemoStatusComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_uncertainCategory: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoUncertainCategory}><DemoUncertainCategoryComp {...p} /></WrapperPreview>
};
