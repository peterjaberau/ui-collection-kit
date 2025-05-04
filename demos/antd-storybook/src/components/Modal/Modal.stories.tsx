
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoPositionComp from "./position";
import sourceDemoPosition from "./position?raw";
            

import DemoDarkComp from "./dark";
import sourceDemoDark from "./dark?raw";
            

import DemoNestedComp from "./nested";
import sourceDemoNested from "./nested?raw";
            

import DemoWidthComp from "./width";
import sourceDemoWidth from "./width?raw";
            

import DemoHooksComp from "./hooks";
import sourceDemoHooks from "./hooks?raw";
            

import DemoConfirmRouterComp from "./confirm-router";
import sourceDemoConfirmRouter from "./confirm-router?raw";
            

import DemoAsyncComp from "./async";
import sourceDemoAsync from "./async?raw";
            

import DemoWireframeComp from "./wireframe";
import sourceDemoWireframe from "./wireframe?raw";
            

import DemoFooterComp from "./footer";
import sourceDemoFooter from "./footer?raw";
            

import DemoManualComp from "./manual";
import sourceDemoManual from "./manual?raw";
            

import DemoRenderPanelComp from "./render-panel";
import sourceDemoRenderPanel from "./render-panel?raw";
            

import DemoClassNamesComp from "./classNames";
import sourceDemoClassNames from "./classNames?raw";
            

import DemoFooterRenderComp from "./footer-render";
import sourceDemoFooterRender from "./footer-render?raw";
            

import DemoConfirmComp from "./confirm";
import sourceDemoConfirm from "./confirm?raw";
            

import DemoLoadingComp from "./loading";
import sourceDemoLoading from "./loading?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoLocaleComp from "./locale";
import sourceDemoLocale from "./locale?raw";
            

import DemoStaticInfoComp from "./static-info";
import sourceDemoStaticInfo from "./static-info?raw";
            

import DemoButtonPropsComp from "./button-props";
import sourceDemoButtonProps from "./button-props?raw";
            

import DemoCustomMousePositionComp from "./custom-mouse-position";
import sourceDemoCustomMousePosition from "./custom-mouse-position?raw";
            

const meta = {
  title: 'Base/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<any>;


export const Demo_position: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPosition}><DemoPositionComp {...p} /></WrapperPreview>
};

export const Demo_dark: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDark}><DemoDarkComp {...p} /></WrapperPreview>
};

export const Demo_nested: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoNested}><DemoNestedComp {...p} /></WrapperPreview>
};

export const Demo_width: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoWidth}><DemoWidthComp {...p} /></WrapperPreview>
};

export const Demo_hooks: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoHooks}><DemoHooksComp {...p} /></WrapperPreview>
};

export const Demo_confirmRouter: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoConfirmRouter}><DemoConfirmRouterComp {...p} /></WrapperPreview>
};

export const Demo_async: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAsync}><DemoAsyncComp {...p} /></WrapperPreview>
};

export const Demo_wireframe: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoWireframe}><DemoWireframeComp {...p} /></WrapperPreview>
};

export const Demo_footer: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFooter}><DemoFooterComp {...p} /></WrapperPreview>
};

export const Demo_manual: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoManual}><DemoManualComp {...p} /></WrapperPreview>
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRenderPanel}><DemoRenderPanelComp {...p} /></WrapperPreview>
};

export const Demo_classNames: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoClassNames}><DemoClassNamesComp {...p} /></WrapperPreview>
};

export const Demo_footerRender: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFooterRender}><DemoFooterRenderComp {...p} /></WrapperPreview>
};

export const Demo_confirm: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoConfirm}><DemoConfirmComp {...p} /></WrapperPreview>
};

export const Demo_loading: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLoading}><DemoLoadingComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_locale: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLocale}><DemoLocaleComp {...p} /></WrapperPreview>
};

export const Demo_staticInfo: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoStaticInfo}><DemoStaticInfoComp {...p} /></WrapperPreview>
};

export const Demo_buttonProps: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoButtonProps}><DemoButtonPropsComp {...p} /></WrapperPreview>
};

export const Demo_customMousePosition: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomMousePosition}><DemoCustomMousePositionComp {...p} /></WrapperPreview>
};
