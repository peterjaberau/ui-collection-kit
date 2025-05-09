import { SnackBarManagerScopeInternalContext } from '@twenty-modules/ui/feedback/snack-bar-manager/scopes/scope-internal-context/SnackBarManagerScopeInternalContext';
import { snackBarInternalScopedState } from '@twenty-modules/ui/feedback/snack-bar-manager/states/snackBarInternalScopedState';
import { useRecoilScopedStateV2 } from '@twenty-modules/ui/utilities/recoil-scope/hooks/useRecoilScopedStateV2';
import { useAvailableScopeIdOrThrow } from '@twenty-modules/ui/utilities/recoil-scope/scopes-internal/hooks/useAvailableScopeId';

type useSnackBarManagerScopedStatesProps = {
  snackBarManagerScopeId?: string;
};

export const useSnackBarManagerScopedStates = (
  props?: useSnackBarManagerScopedStatesProps,
) => {
  const scopeId = useAvailableScopeIdOrThrow(
    SnackBarManagerScopeInternalContext,
    props?.snackBarManagerScopeId,
  );

  const [snackBarInternal, setSnackBarInternal] = useRecoilScopedStateV2(
    snackBarInternalScopedState,
    scopeId,
  );

  return { snackBarInternal, setSnackBarInternal };
};
