import { isWorkflowSubObjectMetadata } from '@twenty-modules/object-metadata/utils/isWorkflowSubObjectMetadata';
import { CoreObjectNameSingular } from '../types/CoreObjectNameSingular';

export const isWorkflowRelatedObjectMetadata = (objectNameSingular: string) => {
  return (
    objectNameSingular === CoreObjectNameSingular.Workflow ||
    isWorkflowSubObjectMetadata(objectNameSingular)
  );
};
