
import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoSeparatorComponentComp from "./separator-component";
import sourceDemoSeparatorComponent from "./separator-component?raw";
            

import DemoWithIconComp from "./withIcon";
import sourceDemoWithIcon from "./withIcon?raw";
            

import DemoWithParamsComp from "./withParams";
import sourceDemoWithParams from "./withParams?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoSeparatorComp from "./separator";
import sourceDemoSeparator from "./separator?raw";
            

import DemoOverlayComp from "./overlay";
import sourceDemoOverlay from "./overlay?raw";
            

const meta = {
  title: 'Antd/Base/Breadcrumb',
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<any>;


export const Demo_separatorComponent: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSeparatorComponent}><DemoSeparatorComponentComp {...p} /></WrapperPreview>
};

export const Demo_withIcon: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoWithIcon}><DemoWithIconComp {...p} /></WrapperPreview>
};

export const Demo_withParams: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoWithParams}><DemoWithParamsComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_separator: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSeparator}><DemoSeparatorComp {...p} /></WrapperPreview>
};

export const Demo_overlay: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoOverlay}><DemoOverlayComp {...p} /></WrapperPreview>
};
