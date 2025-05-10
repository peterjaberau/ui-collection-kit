import { HTMLAttributes } from 'react';
import { chakra } from '@chakra-ui/react';
interface FirstParagraphProps extends HTMLAttributes<HTMLDivElement> {}
export const FirstParagraph = (props: FirstParagraphProps) => {
  return (
    <chakra.div
      css={{
        p: {
          fontSize: [2, 3, 3],
          color: 'muted',
          lineHeight: 1.5,
          maxWidth: '42em',
        },
      }}
      {...props}
    />
  );
};
