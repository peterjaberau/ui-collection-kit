import { isNonEmptyString } from '@sniptt/guards';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useCommandMenuOnItemClick = () => {
  const navigate = useNavigate();

  const onItemClick = useCallback(
    ({ onClick, to }: { onClick?: () => void; to?: string }) => {
      if (isDefined(onClick)) {
        onClick();
      }
      if (isNonEmptyString(to)) {
        navigate(to);
      }
    },
    [navigate],
  );

  return { onItemClick };
};
