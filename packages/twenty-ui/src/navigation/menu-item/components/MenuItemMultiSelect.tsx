import styled from '@emotion/styled';

import { Tag } from '../../../components';
import { IconComponent } from '../../../display';
import { Checkbox } from '../../../input/components/Checkbox';
import { MenuItemLeftContent } from '../../../navigation/menu-item/internals/components/MenuItemLeftContent';
import { ThemeColor } from '../../../theme';
import { StyledMenuItemBase } from '../internals/components/StyledMenuItemBase';

const StyledLeftContentWithCheckboxContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(2)};
`;

type MenuItemMultiSelectProps = {
  color?: ThemeColor;
  LeftIcon?: IconComponent;
  selected: boolean;
  isKeySelected?: boolean;
  text: string;
  className: string;
  onSelectChange?: (selected: boolean) => void;
};

export const MenuItemMultiSelect = ({
  color,
  LeftIcon,
  text,
  selected,
  isKeySelected,
  className,
  onSelectChange,
}: MenuItemMultiSelectProps) => {
  const handleOnClick = () => {
    onSelectChange?.(!selected);
  };

  return (
    <StyledMenuItemBase
      isKeySelected={isKeySelected}
      className={className}
      onClick={handleOnClick}
    >
      <StyledLeftContentWithCheckboxContainer>
        <Checkbox checked={selected} />
        {color ? (
          <Tag color={color} text={text} Icon={LeftIcon} />
        ) : (
          <MenuItemLeftContent LeftIcon={LeftIcon} text={text} />
        )}
      </StyledLeftContentWithCheckboxContainer>
    </StyledMenuItemBase>
  );
};
