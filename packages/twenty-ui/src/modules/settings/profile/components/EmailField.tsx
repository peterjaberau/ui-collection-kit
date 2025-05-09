import { useRecoilValue } from 'recoil';

import { currentUserState } from '@twenty-modules/auth/states/currentUserState';
import { TextInput } from '@twenty-modules/ui/input/components/TextInput';

export const EmailField = () => {
  const currentUser = useRecoilValue(currentUserState);

  return (
    <TextInput
      value={currentUser?.email}
      disabled
      fullWidth
      key={'email-' + currentUser?.id}
    />
  );
};
