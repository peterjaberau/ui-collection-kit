import styled from '@emotion/styled';
import { Trans, useLingui } from '@lingui/react/macro';

import { isMultiWorkspaceEnabledState } from '@twenty-modules/client-config/states/isMultiWorkspaceEnabledState';
import { SettingsPageContainer } from '@twenty-modules/settings/components/SettingsPageContainer';
import { SettingsSSOIdentitiesProvidersListCard } from '@twenty-modules/settings/security/components/SSO/SettingsSSOIdentitiesProvidersListCard';
import { SettingsSecurityAuthProvidersOptionsList } from '@twenty-modules/settings/security/components/SettingsSecurityAuthProvidersOptionsList';
import { SettingsApprovedAccessDomainsListCard } from '@twenty-modules/settings/security/components/approvedAccessDomains/SettingsApprovedAccessDomainsListCard';
import { ToggleImpersonate } from '@twenty-modules/settings/workspace/components/ToggleImpersonate';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SubMenuTopBarContainer } from '@twenty-modules/ui/layout/page/components/SubMenuTopBarContainer';
import { useRecoilValue } from 'recoil';
import { Tag } from '@twenty-ui//components';
import { H2Title, IconLock } from '@twenty-ui//display';
import { Section } from '@twenty-ui//layout';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';

const StyledContainer = styled.div`
  width: 100%;
`;

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)};
  min-height: 200px;
`;

const StyledSection = styled(Section)`
  flex-shrink: 0;
`;

export const SettingsSecurity = () => {
  const { t } = useLingui();

  const isMultiWorkspaceEnabled = useRecoilValue(isMultiWorkspaceEnabledState);

  return (
    <SubMenuTopBarContainer
      title={t`Security`}
      links={[
        {
          children: <Trans>Workspace</Trans>,
          href: getSettingsPath(SettingsPath.Workspace),
        },
        { children: <Trans>Security</Trans> },
      ]}
    >
      <SettingsPageContainer>
        <StyledMainContent>
          <StyledSection>
            <H2Title
              title={t`SSO`}
              description={t`Configure an SSO connection`}
              adornment={
                <Tag
                  text={t`Enterprise`}
                  color={'transparent'}
                  Icon={IconLock}
                  variant={'border'}
                />
              }
            />
            <SettingsSSOIdentitiesProvidersListCard />
          </StyledSection>
          <StyledSection>
            <H2Title
              title={t`Approved Domains`}
              description={t`Anyone with an email address at these domains is allowed to sign up for this workspace.`}
            />
            <SettingsApprovedAccessDomainsListCard />
          </StyledSection>
          <Section>
            <StyledContainer>
              <H2Title
                title={t`Authentication`}
                description={t`Customize your workspace security`}
              />
              <SettingsSecurityAuthProvidersOptionsList />
            </StyledContainer>
          </Section>
          {isMultiWorkspaceEnabled && (
            <Section>
              <H2Title
                title={t`Support`}
                description={t`Manage support access settings`}
              />
              <ToggleImpersonate />
            </Section>
          )}
        </StyledMainContent>
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
