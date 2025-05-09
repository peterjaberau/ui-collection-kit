import { ApolloError } from '@apollo/client';

import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { SnackBarVariant } from '@twenty-modules/ui/feedback/snack-bar-manager/components/SnackBar';
import { useSnackBar } from '@twenty-modules/ui/feedback/snack-bar-manager/hooks/useSnackBar';
import { logError } from '@twenty-ui/front/utils/logError';

export const useHandleFindManyRecordsError = ({
  handleError,
  objectMetadataItem,
}: {
  objectMetadataItem: ObjectMetadataItem;
  handleError?: (error?: Error) => void;
}) => {
  const { enqueueSnackBar } = useSnackBar();

  const handleFindManyRecordsError = (error: ApolloError) => {
    logError(
      `useFindManyRecords for "${objectMetadataItem.namePlural}" error : ` +
        error,
    );
    enqueueSnackBar(`${error.message}`, {
      variant: SnackBarVariant.Error,
    });
    handleError?.(error);
  };

  return {
    handleFindManyRecordsError,
  };
};
