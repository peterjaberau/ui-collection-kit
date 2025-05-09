import { PublicWorkspaceDataOutput } from '@twenty-ui/front/generated/graphql';
import { createState } from '@twenty-ui/utilities';

export const workspacePublicDataState =
  createState<PublicWorkspaceDataOutput | null>({
    key: 'workspacePublicDataState',
    defaultValue: null,
  });
