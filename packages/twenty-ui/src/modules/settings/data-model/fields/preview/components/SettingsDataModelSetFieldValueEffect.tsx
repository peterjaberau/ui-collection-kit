import { useSetRecordFieldValue } from '@twenty-modules/object-record/record-store/contexts/RecordFieldValueSelectorContext';
import { recordStoreFamilyState } from '@twenty-modules/object-record/record-store/states/recordStoreFamilyState';
import { recordStoreFamilySelector } from '@twenty-modules/object-record/record-store/states/selectors/recordStoreFamilySelector';
import { settingsPreviewRecordIdState } from '@twenty-modules/settings/data-model/fields/preview/states/settingsPreviewRecordIdState';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type SettingsDataModelSetFieldValueEffectProps = {
  recordId: string;
  fieldName: string;
  value: unknown;
};

export const SettingsDataModelSetFieldValueEffect = ({
  recordId,
  fieldName,
  value,
}: SettingsDataModelSetFieldValueEffectProps) => {
  const settingsPreviewRecordId = useRecoilValue(settingsPreviewRecordIdState);

  const upsertedPreviewRecord = useRecoilValue(
    recordStoreFamilyState(settingsPreviewRecordId ?? ''),
  );

  const setFieldValue = useSetRecoilState(
    recordStoreFamilySelector({
      recordId,
      fieldName,
    }),
  );
  const setRecordFieldValue = useSetRecordFieldValue();

  useEffect(() => {
    if (
      isDefined(upsertedPreviewRecord) &&
      !!upsertedPreviewRecord[fieldName]
    ) {
      setFieldValue(upsertedPreviewRecord[fieldName]);
      setRecordFieldValue(
        recordId,
        fieldName,
        upsertedPreviewRecord[fieldName],
      );
    } else {
      setFieldValue(value);
      setRecordFieldValue(recordId, fieldName, value);
    }
  }, [
    value,
    setFieldValue,
    setRecordFieldValue,
    recordId,
    fieldName,
    upsertedPreviewRecord,
  ]);

  return null;
};
