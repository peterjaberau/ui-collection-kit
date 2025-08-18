import { useSelector } from "react-redux";
import { getCurrentUser, getUser } from "#lowcoder/redux/selectors/usersSelectors";

export function useCurrentUser() {
  const currentUser = useSelector(getCurrentUser);
  const { hasPassword } = useSelector(getUser);
  return {...currentUser, hasPassword};
}
