import React from 'react';
import { usePrefix, usePosition } from '../hooks';
import { Layout } from '../containers';
import cls from 'classnames';
import { Stack, HStack, Box, IconButton } from '@chakra-ui/react';
export interface IStudioPanelProps {
  style?: React.CSSProperties;
  className?: string;
  logo?: React.ReactNode;
  actions?: React.ReactNode;
  prefixCls?: string;
  theme?: string;
  position?: React.ComponentProps<typeof Layout>['position'];
}

const StudioPanelInternal: React.FC<IStudioPanelProps> = ({
  logo,
  actions,
  ...props
}: any) => {
  const prefix = usePrefix('main-panel');
  const position = usePosition();
  const classNameBase = cls('root', position, props.className);
  if (logo || actions) {
    return (
      <Stack w='full' h='full' {...props}>
        <Box
          data-id='main-panel-container'
          css={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <HStack
            data-id='main-panel-header'
            justify='space-between'
            alignItems='center'
            borderBottom='1px solid'
            borderBottomColor='bg.emphasized'
            px={2}
            py={1}
          >
            <HStack data-id='main-panel-header-logo'>Designer</HStack>
            <HStack data-id='main-panel-header-actions' justify={'flex-end'}>
              {actions}
            </HStack>
          </HStack>
          <HStack
            data-id='main-panel'
            justify='space-between'
            flex={1}
            overflow='hidden'
            position='relative'
            minH={0}
            w='full'
            h='full'
          >
            {props.children}
          </HStack>
        </Box>
      </Stack>
    );
  }
  return (
    <HStack

      {...props}
      css={{
        width: '100%',
        height: '100%',
        flex: 1,
        minHeight: 0,

        overflow: 'hidden',
      }}
    >
      {props.children}
    </HStack>
  );
};

export const StudioPanel: React.FC<IStudioPanelProps> | any = (props) => {
  return (
    <Layout

      theme={props.theme}
      prefixCls={props.prefixCls}
      position={props.position || 'fixed'}
    >
      <StudioPanelInternal {...props} />
    </Layout>
  );
};
