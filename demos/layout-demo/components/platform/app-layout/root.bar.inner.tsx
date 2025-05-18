import { VStack } from '@chakra-ui/react';
import { GenericLayoutProps } from '#platform/common/types';


export const RootBarInner = (props: GenericLayoutProps) => {
  const { children, css, ...rest } = props;
  return (
    <VStack
      flex={1}
      css={css} {...rest}
    >
      {children}
    </VStack>
  );
};
