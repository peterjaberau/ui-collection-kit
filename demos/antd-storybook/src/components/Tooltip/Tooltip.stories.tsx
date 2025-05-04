
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoShiftComp from "./shift";
import sourceDemoShift from "./shift?raw";
            

import DemoArrowComp from "./arrow";
import sourceDemoArrow from "./arrow?raw";
            

import DemoWrapCustomComponentComp from "./wrap-custom-component";
import sourceDemoWrapCustomComponent from "./wrap-custom-component?raw";
            

import DemoDisabledChildrenComp from "./disabled-children";
import sourceDemoDisabledChildren from "./disabled-children?raw";
            

import DemoArrowPointAtCenterComp from "./arrow-point-at-center";
import sourceDemoArrowPointAtCenter from "./arrow-point-at-center?raw";
            

import DemoDestroyTooltipOnHideComp from "./destroy-tooltip-on-hide";
import sourceDemoDestroyTooltipOnHide from "./destroy-tooltip-on-hide?raw";
            

import DemoRenderPanelComp from "./render-panel";
import sourceDemoRenderPanel from "./render-panel?raw";
            

import DemoPlacementComp from "./placement";
import sourceDemoPlacement from "./placement?raw";
            

import DemoColorfulComp from "./colorful";
import sourceDemoColorful from "./colorful?raw";
            

import DemoDisabledComp from "./disabled";
import sourceDemoDisabled from "./disabled?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoAutoAdjustOverflowComp from "./auto-adjust-overflow";
import sourceDemoAutoAdjustOverflow from "./auto-adjust-overflow?raw";
            

const meta = {
  title: 'Antd/Base/Tooltip',
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<any>;


export const Demo_shift: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoShift}><DemoShiftComp {...p} /></WrapperPreview>
};

export const Demo_arrow: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoArrow}><DemoArrowComp {...p} /></WrapperPreview>
};

export const Demo_wrapCustomComponent: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoWrapCustomComponent}><DemoWrapCustomComponentComp {...p} /></WrapperPreview>
};

export const Demo_disabledChildren: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDisabledChildren}><DemoDisabledChildrenComp {...p} /></WrapperPreview>
};

export const Demo_arrowPointAtCenter: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoArrowPointAtCenter}><DemoArrowPointAtCenterComp {...p} /></WrapperPreview>
};

export const Demo_destroyTooltipOnHide: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDestroyTooltipOnHide}><DemoDestroyTooltipOnHideComp {...p} /></WrapperPreview>
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRenderPanel}><DemoRenderPanelComp {...p} /></WrapperPreview>
};

export const Demo_placement: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPlacement}><DemoPlacementComp {...p} /></WrapperPreview>
};

export const Demo_colorful: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoColorful}><DemoColorfulComp {...p} /></WrapperPreview>
};

export const Demo_disabled: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDisabled}><DemoDisabledComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_autoAdjustOverflow: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAutoAdjustOverflow}><DemoAutoAdjustOverflowComp {...p} /></WrapperPreview>
};
