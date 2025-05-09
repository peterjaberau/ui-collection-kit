import { useRecoilValue } from 'recoil';

import { clientConfigApiStatusState } from '@twenty-modules/client-config/states/clientConfigApiStatusState';
import { AppFullScreenErrorFallback } from '@twenty-modules/error-handler/components/AppFullScreenErrorFallback';
import { AppPath } from '@twenty-modules/types/AppPath';
import { useIsMatchingLocation } from '@twenty-ui/front/hooks/useIsMatchingLocation';

export const ClientConfigProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { isLoaded, isErrored, error } = useRecoilValue(
    clientConfigApiStatusState,
  );

  const { isMatchingLocation } = useIsMatchingLocation();

  // TODO: Implement a better loading strategy
  if (
    !isLoaded &&
    !isMatchingLocation(AppPath.Verify) &&
    !isMatchingLocation(AppPath.VerifyEmail)
  )
    return null;

  return isErrored && error instanceof Error ? (
    <AppFullScreenErrorFallback
      error={error}
      resetErrorBoundary={() => {
        window.location.reload();
      }}
      title="Unable to Reach Back-end"
    />
  ) : (
    children
  );
};
