import { useLinksFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/hooks/useLinksFieldDisplay';
import { LinksDisplay } from '@twenty-modules/ui/field/display/components/LinksDisplay';

export const LinksFieldDisplay = () => {
  const { fieldValue } = useLinksFieldDisplay();

  return <LinksDisplay value={fieldValue} />;
};
