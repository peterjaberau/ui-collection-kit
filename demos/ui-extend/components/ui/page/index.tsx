import { Box, Separator as Divider, Group, Text } from '@chakra-ui/react';
import clsx from 'clsx';
import './style.css';

export function ContentPane({
  children,
  title,
  icon,
  className,
  leftSection,
  infoSection,
  rightSection,
  withTopPadding,
  withDivider,
  disabled,
  ...rest
}: any) {
  return (
    <Box
      css={{
        backgroundColor: 'bg.panel',
        position: 'relative',
        pointerEvents: disabled ? 'none' : undefined,
      }}
      opacity={disabled ? 0.5 : 1}
      className={clsx('root', className)}
      {...rest}
    >
      {(title || icon || leftSection || rightSection || infoSection) && (
        <>
          <Group
            px='sm'
            py='xs'
            gap='xs'
            h={48}
            wrap='nowrap'
            className={'header'}
          >
            {leftSection}
            <Text
              fontWeight={600}
              color='fg'
              flexShrink={0}
              className={'title'}
            >
              {title}
            </Text>
            {infoSection}
            {rightSection}
          </Group>
          {withDivider !== false && (
            <Divider mx='sm' mt={2} className={'divider'} />
          )}
        </>
      )}
      {children && (
        <Box
          p='sm'
          pt={0}
          mt={
            withTopPadding === false || withDivider === false ? undefined : 'sm'
          }
          position='relative'
          className={'content'}
        >
          {children}
        </Box>
      )}
    </Box>
  );
}
