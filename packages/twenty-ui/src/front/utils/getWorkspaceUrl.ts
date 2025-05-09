import { WorkspaceUrls } from '@twenty-ui/front/generated/graphql';

export const getWorkspaceUrl = (workspaceUrls: WorkspaceUrls) => {
  return workspaceUrls.customUrl ?? workspaceUrls.subdomainUrl;
};
