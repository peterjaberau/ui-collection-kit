
import type { Meta, StoryObj } from '@storybook/react';
import { FloatButton } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoGroupComp from "./group";
import sourceDemoGroup from "./group?raw";
            

import DemoTypeComp from "./type";
import sourceDemoType from "./type?raw";
            

import DemoControlledComp from "./controlled";
import sourceDemoControlled from "./controlled?raw";
            

import DemoShapeComp from "./shape";
import sourceDemoShape from "./shape?raw";
            

import DemoTooltipComp from "./tooltip";
import sourceDemoTooltip from "./tooltip?raw";
            

import DemoDescriptionComp from "./description";
import sourceDemoDescription from "./description?raw";
            

import DemoRenderPanelComp from "./render-panel";
import sourceDemoRenderPanel from "./render-panel?raw";
            

import DemoPlacementComp from "./placement";
import sourceDemoPlacement from "./placement?raw";
            

import DemoGroupMenuComp from "./group-menu";
import sourceDemoGroupMenu from "./group-menu?raw";
            

import DemoBadgeComp from "./badge";
import sourceDemoBadge from "./badge?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoBackTopComp from "./back-top";
import sourceDemoBackTop from "./back-top?raw";
            

const meta = {
  title: 'Base/FloatButton',
  component: FloatButton,
} satisfies Meta<typeof FloatButton>;

export default meta;
type Story = StoryObj<any>;


export const Demo_group: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoGroup}><DemoGroupComp {...p} /></WrapperPreview>
};

export const Demo_type: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoType}><DemoTypeComp {...p} /></WrapperPreview>
};

export const Demo_controlled: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoControlled}><DemoControlledComp {...p} /></WrapperPreview>
};

export const Demo_shape: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoShape}><DemoShapeComp {...p} /></WrapperPreview>
};

export const Demo_tooltip: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTooltip}><DemoTooltipComp {...p} /></WrapperPreview>
};

export const Demo_description: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDescription}><DemoDescriptionComp {...p} /></WrapperPreview>
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRenderPanel}><DemoRenderPanelComp {...p} /></WrapperPreview>
};

export const Demo_placement: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPlacement}><DemoPlacementComp {...p} /></WrapperPreview>
};

export const Demo_groupMenu: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoGroupMenu}><DemoGroupMenuComp {...p} /></WrapperPreview>
};

export const Demo_badge: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBadge}><DemoBadgeComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_backTop: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBackTop}><DemoBackTopComp {...p} /></WrapperPreview>
};
