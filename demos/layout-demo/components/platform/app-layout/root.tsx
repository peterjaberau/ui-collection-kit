import { Flex } from "@chakra-ui/react"
import { GenericLayoutProps } from '#platform/common/types'

export const Root = (props: GenericLayoutProps) => {
  const { children, css, ...rest } = props;
  return (
    <Flex
      flexDirection='column'
      height='100vh'
      width='100vw'
      css={css}
      {...rest}
    >
      {children}
    </Flex>
  );
};
