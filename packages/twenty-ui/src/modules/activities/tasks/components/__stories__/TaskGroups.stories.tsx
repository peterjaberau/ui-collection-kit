import { Meta, StoryObj } from '@storybook/react';

import { TaskGroups } from '@twenty-modules/activities/tasks/components/TaskGroups';
import { ActivityTargetableObject } from '@twenty-modules/activities/types/ActivityTargetableEntity';
import { ObjectFilterDropdownComponentInstanceContext } from '@twenty-modules/object-record/object-filter-dropdown/states/contexts/ObjectFilterDropdownComponentInstanceContext';
import { TabListComponentInstanceContext } from '@twenty-modules/ui/layout/tab/states/contexts/TabListComponentInstanceContext';
import { ComponentWithRecoilScopeDecorator } from '@twenty-ui/front/testing/decorators/ComponentWithRecoilScopeDecorator';
import { ComponentWithRouterDecorator } from '@twenty-ui/front/testing/decorators/ComponentWithRouterDecorator';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { mockedTasks } from '@twenty-ui/front/testing/mock-data/tasks';

const meta: Meta<typeof TaskGroups> = {
  title: 'Refactor Modules/Activity/TaskGroups',
  component: TaskGroups,
  decorators: [
    (Story) => (
      <TabListComponentInstanceContext.Provider
        value={{ instanceId: 'entity-tasks-filter-scope' }}
      >
        <ObjectFilterDropdownComponentInstanceContext.Provider
          value={{ instanceId: 'entity-tasks-filter-scope' }}
        >
          <Story />
        </ObjectFilterDropdownComponentInstanceContext.Provider>
      </TabListComponentInstanceContext.Provider>
    ),
    ComponentWithRouterDecorator,
    ComponentWithRecoilScopeDecorator,
    ObjectMetadataItemsDecorator,
    SnackBarDecorator,
    I18nFrontDecorator,
  ],
};

export default meta;
type Story = StoryObj<typeof TaskGroups>;

export const Empty: Story = {};

export const WithTasks: Story = {
  args: {
    targetableObjects: [
      {
        id: mockedTasks[0].taskTargets?.[0].personId,
        targetObjectNameSingular: 'person',
      },
    ] as ActivityTargetableObject[],
  },
  parameters: {
    msw: graphqlMocks,
    container: {
      width: '500px',
    },
  },
};
