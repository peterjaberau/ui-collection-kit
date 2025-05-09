import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';

export const isWorkflowSubObjectMetadata = (
  objectMetadataNameSingular?: string,
) =>
  objectMetadataNameSingular === CoreObjectNameSingular.WorkflowVersion ||
  objectMetadataNameSingular === CoreObjectNameSingular.WorkflowRun;
