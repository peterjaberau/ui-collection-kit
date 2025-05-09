import { SettingsPageContainer } from '@twenty-modules/settings/components/SettingsPageContainer';
import { SettingsIntegrationGroup } from '@twenty-modules/settings/integrations/components/SettingsIntegrationGroup';
import { useSettingsIntegrationCategories } from '@twenty-modules/settings/integrations/hooks/useSettingsIntegrationCategories';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SubMenuTopBarContainer } from '@twenty-modules/ui/layout/page/components/SubMenuTopBarContainer';
import { Trans, useLingui } from '@lingui/react/macro';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';

export const SettingsIntegrations = () => {
  const { t } = useLingui();
  const integrationCategories = useSettingsIntegrationCategories();

  return (
    <SubMenuTopBarContainer
      title={t`Integrations`}
      links={[
        {
          children: <Trans>Workspace</Trans>,
          href: getSettingsPath(SettingsPath.Workspace),
        },
        { children: <Trans>Integrations</Trans> },
      ]}
    >
      <SettingsPageContainer>
        {integrationCategories.map((group) => (
          <SettingsIntegrationGroup key={group.key} integrationGroup={group} />
        ))}
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
