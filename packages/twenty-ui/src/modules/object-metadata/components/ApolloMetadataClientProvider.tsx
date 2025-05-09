import { useApolloFactory } from '@twenty-modules/apollo/hooks/useApolloFactory';
import { REACT_APP_SERVER_BASE_URL } from '@twenty-ui/front/config';

import { ApolloMetadataClientContext } from '../contexts/ApolloClientMetadataContext';

export const ApolloMetadataClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const apolloMetadataClient = useApolloFactory({
    uri: `${REACT_APP_SERVER_BASE_URL}/metadata`,
    connectToDevTools: false,
  });

  return (
    <ApolloMetadataClientContext.Provider value={apolloMetadataClient}>
      {children}
    </ApolloMetadataClientContext.Provider>
  );
};
