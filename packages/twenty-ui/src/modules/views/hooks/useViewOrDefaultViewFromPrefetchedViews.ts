import { prefetchIndexViewIdFromObjectMetadataItemFamilySelector } from '@twenty-modules/prefetch/states/selector/prefetchIndexViewIdFromObjectMetadataItemFamilySelector';
import { prefetchViewFromViewIdFamilySelector } from '@twenty-modules/prefetch/states/selector/prefetchViewFromViewIdFamilySelector';
import { useRecoilValue } from 'recoil';

export const useViewOrDefaultViewFromPrefetchedViews = ({
  objectMetadataItemId,
}: {
  objectMetadataItemId: string;
}) => {
  const indexViewId = useRecoilValue(
    prefetchIndexViewIdFromObjectMetadataItemFamilySelector({
      objectMetadataItemId,
    }),
  );

  const indexView = useRecoilValue(
    prefetchViewFromViewIdFamilySelector({
      viewId: indexViewId ?? '',
    }),
  );

  return { view: indexView };
};
