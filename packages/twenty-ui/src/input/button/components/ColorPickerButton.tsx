import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ColorSample, ColorSampleProps } from '../../../display';
import {
  LightIconButton,
  LightIconButtonProps,
} from '../../../input/button/components/LightIconButton';

type ColorPickerButtonProps = Pick<ColorSampleProps, 'colorName'> &
  Pick<LightIconButtonProps, 'onClick'> & {
    isSelected?: boolean;
  };

const StyledButton = styled(LightIconButton)<{
  isSelected?: boolean;
}>`
  ${({ isSelected, theme }) =>
    isSelected
      ? css`
          background-color: ${theme.background.transparent.medium};

          &:hover {
            background-color: ${theme.background.transparent.medium};
          }
        `
      : ''}
`;

export const ColorPickerButton = ({
  colorName,
  isSelected,
  onClick,
}: ColorPickerButtonProps) => (
  <StyledButton
    size="medium"
    isSelected={isSelected}
    Icon={() => <ColorSample colorName={colorName} />}
    onClick={onClick}
  />
);
