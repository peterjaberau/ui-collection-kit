import styled from '@emotion/styled';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';

import { ExpandableList } from '@/ui/layout/expandable-list/components/ExpandableList';
import { isDefined } from 'twenty-shared/utils';
import { Tag } from 'twenty-ui/components';
import { ComponentDecorator } from 'twenty-ui/testing';
import { MAIN_COLOR_NAMES } from 'twenty-ui/theme';

const StyledContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(1)};
  width: 300px;
`;

const meta: Meta<typeof ExpandableList> = {
  title: 'UI/Layout/ExpandableList/ExpandableList',
  component: ExpandableList,
  decorators: [
    (Story) => (
      <StyledContainer>
        <Story />
      </StyledContainer>
    ),
    ComponentDecorator,
  ],
  args: {
    children: Array.from({ length: 7 }, (_, index) => (
      <Tag
        key={index}
        text={`Option ${index + 1}`}
        color={MAIN_COLOR_NAMES[index]}
      />
    )),
    isChipCountDisplayed: false,
  },
  argTypes: {
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof ExpandableList>;

export const Default: Story = {};

export const WithChipCount: Story = {
  args: { isChipCountDisplayed: true },
};

export const WithExpandedList: Story = {
  ...WithChipCount,
};
