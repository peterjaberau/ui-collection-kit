
import type { Meta, StoryObj } from '@storybook/react';
import { QRCode } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoTypeComp from "./type";
import sourceDemoType from "./type?raw";
            

import DemoDownloadComp from "./download";
import sourceDemoDownload from "./download?raw";
            

import DemoCustomColorComp from "./customColor";
import sourceDemoCustomColor from "./customColor?raw";
            

import DemoPopoverComp from "./Popover";
import sourceDemoPopover from "./Popover?raw";
            

import DemoCustomStatusRenderComp from "./customStatusRender";
import sourceDemoCustomStatusRender from "./customStatusRender?raw";
            

import DemoIconComp from "./icon";
import sourceDemoIcon from "./icon?raw";
            

import DemoErrorlevelComp from "./errorlevel";
import sourceDemoErrorlevel from "./errorlevel?raw";
            

import DemoBaseComp from "./base";
import sourceDemoBase from "./base?raw";
            

import DemoStatusComp from "./status";
import sourceDemoStatus from "./status?raw";
            

import DemoCustomSizeComp from "./customSize";
import sourceDemoCustomSize from "./customSize?raw";
            

const meta = {
  title: 'Antd/Base/QRCode',
  component: QRCode,
} satisfies Meta<typeof QRCode>;

export default meta;
type Story = StoryObj<any>;


export const Demo_type: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoType}><DemoTypeComp {...p} /></WrapperPreview>
};

export const Demo_download: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDownload}><DemoDownloadComp {...p} /></WrapperPreview>
};

export const Demo_customColor: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomColor}><DemoCustomColorComp {...p} /></WrapperPreview>
};

export const Demo_popover: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPopover}><DemoPopoverComp {...p} /></WrapperPreview>
};

export const Demo_customStatusRender: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomStatusRender}><DemoCustomStatusRenderComp {...p} /></WrapperPreview>
};

export const Demo_icon: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoIcon}><DemoIconComp {...p} /></WrapperPreview>
};

export const Demo_errorlevel: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoErrorlevel}><DemoErrorlevelComp {...p} /></WrapperPreview>
};

export const Demo_base: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBase}><DemoBaseComp {...p} /></WrapperPreview>
};

export const Demo_status: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoStatus}><DemoStatusComp {...p} /></WrapperPreview>
};

export const Demo_customSize: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomSize}><DemoCustomSizeComp {...p} /></WrapperPreview>
};
