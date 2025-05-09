import { approvedAccessDomainsState } from '@twenty-modules/settings/security/states/ApprovedAccessDomainsState';
import { SnackBarVariant } from '@twenty-modules/ui/feedback/snack-bar-manager/components/SnackBar';
import { useSnackBar } from '@twenty-modules/ui/feedback/snack-bar-manager/hooks/useSnackBar';
import { Dropdown } from '@twenty-modules/ui/layout/dropdown/components/Dropdown';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';
import { UnwrapRecoilValue, useSetRecoilState } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { IconDotsVertical, IconTrash } from '@twenty-ui/display';
import { LightIconButton } from '@twenty-ui/input';
import { MenuItem } from '@twenty-ui/navigation';
import { useDeleteApprovedAccessDomainMutation } from '@twenty-ui/front/generated/graphql';

type SettingsSecurityApprovedAccessDomainRowDropdownMenuProps = {
  approvedAccessDomain: UnwrapRecoilValue<typeof approvedAccessDomainsState>[0];
};

export const SettingsSecurityApprovedAccessDomainRowDropdownMenu = ({
  approvedAccessDomain,
}: SettingsSecurityApprovedAccessDomainRowDropdownMenuProps) => {
  const dropdownId = `settings-approved-access-domain-row-${approvedAccessDomain.id}`;

  const setApprovedAccessDomains = useSetRecoilState(
    approvedAccessDomainsState,
  );

  const { enqueueSnackBar } = useSnackBar();

  const { closeDropdown } = useDropdown(dropdownId);

  const [deleteApprovedAccessDomain] = useDeleteApprovedAccessDomainMutation();

  const handleDeleteApprovedAccessDomain = async () => {
    const result = await deleteApprovedAccessDomain({
      variables: {
        input: {
          id: approvedAccessDomain.id,
        },
      },
      onCompleted: () => {
        setApprovedAccessDomains((approvedAccessDomains) => {
          return approvedAccessDomains.filter(
            ({ id }) => id !== approvedAccessDomain.id,
          );
        });
      },
    });
    if (isDefined(result.errors)) {
      enqueueSnackBar('Error deleting approved access domain', {
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
            accent="danger"
            LeftIcon={IconTrash}
            text="Delete"
            onClick={() => {
              handleDeleteApprovedAccessDomain();
              closeDropdown();
            }}
          />
        </DropdownMenuItemsContainer>
      }
    />
  );
};
