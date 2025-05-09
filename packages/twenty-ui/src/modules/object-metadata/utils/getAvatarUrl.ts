import { Company } from '@twenty-modules/companies/types/Company';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { getCompanyDomainName } from '@twenty-modules/object-metadata/utils/getCompanyDomainName';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { REACT_APP_SERVER_BASE_URL } from '@twenty-ui/front/config';
import { getImageIdentifierFieldValue } from './getImageIdentifierFieldValue';
import {
  getImageAbsoluteURI,
  getLogoUrlFromDomainName,
  isDefined,
} from '@ui-collection-kit/twenty-shared/src/utils';

export const getAvatarUrl = (
  objectNameSingular: string,
  record: ObjectRecord,
  imageIdentifierFieldMetadataItem: FieldMetadataItem | undefined,
) => {
  if (objectNameSingular === CoreObjectNameSingular.WorkspaceMember) {
    return record.avatarUrl ?? undefined;
  }

  if (objectNameSingular === CoreObjectNameSingular.Company) {
    return getLogoUrlFromDomainName(
      getCompanyDomainName(record as Company) ?? '',
    );
  }

  if (objectNameSingular === CoreObjectNameSingular.Person) {
    return isDefined(record.avatarUrl)
      ? getImageAbsoluteURI({
          imageUrl: record.avatarUrl,
          baseUrl: REACT_APP_SERVER_BASE_URL,
        })
      : '';
  }

  const imageIdentifierFieldValue = getImageIdentifierFieldValue(
    record,
    imageIdentifierFieldMetadataItem,
  );

  if (isDefined(imageIdentifierFieldValue)) {
    return imageIdentifierFieldValue;
  }

  return '';
};
