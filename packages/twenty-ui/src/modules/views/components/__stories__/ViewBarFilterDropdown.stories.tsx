import { Meta, StoryObj } from '@storybook/react';

import { TaskGroups } from '@twenty-modules/activities/tasks/components/TaskGroups';
import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { CoreObjectNamePlural } from '@twenty-modules/object-metadata/types/CoreObjectNamePlural';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { formatFieldMetadataItemAsColumnDefinition } from '@twenty-modules/object-metadata/utils/formatFieldMetadataItemAsColumnDefinition';
import { ObjectFilterDropdownComponentInstanceContext } from '@twenty-modules/object-record/object-filter-dropdown/states/contexts/ObjectFilterDropdownComponentInstanceContext';
import { RecordFilterGroupsComponentInstanceContext } from '@twenty-modules/object-record/record-filter-group/states/context/RecordFilterGroupsComponentInstanceContext';
import { RecordFiltersComponentInstanceContext } from '@twenty-modules/object-record/record-filter/states/context/RecordFiltersComponentInstanceContext';
import { RecordIndexContextProvider } from '@twenty-modules/object-record/record-index/contexts/RecordIndexContext';
import { RecordSortsComponentInstanceContext } from '@twenty-modules/object-record/record-sort/states/context/RecordSortsComponentInstanceContext';
import { AGGREGATE_OPERATIONS } from '@twenty-modules/object-record/record-table/constants/AggregateOperations';
import { RecordTableComponentInstanceContext } from '@twenty-modules/object-record/record-table/states/context/RecordTableComponentInstanceContext';
import { tableColumnsComponentState } from '@twenty-modules/object-record/record-table/states/tableColumnsComponentState';
import { prefetchViewsState } from '@twenty-modules/prefetch/states/prefetchViewsState';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { ViewBarFilterDropdown } from '@twenty-modules/views/components/ViewBarFilterDropdown';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';
import { ViewOpenRecordInType } from '@twenty-modules/views/types/ViewOpenRecordInType';
import { ViewType } from '@twenty-modules/views/types/ViewType';

import { MAIN_CONTEXT_STORE_INSTANCE_ID } from '@twenty-modules/context-store/constants/MainContextStoreInstanceId';
import { VIEW_BAR_FILTER_DROPDOWN_ID } from '@twenty-modules/views/constants/ViewBarFilterDropdownId';
import { View } from '@twenty-modules/views/types/View';
import { useSetRecoilState } from 'recoil';
import {
  ComponentDecorator,
  getCanvasElementForDropdownTesting,
} from '@twenty-ui/testing';
import { ContextStoreDecorator } from '@twenty-ui/front/testing/decorators/ContextStoreDecorator';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { IconsProviderDecorator } from '@twenty-ui/front/testing/decorators/IconsProviderDecorator';
import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';
import { generatedMockObjectMetadataItems } from '@twenty-ui/front/testing/mock-data/generatedMockObjectMetadataItems';

const meta: Meta<typeof ViewBarFilterDropdown> = {
  title: 'Refactor Modules/Views/ViewBarFilterDropdown',
  component: ViewBarFilterDropdown,
  decorators: [
    (Story) => {
      const companyObjectMetadataItem = generatedMockObjectMetadataItems.find(
        (item) => item.nameSingular === CoreObjectNameSingular.Company,
      )!;
      const instanceId = companyObjectMetadataItem.id;

      const setTableColumns = useSetRecoilComponentStateV2(
        tableColumnsComponentState,
        instanceId,
      );

      const setPrefetchViews = useSetRecoilState(prefetchViewsState);

      const mockView: View = {
        id: 'view-1',
        name: 'Test View',
        objectMetadataId: companyObjectMetadataItem.id,
        viewFilters: [],
        viewFilterGroups: [],
        type: ViewType.Table,
        key: null,
        isCompact: false,
        openRecordIn: ViewOpenRecordInType.SIDE_PANEL,
        viewFields: [],
        viewGroups: [],
        viewSorts: [],
        kanbanFieldMetadataId: '',
        kanbanAggregateOperation: AGGREGATE_OPERATIONS.count,
        icon: '',
        kanbanAggregateOperationFieldMetadataId: '',
        position: 0,
        __typename: 'View',
      };

      setPrefetchViews([mockView]);

      const setCurrentViewId = useSetRecoilComponentStateV2(
        contextStoreCurrentViewIdComponentState,
        MAIN_CONTEXT_STORE_INSTANCE_ID,
      );

      setCurrentViewId('view-1');

      const columns = companyObjectMetadataItem.fields.map(
        (fieldMetadataItem, index) =>
          formatFieldMetadataItemAsColumnDefinition({
            field: fieldMetadataItem,
            objectMetadataItem: companyObjectMetadataItem,
            position: index,
          }),
      );

      setTableColumns(columns);

      return (
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
          <RecordFilterGroupsComponentInstanceContext.Provider
            value={{ instanceId }}
          >
            <RecordFiltersComponentInstanceContext.Provider
              value={{ instanceId }}
            >
              <RecordSortsComponentInstanceContext.Provider
                value={{ instanceId }}
              >
                <ObjectFilterDropdownComponentInstanceContext.Provider
                  value={{ instanceId: VIEW_BAR_FILTER_DROPDOWN_ID }}
                >
                  <RecordTableComponentInstanceContext.Provider
                    value={{
                      instanceId: instanceId,
                      onColumnsChange: () => {},
                    }}
                  >
                    <ViewComponentInstanceContext.Provider
                      value={{ instanceId }}
                    >
                      <Story />
                    </ViewComponentInstanceContext.Provider>
                  </RecordTableComponentInstanceContext.Provider>
                </ObjectFilterDropdownComponentInstanceContext.Provider>
              </RecordSortsComponentInstanceContext.Provider>
            </RecordFiltersComponentInstanceContext.Provider>
          </RecordFilterGroupsComponentInstanceContext.Provider>
        </RecordIndexContextProvider>
      );
    },
    ContextStoreDecorator,
    ObjectMetadataItemsDecorator,
    SnackBarDecorator,
    ComponentDecorator,
    IconsProviderDecorator,
    I18nFrontDecorator,
  ],
  args: {
    hotkeyScope: {
      scope: 'view-bar-filter-dropdown',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TaskGroups>;

export const Default: Story = {
};

export const Date: Story = {
};

export const Number: Story = {
};
