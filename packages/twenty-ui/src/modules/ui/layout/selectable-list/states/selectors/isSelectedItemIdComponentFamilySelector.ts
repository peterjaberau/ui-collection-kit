import { SelectableListComponentInstanceContext } from '@twenty-modules/ui/layout/selectable-list/states/contexts/SelectableListComponentInstanceContext';
import { isSelectedItemIdComponentFamilyState } from '@twenty-modules/ui/layout/selectable-list/states/isSelectedItemIdComponentFamilyState';
import { createComponentFamilySelectorV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentFamilySelectorV2';

export const isSelectedItemIdComponentFamilySelector =
  createComponentFamilySelectorV2<boolean, string>({
    key: 'isSelectedItemIdComponentFamilySelector',
    componentInstanceContext: SelectableListComponentInstanceContext,
    get:
      ({ instanceId, familyKey }: { instanceId: string; familyKey: string }) =>
      ({ get }) =>
        get(
          isSelectedItemIdComponentFamilyState.atomFamily({
            instanceId: instanceId,
            familyKey: familyKey,
          }),
        ),
    set:
      ({ instanceId, familyKey }: { instanceId: string; familyKey: string }) =>
      ({ set }, newValue) =>
        set(
          isSelectedItemIdComponentFamilyState.atomFamily({
            instanceId: instanceId,
            familyKey: familyKey,
          }),
          newValue,
        ),
  });
