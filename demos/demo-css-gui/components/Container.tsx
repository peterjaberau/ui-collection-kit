import { HTMLAttributes } from 'react';
import { chakra } from '@chakra-ui/react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}
export const Container = (props: ContainerProps) => {
  return (
    <chakra.div
      css={{
        maxWidth: '1024px',
        mx: 'auto',
        px: 4,
      }}
      {...props}
    />
  );
};
