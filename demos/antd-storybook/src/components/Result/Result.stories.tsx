
import type { Meta, StoryObj } from '@storybook/react';
import { Result } from 'antd';
import WrapperPreview from "../WrapperPreview";

import Demo403Comp from "./403";
import sourceDemo403 from "./403?raw";
            

import DemoWarningComp from "./warning";
import sourceDemoWarning from "./warning?raw";
            

import DemoInfoComp from "./info";
import sourceDemoInfo from "./info?raw";
            

import Demo404Comp from "./404";
import sourceDemo404 from "./404?raw";
            

import Demo500Comp from "./500";
import sourceDemo500 from "./500?raw";
            

import DemoSuccessComp from "./success";
import sourceDemoSuccess from "./success?raw";
            

import DemoErrorComp from "./error";
import sourceDemoError from "./error?raw";
            

import DemoCustomIconComp from "./customIcon";
import sourceDemoCustomIcon from "./customIcon?raw";
            

const meta = {
  title: 'Antd/Base/Result',
  component: Result,
} satisfies Meta<typeof Result>;

export default meta;
type Story = StoryObj<any>;


export const Demo_403: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemo403}><Demo403Comp {...p} /></WrapperPreview>
};

export const Demo_warning: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoWarning}><DemoWarningComp {...p} /></WrapperPreview>
};

export const Demo_info: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoInfo}><DemoInfoComp {...p} /></WrapperPreview>
};

export const Demo_404: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemo404}><Demo404Comp {...p} /></WrapperPreview>
};

export const Demo_500: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemo500}><Demo500Comp {...p} /></WrapperPreview>
};

export const Demo_success: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSuccess}><DemoSuccessComp {...p} /></WrapperPreview>
};

export const Demo_error: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoError}><DemoErrorComp {...p} /></WrapperPreview>
};

export const Demo_customIcon: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomIcon}><DemoCustomIconComp {...p} /></WrapperPreview>
};
