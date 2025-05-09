import { useRecoilValue } from 'recoil';

import { ConnectedAccount } from '@twenty-modules/accounts/types/ConnectedAccount';
import { currentWorkspaceMemberState } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { generateDepthOneRecordGqlFields } from '@twenty-modules/object-record/graphql/utils/generateDepthOneRecordGqlFields';
import { useFindManyRecords } from '@twenty-modules/object-record/hooks/useFindManyRecords';
import { SettingsAccountLoader } from '@twenty-modules/settings/accounts/components/SettingsAccountLoader';
import { SettingsAccountsBlocklistSection } from '@twenty-modules/settings/accounts/components/SettingsAccountsBlocklistSection';
import { SettingsAccountsConnectedAccountsListCard } from '@twenty-modules/settings/accounts/components/SettingsAccountsConnectedAccountsListCard';
import { SettingsAccountsSettingsSection } from '@twenty-modules/settings/accounts/components/SettingsAccountsSettingsSection';
import { SettingsPageContainer } from '@twenty-modules/settings/components/SettingsPageContainer';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SubMenuTopBarContainer } from '@twenty-modules/ui/layout/page/components/SubMenuTopBarContainer';
import { useLingui } from '@lingui/react/macro';
import { H2Title } from '@twenty-ui//display';
import { Section } from '@twenty-ui//layout';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';

export const SettingsAccounts = () => {
  const { t } = useLingui();
  const currentWorkspaceMember = useRecoilValue(currentWorkspaceMemberState);

  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular: CoreObjectNameSingular.ConnectedAccount,
  });

  const { records: accounts, loading } = useFindManyRecords<ConnectedAccount>({
    objectNameSingular: CoreObjectNameSingular.ConnectedAccount,
    filter: {
      accountOwnerId: {
        eq: currentWorkspaceMember?.id,
      },
    },
    recordGqlFields: generateDepthOneRecordGqlFields({ objectMetadataItem }),
  });

  return (
    <SubMenuTopBarContainer
      title={t`Account`}
      links={[
        {
          children: t`User`,
          href: getSettingsPath(SettingsPath.ProfilePage),
        },
        { children: t`Account` },
      ]}
    >
      <SettingsPageContainer>
        {loading ? (
          <SettingsAccountLoader />
        ) : (
          <>
            <Section>
              <H2Title
                title={t`Connected accounts`}
                description={t`Manage your internet accounts.`}
              />
              <SettingsAccountsConnectedAccountsListCard
                accounts={accounts}
                loading={loading}
              />
            </Section>
            <SettingsAccountsBlocklistSection />
            <SettingsAccountsSettingsSection />
          </>
        )}
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
