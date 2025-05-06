import { useTheme } from '@emotion/react';
import { IllustrationIconWrapper } from '../../../display/icon/components/IllustrationIconWrapper';

import IllustrationIconTagsRaw from '@assets/icons/illustration-tags.svg?react';
import { IconComponentProps } from '../../../display/icon/types/IconComponent';

type IllustrationIconTagsProps = Pick<IconComponentProps, 'size'>;

export const IllustrationIconTags = (props: IllustrationIconTagsProps) => {
  const theme = useTheme();
  const size = props.size ?? theme.icon.size.lg;
  const { color, fill } = theme.IllustrationIcon;
  return (
    <IllustrationIconWrapper>
      <IllustrationIconTagsRaw
        height={size}
        width={size}
        fill={fill.blue}
        color={color.blue}
      />
    </IllustrationIconWrapper>
  );
};
