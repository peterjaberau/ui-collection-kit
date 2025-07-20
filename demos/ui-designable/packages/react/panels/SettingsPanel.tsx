import React, { useEffect, useState } from 'react';
import { requestIdle } from '#packages/shared';
import { observer } from '@formily/reactive-react';
import { TextWidget, IconWidget } from '../widgets';
import { usePrefix, useWorkbench } from '../hooks';
import { Stack, HStack, Box, IconButton } from '@chakra-ui/react';
export interface ISettingPanelProps {
  title?: React.ReactNode;
  extra?: React.ReactNode;
}

export const SettingsPanel: React.FC<ISettingPanelProps> | any = observer(
  (props: any) => {
    const prefix = usePrefix('settings-panel');
    const workbench = useWorkbench();
    const [innerVisible, setInnerVisible] = useState(true);
    const [pinning, setPinning] = useState(false);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
      if (visible || workbench.type === 'DESIGNABLE') {
        if (!innerVisible) {
          requestIdle(() => {
            requestAnimationFrame(() => {
              setInnerVisible(true);
            });
          });
        }
      }
    }, [visible, workbench.type]);
    if (workbench.type !== 'DESIGNABLE') {
      if (innerVisible) setInnerVisible(false);
      return null;
    }
    if (!visible) {
      if (innerVisible) setInnerVisible(false);
      return (
        <div
          className={prefix + '-opener'}
          onClick={() => {
            setVisible(true);
          }}
        >
          <IconWidget infer='Setting' size={20} />
        </div>
      );
    }
    return (
      <Stack
        css={{
          grow: 0,
          shrink: 0,
          position: 'relative',
          zIndex: 2,
          width: '300px',
          backgroundColor: 'bg.panel',
          borderLeft: '1px Solid',
          borderLeftColor: 'border',
          height: '100%',
          boxSizing: 'content-box',
          userSelect: 'none',
          '&.pinning': {
            position: 'absolute',
            zIndex: 10,
            top: 0,
            right: 0,
            boxShadow: 'md',
            borderLeft: '1px solid transparent',
          },
        }}
      >
        <HStack
          css={{
            justifyContent: 'space-between',
            borderBottom: '1px solid',
            borderBottomColor: 'border',
            padding: '14px 7px',
          }}
        >
          <Box fontSize='20px'>
            <TextWidget>{props.title}</TextWidget>
          </Box>
          <HStack>
            <div className={prefix + '-header-extra'}>{props.extra}</div>
            {!pinning && (
              <IconButton variant='ghost' size='sm'>
                <IconWidget
                  infer='PushPinOutlined'
                  className={prefix + '-header-pin'}
                  onClick={() => {
                    setPinning(!pinning);
                  }}
                />
              </IconButton>
            )}
            {pinning && (
              <IconButton variant='ghost' size='sm'>
                <IconWidget
                  infer='PushPinFilled'
                  className={prefix + '-pin-filled'}
                  onClick={() => {
                    setPinning(!pinning);
                  }}
                />
              </IconButton>
            )}
            <IconButton variant='ghost' size='sm'>
              <IconWidget
                infer='Close'
                className={prefix + '-header-close'}
                onClick={() => {
                  setVisible(false);
                }}
              />
            </IconButton>
          </HStack>
        </HStack>
        <Box
          css={{
            flexGrow: 2,
            flexShrink: 2,
            overflow: 'hidden',
            height: '100%'
          }}
        >
          {innerVisible && props.children}
        </Box>
      </Stack>
    );
  },
);
