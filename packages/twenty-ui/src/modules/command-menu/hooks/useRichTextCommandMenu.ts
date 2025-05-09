import { useCommandMenu } from '@twenty-modules/command-menu/hooks/useCommandMenu';
import { viewableRichTextComponentState } from '@twenty-modules/command-menu/pages/rich-text-page/states/viewableRichTextComponentState';
import { CommandMenuPages } from '@twenty-modules/command-menu/types/CommandMenuPages';
import { useCallback } from 'react';
import { useRecoilCallback } from 'recoil';
import { IconPencil } from '@twenty-ui/display';

export const useRichTextCommandMenu = () => {
  const { navigateCommandMenu, openCommandMenu } = useCommandMenu();

  const openRichTextInCommandMenu = useRecoilCallback(
    ({ set }) =>
      ({
        activityId,
        activityObjectNameSingular,
      }: {
        activityId: string;
        activityObjectNameSingular: string;
      }) => {
        set(viewableRichTextComponentState, {
          activityId,
          activityObjectNameSingular,
        });

        openCommandMenu();
        navigateCommandMenu({
          page: CommandMenuPages.EditRichText,
          pageTitle: 'Rich Text',
          pageIcon: IconPencil,
        });
      },
    [navigateCommandMenu, openCommandMenu],
  );

  const editRichText = useCallback(
    (activityId: string, activityObjectNameSingular: string) => {
      openRichTextInCommandMenu({ activityId, activityObjectNameSingular });
    },
    [openRichTextInCommandMenu],
  );

  return {
    editRichText,
  };
};
