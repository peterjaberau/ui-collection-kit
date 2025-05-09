import { ReactNode } from 'react';

import { ApolloMetadataClientContext } from '@twenty-modules/object-metadata/contexts/ApolloClientMetadataContext';
import { mockedMetadataApolloClient } from '@twenty-ui/front/testing/mockedMetadataApolloClient';

export const ApolloMetadataClientMockedProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <ApolloMetadataClientContext.Provider value={mockedMetadataApolloClient}>
      {mockedMetadataApolloClient ? children : ''}
    </ApolloMetadataClientContext.Provider>
  );
};
