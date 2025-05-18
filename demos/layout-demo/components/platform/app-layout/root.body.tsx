import { Flex } from "@chakra-ui/react"
import { GenericLayoutProps } from '#platform/common/types'

export const RootBody = (props: GenericLayoutProps) => {
  const { children, css, ...rest } = props;
  return (
    <Flex
      flex={1}
      css={css}
      {...rest}
    >
      {children}
    </Flex>
  );
};
