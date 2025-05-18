import { VStack } from '@chakra-ui/react';
import { LayoutThreePartsProps } from '#platform/common/types';


export const RootBar = (props: LayoutThreePartsProps) => {
  const { start, center, end, css, ...rest } = props;
  return (
    <VStack
      css={css} {...rest}
    >
      {start && <>{start}</>}
      {center && <>{center}</>}
      {end && <>{end}</>}
    </VStack>
  );
};
