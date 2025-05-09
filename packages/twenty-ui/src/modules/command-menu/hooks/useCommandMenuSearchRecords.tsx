import { Action } from '@twenty-modules/action-menu/actions/components/Action';
import { ActionLink } from '@twenty-modules/action-menu/actions/components/ActionLink';
import { ActionScope } from '@twenty-modules/action-menu/actions/types/ActionScope';
import { ActionType } from '@twenty-modules/action-menu/actions/types/ActionType';
import { MAX_SEARCH_RESULTS } from '@twenty-modules/command-menu/constants/MaxSearchResults';
import { useOpenRecordInCommandMenu } from '@twenty-modules/command-menu/hooks/useOpenRecordInCommandMenu';
import { commandMenuSearchState } from '@twenty-modules/command-menu/states/commandMenuSearchState';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { AppPath } from '@twenty-modules/types/AppPath';
import { t } from '@lingui/core/macro';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';
import { Avatar } from '@twenty-ui/display';
import { useDebounce } from 'use-debounce';
import { useSearchQuery } from '@twenty-ui/front/generated/graphql';

export const useCommandMenuSearchRecords = () => {
  const commandMenuSearch = useRecoilValue(commandMenuSearchState);

  const [deferredCommandMenuSearch] = useDebounce(commandMenuSearch, 300);

  const { data: searchData, loading } = useSearchQuery({
    variables: {
      searchInput: deferredCommandMenuSearch ?? '',
      limit: MAX_SEARCH_RESULTS,
      excludedObjectNameSingulars: ['workspaceMember'],
    },
  });

  const { openRecordInCommandMenu } = useOpenRecordInCommandMenu();

  const actionItems = useMemo(() => {
    return (searchData?.search ?? []).map((searchRecord, index) => {
      const baseAction = {
        type: ActionType.Navigation,
        scope: ActionScope.Global,
        key: searchRecord.recordId,
        label: searchRecord.label,
        position: index,
        Icon: () => (
          <Avatar
            type={
              searchRecord.objectNameSingular === 'company'
                ? 'squared'
                : 'rounded'
            }
            avatarUrl={searchRecord.imageUrl}
            placeholderColorSeed={searchRecord.recordId}
            placeholder={searchRecord.label}
          />
        ),
        shouldBeRegistered: () => true,
        description: capitalize(searchRecord.objectNameSingular),
        shouldCloseCommandMenuOnClick: true,
      };

      if (
        [CoreObjectNameSingular.Task, CoreObjectNameSingular.Note].includes(
          searchRecord.objectNameSingular as CoreObjectNameSingular,
        )
      ) {
        return {
          ...baseAction,
          component: (
            <Action
              onClick={() => {
                searchRecord.objectNameSingular === 'task'
                  ? openRecordInCommandMenu({
                      recordId: searchRecord.recordId,
                      objectNameSingular: CoreObjectNameSingular.Task,
                    })
                  : openRecordInCommandMenu({
                      recordId: searchRecord.recordId,
                      objectNameSingular: CoreObjectNameSingular.Note,
                    });
              }}
              preventCommandMenuClosing
            />
          ),
        };
      }

      return {
        ...baseAction,
        component: (
          <ActionLink
            to={AppPath.RecordShowPage}
            params={{
              objectNameSingular: searchRecord.objectNameSingular,
              objectRecordId: searchRecord.recordId,
            }}
          />
        ),
      };
    });
  }, [searchData, openRecordInCommandMenu]);

  return {
    loading,
    noResults: !actionItems?.length,
    commandGroups: [
      {
        heading: t`Results`,
        items: actionItems,
      },
    ],
    hasMore: false,
    pageSize: 0,
    onLoadMore: () => {},
  };
};
