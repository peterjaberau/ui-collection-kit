
import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoExtraStyleComp from "./extra-style";
import sourceDemoExtraStyle from "./extra-style?raw";
            

import DemoHorizontalComp from "./horizontal";
import sourceDemoHorizontal from "./horizontal?raw";
            

import DemoInlineCollapsedComp from "./inline-collapsed";
import sourceDemoInlineCollapsed from "./inline-collapsed?raw";
            

import DemoVerticalComp from "./vertical";
import sourceDemoVertical from "./vertical?raw";
            

import DemoThemeComp from "./theme";
import sourceDemoTheme from "./theme?raw";
            

import DemoInlineComp from "./inline";
import sourceDemoInline from "./inline?raw";
            

import DemoSiderCurrentComp from "./sider-current";
import sourceDemoSiderCurrent from "./sider-current?raw";
            

import DemoSubmenuThemeComp from "./submenu-theme";
import sourceDemoSubmenuTheme from "./submenu-theme?raw";
            

import DemoMenuV4Comp from "./menu-v4";
import sourceDemoMenuV4 from "./menu-v4?raw";
            

import DemoHorizontalDarkComp from "./horizontal-dark";
import sourceDemoHorizontalDark from "./horizontal-dark?raw";
            

import DemoSwitchModeComp from "./switch-mode";
import sourceDemoSwitchMode from "./switch-mode?raw";
            

const meta = {
  title: 'Base/Menu',
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<any>;


export const Demo_extraStyle: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoExtraStyle}><DemoExtraStyleComp {...p} /></WrapperPreview>
};

export const Demo_horizontal: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoHorizontal}><DemoHorizontalComp {...p} /></WrapperPreview>
};

export const Demo_inlineCollapsed: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoInlineCollapsed}><DemoInlineCollapsedComp {...p} /></WrapperPreview>
};

export const Demo_vertical: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVertical}><DemoVerticalComp {...p} /></WrapperPreview>
};

export const Demo_theme: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTheme}><DemoThemeComp {...p} /></WrapperPreview>
};

export const Demo_inline: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoInline}><DemoInlineComp {...p} /></WrapperPreview>
};

export const Demo_siderCurrent: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSiderCurrent}><DemoSiderCurrentComp {...p} /></WrapperPreview>
};

export const Demo_submenuTheme: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSubmenuTheme}><DemoSubmenuThemeComp {...p} /></WrapperPreview>
};

export const Demo_menuV4: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMenuV4}><DemoMenuV4Comp {...p} /></WrapperPreview>
};

export const Demo_horizontalDark: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoHorizontalDark}><DemoHorizontalDarkComp {...p} /></WrapperPreview>
};

export const Demo_switchMode: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSwitchMode}><DemoSwitchModeComp {...p} /></WrapperPreview>
};
