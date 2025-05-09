import { workspacePublicDataState } from '@twenty-modules/auth/states/workspacePublicDataState';
import { DEFAULT_WORKSPACE_LOGO } from '@twenty-modules/ui/navigation/navigation-drawer/constants/DefaultWorkspaceLogo';
import { Helmet } from 'react-helmet-async';
import { useRecoilValue } from 'recoil';
import { REACT_APP_SERVER_BASE_URL } from '@twenty-ui/front/config';
import { getImageAbsoluteURI } from '@ui-collection-kit/twenty-shared/src/utils';

export const PageFavicon = () => {
  const workspacePublicData = useRecoilValue(workspacePublicDataState);
  return (
    <Helmet>
      {workspacePublicData?.logo && (
        <link
          rel="icon"
          type="image/x-icon"
          href={
            getImageAbsoluteURI({
              imageUrl: workspacePublicData.logo,
              baseUrl: REACT_APP_SERVER_BASE_URL,
            }) ?? DEFAULT_WORKSPACE_LOGO
          }
        />
      )}
    </Helmet>
  );
};
