import { useLingui } from '@lingui/react/macro';

import { isConfigVariablesInDbEnabledState } from '@twenty-modules/client-config/states/isConfigVariablesInDbEnabledState';
import { TextInputV2 } from '@twenty-modules/ui/input/components/TextInputV2';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { ConfigVariableValue } from '@ui-collection-kit/twenty-shared/src/types';
import { ConfigVariable } from '@twenty-ui/front/generated/graphql';
import { ConfigVariableDatabaseInput } from './ConfigVariableDatabaseInput';

type ConfigVariableValueInputProps = {
  variable: ConfigVariable;
  value: ConfigVariableValue;
  onChange: (value: string | number | boolean | string[] | null) => void;
  disabled?: boolean;
};

const StyledValueContainer = styled.div`
  width: 100%;
`;

export const ConfigVariableValueInput = ({
  variable,
  value,
  onChange,
  disabled,
}: ConfigVariableValueInputProps) => {
  const { t } = useLingui();
  const isConfigVariablesInDbEnabled = useRecoilValue(
    isConfigVariablesInDbEnabledState,
  );

  return (
    <StyledValueContainer>
      {isConfigVariablesInDbEnabled && !variable.isEnvOnly ? (
        <ConfigVariableDatabaseInput
          label={t`Value`}
          value={value}
          onChange={onChange}
          type={variable.type}
          options={variable.options}
          disabled={disabled}
          placeholder={
            disabled ? 'Undefined' : t`Enter a value to store in database`
          }
        />
      ) : (
        <TextInputV2
          value={String(value)}
          disabled
          label={t`Value`}
          fullWidth
        />
      )}
    </StyledValueContainer>
  );
};
