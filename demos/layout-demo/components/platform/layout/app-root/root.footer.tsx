import { Box } from "@chakra-ui/react"
import { GenericLayoutProps, LayoutThreePartsProps } from "#components/types"

export const RootFooter = (props: LayoutThreePartsProps) => {
  const { start, center, end, css, ...rest } = props;
  return (
    <Box css={css} {...rest}>
      {start && <>{start}</>}
      {center && <>{center}</>}
      {end && <>{end}</>}
    </Box>
  );
};
