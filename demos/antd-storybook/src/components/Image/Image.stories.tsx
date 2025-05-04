
import type { Meta, StoryObj } from '@storybook/react';
import { Image } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoNestedComp from "./nested";
import sourceDemoNested from "./nested?raw";
            

import DemoPreviewGroupTopProgressComp from "./preview-group-top-progress";
import sourceDemoPreviewGroupTopProgress from "./preview-group-top-progress?raw";
            

import DemoPreviewSrcComp from "./previewSrc";
import sourceDemoPreviewSrc from "./previewSrc?raw";
            

import DemoImageRenderComp from "./imageRender";
import sourceDemoImageRender from "./imageRender?raw";
            

import DemoControlledPreviewComp from "./controlled-preview";
import sourceDemoControlledPreview from "./controlled-preview?raw";
            

import DemoPreviewImgInfoComp from "./preview-imgInfo";
import sourceDemoPreviewImgInfo from "./preview-imgInfo?raw";
            

import DemoPlaceholderComp from "./placeholder";
import sourceDemoPlaceholder from "./placeholder?raw";
            

import DemoToolbarRenderComp from "./toolbarRender";
import sourceDemoToolbarRender from "./toolbarRender?raw";
            

import DemoPreviewMaskComp from "./preview-mask";
import sourceDemoPreviewMask from "./preview-mask?raw";
            

import DemoPreviewGroupVisibleComp from "./preview-group-visible";
import sourceDemoPreviewGroupVisible from "./preview-group-visible?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoFallbackComp from "./fallback";
import sourceDemoFallback from "./fallback?raw";
            

import DemoPreviewGroupComp from "./preview-group";
import sourceDemoPreviewGroup from "./preview-group?raw";
            

const meta = {
  title: 'Antd/Base/Image',
  component: Image,
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<any>;


export const Demo_nested: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoNested}><DemoNestedComp {...p} /></WrapperPreview>
};

export const Demo_previewGroupTopProgress: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPreviewGroupTopProgress}><DemoPreviewGroupTopProgressComp {...p} /></WrapperPreview>
};

export const Demo_previewSrc: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPreviewSrc}><DemoPreviewSrcComp {...p} /></WrapperPreview>
};

export const Demo_imageRender: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoImageRender}><DemoImageRenderComp {...p} /></WrapperPreview>
};

export const Demo_controlledPreview: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoControlledPreview}><DemoControlledPreviewComp {...p} /></WrapperPreview>
};

export const Demo_previewImgInfo: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPreviewImgInfo}><DemoPreviewImgInfoComp {...p} /></WrapperPreview>
};

export const Demo_placeholder: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPlaceholder}><DemoPlaceholderComp {...p} /></WrapperPreview>
};

export const Demo_toolbarRender: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoToolbarRender}><DemoToolbarRenderComp {...p} /></WrapperPreview>
};

export const Demo_previewMask: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPreviewMask}><DemoPreviewMaskComp {...p} /></WrapperPreview>
};

export const Demo_previewGroupVisible: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPreviewGroupVisible}><DemoPreviewGroupVisibleComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_fallback: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFallback}><DemoFallbackComp {...p} /></WrapperPreview>
};

export const Demo_previewGroup: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPreviewGroup}><DemoPreviewGroupComp {...p} /></WrapperPreview>
};
