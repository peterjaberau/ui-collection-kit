
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoRadiogroupOptionsComp from "./radiogroup-options";
import sourceDemoRadiogroupOptions from "./radiogroup-options?raw";
            

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";
            

import DemoRadiogroupBlockComp from "./radiogroup-block";
import sourceDemoRadiogroupBlock from "./radiogroup-block?raw";
            

import DemoRadiobuttonSolidComp from "./radiobutton-solid";
import sourceDemoRadiobuttonSolid from "./radiobutton-solid?raw";
            

import DemoWireframeComp from "./wireframe";
import sourceDemoWireframe from "./wireframe?raw";
            

import DemoRadiogroupWithNameComp from "./radiogroup-with-name";
import sourceDemoRadiogroupWithName from "./radiogroup-with-name?raw";
            

import DemoRadiobuttonComp from "./radiobutton";
import sourceDemoRadiobutton from "./radiobutton?raw";
            

import DemoDisabledComp from "./disabled";
import sourceDemoDisabled from "./disabled?raw";
            

import DemoBadgeComp from "./badge";
import sourceDemoBadge from "./badge?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoRadiogroupComp from "./radiogroup";
import sourceDemoRadiogroup from "./radiogroup?raw";
            

import DemoRadiogroupMoreComp from "./radiogroup-more";
import sourceDemoRadiogroupMore from "./radiogroup-more?raw";
            

const meta = {
  title: 'Antd/Base/Radio',
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<any>;


export const Demo_radiogroupOptions: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRadiogroupOptions}><DemoRadiogroupOptionsComp {...p} /></WrapperPreview>
};

export const Demo_size: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_radiogroupBlock: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRadiogroupBlock}><DemoRadiogroupBlockComp {...p} /></WrapperPreview>
};

export const Demo_radiobuttonSolid: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRadiobuttonSolid}><DemoRadiobuttonSolidComp {...p} /></WrapperPreview>
};

export const Demo_wireframe: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoWireframe}><DemoWireframeComp {...p} /></WrapperPreview>
};

export const Demo_radiogroupWithName: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRadiogroupWithName}><DemoRadiogroupWithNameComp {...p} /></WrapperPreview>
};

export const Demo_radiobutton: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRadiobutton}><DemoRadiobuttonComp {...p} /></WrapperPreview>
};

export const Demo_disabled: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDisabled}><DemoDisabledComp {...p} /></WrapperPreview>
};

export const Demo_badge: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBadge}><DemoBadgeComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_radiogroup: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRadiogroup}><DemoRadiogroupComp {...p} /></WrapperPreview>
};

export const Demo_radiogroupMore: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRadiogroupMore}><DemoRadiogroupMoreComp {...p} /></WrapperPreview>
};
