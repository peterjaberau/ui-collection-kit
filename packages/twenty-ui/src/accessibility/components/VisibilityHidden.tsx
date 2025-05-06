import styled from '@emotion/styled';
import { VISIBILITY_HIDDEN } from '../utils/visibility-hidden';

const StyledSpan = styled.span`
  ${VISIBILITY_HIDDEN}
`;

export const VisibilityHidden = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <StyledSpan>{children}</StyledSpan>;
};
