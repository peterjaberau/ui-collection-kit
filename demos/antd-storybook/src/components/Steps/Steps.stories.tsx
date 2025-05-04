
import type { Meta, StoryObj } from '@storybook/react';
import { Steps } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoNavComp from "./nav";
import sourceDemoNav from "./nav?raw";
            

import DemoProgressDotComp from "./progress-dot";
import sourceDemoProgressDot from "./progress-dot?raw";
            

import DemoCustomizedProgressDotComp from "./customized-progress-dot";
import sourceDemoCustomizedProgressDot from "./customized-progress-dot?raw";
            

import DemoProgressComp from "./progress";
import sourceDemoProgress from "./progress?raw";
            

import DemoIconComp from "./icon";
import sourceDemoIcon from "./icon?raw";
            

import DemoClickableComp from "./clickable";
import sourceDemoClickable from "./clickable?raw";
            

import DemoStepNextComp from "./step-next";
import sourceDemoStepNext from "./step-next?raw";
            

import DemoProgressDotSmallComp from "./progress-dot-small";
import sourceDemoProgressDotSmall from "./progress-dot-small?raw";
            

import DemoVerticalComp from "./vertical";
import sourceDemoVertical from "./vertical?raw";
            

import DemoWireframeComp from "./wireframe";
import sourceDemoWireframe from "./wireframe?raw";
            

import DemoVerticalSmallComp from "./vertical-small";
import sourceDemoVerticalSmall from "./vertical-small?raw";
            

import DemoSmallSizeComp from "./small-size";
import sourceDemoSmallSize from "./small-size?raw";
            

import DemoInlineComp from "./inline";
import sourceDemoInline from "./inline?raw";
            

import DemoErrorComp from "./error";
import sourceDemoError from "./error?raw";
            

import DemoStepsInStepsComp from "./steps-in-steps";
import sourceDemoStepsInSteps from "./steps-in-steps?raw";
            

import DemoSimpleComp from "./simple";
import sourceDemoSimple from "./simple?raw";
            

import DemoLabelPlacementComp from "./label-placement";
import sourceDemoLabelPlacement from "./label-placement?raw";
            

const meta = {
  title: 'Antd/Base/Steps',
  component: Steps,
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<any>;


export const Demo_nav: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoNav}><DemoNavComp {...p} /></WrapperPreview>
};

export const Demo_progressDot: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoProgressDot}><DemoProgressDotComp {...p} /></WrapperPreview>
};

export const Demo_customizedProgressDot: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomizedProgressDot}><DemoCustomizedProgressDotComp {...p} /></WrapperPreview>
};

export const Demo_progress: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoProgress}><DemoProgressComp {...p} /></WrapperPreview>
};

export const Demo_icon: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoIcon}><DemoIconComp {...p} /></WrapperPreview>
};

export const Demo_clickable: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoClickable}><DemoClickableComp {...p} /></WrapperPreview>
};

export const Demo_stepNext: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoStepNext}><DemoStepNextComp {...p} /></WrapperPreview>
};

export const Demo_progressDotSmall: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoProgressDotSmall}><DemoProgressDotSmallComp {...p} /></WrapperPreview>
};

export const Demo_vertical: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVertical}><DemoVerticalComp {...p} /></WrapperPreview>
};

export const Demo_wireframe: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoWireframe}><DemoWireframeComp {...p} /></WrapperPreview>
};

export const Demo_verticalSmall: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVerticalSmall}><DemoVerticalSmallComp {...p} /></WrapperPreview>
};

export const Demo_smallSize: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSmallSize}><DemoSmallSizeComp {...p} /></WrapperPreview>
};

export const Demo_inline: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoInline}><DemoInlineComp {...p} /></WrapperPreview>
};

export const Demo_error: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoError}><DemoErrorComp {...p} /></WrapperPreview>
};

export const Demo_stepsInSteps: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoStepsInSteps}><DemoStepsInStepsComp {...p} /></WrapperPreview>
};

export const Demo_simple: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSimple}><DemoSimpleComp {...p} /></WrapperPreview>
};

export const Demo_labelPlacement: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLabelPlacement}><DemoLabelPlacementComp {...p} /></WrapperPreview>
};
