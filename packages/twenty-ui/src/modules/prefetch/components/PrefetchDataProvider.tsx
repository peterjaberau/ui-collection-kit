import { PrefetchRunFavoriteQueriesEffect } from '@twenty-modules/prefetch/components/PrefetchRunFavoriteQueriesEffect';
import { PrefetchRunViewQueryEffect } from '@twenty-modules/prefetch/components/PrefetchRunViewQueryEffect';
import React from 'react';

export const PrefetchDataProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <PrefetchRunFavoriteQueriesEffect />
      <PrefetchRunViewQueryEffect />
      {children}
    </>
  );
};
