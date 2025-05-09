import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useFindManyRecords } from '@twenty-modules/object-record/hooks/useFindManyRecords';
import { SettingsApiKeysFieldItemTableRow } from '@twenty-modules/settings/developers/components/SettingsApiKeysFieldItemTableRow';
import { ApiFieldItem } from '@twenty-modules/settings/developers/types/api-key/ApiFieldItem';
import { ApiKey } from '@twenty-modules/settings/developers/types/api-key/ApiKey';
import { formatExpirations } from '@twenty-modules/settings/developers/utils/formatExpiration';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { Table } from '@twenty-modules/ui/layout/table/components/Table';
import { TableBody } from '@twenty-modules/ui/layout/table/components/TableBody';
import { TableHeader } from '@twenty-modules/ui/layout/table/components/TableHeader';
import { TableRow } from '@twenty-modules/ui/layout/table/components/TableRow';
import styled from '@emotion/styled';
import { Trans } from '@lingui/react/macro';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { MOBILE_VIEWPORT } from '@twenty-ui/theme';

const StyledTableBody = styled(TableBody)`
  border-bottom: 1px solid ${({ theme }) => theme.border.color.light};
  @media (max-width: ${MOBILE_VIEWPORT}px) {
    padding-top: ${({ theme }) => theme.spacing(3)};
    display: flex;
    justify-content: space-between;
    scroll-behavior: smooth;
  }
`;

const StyledTableRow = styled(TableRow)`
  grid-template-columns: 312px auto 28px;
  @media (max-width: ${MOBILE_VIEWPORT}px) {
    width: 95%;
    grid-template-columns: 20fr 2fr;
  }
`;

export const SettingsApiKeysTable = () => {
  const { records: apiKeys } = useFindManyRecords<ApiKey>({
    objectNameSingular: CoreObjectNameSingular.ApiKey,
    filter: { revokedAt: { is: 'NULL' } },
  });

  return (
    <Table>
      <StyledTableRow>
        <TableHeader>
          <Trans>Name</Trans>
        </TableHeader>
        <TableHeader>
          <Trans>Expiration</Trans>
        </TableHeader>
        <TableHeader></TableHeader>
      </StyledTableRow>
      {!!apiKeys.length && (
        <StyledTableBody>
          {formatExpirations(apiKeys).map((fieldItem) => (
            <SettingsApiKeysFieldItemTableRow
              key={fieldItem.id}
              fieldItem={fieldItem as ApiFieldItem}
              to={getSettingsPath(SettingsPath.DevelopersApiKeyDetail, {
                apiKeyId: fieldItem.id,
              })}
            />
          ))}
        </StyledTableBody>
      )}
    </Table>
  );
};
