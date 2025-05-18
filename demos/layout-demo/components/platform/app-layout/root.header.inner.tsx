import { HStack } from '@chakra-ui/react';
import { GenericLayoutProps } from '#platform/common/types';


export const RootHeaderInner = (props: GenericLayoutProps) => {
  const { children, css, ...rest } = props;
  return (
    <HStack css={css} {...rest}>
      {children}
    </HStack>
  );
};
