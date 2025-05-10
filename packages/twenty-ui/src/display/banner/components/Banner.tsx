import styled from '@emotion/styled';
import { chakra } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';

export type StyledBannerProps = {
  variant?: BannerVariant;
  children: React.ReactNode;
  [key: string]: any;
}

const StyledBanner = ({ children, ...props }: StyledBannerProps) => {
  const theme = useTheme();

  return (
    <chakra.div
      alignItems="center"
      backdropFilter="blur(5px)"
      background={props.variant === 'danger' ? theme.color.red : theme.color.blue}
      display="flex"
      gap={theme.spacing(3)}
      height="40px"
      justifyContent="center"
      padding={`${theme.spacing(2)} ${theme.spacing(3)}`}
      width="100%"
      color={theme.font.color.inverted}
      fontFamily="Inter"
      fontSize={theme.font.size.md}
      fontStyle="normal"
      fontWeight={theme.font.weight.medium}
      lineHeight="150%"
      boxSizing="border-box"
    >
      {children}
    </chakra.div>
  )
}

export type BannerVariant = 'danger' | 'default';

type BannerProps = {
  variant?: BannerVariant;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Banner = ({
  variant = 'default',
  className,
  children,
}: BannerProps) => (
  <StyledBanner variant={variant} className={className}>
    {children}
  </StyledBanner>
);
