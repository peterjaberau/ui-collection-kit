import { Stack } from '@chakra-ui/react';

export const PageSideBar = ({
  position,
  start,
  center,
  end,
}: {
  position?: 'left' | 'right';
  start?: any;
  center?: any;
  end?: any;
}) => {
  return (
    <Stack
      data-name='page-aside'
      justify='space-between'
      css={{
        height: 'full',
        width: '50px',
        bg: 'bg.panel',
        ...(!position || position === 'left'
          ? { borderRight: '1px solid', borderRightColor: 'border.muted' }
          : { borderLeft: '1px solid', borderLeftColor: 'border.muted' }),
      }}
    >
      {start && <PageSideBarStart>{start}</PageSideBarStart>}
      {center && <PageSideBarCenter>{center}</PageSideBarCenter>}
      {end && <PageSideBarEnd>{end}</PageSideBarEnd>}
    </Stack>
  );
};


export const PageSideBarStart = ({ children }: any) => {
  return (
    <Stack flex={1} justify='flex-start' data-name='PageSideBarStart'>
      {children}
    </Stack>
  );
};

export const PageSideBarCenter = ({ children }: any) => {
  return (
    <Stack flex={1} justify='center' data-name='PageSideBarCenter'>
      {children}
    </Stack>
  );
};

export const PageSideBarEnd = ({ children }: any) => {
  return (
    <Stack flex={1} justify='flex-end' data-name='PageSideBarEnd'>
      {children}
    </Stack>
  );
};
