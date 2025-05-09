import { useEmailsFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/hooks/useEmailsFieldDisplay';
import { EmailsDisplay } from '@twenty-modules/ui/field/display/components/EmailsDisplay';

export const EmailsFieldDisplay = () => {
  const { fieldValue } = useEmailsFieldDisplay();

  return <EmailsDisplay value={fieldValue} />;
};
