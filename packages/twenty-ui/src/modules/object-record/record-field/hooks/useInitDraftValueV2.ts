import { isUndefined } from '@sniptt/guards';
import { useRecoilCallback } from 'recoil';

import { FIELD_NOT_OVERWRITTEN_AT_DRAFT } from '@twenty-modules/object-record/constants/FieldsNotOverwrittenAtDraft';
import { recordFieldInputDraftValueComponentSelector } from '@twenty-modules/object-record/record-field/states/selectors/recordFieldInputDraftValueComponentSelector';
import { FieldDefinition } from '@twenty-modules/object-record/record-field/types/FieldDefinition';
import { FieldInputDraftValue } from '@twenty-modules/object-record/record-field/types/FieldInputDraftValue';
import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { computeDraftValueFromFieldValue } from '@twenty-modules/object-record/record-field/utils/computeDraftValueFromFieldValue';
import { computeDraftValueFromString } from '@twenty-modules/object-record/record-field/utils/computeDraftValueFromString';
import { recordStoreFamilySelector } from '@twenty-modules/object-record/record-store/states/selectors/recordStoreFamilySelector';
import { extractComponentSelector } from '@twenty-modules/ui/utilities/state/component-state/utils/extractComponentSelector';

export const useInitDraftValueV2 = <FieldValue>() => {
  return useRecoilCallback(
    ({ set, snapshot }) =>
      ({
        value,
        recordId,
        fieldDefinition,
        fieldComponentInstanceId,
      }: {
        value?: string;
        recordId: string;
        fieldDefinition: FieldDefinition<FieldMetadata>;
        fieldComponentInstanceId: string;
      }) => {
        const getDraftValueSelector = extractComponentSelector<
          FieldInputDraftValue<FieldValue> | undefined
        >(
          recordFieldInputDraftValueComponentSelector,
          fieldComponentInstanceId,
        );

        const recordFieldValue = snapshot
          .getLoadable(
            recordStoreFamilySelector<FieldValue>({
              recordId,
              fieldName: fieldDefinition.metadata.fieldName,
            }),
          )
          .getValue();

        if (
          isUndefined(value) ||
          FIELD_NOT_OVERWRITTEN_AT_DRAFT.includes(fieldDefinition.type)
        ) {
          set(
            getDraftValueSelector(),
            computeDraftValueFromFieldValue<FieldValue>({
              fieldValue: recordFieldValue,
              fieldDefinition,
            }),
          );
        } else {
          set(
            getDraftValueSelector(),
            computeDraftValueFromString<FieldValue>({
              value,
              fieldDefinition,
            }),
          );
        }
      },
    [],
  );
};
