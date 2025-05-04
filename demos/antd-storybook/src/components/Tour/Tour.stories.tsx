
import type { Meta, StoryObj } from '@storybook/react';
import { Tour } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoIndicatorComp from "./indicator";
import sourceDemoIndicator from "./indicator?raw";
            

import DemoRenderPanelComp from "./render-panel";
import sourceDemoRenderPanel from "./render-panel?raw";
            

import DemoPlacementComp from "./placement";
import sourceDemoPlacement from "./placement?raw";
            

import DemoGapComp from "./gap";
import sourceDemoGap from "./gap?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoMaskComp from "./mask";
import sourceDemoMask from "./mask?raw";
            

import DemoNonModalComp from "./non-modal";
import sourceDemoNonModal from "./non-modal?raw";
            

const meta = {
  title: 'Antd/Base/Tour',
  component: Tour,
} satisfies Meta<typeof Tour>;

export default meta;
type Story = StoryObj<any>;


export const Demo_indicator: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoIndicator}><DemoIndicatorComp {...p} /></WrapperPreview>
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRenderPanel}><DemoRenderPanelComp {...p} /></WrapperPreview>
};

export const Demo_placement: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPlacement}><DemoPlacementComp {...p} /></WrapperPreview>
};

export const Demo_gap: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoGap}><DemoGapComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_mask: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMask}><DemoMaskComp {...p} /></WrapperPreview>
};

export const Demo_nonModal: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoNonModal}><DemoNonModalComp {...p} /></WrapperPreview>
};
