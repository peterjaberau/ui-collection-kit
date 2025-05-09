import { currentUserState } from '@twenty-modules/auth/states/currentUserState';
import { currentWorkspaceMemberState } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { supportChatState } from '@twenty-modules/client-config/states/supportChatState';
import { useIsPrefetchLoading } from '@twenty-modules/prefetch/hooks/useIsPrefetchLoading';
import { isNonEmptyString } from '@sniptt/guards';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { User, WorkspaceMember } from '@twenty-ui/front/generated-metadata/graphql';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

const insertScript = ({
  src,
  innerHTML,
  onLoad,
  defer = false,
}: {
  src?: string;
  innerHTML?: string;
  onLoad?: (...args: any[]) => void;
  defer?: boolean;
}) => {
  const script = document.createElement('script');
  if (isNonEmptyString(src)) script.src = src;
  if (isNonEmptyString(innerHTML)) script.innerHTML = innerHTML;
  if (isDefined(onLoad)) script.onload = onLoad;
  script.defer = defer;
  document.body.appendChild(script);
};

export const useSupportChat = () => {
  const currentUser = useRecoilValue(currentUserState);
  const currentWorkspaceMember = useRecoilValue(currentWorkspaceMemberState);
  const supportChat = useRecoilValue(supportChatState);
  const [isFrontChatLoaded, setIsFrontChatLoaded] = useState(false);
  const loading = useIsPrefetchLoading();

  const configureFront = useCallback(
    (
      chatId: string,
      currentUser: Pick<User, 'email' | 'supportUserHash'>,
      currentWorkspaceMember: Pick<WorkspaceMember, 'name'>,
    ) => {
      const url = 'https://chat-assets.frontapp.com/v1/chat.bundle.js';
      let script = document.querySelector(`script[src="${url}"]`);

      // This function only gets called when front chat is not loaded
      // If the script is already defined, but front chat is not loaded
      // then there was an error loading the script; reload the script
      if (isDefined(script)) {
        script.parentNode?.removeChild(script);
        script = null;
      }

      insertScript({
        src: url,
        defer: true,
        onLoad: () => {
          window.FrontChat?.('init', {
            chatId,
            useDefaultLauncher: false,
            email: currentUser.email,
            name:
              currentWorkspaceMember.name.firstName +
              ' ' +
              currentWorkspaceMember.name.lastName,
            userHash: currentUser?.supportUserHash,
          });
          setIsFrontChatLoaded(true);
        },
      });
    },
    [],
  );

  useEffect(() => {
    if (
      supportChat?.supportDriver === 'front' &&
      isNonEmptyString(supportChat.supportFrontChatId) &&
      isNonEmptyString(currentUser?.email) &&
      isDefined(currentWorkspaceMember) &&
      !isFrontChatLoaded
    ) {
      setTimeout(() => {
        configureFront(
          supportChat.supportFrontChatId as string,
          currentUser,
          currentWorkspaceMember,
        );
      }, 500);
    }
  }, [
    configureFront,
    currentUser,
    isFrontChatLoaded,
    supportChat?.supportDriver,
    supportChat.supportFrontChatId,
    currentWorkspaceMember,
  ]);

  return { loading, isFrontChatLoaded };
};
