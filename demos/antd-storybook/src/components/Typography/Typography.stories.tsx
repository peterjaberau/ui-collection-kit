
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoEditableComp from "./editable";
import sourceDemoEditable from "./editable?raw";
            

import DemoTitleComp from "./title";
import sourceDemoTitle from "./title?raw";
            

import DemoCopyableComp from "./copyable";
import sourceDemoCopyable from "./copyable?raw";
            

import DemoEllipsisMiddleComp from "./ellipsis-middle";
import sourceDemoEllipsisMiddle from "./ellipsis-middle?raw";
            

import DemoEllipsisComp from "./ellipsis";
import sourceDemoEllipsis from "./ellipsis?raw";
            

import DemoSuffixComp from "./suffix";
import sourceDemoSuffix from "./suffix?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoTextComp from "./text";
import sourceDemoText from "./text?raw";
            

import DemoEllipsisControlledComp from "./ellipsis-controlled";
import sourceDemoEllipsisControlled from "./ellipsis-controlled?raw";
            

const meta = {
  title: 'Antd/Base/Typography',
  component: Typography,
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<any>;


export const Demo_editable: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoEditable}><DemoEditableComp {...p} /></WrapperPreview>
};

export const Demo_title: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTitle}><DemoTitleComp {...p} /></WrapperPreview>
};

export const Demo_copyable: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCopyable}><DemoCopyableComp {...p} /></WrapperPreview>
};

export const Demo_ellipsisMiddle: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoEllipsisMiddle}><DemoEllipsisMiddleComp {...p} /></WrapperPreview>
};

export const Demo_ellipsis: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoEllipsis}><DemoEllipsisComp {...p} /></WrapperPreview>
};

export const Demo_suffix: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSuffix}><DemoSuffixComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_text: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoText}><DemoTextComp {...p} /></WrapperPreview>
};

export const Demo_ellipsisControlled: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoEllipsisControlled}><DemoEllipsisControlledComp {...p} /></WrapperPreview>
};
