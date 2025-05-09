import { useRecoilCallback } from 'recoil';

import { useMoveHoverToCurrentCell } from '@twenty-modules/object-record/record-table/record-table-cell/hooks/useMoveHoverToCurrentCell';
import { isSomeCellInEditModeComponentSelector } from '@twenty-modules/object-record/record-table/states/selectors/isSomeCellInEditModeComponentSelector';
import { TableCellPosition } from '@twenty-modules/object-record/record-table/types/TableCellPosition';
import { getSnapshotValue } from '@twenty-modules/ui/utilities/recoil-scope/utils/getSnapshotValue';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';

export type HandleContainerMouseEnterArgs = {
  cellPosition: TableCellPosition;
};

export const useHandleContainerMouseEnter = ({
  recordTableId,
}: {
  recordTableId: string;
}) => {
  const { moveHoverToCurrentCell } = useMoveHoverToCurrentCell(recordTableId);

  const isSomeCellInEditModeSelector = useRecoilComponentCallbackStateV2(
    isSomeCellInEditModeComponentSelector,
    recordTableId,
  );

  const handleContainerMouseEnter = useRecoilCallback(
    ({ snapshot }) =>
      ({ cellPosition }: HandleContainerMouseEnterArgs) => {
        const isSomeCellInEditMode = getSnapshotValue(
          snapshot,
          isSomeCellInEditModeSelector,
        );

        if (!isSomeCellInEditMode) {
          moveHoverToCurrentCell(cellPosition);
        }
      },
    [isSomeCellInEditModeSelector, moveHoverToCurrentCell],
  );

  return {
    handleContainerMouseEnter,
  };
};
