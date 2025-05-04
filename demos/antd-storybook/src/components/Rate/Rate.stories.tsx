
import type { Meta, StoryObj } from '@storybook/react';
import { Rate } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoClearComp from "./clear";
import sourceDemoClear from "./clear?raw";
            

import DemoCharacterFunctionComp from "./character-function";
import sourceDemoCharacterFunction from "./character-function?raw";
            

import DemoHalfComp from "./half";
import sourceDemoHalf from "./half?raw";
            

import DemoDisabledComp from "./disabled";
import sourceDemoDisabled from "./disabled?raw";
            

import DemoCharacterComp from "./character";
import sourceDemoCharacter from "./character?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoTextComp from "./text";
import sourceDemoText from "./text?raw";
            

const meta = {
  title: 'Base/Rate',
  component: Rate,
} satisfies Meta<typeof Rate>;

export default meta;
type Story = StoryObj<any>;


export const Demo_clear: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoClear}><DemoClearComp {...p} /></WrapperPreview>
};

export const Demo_characterFunction: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCharacterFunction}><DemoCharacterFunctionComp {...p} /></WrapperPreview>
};

export const Demo_half: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoHalf}><DemoHalfComp {...p} /></WrapperPreview>
};

export const Demo_disabled: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDisabled}><DemoDisabledComp {...p} /></WrapperPreview>
};

export const Demo_character: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCharacter}><DemoCharacterComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_text: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoText}><DemoTextComp {...p} /></WrapperPreview>
};
