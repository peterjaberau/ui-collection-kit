import { prefetchViewsState } from '@twenty-modules/prefetch/states/prefetchViewsState';
import { View } from '@twenty-modules/views/types/View';
import { selectorFamily } from 'recoil';

export const prefetchViewsFromObjectMetadataItemFamilySelector = selectorFamily<
  View[],
  { objectMetadataItemId: string }
>({
  key: 'prefetchViewsFromObjectMetadataItemFamilySelector',
  get:
    ({ objectMetadataItemId }) =>
    ({ get }) => {
      const views = get(prefetchViewsState);
      return views
        .filter((view) => view.objectMetadataId === objectMetadataItemId)
        .sort((a, b) => a.position - b.position);
    },
});
