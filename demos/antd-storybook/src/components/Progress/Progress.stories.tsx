import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "antd";
import WrapperPreview from "../WrapperPreview";

import DemoStepsComp from "./steps";
import sourceDemoSteps from "./steps?raw";

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";

import DemoCircleStepsComp from "./circle-steps";
import sourceDemoCircleSteps from "./circle-steps?raw";

import DemoDashboardComp from "./dashboard";
import sourceDemoDashboard from "./dashboard?raw";

import DemoSegmentComp from "./segment";
import sourceDemoSegment from "./segment?raw";

import DemoCircleMiniComp from "./circle-mini";
import sourceDemoCircleMini from "./circle-mini?raw";

import DemoCircleComp from "./circle";
import sourceDemoCircle from "./circle?raw";

import DemoGradientLineComp from "./gradient-line";
import sourceDemoGradientLine from "./gradient-line?raw";

import DemoDynamicComp from "./dynamic";
import sourceDemoDynamic from "./dynamic?raw";

import DemoCircleMicroComp from "./circle-micro";
import sourceDemoCircleMicro from "./circle-micro?raw";

import DemoLinecapComp from "./linecap";
import sourceDemoLinecap from "./linecap?raw";

import DemoLineMiniComp from "./line-mini";
import sourceDemoLineMini from "./line-mini?raw";

import DemoFormatComp from "./format";
import sourceDemoFormat from "./format?raw";

import DemoInfoPositionComp from "./info-position";
import sourceDemoInfoPosition from "./info-position?raw";

import DemoLineComp from "./line";
import sourceDemoLine from "./line?raw";

const meta = {
  title: "Base/Progress",
  component: Progress,
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<any>;

export const Demo_steps: Story = {
  render: (p: any) => (
    <WrapperPreview code={sourceDemoSteps}>
      <DemoStepsComp {...p} />
    </WrapperPreview>
  ),
};

export const Demo_size: Story = {
  render: (p: any) => (
    <WrapperPreview code={sourceDemoSize}>
      <DemoSizeComp {...p} />
    </WrapperPreview>
  ),
};

export const Demo_circleSteps: Story = {
  render: (p: any) => (
    <WrapperPreview code={sourceDemoCircleSteps}>
      <DemoCircleStepsComp {...p} />
    </WrapperPreview>
  ),
};

export const Demo_dashboard: Story = {
  render: (p: any) => (
    <WrapperPreview code={sourceDemoDashboard}>
      <DemoDashboardComp {...p} />
    </WrapperPreview>
  ),
};

export const Demo_segment: Story = {
  render: (p: any) => (
    <WrapperPreview code={sourceDemoSegment}>
      <DemoSegmentComp {...p} />
    </WrapperPreview>
  ),
};

export const Demo_circleMini: Story = {
  render: (p: any) => (
    <WrapperPreview code={sourceDemoCircleMini}>
      <DemoCircleMiniComp {...p} />
    </WrapperPreview>
  ),
};

export const Demo_circle: Story = {
  render: (p: any) => (
    <WrapperPreview code={sourceDemoCircle}>
      <DemoCircleComp {...p} />
    </WrapperPreview>
  ),
};

export const Demo_gradientLine: Story = {
  render: (p: any) => (
    <WrapperPreview code={sourceDemoGradientLine}>
      <DemoGradientLineComp {...p} />
    </WrapperPreview>
  ),
};

export const Demo_dynamic: Story = {
  render: (p: any) => (
    <WrapperPreview code={sourceDemoDynamic}>
      <DemoDynamicComp {...p} />
    </WrapperPreview>
  ),
};

export const Demo_circleMicro: Story = {
  render: (p: any) => (
    <WrapperPreview code={sourceDemoCircleMicro}>
      <DemoCircleMicroComp {...p} />
    </WrapperPreview>
  ),
};

export const Demo_linecap: Story = {
  render: (p: any) => (
    <WrapperPreview code={sourceDemoLinecap}>
      <DemoLinecapComp {...p} />
    </WrapperPreview>
  ),
};

export const Demo_lineMini: Story = {
  render: (p: any) => (
    <WrapperPreview code={sourceDemoLineMini}>
      <DemoLineMiniComp {...p} />
    </WrapperPreview>
  ),
};

export const Demo_format: Story = {
  render: (p: any) => (
    <WrapperPreview code={sourceDemoFormat}>
      <DemoFormatComp {...p} />
    </WrapperPreview>
  ),
};

export const Demo_infoPosition: Story = {
  render: (p: any) => (
    <WrapperPreview code={sourceDemoInfoPosition}>
      <DemoInfoPositionComp {...p} />
    </WrapperPreview>
  ),
};

export const Demo_line: Story = {
  render: (p: any) => (
    <WrapperPreview code={sourceDemoLine}>
      <DemoLineComp {...p} />
    </WrapperPreview>
  ),
};
