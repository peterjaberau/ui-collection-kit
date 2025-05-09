import { Fragment, useState } from 'react';

import { RecordDetailRecordsList } from '@twenty-modules/object-record/record-show/record-detail-section/components/RecordDetailRecordsList';
import { RecordDetailRelationRecordsListItem } from '@twenty-modules/object-record/record-show/record-detail-section/components/RecordDetailRelationRecordsListItem';
import { RecordDetailRelationRecordsListItemEffect } from '@twenty-modules/object-record/record-show/record-detail-section/components/RecordDetailRelationRecordsListItemEffect';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';

type RecordDetailRelationRecordsListProps = {
  relationRecords: ObjectRecord[];
};

export const RecordDetailRelationRecordsList = ({
  relationRecords,
}: RecordDetailRelationRecordsListProps) => {
  const [expandedItem, setExpandedItem] = useState('');

  const handleItemClick = (recordId: string) =>
    setExpandedItem(recordId === expandedItem ? '' : recordId);

  return (
    <RecordDetailRecordsList>
      {relationRecords.slice(0, 5).map((relationRecord) => (
        <Fragment key={relationRecord.id}>
          <RecordDetailRelationRecordsListItemEffect
            key={`${relationRecord.id}-effect`}
            relationRecordId={relationRecord.id}
          />
          <RecordDetailRelationRecordsListItem
            key={relationRecord.id}
            isExpanded={expandedItem === relationRecord.id}
            onClick={handleItemClick}
            relationRecord={relationRecord}
          />
        </Fragment>
      ))}
    </RecordDetailRecordsList>
  );
};
