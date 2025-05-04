
import type { Meta, StoryObj } from '@storybook/react';
import { Anchor } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoStaticComp from "./static";
import sourceDemoStatic from "./static?raw";
            

import DemoHorizontalComp from "./horizontal";
import sourceDemoHorizontal from "./horizontal?raw";
            

import DemoCustomizeHighlightComp from "./customizeHighlight";
import sourceDemoCustomizeHighlight from "./customizeHighlight?raw";
            

import DemoLegacyAnchorComp from "./legacy-anchor";
import sourceDemoLegacyAnchor from "./legacy-anchor?raw";
            

import DemoOnChangeComp from "./onChange";
import sourceDemoOnChange from "./onChange?raw";
            

import DemoReplaceComp from "./replace";
import sourceDemoReplace from "./replace?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoOnClickComp from "./onClick";
import sourceDemoOnClick from "./onClick?raw";
            

import DemoTargetOffsetComp from "./targetOffset";
import sourceDemoTargetOffset from "./targetOffset?raw";
            

const meta = {
  title: 'Antd/Base/Anchor',
  component: Anchor,
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<any>;


export const Demo_static: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoStatic}><DemoStaticComp {...p} /></WrapperPreview>
};

export const Demo_horizontal: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoHorizontal}><DemoHorizontalComp {...p} /></WrapperPreview>
};

export const Demo_customizeHighlight: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomizeHighlight}><DemoCustomizeHighlightComp {...p} /></WrapperPreview>
};

export const Demo_legacyAnchor: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLegacyAnchor}><DemoLegacyAnchorComp {...p} /></WrapperPreview>
};

export const Demo_onChange: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoOnChange}><DemoOnChangeComp {...p} /></WrapperPreview>
};

export const Demo_replace: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoReplace}><DemoReplaceComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_onClick: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoOnClick}><DemoOnClickComp {...p} /></WrapperPreview>
};

export const Demo_targetOffset: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTargetOffset}><DemoTargetOffsetComp {...p} /></WrapperPreview>
};
