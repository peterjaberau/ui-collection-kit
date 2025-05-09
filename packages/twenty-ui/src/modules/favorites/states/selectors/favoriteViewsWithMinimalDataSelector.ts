import { prefetchViewsState } from '@twenty-modules/prefetch/states/prefetchViewsState';
import { View } from '@twenty-modules/views/types/View';
import { selector } from 'recoil';

export const favoriteViewsWithMinimalDataSelector = selector<
  Pick<View, 'id' | 'name' | 'objectMetadataId' | 'icon'>[]
>({
  key: 'favoriteViewsWithMinimalDataSelector',
  get: ({ get }) => {
    const views = get(prefetchViewsState);
    return views.map((view) => ({
      id: view.id,
      name: view.name,
      objectMetadataId: view.objectMetadataId,
      icon: view.icon,
    }));
  },
});
