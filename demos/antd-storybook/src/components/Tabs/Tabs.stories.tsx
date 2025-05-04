
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoPositionComp from "./position";
import sourceDemoPosition from "./position?raw";
            

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";
            

import DemoCustomIndicatorComp from "./custom-indicator";
import sourceDemoCustomIndicator from "./custom-indicator?raw";
            

import DemoAnimatedComp from "./animated";
import sourceDemoAnimated from "./animated?raw";
            

import DemoCardTopComp from "./card-top";
import sourceDemoCardTop from "./card-top?raw";
            

import DemoCardComp from "./card";
import sourceDemoCard from "./card?raw";
            

import DemoIconComp from "./icon";
import sourceDemoIcon from "./icon?raw";
            

import DemoEditableCardComp from "./editable-card";
import sourceDemoEditableCard from "./editable-card?raw";
            

import DemoExtraComp from "./extra";
import sourceDemoExtra from "./extra?raw";
            

import DemoNestComp from "./nest";
import sourceDemoNest from "./nest?raw";
            

import DemoCenteredComp from "./centered";
import sourceDemoCentered from "./centered?raw";
            

import DemoDisabledComp from "./disabled";
import sourceDemoDisabled from "./disabled?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoSlideComp from "./slide";
import sourceDemoSlide from "./slide?raw";
            

import DemoCustomAddTriggerComp from "./custom-add-trigger";
import sourceDemoCustomAddTrigger from "./custom-add-trigger?raw";
            

const meta = {
  title: 'Antd/Base/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<any>;


export const Demo_position: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPosition}><DemoPositionComp {...p} /></WrapperPreview>
};

export const Demo_size: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_customIndicator: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomIndicator}><DemoCustomIndicatorComp {...p} /></WrapperPreview>
};

export const Demo_animated: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAnimated}><DemoAnimatedComp {...p} /></WrapperPreview>
};

export const Demo_cardTop: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCardTop}><DemoCardTopComp {...p} /></WrapperPreview>
};

export const Demo_card: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCard}><DemoCardComp {...p} /></WrapperPreview>
};

export const Demo_icon: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoIcon}><DemoIconComp {...p} /></WrapperPreview>
};

export const Demo_editableCard: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoEditableCard}><DemoEditableCardComp {...p} /></WrapperPreview>
};

export const Demo_extra: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoExtra}><DemoExtraComp {...p} /></WrapperPreview>
};

export const Demo_nest: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoNest}><DemoNestComp {...p} /></WrapperPreview>
};

export const Demo_centered: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCentered}><DemoCenteredComp {...p} /></WrapperPreview>
};

export const Demo_disabled: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDisabled}><DemoDisabledComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_slide: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSlide}><DemoSlideComp {...p} /></WrapperPreview>
};

export const Demo_customAddTrigger: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomAddTrigger}><DemoCustomAddTriggerComp {...p} /></WrapperPreview>
};
