
import type { Meta, StoryObj } from '@storybook/react';
import { Space } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoCompactButtonsComp from "./compact-buttons";
import sourceDemoCompactButtons from "./compact-buttons?raw";
            

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";
            

import DemoCompactButtonVerticalComp from "./compact-button-vertical";
import sourceDemoCompactButtonVertical from "./compact-button-vertical?raw";
            

import DemoVerticalComp from "./vertical";
import sourceDemoVertical from "./vertical?raw";
            

import DemoCompactComp from "./compact";
import sourceDemoCompact from "./compact?raw";
            

import DemoAlignComp from "./align";
import sourceDemoAlign from "./align?raw";
            

import DemoGapInLineComp from "./gap-in-line";
import sourceDemoGapInLine from "./gap-in-line?raw";
            

import DemoBaseComp from "./base";
import sourceDemoBase from "./base?raw";
            

import DemoWrapComp from "./wrap";
import sourceDemoWrap from "./wrap?raw";
            

import DemoCompactNestedComp from "./compact-nested";
import sourceDemoCompactNested from "./compact-nested?raw";
            

import DemoSplitComp from "./split";
import sourceDemoSplit from "./split?raw";
            

const meta = {
  title: 'Antd/Base/Space',
  component: Space,
} satisfies Meta<typeof Space>;

export default meta;
type Story = StoryObj<any>;


export const Demo_compactButtons: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCompactButtons}><DemoCompactButtonsComp {...p} /></WrapperPreview>
};

export const Demo_size: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_compactButtonVertical: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCompactButtonVertical}><DemoCompactButtonVerticalComp {...p} /></WrapperPreview>
};

export const Demo_vertical: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVertical}><DemoVerticalComp {...p} /></WrapperPreview>
};

export const Demo_compact: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCompact}><DemoCompactComp {...p} /></WrapperPreview>
};

export const Demo_align: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAlign}><DemoAlignComp {...p} /></WrapperPreview>
};

export const Demo_gapInLine: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoGapInLine}><DemoGapInLineComp {...p} /></WrapperPreview>
};

export const Demo_base: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBase}><DemoBaseComp {...p} /></WrapperPreview>
};

export const Demo_wrap: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoWrap}><DemoWrapComp {...p} /></WrapperPreview>
};

export const Demo_compactNested: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCompactNested}><DemoCompactNestedComp {...p} /></WrapperPreview>
};

export const Demo_split: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSplit}><DemoSplitComp {...p} /></WrapperPreview>
};
