
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoCardComp from "./card";
import sourceDemoCard from "./card?raw";
            

import DemoWeekComp from "./week";
import sourceDemoWeek from "./week?raw";
            

import DemoNoticeCalendarComp from "./notice-calendar";
import sourceDemoNoticeCalendar from "./notice-calendar?raw";
            

import DemoCustomizeHeaderComp from "./customize-header";
import sourceDemoCustomizeHeader from "./customize-header?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoSelectComp from "./select";
import sourceDemoSelect from "./select?raw";
            

const meta = {
  title: 'Antd/Base/Calendar',
  component: Calendar,
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<any>;


export const Demo_card: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCard}><DemoCardComp {...p} /></WrapperPreview>
};

export const Demo_week: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoWeek}><DemoWeekComp {...p} /></WrapperPreview>
};

export const Demo_noticeCalendar: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoNoticeCalendar}><DemoNoticeCalendarComp {...p} /></WrapperPreview>
};

export const Demo_customizeHeader: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomizeHeader}><DemoCustomizeHeaderComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_select: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSelect}><DemoSelectComp {...p} /></WrapperPreview>
};
