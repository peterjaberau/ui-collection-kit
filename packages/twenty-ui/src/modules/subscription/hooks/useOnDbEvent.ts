import { useEffect, useMemo } from 'react';
import { createClient } from 'graphql-sse';
import { ON_DB_EVENT } from '@twenty-modules/subscription/graphql/subscriptions/onDbEvent';
import { Subscription, SubscriptionOnDbEventArgs } from '@twenty-ui/front/generated/graphql';
import { REACT_APP_SERVER_BASE_URL } from '@twenty-ui/front/config';
import { getTokenPair } from '@twenty-modules/apollo/utils/getTokenPair';

type OnDbEventArgs = SubscriptionOnDbEventArgs & {
  skip?: boolean;
  onData?: (data: Subscription) => void;
  onError?: (err: any) => void;
  onComplete?: () => void;
};

export const useOnDbEvent = ({
  onData,
  onError,
  onComplete,
  input,
  skip = false,
}: OnDbEventArgs) => {
  const tokenPair = getTokenPair();

  const sseClient = useMemo(() => {
    return createClient({
      url: `${REACT_APP_SERVER_BASE_URL}/graphql`,
      headers: {
        Authorization: tokenPair?.accessToken.token
          ? `Bearer ${tokenPair?.accessToken.token}`
          : '',
      },
    });
  }, [tokenPair?.accessToken.token]);

  useEffect(() => {
    if (skip === true) {
      return;
    }
    const next = (value: { data: Subscription }) => onData?.(value.data);
    const error = (err: unknown) => onError?.(err);
    const complete = () => onComplete?.();
    const unsubscribe = sseClient.subscribe(
      {
        query: ON_DB_EVENT.loc?.source.body || '',
        variables: { input },
      },
      {
        next,
        error,
        complete,
      },
    );

    return () => {
      unsubscribe();
    };
  }, [input, onComplete, onData, onError, skip, sseClient]);
};
