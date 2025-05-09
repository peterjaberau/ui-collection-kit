import { FieldDateMetadataSettings } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { UserContext } from '@twenty-modules/users/contexts/UserContext';
import { useContext } from 'react';
import { formatDateTimeString } from '@twenty-ui/front/utils/string/formatDateTimeString';
import { EllipsisDisplay } from './EllipsisDisplay';

type DateTimeDisplayProps = {
  value: string | null | undefined;
  dateFieldSettings?: FieldDateMetadataSettings;
};

export const DateTimeDisplay = ({
  value,
  dateFieldSettings,
}: DateTimeDisplayProps) => {
  const { dateFormat, timeFormat, timeZone } = useContext(UserContext);

  const formattedDate = formatDateTimeString({
    value,
    timeZone,
    dateFormat,
    timeFormat,
    dateFieldSettings,
  });

  return <EllipsisDisplay>{formattedDate}</EllipsisDisplay>;
};
