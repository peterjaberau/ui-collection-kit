import { Meta, StoryObj } from '@storybook/react';

import { TabList } from '../TabList';
import { ComponentWithRouterDecorator } from '@twenty-ui/testing';
import { IconCheckbox } from '@twenty-ui/display';

const tabs = [
  {
    id: '1',
    title: 'Tab1',
    Icon: IconCheckbox,
    hide: true,
  },
  {
    id: '2',
    title: 'Tab2',
    Icon: IconCheckbox,
    hide: false,
  },
  {
    id: '3',
    title: 'Tab3',
    Icon: IconCheckbox,
    hide: false,
    disabled: true,
  },
  {
    id: '4',
    title: 'Tab4',
    Icon: IconCheckbox,
    hide: false,
    disabled: false,
  },
];

const meta: Meta<typeof TabList> = {
  title: 'Refactor UI/Layout/Tab/TabList',
  component: TabList,
  args: {
    tabs: tabs,
    componentInstanceId: 'tab-list',
  },
  decorators: [ComponentWithRouterDecorator],
};

export default meta;

type Story = StoryObj<typeof TabList>;

export const TabListDisplay: Story = {
};
