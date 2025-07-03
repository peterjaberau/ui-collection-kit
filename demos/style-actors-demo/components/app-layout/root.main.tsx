import { Flex } from "@chakra-ui/react"
import { GenericLayoutProps } from '#components/app-layout/types'

export const RootMain = (props: GenericLayoutProps) => {
  const { children, css, ...rest } = props;
  return (
    <Flex
      flex={1}
      flexDirection='column'
      minWidth='0'
      css={css}
      {...rest}
    >
      {children}
    </Flex>
  );
};
