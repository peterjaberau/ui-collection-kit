import { Meta, StoryObj } from '@storybook/react';

import { CoreObjectNamePlural } from '@twenty-modules/object-metadata/types/CoreObjectNamePlural';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { ChipFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/display/components/ChipFieldDisplay';
import { RecordIndexContextProvider } from '@twenty-modules/object-record/record-index/contexts/RecordIndexContext';
import { RecordTableComponentInstanceContext } from '@twenty-modules/object-record/record-table/states/context/RecordTableComponentInstanceContext';
import { ComponentDecorator } from '@twenty-ui/testing';
import { ChipGeneratorsDecorator } from '@twenty-ui/front/testing/decorators/ChipGeneratorsDecorator';
import { MemoryRouterDecorator } from '@twenty-ui/front/testing/decorators/MemoryRouterDecorator';
import { getFieldDecorator } from '@twenty-ui/front/testing/decorators/getFieldDecorator';
import { generatedMockObjectMetadataItems } from '@twenty-ui/front/testing/mock-data/generatedMockObjectMetadataItems';
import { getProfilingStory } from '@twenty-ui/front/testing/profiling/utils/getProfilingStory';

const meta: Meta = {
  title: 'Refactor UI/Data/Field/Display/ChipFieldDisplay',
  decorators: [
    (Story) => {
      const instanceId = 'child-field-display-scope';

      const companyObjectMetadataItem = generatedMockObjectMetadataItems.find(
        (item) => item.nameSingular === CoreObjectNameSingular.Company,
      )!;

      return (
        <RecordTableComponentInstanceContext.Provider
          value={{
            instanceId,
            onColumnsChange: () => {},
          }}
        >
          <RecordIndexContextProvider
            value={{
              indexIdentifierUrl: () => '',
              onIndexRecordsLoaded: () => {},
              objectNamePlural: CoreObjectNamePlural.Company,
              objectNameSingular: CoreObjectNameSingular.Company,
              objectMetadataItem: companyObjectMetadataItem,
              recordIndexId: instanceId,
            }}
          >
            <Story />
          </RecordIndexContextProvider>
        </RecordTableComponentInstanceContext.Provider>
      );
    },
    MemoryRouterDecorator,
    ChipGeneratorsDecorator,
    getFieldDecorator('person', 'name'),
    ComponentDecorator,
  ],
  component: ChipFieldDisplay,
  args: {},
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export default meta;

type Story = StoryObj<typeof ChipFieldDisplay>;

export const Default: Story = {};

export const Performance = getProfilingStory({
  componentName: 'ChipFieldDisplay',
  averageThresholdInMs: 0.2,
  numberOfRuns: 20,
  numberOfTestsPerRun: 100,
});
