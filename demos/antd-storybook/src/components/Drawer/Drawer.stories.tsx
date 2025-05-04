
import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoMultiLevelDrawerComp from "./multi-level-drawer";
import sourceDemoMultiLevelDrawer from "./multi-level-drawer?raw";
            

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";
            

import DemoNoMaskComp from "./no-mask";
import sourceDemoNoMask from "./no-mask?raw";
            

import DemoBasicRightComp from "./basic-right";
import sourceDemoBasicRight from "./basic-right?raw";
            

import DemoRenderInCurrentComp from "./render-in-current";
import sourceDemoRenderInCurrent from "./render-in-current?raw";
            

import DemoExtraComp from "./extra";
import sourceDemoExtra from "./extra?raw";
            

import DemoConfigProviderComp from "./config-provider";
import sourceDemoConfigProvider from "./config-provider?raw";
            

import DemoFormInDrawerComp from "./form-in-drawer";
import sourceDemoFormInDrawer from "./form-in-drawer?raw";
            

import DemoRenderPanelComp from "./render-panel";
import sourceDemoRenderPanel from "./render-panel?raw";
            

import DemoClassNamesComp from "./classNames";
import sourceDemoClassNames from "./classNames?raw";
            

import DemoPlacementComp from "./placement";
import sourceDemoPlacement from "./placement?raw";
            

import DemoUserProfileComp from "./user-profile";
import sourceDemoUserProfile from "./user-profile?raw";
            

import DemoLoadingComp from "./loading";
import sourceDemoLoading from "./loading?raw";
            

const meta = {
  title: 'Base/Drawer',
  component: Drawer,
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<any>;


export const Demo_multiLevelDrawer: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMultiLevelDrawer}><DemoMultiLevelDrawerComp {...p} /></WrapperPreview>
};

export const Demo_size: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_noMask: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoNoMask}><DemoNoMaskComp {...p} /></WrapperPreview>
};

export const Demo_basicRight: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasicRight}><DemoBasicRightComp {...p} /></WrapperPreview>
};

export const Demo_renderInCurrent: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRenderInCurrent}><DemoRenderInCurrentComp {...p} /></WrapperPreview>
};

export const Demo_extra: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoExtra}><DemoExtraComp {...p} /></WrapperPreview>
};

export const Demo_configProvider: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoConfigProvider}><DemoConfigProviderComp {...p} /></WrapperPreview>
};

export const Demo_formInDrawer: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFormInDrawer}><DemoFormInDrawerComp {...p} /></WrapperPreview>
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRenderPanel}><DemoRenderPanelComp {...p} /></WrapperPreview>
};

export const Demo_classNames: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoClassNames}><DemoClassNamesComp {...p} /></WrapperPreview>
};

export const Demo_placement: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPlacement}><DemoPlacementComp {...p} /></WrapperPreview>
};

export const Demo_userProfile: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoUserProfile}><DemoUserProfileComp {...p} /></WrapperPreview>
};

export const Demo_loading: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLoading}><DemoLoadingComp {...p} /></WrapperPreview>
};
