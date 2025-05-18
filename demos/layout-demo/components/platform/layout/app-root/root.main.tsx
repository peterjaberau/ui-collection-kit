import { Box } from "@chakra-ui/react"
import { GenericLayoutProps } from '#components/types'

export const RootMain = (props: GenericLayoutProps) => {
  const { children, css, ...rest } = props;
  return (
    <Box
      css={css}
      {...rest}
    >
      {children}
    </Box>
  );
};
