import { HStack } from '@chakra-ui/react';
import { GenericLayoutProps } from '#components/app-layout/types';

export const RootSectionInner = (props: GenericLayoutProps) => {
  const { children, css, ...rest } = props;
  return (
    <HStack css={css} {...rest}>
      {children}
    </HStack>
  );
};
