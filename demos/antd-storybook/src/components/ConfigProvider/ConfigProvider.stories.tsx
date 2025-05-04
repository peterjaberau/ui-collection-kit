
import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";


import DemoDirectionComp from "./direction";
import sourceDemoDirection from "./direction?raw";


import DemoWarningComp from "./warning";
import sourceDemoWarning from "./warning?raw";


import DemoUseConfigComp from "./useConfig";
import sourceDemoUseConfig from "./useConfig?raw";


import DemoPrefixClsComp from "./prefixCls";
import sourceDemoPrefixCls from "./prefixCls?raw";


import DemoHolderRenderComp from "./holderRender";
import sourceDemoHolderRender from "./holderRender?raw";


import DemoThemeComp from "./theme";
import sourceDemoTheme from "./theme?raw";


import DemoLocaleComp from "./locale";
import sourceDemoLocale from "./locale?raw";


const meta = {
  title: 'Antd/Base/ConfigProvider',
  component: ConfigProvider,
} satisfies Meta<typeof ConfigProvider>;

export default meta;
type Story = StoryObj<any>;


export const Demo_size: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_direction: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoDirection}><DemoDirectionComp {...p} /></WrapperPreview>
};

export const Demo_warning: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoWarning}><DemoWarningComp {...p} /></WrapperPreview>
};

export const Demo_useConfig: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoUseConfig}><DemoUseConfigComp {...p} /></WrapperPreview>
};

export const Demo_prefixCls: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoPrefixCls}><DemoPrefixClsComp {...p} /></WrapperPreview>
};

export const Demo_holderRender: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoHolderRender}><DemoHolderRenderComp {...p} /></WrapperPreview>
};

export const Demo_theme: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoTheme}><DemoThemeComp {...p} /></WrapperPreview>
};

export const Demo_locale: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoLocale}><DemoLocaleComp {...p} /></WrapperPreview>
};
