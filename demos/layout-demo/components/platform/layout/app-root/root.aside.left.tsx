import { Box } from '@chakra-ui/react';
import { LayoutThreePartsProps } from '#components/types';


export const RootAsideLeft = (props: LayoutThreePartsProps) => {
  const { start, center, end, css, ...rest } = props;
  return (
    <Box css={css} {...rest}>
      {start && <>{start}</>}
      {center && <>{center}</>}
      {end && <>{end}</>}
    </Box>
  );
};
