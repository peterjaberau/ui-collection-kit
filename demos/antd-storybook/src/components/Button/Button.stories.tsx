
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoColorVariantComp from "./color-variant";
import sourceDemoColorVariant from "./color-variant?raw";


import DemoLinearGradientComp from "./linear-gradient";
import sourceDemoLinearGradient from "./linear-gradient?raw";


import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";


import DemoIconComp from "./icon";
import sourceDemoIcon from "./icon?raw";


import DemoGhostComp from "./ghost";
import sourceDemoGhost from "./ghost?raw";


import DemoChineseSpaceComp from "./chinese-space";
import sourceDemoChineseSpace from "./chinese-space?raw";


import DemoBlockComp from "./block";
import sourceDemoBlock from "./block?raw";


import DemoMultipleComp from "./multiple";
import sourceDemoMultiple from "./multiple?raw";


import DemoDisabledComp from "./disabled";
import sourceDemoDisabled from "./disabled?raw";


import DemoLoadingComp from "./loading";
import sourceDemoLoading from "./loading?raw";


import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";


import DemoIconPositionComp from "./icon-position";
import sourceDemoIconPosition from "./icon-position?raw";


import DemoDangerComp from "./danger";
import sourceDemoDanger from "./danger?raw";


import DemoChineseCharsLoadingComp from "./chinese-chars-loading";
import sourceDemoChineseCharsLoading from "./chinese-chars-loading?raw";


import DemoLegacyGroupComp from "./legacy-group";
import sourceDemoLegacyGroup from "./legacy-group?raw";


const meta = {
  title: 'Base/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<any>;


export const Demo_colorVariant: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoColorVariant}><DemoColorVariantComp {...p} /></WrapperPreview>
};

export const Demo_linearGradient: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoLinearGradient}><DemoLinearGradientComp {...p} /></WrapperPreview>
};

export const Demo_size: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_icon: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoIcon}><DemoIconComp {...p} /></WrapperPreview>
};

export const Demo_ghost: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoGhost}><DemoGhostComp {...p} /></WrapperPreview>
};

export const Demo_chineseSpace: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoChineseSpace}><DemoChineseSpaceComp {...p} /></WrapperPreview>
};

export const Demo_block: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoBlock}><DemoBlockComp {...p} /></WrapperPreview>
};

export const Demo_multiple: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoMultiple}><DemoMultipleComp {...p} /></WrapperPreview>
};

export const Demo_disabled: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoDisabled}><DemoDisabledComp {...p} /></WrapperPreview>
};

export const Demo_loading: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoLoading}><DemoLoadingComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_iconPosition: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoIconPosition}><DemoIconPositionComp {...p} /></WrapperPreview>
};

export const Demo_danger: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoDanger}><DemoDangerComp {...p} /></WrapperPreview>
};

export const Demo_chineseCharsLoading: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoChineseCharsLoading}><DemoChineseCharsLoadingComp {...p} /></WrapperPreview>
};

export const Demo_legacyGroup: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoLegacyGroup}><DemoLegacyGroupComp {...p} /></WrapperPreview>
};
