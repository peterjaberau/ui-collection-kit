import { useTheme } from '@emotion/react';
import { IllustrationIconWrapper } from '../../../display/icon/components/IllustrationIconWrapper';

import IllustrationIconUidRaw from '@assets/icons/illustration-uid.svg?react';
import { IconComponentProps } from '../../../display/icon/types/IconComponent';

type IllustrationIconUidProps = Pick<IconComponentProps, 'size'>;

export const IllustrationIconUid = (props: IllustrationIconUidProps) => {
  const theme = useTheme();
  const size = props.size ?? theme.icon.size.lg;
  const { color, fill } = theme.IllustrationIcon;
  return (
    <IllustrationIconWrapper>
      <IllustrationIconUidRaw
        height={size}
        width={size}
        fill={fill.blue}
        color={color.blue}
      />
    </IllustrationIconWrapper>
  );
};
