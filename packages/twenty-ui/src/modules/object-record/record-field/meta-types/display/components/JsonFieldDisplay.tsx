import { useJsonFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/hooks/useJsonFieldDisplay';
import { JsonDisplay } from '@twenty-modules/ui/field/display/components/JsonDisplay';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const JsonFieldDisplay = () => {
  const { fieldValue, maxWidth } = useJsonFieldDisplay();

  if (!isDefined(fieldValue)) {
    return <></>;
  }

  const value = JSON.stringify(fieldValue);

  return <JsonDisplay text={value} maxWidth={maxWidth} />;
};
