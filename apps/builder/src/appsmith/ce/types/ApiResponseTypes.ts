import type { ApiResponse } from "api/ApiResponses";
import type { FetchApplicationsResponse } from "ce/api/ApplicationApi";
import type { FetchWorkspacesResponse } from "ce/api/WorkspaceApi";

export interface SearchApiResponse extends ApiResponse {
  data: {
    applications: FetchApplicationsResponse[];
    workspaces: FetchWorkspacesResponse[];
  };
}
