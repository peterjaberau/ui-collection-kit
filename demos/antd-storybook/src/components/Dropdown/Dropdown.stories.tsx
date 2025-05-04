
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoArrowCenterComp from "./arrow-center";
import sourceDemoArrowCenter from "./arrow-center?raw";
            

import DemoSubMenuComp from "./sub-menu";
import sourceDemoSubMenu from "./sub-menu?raw";
            

import DemoCustomDropdownComp from "./custom-dropdown";
import sourceDemoCustomDropdown from "./custom-dropdown?raw";
            

import DemoEventComp from "./event";
import sourceDemoEvent from "./event?raw";
            

import DemoArrowComp from "./arrow";
import sourceDemoArrow from "./arrow?raw";
            

import DemoDropdownButtonComp from "./dropdown-button";
import sourceDemoDropdownButton from "./dropdown-button?raw";
            

import DemoTriggerComp from "./trigger";
import sourceDemoTrigger from "./trigger?raw";
            

import DemoMenuFullComp from "./menu-full";
import sourceDemoMenuFull from "./menu-full?raw";
            

import DemoExtraComp from "./extra";
import sourceDemoExtra from "./extra?raw";
            

import DemoRenderPanelComp from "./render-panel";
import sourceDemoRenderPanel from "./render-panel?raw";
            

import DemoSelectableComp from "./selectable";
import sourceDemoSelectable from "./selectable?raw";
            

import DemoPlacementComp from "./placement";
import sourceDemoPlacement from "./placement?raw";
            

import DemoItemComp from "./item";
import sourceDemoItem from "./item?raw";
            

import DemoLoadingComp from "./loading";
import sourceDemoLoading from "./loading?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoOverlayOpenComp from "./overlay-open";
import sourceDemoOverlayOpen from "./overlay-open?raw";
            

import DemoContextMenuComp from "./context-menu";
import sourceDemoContextMenu from "./context-menu?raw";
            

const meta = {
  title: 'Antd/Base/Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<any>;


export const Demo_arrowCenter: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoArrowCenter}><DemoArrowCenterComp {...p} /></WrapperPreview>
};

export const Demo_subMenu: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSubMenu}><DemoSubMenuComp {...p} /></WrapperPreview>
};

export const Demo_customDropdown: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomDropdown}><DemoCustomDropdownComp {...p} /></WrapperPreview>
};

export const Demo_event: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoEvent}><DemoEventComp {...p} /></WrapperPreview>
};

export const Demo_arrow: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoArrow}><DemoArrowComp {...p} /></WrapperPreview>
};

export const Demo_dropdownButton: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDropdownButton}><DemoDropdownButtonComp {...p} /></WrapperPreview>
};

export const Demo_trigger: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTrigger}><DemoTriggerComp {...p} /></WrapperPreview>
};

export const Demo_menuFull: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMenuFull}><DemoMenuFullComp {...p} /></WrapperPreview>
};

export const Demo_extra: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoExtra}><DemoExtraComp {...p} /></WrapperPreview>
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRenderPanel}><DemoRenderPanelComp {...p} /></WrapperPreview>
};

export const Demo_selectable: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSelectable}><DemoSelectableComp {...p} /></WrapperPreview>
};

export const Demo_placement: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPlacement}><DemoPlacementComp {...p} /></WrapperPreview>
};

export const Demo_item: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoItem}><DemoItemComp {...p} /></WrapperPreview>
};

export const Demo_loading: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLoading}><DemoLoadingComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_overlayOpen: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoOverlayOpen}><DemoOverlayOpenComp {...p} /></WrapperPreview>
};

export const Demo_contextMenu: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoContextMenu}><DemoContextMenuComp {...p} /></WrapperPreview>
};
