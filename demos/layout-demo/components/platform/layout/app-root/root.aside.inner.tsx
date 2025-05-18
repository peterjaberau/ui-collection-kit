import { Box } from '@chakra-ui/react';
import { GenericLayoutProps } from '#components/types';


export const RootAsideInner = (props: GenericLayoutProps) => {
  const { children, css, ...rest } = props;
  return (
    <Box css={css} {...rest}>
      {children}
    </Box>
  );
};
