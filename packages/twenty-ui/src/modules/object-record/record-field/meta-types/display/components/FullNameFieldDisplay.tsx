import { isNonEmptyString } from '@sniptt/guards';

import { useFullNameFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/hooks/useFullNameFieldDisplay';
import { TextDisplay } from '@twenty-modules/ui/field/display/components/TextDisplay';

export const FullNameFieldDisplay = () => {
  const { fieldValue } = useFullNameFieldDisplay();

  const content = [fieldValue?.firstName, fieldValue?.lastName]
    .filter(isNonEmptyString)
    .join(' ');

  return <TextDisplay text={content} />;
};
