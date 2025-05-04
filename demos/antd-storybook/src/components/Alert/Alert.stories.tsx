
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoActionComp from "./action";
import sourceDemoAction from "./action?raw";
            

import DemoBannerComp from "./banner";
import sourceDemoBanner from "./banner?raw";
            

import DemoErrorBoundaryComp from "./error-boundary";
import sourceDemoErrorBoundary from "./error-boundary?raw";
            

import DemoIconComp from "./icon";
import sourceDemoIcon from "./icon?raw";
            

import DemoCustomIconComp from "./custom-icon";
import sourceDemoCustomIcon from "./custom-icon?raw";
            

import DemoDescriptionComp from "./description";
import sourceDemoDescription from "./description?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoStyleComp from "./style";
import sourceDemoStyle from "./style?raw";
            

import DemoClosableComp from "./closable";
import sourceDemoClosable from "./closable?raw";
            

import DemoSmoothClosedComp from "./smooth-closed";
import sourceDemoSmoothClosed from "./smooth-closed?raw";
            

const meta = {
  title: 'Antd/Base/Alert',
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<any>;


export const Demo_action: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAction}><DemoActionComp {...p} /></WrapperPreview>
};

export const Demo_banner: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBanner}><DemoBannerComp {...p} /></WrapperPreview>
};

export const Demo_errorBoundary: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoErrorBoundary}><DemoErrorBoundaryComp {...p} /></WrapperPreview>
};

export const Demo_icon: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoIcon}><DemoIconComp {...p} /></WrapperPreview>
};

export const Demo_customIcon: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomIcon}><DemoCustomIconComp {...p} /></WrapperPreview>
};

export const Demo_description: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDescription}><DemoDescriptionComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_style: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoStyle}><DemoStyleComp {...p} /></WrapperPreview>
};

export const Demo_closable: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoClosable}><DemoClosableComp {...p} /></WrapperPreview>
};

export const Demo_smoothClosed: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSmoothClosed}><DemoSmoothClosedComp {...p} /></WrapperPreview>
};
