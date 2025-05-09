import { useCommandMenu } from '@twenty-modules/command-menu/hooks/useCommandMenu';
import { CommandMenuPages } from '@twenty-modules/command-menu/types/CommandMenuPages';
import { t } from '@lingui/core/macro';
import { v4 } from 'uuid';
import { IconSearch } from '@twenty-ui/display';

export const useOpenRecordsSearchPageInCommandMenu = () => {
  const { navigateCommandMenu } = useCommandMenu();

  const openRecordsSearchPage = () => {
    navigateCommandMenu({
      page: CommandMenuPages.SearchRecords,
      pageTitle: t`Search`,
      pageIcon: IconSearch,
      pageId: v4(),
    });
  };

  return {
    openRecordsSearchPage,
  };
};
