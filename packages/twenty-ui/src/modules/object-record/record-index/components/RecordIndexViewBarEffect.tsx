import { useEffect } from 'react';

import { useColumnDefinitionsFromFieldMetadata } from '@twenty-modules/object-metadata/hooks/useColumnDefinitionsFromFieldMetadata';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { useObjectNameSingularFromPlural } from '@twenty-modules/object-metadata/hooks/useObjectNameSingularFromPlural';
import { useInitViewBar } from '@twenty-modules/views/hooks/useInitViewBar';
import { isUndefinedOrNull } from '@twenty-ui/front/utils/isUndefinedOrNull';

type RecordIndexViewBarEffectProps = {
  objectNamePlural: string;
  viewBarId: string;
};

export const RecordIndexViewBarEffect = ({
  objectNamePlural,
  viewBarId,
}: RecordIndexViewBarEffectProps) => {
  const { objectNameSingular } = useObjectNameSingularFromPlural({
    objectNamePlural,
  });

  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const { columnDefinitions } =
    useColumnDefinitionsFromFieldMetadata(objectMetadataItem);

  const { setViewObjectMetadataId, setAvailableFieldDefinitions } =
    useInitViewBar(viewBarId);

  useEffect(() => {
    if (isUndefinedOrNull(objectMetadataItem)) {
      return;
    }
    setViewObjectMetadataId?.(objectMetadataItem.id);
    setAvailableFieldDefinitions?.(columnDefinitions);
  }, [
    setViewObjectMetadataId,
    objectMetadataItem,
    setAvailableFieldDefinitions,
    columnDefinitions,
  ]);

  return <></>;
};
