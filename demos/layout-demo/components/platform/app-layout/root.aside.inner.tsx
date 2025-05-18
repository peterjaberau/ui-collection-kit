import { VStack } from '@chakra-ui/react';
import { GenericLayoutProps } from '#platform/common/types';


export const RootAsideInner = (props: GenericLayoutProps) => {
  const { children, css, ...rest } = props;
  return (
    <VStack flex={1} width="full" alignItems="flex-start" css={css} {...rest}>
      {children}
    </VStack>
  );
};
