import { HStack } from "@chakra-ui/react"
import { LayoutThreePartsProps } from "#platform/common/types"

export const RootHeader = (props: LayoutThreePartsProps) => {
  const { start, center, end, css, ...rest } = props;
  return (
    <HStack css={css} {...rest}>
      {start && <>{start}</>}
      {center && <>{center}</>}
      {end && <>{end}</>}
    </HStack>
  );
};
