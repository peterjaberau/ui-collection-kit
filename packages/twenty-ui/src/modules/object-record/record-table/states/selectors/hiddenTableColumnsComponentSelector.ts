import { availableTableColumnsComponentState } from '@twenty-modules/object-record/record-table/states/availableTableColumnsComponentState';
import { RecordTableComponentInstanceContext } from '@twenty-modules/object-record/record-table/states/context/RecordTableComponentInstanceContext';
import { tableColumnsComponentState } from '@twenty-modules/object-record/record-table/states/tableColumnsComponentState';
import { createComponentSelectorV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentSelectorV2';
import { mapArrayToObject } from '@twenty-ui/front/utils/array/mapArrayToObject';

export const hiddenTableColumnsComponentSelector = createComponentSelectorV2({
  key: 'hiddenTableColumnsComponentSelector',
  componentInstanceContext: RecordTableComponentInstanceContext,
  get:
    ({ instanceId }) =>
    ({ get }) => {
      const tableColumns = get(
        tableColumnsComponentState.atomFamily({ instanceId }),
      );
      const availableColumns = get(
        availableTableColumnsComponentState.atomFamily({ instanceId }),
      );
      const tableColumnsByKey = mapArrayToObject(
        tableColumns,
        ({ fieldMetadataId }) => fieldMetadataId,
      );

      const hiddenColumns = availableColumns
        .filter(
          ({ fieldMetadataId }) =>
            !tableColumnsByKey[fieldMetadataId]?.isVisible,
        )
        .map((availableColumn) => {
          const { fieldMetadataId } = availableColumn;
          const existingTableColumn = tableColumnsByKey[fieldMetadataId];

          return {
            ...(existingTableColumn || availableColumn),
            isVisible: false,
          };
        });

      return hiddenColumns;
    },
});
