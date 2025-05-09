import { Company } from '@twenty-modules/companies/types/Company';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

// temporary, to remove once domainName has been fully migrated to Links type
export const getCompanyDomainName = (company: Company) => {
  if (!isDefined(company.domainName)) {
    return company.domainName;
  }
  if (typeof company.domainName === 'string') {
    return company.domainName;
  } else {
    return company.domainName.primaryLinkUrl;
  }
};
