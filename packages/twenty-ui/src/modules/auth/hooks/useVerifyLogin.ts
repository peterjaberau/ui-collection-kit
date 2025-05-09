import { SnackBarVariant } from '@twenty-modules/ui/feedback/snack-bar-manager/components/SnackBar';

import { useAuth } from '@twenty-modules/auth/hooks/useAuth';
import { AppPath } from '@twenty-modules/types/AppPath';
import { useSnackBar } from '@twenty-modules/ui/feedback/snack-bar-manager/hooks/useSnackBar';
import { useLingui } from '@lingui/react/macro';
import { useNavigateApp } from '@twenty-ui/front/hooks/useNavigateApp';

export const useVerifyLogin = () => {
  const { enqueueSnackBar } = useSnackBar();
  const navigate = useNavigateApp();
  const { getAuthTokensFromLoginToken } = useAuth();
  const { t } = useLingui();

  const verifyLoginToken = async (loginToken: string) => {
    try {
      await getAuthTokensFromLoginToken(loginToken);
    } catch (error) {
      enqueueSnackBar(t`Authentication failed`, {
        variant: SnackBarVariant.Error,
      });
      navigate(AppPath.SignInUp);
    }
  };

  return { verifyLoginToken };
};
