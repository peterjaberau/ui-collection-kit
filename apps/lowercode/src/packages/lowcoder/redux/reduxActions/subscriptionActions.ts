import { Subscription } from "#lowcoder/constants/subscriptionConstants";
import { ReduxActionErrorTypes, ReduxActionTypes } from "#lowcoder/constants/reduxActionConstants";

// Action Creators
export const fetchSubscriptionsAction = () => ({
  type: ReduxActionTypes.FETCH_SUBSCRIPTIONS_INIT
});

export const fetchSubscriptionsSuccess = (subscriptions: Subscription[]) => ({
  type: ReduxActionTypes.FETCH_SUBSCRIPTIONS_SUCCESS,
  payload: subscriptions,
});

export const fetchSubscriptionsError = (error: string) => ({
  type: ReduxActionErrorTypes.FETCH_SUBSCRIPTIONS_ERROR,
  payload: { error },
});
