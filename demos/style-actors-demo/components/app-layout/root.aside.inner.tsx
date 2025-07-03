import { Flex, VStack } from '@chakra-ui/react';
import { GenericLayoutProps } from '#components/app-layout/types';

export const RootAsideInner = (props: GenericLayoutProps) => {
  const { children, css, ...rest } = props;
  return (
    <Flex flex={1} flexDirection={'column'} width='full' css={css} {...rest}>
      {children}
    </Flex>
  );
};
