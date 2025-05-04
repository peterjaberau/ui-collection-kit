
import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoResponsiveFlexComp from "./responsive-flex";
import sourceDemoResponsiveFlex from "./responsive-flex?raw";
            

import DemoUseBreakpointComp from "./useBreakpoint";
import sourceDemoUseBreakpoint from "./useBreakpoint?raw";
            

import DemoFlexStretchComp from "./flex-stretch";
import sourceDemoFlexStretch from "./flex-stretch?raw";
            

import DemoFlexComp from "./flex";
import sourceDemoFlex from "./flex?raw";
            

import DemoSortComp from "./sort";
import sourceDemoSort from "./sort?raw";
            

import DemoPlaygroundComp from "./playground";
import sourceDemoPlayground from "./playground?raw";
            

import DemoOffsetComp from "./offset";
import sourceDemoOffset from "./offset?raw";
            

import DemoGutterComp from "./gutter";
import sourceDemoGutter from "./gutter?raw";
            

import DemoFlexOrderComp from "./flex-order";
import sourceDemoFlexOrder from "./flex-order?raw";
            

import DemoResponsiveMoreComp from "./responsive-more";
import sourceDemoResponsiveMore from "./responsive-more?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoFlexAlignComp from "./flex-align";
import sourceDemoFlexAlign from "./flex-align?raw";
            

import DemoResponsiveComp from "./responsive";
import sourceDemoResponsive from "./responsive?raw";
            

const meta = {
  title: 'Antd/Base/Grid',
  component: Grid,
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<any>;


export const Demo_responsiveFlex: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoResponsiveFlex}><DemoResponsiveFlexComp {...p} /></WrapperPreview>
};

export const Demo_useBreakpoint: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoUseBreakpoint}><DemoUseBreakpointComp {...p} /></WrapperPreview>
};

export const Demo_flexStretch: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFlexStretch}><DemoFlexStretchComp {...p} /></WrapperPreview>
};

export const Demo_flex: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFlex}><DemoFlexComp {...p} /></WrapperPreview>
};

export const Demo_sort: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSort}><DemoSortComp {...p} /></WrapperPreview>
};

export const Demo_playground: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPlayground}><DemoPlaygroundComp {...p} /></WrapperPreview>
};

export const Demo_offset: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoOffset}><DemoOffsetComp {...p} /></WrapperPreview>
};

export const Demo_gutter: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoGutter}><DemoGutterComp {...p} /></WrapperPreview>
};

export const Demo_flexOrder: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFlexOrder}><DemoFlexOrderComp {...p} /></WrapperPreview>
};

export const Demo_responsiveMore: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoResponsiveMore}><DemoResponsiveMoreComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_flexAlign: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFlexAlign}><DemoFlexAlignComp {...p} /></WrapperPreview>
};

export const Demo_responsive: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoResponsive}><DemoResponsiveComp {...p} /></WrapperPreview>
};
