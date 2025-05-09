import { FieldDateMetadataSettings } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { UserContext } from '@twenty-modules/users/contexts/UserContext';
import { useContext } from 'react';
import { formatDateString } from '@twenty-ui/front/utils/string/formatDateString';
import { EllipsisDisplay } from './EllipsisDisplay';

type DateDisplayProps = {
  value: string | null | undefined;
  dateFieldSettings?: FieldDateMetadataSettings;
};

export const DateDisplay = ({ value, dateFieldSettings }: DateDisplayProps) => {
  const { dateFormat, timeZone } = useContext(UserContext);

  const formattedDate = formatDateString({
    value,
    timeZone,
    dateFormat,
    dateFieldSettings,
  });

  return <EllipsisDisplay>{formattedDate}</EllipsisDisplay>;
};
