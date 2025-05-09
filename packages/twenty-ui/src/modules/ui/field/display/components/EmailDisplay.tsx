import { MouseEvent } from 'react';
import { EllipsisDisplay } from './EllipsisDisplay';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { ContactLink } from '@twenty-ui/navigation';

const validateEmail = (email: string) => {
  // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // return emailPattern.test(email.trim());

  // Record this without using regex
  const emailParts = email.split('@');

  if (emailParts.length !== 2) {
    return false;
  }

  return true;
};

type EmailDisplayProps = {
  value: string | null | undefined;
};

export const EmailDisplay = ({ value }: EmailDisplayProps) => {
  if (!isDefined(value)) {
    return <ContactLink href="#">{value}</ContactLink>;
  }

  if (!validateEmail(value)) {
    return <ContactLink href="#">{value}</ContactLink>;
  }

  return (
    <EllipsisDisplay>
      <ContactLink
        href={`mailto:${value}`}
        onClick={(event: MouseEvent<HTMLElement>) => {
          event.stopPropagation();
        }}
      >
        {value}
      </ContactLink>
    </EllipsisDisplay>
  );
};
