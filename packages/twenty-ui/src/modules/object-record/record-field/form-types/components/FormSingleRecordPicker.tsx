import { useFindOneRecord } from '@twenty-modules/object-record/hooks/useFindOneRecord';
import { FormFieldInputContainer } from '@twenty-modules/object-record/record-field/form-types/components/FormFieldInputContainer';
import { FormFieldInputInnerContainer } from '@twenty-modules/object-record/record-field/form-types/components/FormFieldInputInnerContainer';
import { FormFieldInputRowContainer } from '@twenty-modules/object-record/record-field/form-types/components/FormFieldInputRowContainer';
import { FormSingleRecordFieldChip } from '@twenty-modules/object-record/record-field/form-types/components/FormSingleRecordFieldChip';
import { VariablePickerComponent } from '@twenty-modules/object-record/record-field/form-types/types/VariablePickerComponent';
import { SingleRecordPicker } from '@twenty-modules/object-record/record-picker/single-record-picker/components/SingleRecordPicker';
import { singleRecordPickerSearchFilterComponentState } from '@twenty-modules/object-record/record-picker/single-record-picker/states/singleRecordPickerSearchFilterComponentState';
import { singleRecordPickerSelectedIdComponentState } from '@twenty-modules/object-record/record-picker/single-record-picker/states/singleRecordPickerSelectedIdComponentState';
import { SingleRecordPickerRecord } from '@twenty-modules/object-record/record-picker/single-record-picker/types/SingleRecordPickerRecord';
import { InputLabel } from '@twenty-modules/ui/input/components/InputLabel';
import { Dropdown } from '@twenty-modules/ui/layout/dropdown/components/Dropdown';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { isStandaloneVariableString } from '@twenty-modules/workflow/utils/isStandaloneVariableString';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useCallback } from 'react';
import { isDefined, isValidUuid } from '@ui-collection-kit/twenty-shared/src/utils';
import { IconChevronDown, IconForbid } from '@twenty-ui/display';

const StyledFormSelectContainer = styled(FormFieldInputInnerContainer)<{
  readonly?: boolean;
}>`
  align-items: center;
  height: 32px;
  justify-content: space-between;
  padding-right: ${({ theme }) => theme.spacing(2)};

  ${({ readonly, theme }) =>
    !readonly &&
    css`
      &:hover,
      &[data-open='true'] {
        background-color: ${theme.background.transparent.light};
      }

      cursor: pointer;
    `}
`;

const StyledIconButton = styled.div`
  display: flex;
`;

export type RecordId = string;
export type Variable = string;

type FormSingleRecordPickerValue =
  | {
      type: 'static';
      value: RecordId;
    }
  | {
      type: 'variable';
      value: Variable;
    };

export type FormSingleRecordPickerProps = {
  label?: string;
  defaultValue: RecordId | Variable;
  onChange: (value: RecordId | Variable) => void;
  objectNameSingular: string;
  disabled?: boolean;
  testId?: string;
  VariablePicker?: VariablePickerComponent;
};

export const FormSingleRecordPicker = ({
  label,
  defaultValue,
  objectNameSingular,
  onChange,
  disabled,
  testId,
  VariablePicker,
}: FormSingleRecordPickerProps) => {
  const theme = useTheme();
  const draftValue: FormSingleRecordPickerValue = isStandaloneVariableString(
    defaultValue,
  )
    ? {
        type: 'variable',
        value: defaultValue,
      }
    : {
        type: 'static',
        value: defaultValue || '',
      };

  const { record: selectedRecord } = useFindOneRecord({
    objectRecordId:
      isDefined(defaultValue) && !isStandaloneVariableString(defaultValue)
        ? defaultValue
        : '',
    objectNameSingular,
    withSoftDeleted: true,
    skip: !isValidUuid(defaultValue),
  });

  const dropdownId = `form-record-picker-${objectNameSingular}`;
  const variablesDropdownId = `form-record-picker-${objectNameSingular}-variables`;

  const { closeDropdown } = useDropdown(dropdownId);

  const setRecordPickerSearchFilter = useSetRecoilComponentStateV2(
    singleRecordPickerSearchFilterComponentState,
    dropdownId,
  );

  const handleCloseRelationPickerDropdown = useCallback(() => {
    setRecordPickerSearchFilter('');
  }, [setRecordPickerSearchFilter]);

  const handleRecordSelected = (
    selectedEntity: SingleRecordPickerRecord | null | undefined,
  ) => {
    onChange?.(selectedEntity?.record?.id ?? '');
    closeDropdown();
  };

  const handleVariableTagInsert = (variable: string) => {
    onChange?.(variable);
  };

  const handleUnlinkVariable = (event?: React.MouseEvent<HTMLDivElement>) => {
    // Prevents the dropdown to open when clicking on the chip
    event?.stopPropagation();
    onChange('');
  };

  const setRecordPickerSelectedId = useSetRecoilComponentStateV2(
    singleRecordPickerSelectedIdComponentState,
    dropdownId,
  );

  const handleOpenDropdown = () => {
    if (
      isDefined(draftValue?.value) &&
      !isStandaloneVariableString(draftValue.value)
    ) {
      setRecordPickerSelectedId(draftValue.value);
    }
  };

  return (
    <FormFieldInputContainer testId={testId}>
      {label ? <InputLabel>{label}</InputLabel> : null}
      <FormFieldInputRowContainer>
        {disabled ? (
          <StyledFormSelectContainer hasRightElement={false} readonly>
            <FormSingleRecordFieldChip
              draftValue={draftValue}
              selectedRecord={selectedRecord}
              objectNameSingular={objectNameSingular}
              onRemove={handleUnlinkVariable}
              disabled={disabled}
            />
          </StyledFormSelectContainer>
        ) : (
          <Dropdown
            dropdownId={dropdownId}
            dropdownPlacement="bottom-start"
            clickableComponentWidth={'100%'}
            onClose={handleCloseRelationPickerDropdown}
            onOpen={handleOpenDropdown}
            clickableComponent={
              <StyledFormSelectContainer
                hasRightElement={isDefined(VariablePicker) && !disabled}
                preventSetHotkeyScope={true}
              >
                <FormSingleRecordFieldChip
                  draftValue={draftValue}
                  selectedRecord={selectedRecord}
                  objectNameSingular={objectNameSingular}
                  onRemove={handleUnlinkVariable}
                  disabled={disabled}
                />
                <StyledIconButton>
                  <IconChevronDown
                    size={theme.icon.size.md}
                    color={theme.font.color.light}
                  />
                </StyledIconButton>
              </StyledFormSelectContainer>
            }
            dropdownComponents={
              <SingleRecordPicker
                componentInstanceId={dropdownId}
                EmptyIcon={IconForbid}
                emptyLabel={'No ' + objectNameSingular}
                onCancel={() => closeDropdown()}
                onRecordSelected={handleRecordSelected}
                objectNameSingular={objectNameSingular}
                recordPickerInstanceId={dropdownId}
              />
            }
            dropdownHotkeyScope={{ scope: dropdownId }}
          />
        )}
        {isDefined(VariablePicker) && !disabled && (
          <VariablePicker
            inputId={variablesDropdownId}
            disabled={disabled}
            onVariableSelect={handleVariableTagInsert}
            objectNameSingularToSelect={objectNameSingular}
          />
        )}
      </FormFieldInputRowContainer>
    </FormFieldInputContainer>
  );
};
