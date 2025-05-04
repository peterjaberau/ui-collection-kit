
import type { Meta, StoryObj } from '@storybook/react';
import { Upload } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoPreviewFileComp from "./preview-file";
import sourceDemoPreviewFile from "./preview-file?raw";
            

import DemoTransformFileComp from "./transform-file";
import sourceDemoTransformFile from "./transform-file?raw";
            

import DemoUploadCustomActionIconComp from "./upload-custom-action-icon";
import sourceDemoUploadCustomActionIcon from "./upload-custom-action-icon?raw";
            

import DemoPictureCardComp from "./picture-card";
import sourceDemoPictureCard from "./picture-card?raw";
            

import DemoDragComp from "./drag";
import sourceDemoDrag from "./drag?raw";
            

import DemoPictureStyleComp from "./picture-style";
import sourceDemoPictureStyle from "./picture-style?raw";
            

import DemoUploadManuallyComp from "./upload-manually";
import sourceDemoUploadManually from "./upload-manually?raw";
            

import DemoDirectoryComp from "./directory";
import sourceDemoDirectory from "./directory?raw";
            

import DemoUploadWithAliyunOssComp from "./upload-with-aliyun-oss";
import sourceDemoUploadWithAliyunOss from "./upload-with-aliyun-oss?raw";
            

import DemoDefaultFileListComp from "./defaultFileList";
import sourceDemoDefaultFileList from "./defaultFileList?raw";
            

import DemoFileListComp from "./fileList";
import sourceDemoFileList from "./fileList?raw";
            

import DemoAvatarComp from "./avatar";
import sourceDemoAvatar from "./avatar?raw";
            

import DemoUploadPngOnlyComp from "./upload-png-only";
import sourceDemoUploadPngOnly from "./upload-png-only?raw";
            

import DemoFileTypeComp from "./file-type";
import sourceDemoFileType from "./file-type?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoPictureCircleComp from "./picture-circle";
import sourceDemoPictureCircle from "./picture-circle?raw";
            

import DemoCustomizeProgressBarComp from "./customize-progress-bar";
import sourceDemoCustomizeProgressBar from "./customize-progress-bar?raw";
            

import DemoMaxCountComp from "./max-count";
import sourceDemoMaxCount from "./max-count?raw";
            

const meta = {
  title: 'Antd/Base/Upload',
  component: Upload,
} satisfies Meta<typeof Upload>;

export default meta;
type Story = StoryObj<any>;


export const Demo_previewFile: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPreviewFile}><DemoPreviewFileComp {...p} /></WrapperPreview>
};

export const Demo_transformFile: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTransformFile}><DemoTransformFileComp {...p} /></WrapperPreview>
};

export const Demo_uploadCustomActionIcon: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoUploadCustomActionIcon}><DemoUploadCustomActionIconComp {...p} /></WrapperPreview>
};

export const Demo_pictureCard: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPictureCard}><DemoPictureCardComp {...p} /></WrapperPreview>
};

export const Demo_drag: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDrag}><DemoDragComp {...p} /></WrapperPreview>
};

export const Demo_pictureStyle: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPictureStyle}><DemoPictureStyleComp {...p} /></WrapperPreview>
};

export const Demo_uploadManually: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoUploadManually}><DemoUploadManuallyComp {...p} /></WrapperPreview>
};

export const Demo_directory: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDirectory}><DemoDirectoryComp {...p} /></WrapperPreview>
};

export const Demo_uploadWithAliyunOss: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoUploadWithAliyunOss}><DemoUploadWithAliyunOssComp {...p} /></WrapperPreview>
};

export const Demo_defaultFileList: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDefaultFileList}><DemoDefaultFileListComp {...p} /></WrapperPreview>
};

export const Demo_fileList: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFileList}><DemoFileListComp {...p} /></WrapperPreview>
};

export const Demo_avatar: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAvatar}><DemoAvatarComp {...p} /></WrapperPreview>
};

export const Demo_uploadPngOnly: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoUploadPngOnly}><DemoUploadPngOnlyComp {...p} /></WrapperPreview>
};

export const Demo_fileType: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFileType}><DemoFileTypeComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_pictureCircle: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPictureCircle}><DemoPictureCircleComp {...p} /></WrapperPreview>
};

export const Demo_customizeProgressBar: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomizeProgressBar}><DemoCustomizeProgressBarComp {...p} /></WrapperPreview>
};

export const Demo_maxCount: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMaxCount}><DemoMaxCountComp {...p} /></WrapperPreview>
};
