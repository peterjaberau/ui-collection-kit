import IllustrationIconMapRaw from '@assets/icons/illustration-map.svg?react';
import { useTheme } from '@emotion/react';
import { IllustrationIconWrapper } from '../../../display/icon/components/IllustrationIconWrapper';
import { IconComponentProps } from '../../../display/icon/types/IconComponent';

type IllustrationIconMapProps = Pick<IconComponentProps, 'size'>;

export const IllustrationIconMap = (props: IllustrationIconMapProps) => {
  const theme = useTheme();
  const size = props.size ?? theme.icon.size.lg;
  const { color, fill } = theme.IllustrationIcon;
  return (
    <IllustrationIconWrapper>
      <IllustrationIconMapRaw
        height={size}
        width={size}
        fill={fill.blue}
        color={color.blue}
      />
    </IllustrationIconWrapper>
  );
};
