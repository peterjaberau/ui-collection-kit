import { currentWorkspaceMemberState } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { RecordFilterValueDependencies } from '@twenty-modules/object-record/record-filter/types/RecordFilterValueDependencies';
import { useRecoilValue } from 'recoil';

export const useFilterValueDependencies = (): {
  filterValueDependencies: RecordFilterValueDependencies;
} => {
  const { id: currentWorkspaceMemberId } =
    useRecoilValue(currentWorkspaceMemberState) ?? {};

  return {
    filterValueDependencies: {
      currentWorkspaceMemberId,
    },
  };
};
