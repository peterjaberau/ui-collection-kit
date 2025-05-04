
import type { Meta, StoryObj } from '@storybook/react';
import { Segmented } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoCustomComp from "./custom";
import sourceDemoCustom from "./custom?raw";
            

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";
            

import DemoWithIconComp from "./with-icon";
import sourceDemoWithIcon from "./with-icon?raw";
            

import DemoControlledComp from "./controlled";
import sourceDemoControlled from "./controlled?raw";
            

import DemoControlledTwoComp from "./controlled-two";
import sourceDemoControlledTwo from "./controlled-two?raw";
            

import DemoShapeComp from "./shape";
import sourceDemoShape from "./shape?raw";
            

import DemoVerticalComp from "./vertical";
import sourceDemoVertical from "./vertical?raw";
            

import DemoIconOnlyComp from "./icon-only";
import sourceDemoIconOnly from "./icon-only?raw";
            

import DemoComponentTokenComp from "./componentToken";
import sourceDemoComponentToken from "./componentToken?raw";
            

import DemoDynamicComp from "./dynamic";
import sourceDemoDynamic from "./dynamic?raw";
            

import DemoBlockComp from "./block";
import sourceDemoBlock from "./block?raw";
            

import DemoDisabledComp from "./disabled";
import sourceDemoDisabled from "./disabled?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoWithNameComp from "./with-name";
import sourceDemoWithName from "./with-name?raw";
            

import DemoSizeConsistentComp from "./size-consistent";
import sourceDemoSizeConsistent from "./size-consistent?raw";
            

const meta = {
  title: 'Base/Segmented',
  component: Segmented,
} satisfies Meta<typeof Segmented>;

export default meta;
type Story = StoryObj<any>;


export const Demo_custom: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustom}><DemoCustomComp {...p} /></WrapperPreview>
};

export const Demo_size: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_withIcon: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoWithIcon}><DemoWithIconComp {...p} /></WrapperPreview>
};

export const Demo_controlled: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoControlled}><DemoControlledComp {...p} /></WrapperPreview>
};

export const Demo_controlledTwo: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoControlledTwo}><DemoControlledTwoComp {...p} /></WrapperPreview>
};

export const Demo_shape: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoShape}><DemoShapeComp {...p} /></WrapperPreview>
};

export const Demo_vertical: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVertical}><DemoVerticalComp {...p} /></WrapperPreview>
};

export const Demo_iconOnly: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoIconOnly}><DemoIconOnlyComp {...p} /></WrapperPreview>
};

export const Demo_componentToken: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoComponentToken}><DemoComponentTokenComp {...p} /></WrapperPreview>
};

export const Demo_dynamic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDynamic}><DemoDynamicComp {...p} /></WrapperPreview>
};

export const Demo_block: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBlock}><DemoBlockComp {...p} /></WrapperPreview>
};

export const Demo_disabled: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDisabled}><DemoDisabledComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_withName: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoWithName}><DemoWithNameComp {...p} /></WrapperPreview>
};

export const Demo_sizeConsistent: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSizeConsistent}><DemoSizeConsistentComp {...p} /></WrapperPreview>
};
