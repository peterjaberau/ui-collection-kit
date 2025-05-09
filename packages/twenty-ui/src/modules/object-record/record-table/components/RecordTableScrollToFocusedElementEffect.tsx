import { recordTableFocusPositionComponentState } from '@twenty-modules/object-record/record-table/states/recordTableFocusPositionComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useEffect } from 'react';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const RecordTableScrollToFocusedElementEffect = () => {
  const focusPosition = useRecoilComponentValueV2(
    recordTableFocusPositionComponentState,
  );

  useEffect(() => {
    if (!focusPosition) {
      return;
    }

    const focusElement = document.getElementById(
      `record-table-cell-${focusPosition.column}-${focusPosition.row}`,
    );

    if (!focusElement) {
      return;
    }

    const isSecondColumn = focusPosition.column === 1;

    if (isSecondColumn) {
      const checkBoxColumnCell = document.getElementById(
        `record-table-cell-0-0`,
      );
      const firstColumnCell = document.getElementById(`record-table-cell-1-0`);

      if (isDefined(checkBoxColumnCell) && isDefined(firstColumnCell)) {
        const checkBoxColumnWidth = checkBoxColumnCell.offsetWidth;
        const firstColumnWidth = firstColumnCell.offsetWidth;
        focusElement.style.scrollMarginLeft = `${checkBoxColumnWidth + firstColumnWidth}px`;
      }
    }

    focusElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    return () => {
      if (isDefined(focusElement)) {
        focusElement.style.scrollMarginLeft = '';
      }
    };
  }, [focusPosition]);

  return null;
};
