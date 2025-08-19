import { call, put, select, takeLatest, all, take } from '#lowcoder/redux-saga/effects';
import { fetchSubscriptionsAction } from '#lowcoder/redux/reduxActions/subscriptionActions';
import { searchCustomersSubscriptions } from '#lowcoder/api/subscriptionApi';
import { fetchSubscriptionsSuccess, fetchSubscriptionsError } from '#lowcoder/redux/reduxActions/subscriptionActions';
import { getUser, getCurrentUser } from '#lowcoder/redux/selectors/usersSelectors';
import { getDeploymentId } from "#lowcoder/redux/selectors/configSelectors";
import { CurrentUser, User } from '#lowcoder/constants/userConstants';
import { ReduxActionTypes } from '#lowcoder/constants/reduxActionConstants';
import { Subscription, LowcoderSearchCustomer } from '#lowcoder/constants/subscriptionConstants';

function* fetchSubscriptionsSaga(action: ReturnType<typeof fetchSubscriptionsAction>) {
  try {
    const user: User = yield select(getUser);
    const orgID = user.currentOrgId;
    const deploymentId: string = yield select(getDeploymentId);

    const subscriptionSearchCustomer: LowcoderSearchCustomer = {
      hostId: deploymentId,
      orgId: orgID,
      userId: user.id,
    };

    const subscriptions: Subscription[] = yield call(searchCustomersSubscriptions, subscriptionSearchCustomer);

    yield put(fetchSubscriptionsSuccess(subscriptions));
  } catch (error) {
    // Handle the error and dispatch a failure action
    if (error instanceof Error) {
      yield put(fetchSubscriptionsError(error.message));
    } else {
      yield put(fetchSubscriptionsError("An unknown error occurred"));
    }
  }
}

export function* watchFetchSubscriptions() {
  yield takeLatest(ReduxActionTypes.FETCH_SUBSCRIPTIONS_INIT, fetchSubscriptionsSaga);
}

export default function* subscriptionSagas() {
  yield all([
    watchFetchSubscriptions(),
  ]);
}
