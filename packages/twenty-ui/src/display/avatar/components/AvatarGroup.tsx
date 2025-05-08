import { chakra } from "@chakra-ui/react"
import styled from '@emotion/styled';
import { ReactNode } from 'react';

export type AvatarGroupProps = {
  avatars: ReactNode[];
};

const StyledContainer = chakra('div', {
  base: {
    alignItems: 'center',
    display: 'flex',
  },
})

const StyledItemContainer = chakra('div', {
  base: {
    marginRight: '-3px',
    '&:last-child': {
      marginRight: '0',
    },
  },
})



const MAX_AVATARS_NB = 4;

export const AvatarGroup = ({ avatars }: AvatarGroupProps) => {
  if (!avatars.length) return null;

  return (
    <StyledContainer>
      {avatars.slice(0, MAX_AVATARS_NB).map((avatar, index) => (
        <StyledItemContainer key={index}>{avatar}</StyledItemContainer>
      ))}
    </StyledContainer>
  );
};
