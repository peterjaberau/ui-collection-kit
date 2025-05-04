
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoGroupComp from "./group";
import sourceDemoGroup from "./group?raw";
            

import DemoControllerComp from "./controller";
import sourceDemoController from "./controller?raw";
            

import DemoCheckAllComp from "./check-all";
import sourceDemoCheckAll from "./check-all?raw";
            

import DemoCustomLineWidthComp from "./custom-line-width";
import sourceDemoCustomLineWidth from "./custom-line-width?raw";
            

import DemoLayoutComp from "./layout";
import sourceDemoLayout from "./layout?raw";
            

import DemoDisabledComp from "./disabled";
import sourceDemoDisabled from "./disabled?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

const meta = {
  title: 'Base/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<any>;


export const Demo_group: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoGroup}><DemoGroupComp {...p} /></WrapperPreview>
};

export const Demo_controller: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoController}><DemoControllerComp {...p} /></WrapperPreview>
};

export const Demo_checkAll: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCheckAll}><DemoCheckAllComp {...p} /></WrapperPreview>
};

export const Demo_customLineWidth: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomLineWidth}><DemoCustomLineWidthComp {...p} /></WrapperPreview>
};

export const Demo_layout: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLayout}><DemoLayoutComp {...p} /></WrapperPreview>
};

export const Demo_disabled: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDisabled}><DemoDisabledComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};
