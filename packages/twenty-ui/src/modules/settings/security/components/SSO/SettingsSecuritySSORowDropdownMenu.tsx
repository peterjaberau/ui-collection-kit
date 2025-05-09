import { useDeleteSSOIdentityProvider } from '@twenty-modules/settings/security/hooks/useDeleteSSOIdentityProvider';
import { useUpdateSSOIdentityProvider } from '@twenty-modules/settings/security/hooks/useUpdateSSOIdentityProvider';
import { SSOIdentitiesProvidersState } from '@twenty-modules/settings/security/states/SSOIdentitiesProvidersState';
import { SnackBarVariant } from '@twenty-modules/ui/feedback/snack-bar-manager/components/SnackBar';
import { useSnackBar } from '@twenty-modules/ui/feedback/snack-bar-manager/hooks/useSnackBar';
import { Dropdown } from '@twenty-modules/ui/layout/dropdown/components/Dropdown';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';
import { useLingui } from '@lingui/react/macro';
import { UnwrapRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { IconArchive, IconDotsVertical, IconTrash } from '@twenty-ui/display';
import { LightIconButton } from '@twenty-ui/input';
import { MenuItem } from '@twenty-ui/navigation';
import { SsoIdentityProviderStatus } from '@twenty-ui/front/generated/graphql';

type SettingsSecuritySSORowDropdownMenuProps = {
  SSOIdp: UnwrapRecoilValue<typeof SSOIdentitiesProvidersState>[0];
};

export const SettingsSecuritySSORowDropdownMenu = ({
  SSOIdp,
}: SettingsSecuritySSORowDropdownMenuProps) => {
  const dropdownId = `settings-account-row-${SSOIdp.id}`;

  const { enqueueSnackBar } = useSnackBar();

  const { closeDropdown } = useDropdown(dropdownId);

  const { deleteSSOIdentityProvider } = useDeleteSSOIdentityProvider();
  const { updateSSOIdentityProvider } = useUpdateSSOIdentityProvider();

  const { t } = useLingui();

  const handleDeleteSSOIdentityProvider = async (
    identityProviderId: string,
  ) => {
    const result = await deleteSSOIdentityProvider({
      identityProviderId,
    });
    if (isDefined(result.errors)) {
      enqueueSnackBar(t`Error deleting SSO Identity Provider`, {
        variant: SnackBarVariant.Error,
        duration: 2000,
      });
    }
  };

  const toggleSSOIdentityProviderStatus = async (
    identityProviderId: string,
  ) => {
    const result = await updateSSOIdentityProvider({
      id: identityProviderId,
      status:
        SSOIdp.status === 'Active'
          ? SsoIdentityProviderStatus.Inactive
          : SsoIdentityProviderStatus.Active,
    });
    if (isDefined(result.errors)) {
      enqueueSnackBar(t`Error editing SSO Identity Provider`, {
        variant: SnackBarVariant.Error,
        duration: 2000,
      });
    }
  };

  return (
    <Dropdown
      dropdownId={dropdownId}
      dropdownPlacement="right-start"
      dropdownHotkeyScope={{ scope: dropdownId }}
      clickableComponent={
        <LightIconButton Icon={IconDotsVertical} accent="tertiary" />
      }
      dropdownWidth={160}
      dropdownComponents={
        <DropdownMenuItemsContainer>
          <MenuItem
            accent="default"
            LeftIcon={IconArchive}
            text={SSOIdp.status === 'Active' ? t`Deactivate` : t`Activate`}
            onClick={() => {
              toggleSSOIdentityProviderStatus(SSOIdp.id);
              closeDropdown();
            }}
          />
          <MenuItem
            accent="danger"
            LeftIcon={IconTrash}
            text={t`Delete`}
            onClick={() => {
              handleDeleteSSOIdentityProvider(SSOIdp.id);
              closeDropdown();
            }}
          />
        </DropdownMenuItemsContainer>
      }
    />
  );
};
