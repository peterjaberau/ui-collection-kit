import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';

export const recordGroupFieldMetadataComponentState = createComponentStateV2<
  FieldMetadataItem | undefined
>({
  key: 'recordGroupFieldMetadataComponentState',
  defaultValue: undefined,
  componentInstanceContext: ViewComponentInstanceContext,
});
