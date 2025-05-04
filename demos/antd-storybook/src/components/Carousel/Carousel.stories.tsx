
import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoPositionComp from "./position";
import sourceDemoPosition from "./position?raw";
            

import DemoFadeComp from "./fade";
import sourceDemoFade from "./fade?raw";
            

import DemoArrowsComp from "./arrows";
import sourceDemoArrows from "./arrows?raw";
            

import DemoDotDurationComp from "./dot-duration";
import sourceDemoDotDuration from "./dot-duration?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoAutoplayComp from "./autoplay";
import sourceDemoAutoplay from "./autoplay?raw";
            

const meta = {
  title: 'Antd/Base/Carousel',
  component: Carousel,
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<any>;


export const Demo_position: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPosition}><DemoPositionComp {...p} /></WrapperPreview>
};

export const Demo_fade: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFade}><DemoFadeComp {...p} /></WrapperPreview>
};

export const Demo_arrows: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoArrows}><DemoArrowsComp {...p} /></WrapperPreview>
};

export const Demo_dotDuration: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDotDuration}><DemoDotDurationComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_autoplay: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAutoplay}><DemoAutoplayComp {...p} /></WrapperPreview>
};
