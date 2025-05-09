import { createScopeInternalContext } from '@twenty-modules/ui/utilities/recoil-scope/scopes-internal/utils/createScopeInternalContext';
import { RecoilComponentStateKey } from '@twenty-modules/ui/utilities/state/component-state/types/RecoilComponentStateKey';

type SnackBarManagerScopeInternalContextProps = RecoilComponentStateKey;

export const SnackBarManagerScopeInternalContext =
  createScopeInternalContext<SnackBarManagerScopeInternalContextProps>();
