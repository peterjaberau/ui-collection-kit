
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoGroupComp from "./group";
import sourceDemoGroup from "./group?raw";


import DemoAllowClearComp from "./allowClear";
import sourceDemoAllowClear from "./allowClear?raw";


import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";


import DemoSearchInputComp from "./search-input";
import sourceDemoSearchInput from "./search-input?raw";


import DemoFocusComp from "./focus";
import sourceDemoFocus from "./focus?raw";


import DemoAutosizeTextareaComp from "./autosize-textarea";
import sourceDemoAutosizeTextarea from "./autosize-textarea?raw";


import DemoAddonComp from "./addon";
import sourceDemoAddon from "./addon?raw";


import DemoPresuffixComp from "./presuffix";
import sourceDemoPresuffix from "./presuffix?raw";


import DemoShowCountComp from "./show-count";
import sourceDemoShowCount from "./show-count?raw";


import DemoTextareaResizeComp from "./textarea-resize";
import sourceDemoTextareaResize from "./textarea-resize?raw";


import DemoVariantComp from "./variant";
import sourceDemoVariant from "./variant?raw";



import DemoTooltipComp from "./tooltip";
import sourceDemoTooltip from "./tooltip?raw";


import DemoOtpComp from "./otp";
import sourceDemoOtp from "./otp?raw";


import DemoAlignComp from "./align";
import sourceDemoAlign from "./align?raw";


import DemoPasswordInputComp from "./password-input";
import sourceDemoPasswordInput from "./password-input?raw";


import DemoCompactStyleComp from "./compact-style";
import sourceDemoCompactStyle from "./compact-style?raw";


import DemoSearchInputLoadingComp from "./search-input-loading";
import sourceDemoSearchInputLoading from "./search-input-loading?raw";


import DemoStatusComp from "./status";
import sourceDemoStatus from "./status?raw";


import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";


import DemoTextareaComp from "./textarea";
import sourceDemoTextarea from "./textarea?raw";


const meta = {
  title: 'Antd/Base/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<any>;


export const Demo_group: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoGroup}><DemoGroupComp {...p} /></WrapperPreview>
};

export const Demo_allowClear: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoAllowClear}><DemoAllowClearComp {...p} /></WrapperPreview>
};

export const Demo_size: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_searchInput: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoSearchInput}><DemoSearchInputComp {...p} /></WrapperPreview>
};

export const Demo_focus: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoFocus}><DemoFocusComp {...p} /></WrapperPreview>
};

export const Demo_autosizeTextarea: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoAutosizeTextarea}><DemoAutosizeTextareaComp {...p} /></WrapperPreview>
};

export const Demo_addon: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoAddon}><DemoAddonComp {...p} /></WrapperPreview>
};

export const Demo_presuffix: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoPresuffix}><DemoPresuffixComp {...p} /></WrapperPreview>
};

export const Demo_showCount: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoShowCount}><DemoShowCountComp {...p} /></WrapperPreview>
};

export const Demo_textareaResize: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoTextareaResize}><DemoTextareaResizeComp {...p} /></WrapperPreview>
};

export const Demo_variant: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoVariant}><DemoVariantComp {...p} /></WrapperPreview>
};


export const Demo_tooltip: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoTooltip}><DemoTooltipComp {...p} /></WrapperPreview>
};

export const Demo_otp: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoOtp}><DemoOtpComp {...p} /></WrapperPreview>
};

export const Demo_align: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoAlign}><DemoAlignComp {...p} /></WrapperPreview>
};

export const Demo_passwordInput: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoPasswordInput}><DemoPasswordInputComp {...p} /></WrapperPreview>
};

export const Demo_compactStyle: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoCompactStyle}><DemoCompactStyleComp {...p} /></WrapperPreview>
};

export const Demo_searchInputLoading: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoSearchInputLoading}><DemoSearchInputLoadingComp {...p} /></WrapperPreview>
};

export const Demo_status: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoStatus}><DemoStatusComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_textarea: Story = {
  render: (p: any) => <WrapperPreview code={sourceDemoTextarea}><DemoTextareaComp {...p} /></WrapperPreview>
};
